"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Page.scss");
var react_router_dom_1 = require("react-router-dom");
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var Tabs_1 = __importDefault(require("../../atoms/Tabs"));
var indexIcon_1 = require("../../../indexIcon");
var Page = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var title = _a.title, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.backUrl, backUrl = _c === void 0 ? '' : _c, onBackUrlClick = _a.onBackUrlClick, children = _a.children, navigation = _a.navigation, _d = _a.preloader, preloader = _d === void 0 ? false : _d;
    var onBackClick = function (e) {
        if (onBackUrlClick) {
            e.preventDefault();
            onBackUrlClick();
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-page ".concat(className), children: [(0, jsx_runtime_1.jsx)("header", { className: 'rf-page__header', children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-page__header-wrapper', children: [backUrl && (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: backUrl, onClick: onBackClick, className: 'rf-page__header-back', "aria-label": '\u041D\u0430\u0437\u0430\u0434', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }), (0, jsx_runtime_1.jsx)("h2", { className: 'rf-page__title', children: title })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-page__content', children: [!!(navigation === null || navigation === void 0 ? void 0 : navigation.length) && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-page__tabs', children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { list: navigation }) })), preloader ? (0, jsx_runtime_1.jsx)(Preloader_1.default, {}) : children] })] }));
};
exports.default = Page;
