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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M11.3996 5.80089C11.3996 4.80628 10.5933 4 9.59872 4H5.80089C4.80628 4 4 4.80628 4 5.80089V9.59872C4 10.5933 4.80628 11.3996 5.80089 11.3996H9.59872C10.5933 11.3996 11.3996 10.5933 11.3996 9.59872L11.3996 5.80089Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M20.3024 14.5646C20.3024 13.57 19.4962 12.7637 18.5016 12.7637H14.7037C13.7091 12.7637 12.9028 13.57 12.9028 14.5646V18.3624C12.9028 19.357 13.7091 20.1633 14.7037 20.1633H18.5016C19.4962 20.1633 20.3024 19.357 20.3024 18.3624V14.5646Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M18.5986 4C19.5933 4 20.3995 4.80628 20.3995 5.80089V9.59872C20.3995 10.5933 19.5933 11.3996 18.5986 11.3996L14.8008 11.3996C13.8062 11.3996 12.9999 10.5933 12.9999 9.59872V5.80089C12.9999 4.80628 13.8062 4 14.8008 4H18.5986Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M11.3996 14.5646C11.3996 13.57 10.5933 12.7637 9.59872 12.7637H5.80089C4.80628 12.7637 4 13.57 4 14.5646V18.3624C4 19.357 4.80628 20.1633 5.80089 20.1633H9.59872C10.5933 20.1633 11.3996 19.357 11.3996 18.3624L11.3996 14.5646Z', fill: 'currentColor' })] })));
});
