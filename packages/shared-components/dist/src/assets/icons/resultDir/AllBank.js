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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M3.99637 15.4627V6.79624C3.99637 6.49232 4.17979 6.21845 4.46081 6.10273L11.7402 3.10532C11.9232 3.03 12.1284 3.03 12.3114 3.10532L19.5908 6.10274C19.8718 6.21845 20.0552 6.49233 20.0552 6.79624V15.4627C20.0552 15.8769 19.7195 16.2127 19.3052 16.2127H16.2767V9.6578C16.2767 9.13609 15.8538 8.71316 15.3321 8.71316C14.8104 8.71316 14.3874 9.13609 14.3874 9.6578L14.3874 16.2127H9.66416L9.66416 9.6578C9.66416 9.13609 9.24123 8.71316 8.71952 8.71316C8.19781 8.71316 7.77488 9.13609 7.77488 9.6578V16.2127H4.74637C4.33216 16.2127 3.99637 15.8769 3.99637 15.4627Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M3.9964 18.1598C3.47469 18.1598 3.05176 18.5827 3.05176 19.1044C3.05176 19.6261 3.47469 20.049 3.9964 20.049H20.0553C20.577 20.049 20.9999 19.6261 20.9999 19.1044C20.9999 18.5827 20.577 18.1598 20.0553 18.1598H3.9964Z', fill: 'currentColor' })] })));
});
