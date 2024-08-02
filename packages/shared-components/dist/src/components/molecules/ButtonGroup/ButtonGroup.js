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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./ButtonGroup.scss");
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var Button_1 = __importDefault(require("../../atoms/Button"));
var indexIcon_1 = require("../../../indexIcon");
var Menu_1 = __importStar(require("../../atoms/Menu"));
var react_router_dom_1 = require("react-router-dom");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
// FIXME: Elements must have sufficient color contrast
var ButtonGroup = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    /** Видимые кнопки */
    var list = _a.list, _b = _a.max, max = _b === void 0 ? 2 : _b, _c = _a.closeAfterClick, closeAfterClick = _c === void 0 ? false : _c;
    var buttonsJSX = [];
    // Если max > list.length, то max = list.length
    var m = Math.min(max, list.length);
    for (var i = 0; i < m; i++) {
        if (list[i].component) {
            buttonsJSX.push((0, jsx_runtime_1.jsx)("div", { className: 'button-group__item', children: (0, jsx_runtime_1.jsxs)(Tooltip_1.default, { position: 'bottom', children: [list[i].component, list[i].tooltip] }) }, i));
        }
    }
    // -------------------------------------------------------------------------------------------------------------------
    /** Скрытые кнопки */
    var hasMenuJSX = max < list.length;
    var getMenuJSX = (0, react_1.useCallback)(function (onClose) {
        var menu = [];
        if (hasMenuJSX) {
            var _loop_1 = function (i) {
                var onClick = function (e) {
                    if (list[i].disabled) {
                        e.preventDefault();
                        e.stopPropagation();
                        return;
                    }
                    if (list[i] && list[i].onClick) {
                        e.preventDefault();
                        e.stopPropagation();
                        // @ts-ignore
                        list[i].onClick();
                    }
                    /** Закрыть меню после клика */
                    if (closeAfterClick) {
                        onClose();
                    }
                };
                var disabledClass = list[i].disabled ? 'button-group__menu-button--disabled' : '';
                menu.push((0, jsx_runtime_1.jsxs)(react_router_dom_1.Link, { to: list[i].url || '/', className: "button-group__menu-button ".concat(disabledClass), onClick: onClick, children: [(0, jsx_runtime_1.jsxs)("div", { className: 'button-group__menu-button-details', children: [(0, jsx_runtime_1.jsx)("h4", { className: 'button-group__menu-button-name', children: list[i].label }), list[i].description && (0, jsx_runtime_1.jsx)("p", { className: 'button-group__menu-button-description', children: list[i].description })] }), list[i].preloader ? ((0, jsx_runtime_1.jsx)("div", { className: 'button-group__menu-button-loader', children: (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 'm' }) })) : ((0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, { className: 'button-group__menu-button-icon' }))] }, i));
            };
            for (var i = max; i < list.length; i++) {
                _loop_1(i);
            }
        }
        return menu;
    }, [list, max, closeAfterClick]);
    // -------------------------------------------------------------------------------------------------------------------
    if (list.length === 0) {
        return null;
    }
    return ((0, jsx_runtime_1.jsxs)(Tile_1.default, { className: 'button-group', padding: '12px', variant: 'non-clickable', children: [buttonsJSX, hasMenuJSX && ((0, jsx_runtime_1.jsx)(Menu_1.default, { content: (0, jsx_runtime_1.jsx)(Menu_1.MenuContext.Consumer, { children: function (_a) {
                        var onClose = _a.onClose;
                        return (0, jsx_runtime_1.jsx)("div", { className: 'button-group__menu', children: getMenuJSX(onClose) });
                    } }), position: 'top-start', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'light', size: 'l', "data-testid": 'button-group__more', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllMenuHorizontal, {}), "aria-label": '\u0414\u0440\u0443\u0433\u0438\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044F' }) }))] }));
};
exports.default = ButtonGroup;
