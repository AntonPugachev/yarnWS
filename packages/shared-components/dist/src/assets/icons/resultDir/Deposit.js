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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M30.5 13C30.5 11.6193 29.3807 10.5 28 10.5H13C11.6193 10.5 10.5 11.6193 10.5 13V27C10.5 28.3807 11.6193 29.5 13 29.5H28C29.3807 29.5 30.5 28.3807 30.5 27L30.5 13ZM14 27C13.4477 27 13 26.5523 13 26V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V26C15 26.5523 14.5523 27 14 27ZM28 20C28 20.9665 27.2165 21.75 26.25 21.75C25.2835 21.75 24.5 20.9665 24.5 20C24.5 19.0335 25.2835 18.25 26.25 18.25C27.2165 18.25 28 19.0335 28 20Z', fill: 'currentColor' }) })));
});
