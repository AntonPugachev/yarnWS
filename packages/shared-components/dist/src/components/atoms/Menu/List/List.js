"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
require("./List.scss");
var Menu_1 = require("../Menu");
var classnames_1 = require("../../../../utils/classnames");
var Tooltip_1 = __importDefault(require("../../Tooltip"));
var List = function (_a) {
    var list = _a.list, _b = _a.tooltipBackground, tooltipBackground = _b === void 0 ? 'white' : _b;
    /** Ссылки на элементы списка */
    var refs = (0, react_1.useRef)([]);
    var onElementClick = function (e, li) {
        e.stopPropagation();
        !li.url && e.preventDefault();
        li.handler && li.handler();
        onClose && onClose();
    };
    var onClose = (0, react_1.useContext)(Menu_1.MenuContext).onClose;
    var checkOverflow = function (index) {
        var el = refs.current[index].current;
        if (!el) {
            return;
        }
        var isOverflowing = (el === null || el === void 0 ? void 0 : el.clientWidth) < el.scrollWidth ||
            (el === null || el === void 0 ? void 0 : el.clientHeight) < el.scrollHeight;
        return isOverflowing;
    };
    var renderLabel = function (index, label) {
        return checkOverflow(index) ?
            (0, jsx_runtime_1.jsxs)(Tooltip_1.default, { background: tooltipBackground, position: 'bottom', children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: label })] }) :
            (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: label });
    };
    var listElementJSX = list === null || list === void 0 ? void 0 : list.map(function (li, i) {
        var disabledClass = li.disabled ? 'rf-list__element--disabled' : '';
        var separatedClass = li.separated ? 'rf-list__element--separated' : '';
        if (!refs.current[i]) {
            refs.current[i] = (0, react_1.createRef)();
        }
        return ((0, jsx_runtime_1.jsxs)("li", { className: 'rf-li', children: [li.separated && (0, jsx_runtime_1.jsx)("div", { className: 'rf-list__separator' }), li.url ? ((0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { innerRef: refs.current[i], to: li.url, className: (0, classnames_1.classnames)('rf-list__element', disabledClass, separatedClass), onClick: function (e) { return onElementClick(e, li); }, children: renderLabel(i, li.label) })) : ((0, jsx_runtime_1.jsx)("div", { ref: refs.current[i], className: (0, classnames_1.classnames)('rf-list__element', disabledClass, separatedClass, li.isTitle && 'rf-list__element--title'), onClick: function (e) { return !li.isTitle && onElementClick(e, li); }, children: renderLabel(i, li.label) }))] }, li.value || i));
    });
    // -------------------------------------------------------------------------------------------------------------------
    return (0, jsx_runtime_1.jsx)("ul", { className: 'rf-list', "data-testid": 'rf-list', children: listElementJSX });
};
exports.default = List;
