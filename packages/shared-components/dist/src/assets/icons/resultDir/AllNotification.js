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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M4 15.4064C4 16.3411 4.75775 17.0989 5.69248 17.0989H17.9146C18.8494 17.0989 19.6071 16.3411 19.6071 15.4064C19.6071 14.9575 19.4288 14.527 19.1114 14.2096L18.6 13.6983C17.7355 12.8337 17.1837 11.7056 17.032 10.4923L16.6279 7.25881C16.3237 4.8258 14.2555 3 11.8036 3C9.35161 3 7.28338 4.8258 6.97925 7.25881L6.57507 10.4923C6.42341 11.7056 5.87166 12.8337 5.00706 13.6983L4.49572 14.2096C4.17831 14.527 4 14.9575 4 15.4064Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M13.9348 19.6283C14.1639 19.1258 13.6969 18.6582 13.1447 18.6582H10.4625C9.91024 18.6582 9.44324 19.1258 9.67235 19.6283C10.0411 20.4371 10.8567 20.9993 11.8036 20.9993C12.7505 20.9993 13.5661 20.4371 13.9348 19.6283Z', fill: 'currentColor' })] })));
});
