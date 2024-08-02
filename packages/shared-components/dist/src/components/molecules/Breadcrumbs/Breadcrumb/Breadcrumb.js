"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Tooltip_1 = __importDefault(require("../../../atoms/Tooltip"));
var indexIcon_1 = require("../../../../indexIcon");
var classnames_1 = require("../../../../utils/classnames");
var Link_1 = __importDefault(require("../../../atoms/Link"));
require("./Breadcrumb.scss");
var MAX_LENGTH = 40;
var Breadcrumb = (0, react_1.forwardRef)(function (_a, ref) {
    var children = _a.children, href = _a.href, isLast = _a.isLast, isHidden = _a.isHidden, props = __rest(_a, ["children", "href", "isLast", "isHidden"]);
    var isShort = typeof children === 'string' ? children.length > MAX_LENGTH : false;
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: (0, classnames_1.classnames)('rf-breadcrumb__wrap', isHidden && 'rf-breadcrumb__wrap--hidden'), children: (0, jsx_runtime_1.jsx)(Link_1.default, __assign({ className: 'rf-breadcrumb', to: href, component: react_router_dom_1.NavLink, color: 'secondary', endAdornment: !isLast && (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronRight, { className: 'rf-breadcrumb__icon', size: 'xxxs' }) }, props, { children: isShort ?
                (0, jsx_runtime_1.jsxs)(Tooltip_1.default, { position: 'bottom', children: [(0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [children.slice(0, MAX_LENGTH), "..."] }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children })] }) :
                children })) }));
});
exports.default = Breadcrumb;
