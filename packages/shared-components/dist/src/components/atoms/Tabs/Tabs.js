"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var withPolyfill_1 = require("react-resize-detector/build/withPolyfill");
require("./Tabs.scss");
var react_router_dom_1 = require("react-router-dom");
var classnames_1 = require("../../../utils/classnames");
var Menu_1 = __importStar(require("../Menu"));
var Button_1 = __importDefault(require("../Button"));
var indexIcon_1 = require("../../../indexIcon");
var Tabs = function (_a) {
    var list = _a.list, _b = _a.showLine, showLine = _b === void 0 ? true : _b, _c = _a.showMenu, showMenu = _c === void 0 ? true : _c, _d = _a.size, size = _d === void 0 ? 'md' : _d, children = _a.children;
    var history = (0, react_router_dom_1.useHistory)();
    var pathname = (0, react_router_dom_1.useLocation)().pathname;
    /** Ссылки на вкладки */
    var refs = (0, react_1.useRef)([]);
    /** Ссылка на линию */
    var lineRef = (0, react_1.useRef)(null);
    /** Ссылка на последний индекс таба, который показан */
    var lastVisibleIndexRef = (0, react_1.useRef)(list.length - 1);
    /** Определяем, если вкладки являются ссылками для роутинга */
    var isRouting = (0, react_1.useMemo)(function () { return list.every(function (t) { return t.url; }); }, [list]);
    /** Устанавливаем индекс последнего видимого таба */
    var onResize = (0, react_1.useCallback)(function (width) {
        handleLastVisibleIndex(width);
    }, [showMenu]);
    var ref = (0, withPolyfill_1.useResizeDetector)({
        onResize: onResize,
        refreshMode: 'debounce',
        refreshRate: 300,
    }).ref;
    (0, react_1.useEffect)(function () {
        if (!showMenu) {
            lastVisibleIndexRef.current = list.length - 1;
        }
    }, [showMenu]);
    (0, react_1.useEffect)(function () {
        setActive(function (i) {
            var index = list.findIndex(function (t) {
                if (isRouting && t.url) {
                    return t.exact ? t.url === pathname : pathname.includes(t.url);
                }
                return t.active;
            });
            return index >= 0 && !list[index].disabled ? index : i;
        });
    }, [list, pathname, isRouting]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Определяем ширину таба */
    var getWidthTab = function (element) { return (element === null || element === void 0 ? void 0 : element.getBoundingClientRect().width) || 0; };
    /** Получаем индекс последнего видимого таба */
    var handleLastVisibleIndex = function (width) {
        var _a, _b, _c, _d;
        if (width === void 0) { width = 0; }
        if (!showMenu) {
            return;
        }
        var MENU_WIDTH = 48;
        var hasHiddenIndex = lastVisibleIndexRef.current < list.length - 1;
        var visibleIndex = lastVisibleIndexRef.current;
        var visibleWidth = hasHiddenIndex ? MENU_WIDTH : 0;
        for (var index = 0; index < list.length; index++) {
            if ((_b = (_a = refs.current) === null || _a === void 0 ? void 0 : _a[index]) === null || _b === void 0 ? void 0 : _b.current) {
                if (width > visibleWidth + getWidthTab(refs.current[index].current)) {
                    visibleWidth += getWidthTab(refs.current[index].current);
                }
                else {
                    break;
                }
            }
            visibleIndex = index;
        }
        lastVisibleIndexRef.current = visibleIndex;
        /** Определяем показывать ли следующий скрытый таб */
        if (hasHiddenIndex) {
            var nextIndex = lastVisibleIndexRef.current + 1;
            var isLastIndex = nextIndex === refs.current.length - 1;
            var nextWidth = getWidthTab((_d = (_c = refs.current) === null || _c === void 0 ? void 0 : _c[nextIndex]) === null || _d === void 0 ? void 0 : _d.current);
            if (visibleWidth + nextWidth - (isLastIndex ? MENU_WIDTH : 0) <= width) {
                visibleWidth += isLastIndex ? nextWidth : nextWidth + MENU_WIDTH;
                lastVisibleIndexRef.current = nextIndex;
            }
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Определяем активную вкладку */
    var _e = (0, react_1.useState)(0), active = _e[0], setActive = _e[1];
    /** Определяем является ли активный таб в меню */
    var isActiveIndexInMenu = active > lastVisibleIndexRef.current;
    /** Управление полоской */
    var setLinePosition = function (element) {
        if (lineRef.current) {
            var width = element.offsetWidth;
            var x = element.offsetLeft;
            if (isActiveIndexInMenu) {
                lineRef.current.style.width = '0px';
            }
            else {
                lineRef.current.style.left = "".concat(x, "px");
                lineRef.current.style.width = "".concat(width, "px");
            }
        }
    };
    /** Устанавливаем активную вкладку */
    var onClick = function (e, i, element) {
        var _a, _b;
        element && setLinePosition(element);
        if (isRouting && list[i].url && active !== i) {
            history.push(list[i].url);
        }
        setActive(i);
        (_b = (_a = list[i]).handler) === null || _b === void 0 ? void 0 : _b.call(_a, refs.current[i].current);
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Список вкладок */
    var nav = list.map(function (t, i) {
        if (!refs.current[i]) {
            refs.current[i] = (0, react_1.createRef)();
        }
        var onMenuClickHandler = function (e) { return onClick(e, i, refs.current[i].current); };
        return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-tabs__link', i > lastVisibleIndexRef.current && 'rf-tabs__link--hidden'), ref: refs.current[i], children: (0, jsx_runtime_1.jsxs)("button", { type: 'button', className: (0, classnames_1.classnames)('rf-tabs__button', i === active && 'rf-tabs__button--active', "rf-tabs__button--".concat(size)), disabled: t.disabled, onClick: onMenuClickHandler, children: [!!t.icon && (0, jsx_runtime_1.jsx)("div", { className: 'rf-tabs__icon', children: t.icon }), !!t.label && (0, jsx_runtime_1.jsx)("div", { children: t.label })] }) }, i));
    });
    /** Список вкладок в меню */
    var menuNav = ((0, jsx_runtime_1.jsx)(Menu_1.MenuContext.Consumer, { children: function (_a) {
            var onClose = _a.onClose;
            return list.reduce(function (acc, curr, i) {
                if (i > lastVisibleIndexRef.current) {
                    var onMenuClickHandler = function (e) {
                        onClick(e, i, refs.current[i].current);
                        onClose();
                    };
                    return __spreadArray(__spreadArray([], acc, true), [
                        (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-tabs__link', 'rf-tabs__menu-link'), children: (0, jsx_runtime_1.jsxs)("button", { type: 'button', className: (0, classnames_1.classnames)('rf-tabs__button', 'rf-tabs__menu-button', i === active && 'rf-tabs__menu-button--active'), disabled: curr.disabled, onClick: onMenuClickHandler, children: [!!curr.icon && ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-tabs__icon', 'rf-tabs__menu-icon'), children: curr.icon })), !!curr.label && (0, jsx_runtime_1.jsx)("div", { children: curr.label })] }) }, i),
                    ], false);
                }
                return acc;
            }, []);
        } }));
    /** Определяем есть ли табы в меню */
    var hasMenuNav = lastVisibleIndexRef.current < list.length - 1;
    /** Устанавливаем линию на активную вкладку при инициализации */
    (0, react_1.useLayoutEffect)(function () {
        if (nav.length > 0 && refs.current[active].current) {
            var element = refs.current[active].current;
            element && setLinePosition(element);
        }
    }, [nav]);
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-tabs rf-tabs--buttons', ref: ref, children: [(0, jsx_runtime_1.jsxs)("nav", { className: (0, classnames_1.classnames)('rf-tabs__navigation', showLine && 'rf-tabs__navigation__line'), children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-tabs__navigation-list', !showMenu && 'rf-tabs__navigation-list--without-menu'), children: [nav, hasMenuNav && ((0, jsx_runtime_1.jsx)(Menu_1.default, { content: (0, jsx_runtime_1.jsx)("div", { className: 'button-group__menu', children: menuNav }), position: 'top-start', className: (0, classnames_1.classnames)('rf-tabs__menu', isActiveIndexInMenu && 'rf-tabs__menu--active'), children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'ghost', size: 'l', "data-testid": 'button-menu-group__more', className: 'rf-tabs__menu__btn', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllMenuHorizontal, {}) }) }))] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-tabs__navigation-line', ref: lineRef })] }), ((isRouting && children) || (!isRouting && list.length > 0)) && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-tabs__content', children: isRouting && children ? children : list[active].tab }))] }));
};
exports.default = Tabs;
