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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M11.0005 11C10.172 11 9.50047 11.6716 9.50047 12.5V22.5C9.50047 23.3284 10.172 24 11.0005 24H31.0005C31.8289 24 32.5005 23.3284 32.5005 22.5V12.5C32.5005 11.6716 31.8289 11 31.0005 11H11.0005ZM21 20C22.3807 20 23.5 18.8807 23.5 17.5C23.5 16.1193 22.3807 15 21 15C19.6193 15 18.5 16.1193 18.5 17.5C18.5 18.8807 19.6193 20 21 20Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9.5 25.9919L32.5005 25.9917V28.9385C32.5005 29.9917 31.66 30.3281 30.5 29.9917C28.1009 29.296 21.0951 28.1084 11.0015 28C10.1731 27.9911 9.50002 27.3205 9.50001 26.492L9.5 25.9919Z', fill: 'currentColor' })] })));
});
