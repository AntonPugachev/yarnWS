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
var jsx_runtime_1 = require("react/jsx-runtime");
var helpers_1 = require("../../../utils/helpers");
/* eslint-disable max-len */
exports.default = (function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'xs' : _b, props = __rest(_a, ["size"]);
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M16.5 16.5V12.5C16.5 11.1193 17.6193 10 19 10H27C28.3807 10 29.5 11.1193 29.5 12.5V16.5H16.5Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M14.5764 14H13.5C11.8431 14 10.5 15.3431 10.5 17V27.5C10.5 29.1569 11.8431 30.5 13.5 30.5H28.5C30.1569 30.5 31.5 29.1569 31.5 27.5V19.3C31.5 18.8582 31.1418 18.5 30.7 18.5H14C13.4477 18.5 13 18.0523 13 17.5C13 16.9477 13.4477 16.5 14 16.5H14.5764V14ZM28.5 24.5C28.5 25.3284 27.8284 26 27 26C26.1716 26 25.5 25.3284 25.5 24.5C25.5 23.6716 26.1716 23 27 23C27.8284 23 28.5 23.6716 28.5 24.5Z', fill: 'currentColor' })] })));
});
