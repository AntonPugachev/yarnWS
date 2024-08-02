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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Link = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Link.scss");
var classnames_1 = require("../../../utils/classnames");
var Link = function (_a) {
    var component = _a.component, children = _a.children, _b = _a.color, color = _b === void 0 ? 'primary' : _b, _c = _a.size, size = _c === void 0 ? 'md' : _c, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, className = _a.className, props = __rest(_a, ["component", "children", "color", "size", "startAdornment", "endAdornment", "className"]);
    var Component = component || 'a';
    return ((0, jsx_runtime_1.jsxs)(Component, __assign({ "data-testid": 'rf-link', className: (0, classnames_1.classnames)('rf-link', "rf-link--".concat(color), "rf-link--".concat(size), className) }, props, { children: [!!startAdornment && (0, jsx_runtime_1.jsx)("div", { className: 'rf-link__adornment rf-link__adornment--start', children: startAdornment }), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }), !!endAdornment && (0, jsx_runtime_1.jsx)("div", { className: 'rf-link__adornment rf-link__adornment--end', children: endAdornment })] })));
};
exports.Link = Link;
