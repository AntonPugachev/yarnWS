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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M8.09288 11.875C7.42026 11.875 6.875 12.4203 6.875 13.0929C6.875 13.7655 7.42026 14.3108 8.09288 14.3108H10.6738L12.5887 22.0589L13.2555 25.0593C13.4412 25.8951 14.1826 26.4898 15.0388 26.4898H27.3314C28.1877 26.4898 28.929 25.8951 29.1148 25.0593L30.9033 17.0109C31.0723 16.2504 30.4935 15.5289 29.7144 15.5289H13.4839L12.8097 12.8007C12.6753 12.257 12.1875 11.875 11.6274 11.875H8.09288Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M16.0091 27.6966C15.0002 27.6966 14.1823 28.5145 14.1823 29.5235C14.1823 30.5324 15.0002 31.3503 16.0091 31.3503C17.018 31.3503 17.8359 30.5324 17.8359 29.5235C17.8359 28.5145 17.018 27.6966 16.0091 27.6966Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M24.5343 29.5235C24.5343 28.5145 25.3522 27.6966 26.3611 27.6966C27.37 27.6966 28.1879 28.5145 28.1879 29.5235C28.1879 30.5324 27.37 31.3503 26.3611 31.3503C25.3522 31.3503 24.5343 30.5324 24.5343 29.5235Z', fill: 'currentColor' })] })));
});
