"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./PageWithList.scss");
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var classnames_1 = require("../../../utils/classnames");
var PageWithList = function (_a) {
    var children = _a.children, filters = _a.filters, actionMenu = _a.actionMenu, _b = _a.preloader, preloader = _b === void 0 ? false : _b, _c = _a.overflowList, overflowList = _c === void 0 ? false : _c;
    /** Ссылка на разделитель скролла */
    var dividerRef = (0, react_1.useRef)(null);
    /** Ссылка на контент */
    var mainRef = (0, react_1.useRef)(null);
    // -------------------------------------------------------------------------------------------------------------------
    var actionMenuHideClass = (0, classnames_1.classnames)({ 'jf-page__main-action-menu--hidden': !actionMenu });
    var noFiltersAndMenuClass = (0, classnames_1.classnames)({ 'jf-page__main-action-menu--no-filters': !actionMenu && !filters });
    var pageClassNames = (0, classnames_1.classnames)({
        'jf-page__with-list': true,
        'jf-page__with-list--overflow': overflowList
    });
    var mainClassNames = (0, classnames_1.classnames)({
        'jf-page__main': true,
        'jf-page__main--overflow': overflowList
    });
    var mainContentClassNames = (0, classnames_1.classnames)({
        'jf-page__main-content': true,
        'jf-page__main-content--overflow': overflowList
    });
    var _d = (0, react_1.useState)(0), pageOffsetTop = _d[0], setPageOffsetTop = _d[1];
    var styles = (0, react_1.useMemo)(function () {
        return pageOffsetTop && overflowList ? { height: "calc(100vh - ".concat(pageOffsetTop, "px)") } : undefined;
    }, [pageOffsetTop]);
    (0, react_1.useEffect)(function () {
        if (!preloader) {
            setTimeout(function () {
                if (mainRef.current) {
                    var topPixels = mainRef.current.offsetTop;
                    setPageOffsetTop(topPixels);
                }
            });
        }
    }, [preloader]);
    return ((0, jsx_runtime_1.jsx)("div", { className: pageClassNames, style: styles, children: preloader ? (0, jsx_runtime_1.jsx)(Preloader_1.default, {}) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [filters && ((0, jsx_runtime_1.jsx)("aside", { className: 'jf-page__aside-filters', children: (0, jsx_runtime_1.jsx)("div", { className: 'jf-page__aside-filters-inner', children: filters }) })), (0, jsx_runtime_1.jsxs)("main", { className: mainClassNames, ref: mainRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "jf-page__main-action-menu ".concat(actionMenuHideClass, " ").concat(noFiltersAndMenuClass), children: (0, jsx_runtime_1.jsxs)("div", { className: 'jf-page__main-action-menu-inner', children: [(0, jsx_runtime_1.jsx)("div", { className: 'jf-page__action-menu-divider--list', ref: dividerRef }), actionMenu] }) }), (0, jsx_runtime_1.jsx)("div", { className: mainContentClassNames, children: children })] })] })) }));
};
exports.default = PageWithList;
