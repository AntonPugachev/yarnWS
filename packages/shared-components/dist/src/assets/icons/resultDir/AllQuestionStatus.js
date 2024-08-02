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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M10.655 15.0363C10.6676 14.2894 10.7523 13.6994 10.9092 13.2663C11.0661 12.8332 11.3862 12.3531 11.8695 11.8258L13.1029 10.5548C13.6301 9.95853 13.8937 9.31831 13.8937 8.63416C13.8937 7.97512 13.7211 7.46043 13.3759 7.09011C13.0307 6.71352 12.5286 6.52522 11.8695 6.52522C11.2293 6.52522 10.7146 6.69469 10.3255 7.03362C9.93634 7.37256 9.74176 7.82762 9.74176 8.39879H8C8.01255 7.38198 8.37346 6.56288 9.08272 5.94149C9.79825 5.31383 10.7272 5 11.8695 5C13.0558 5 13.9785 5.32011 14.6375 5.96032C15.3028 6.59426 15.6355 7.46671 15.6355 8.57767C15.6355 9.67608 15.1271 10.7588 14.1103 11.8258L13.0841 12.8426C12.6259 13.351 12.3968 14.0823 12.3968 15.0363H10.655ZM10.5797 18.0208C10.5797 17.7384 10.6644 17.503 10.8339 17.3147C11.0096 17.1202 11.267 17.0229 11.6059 17.0229C11.9449 17.0229 12.2022 17.1202 12.3779 17.3147C12.5537 17.503 12.6416 17.7384 12.6416 18.0208C12.6416 18.3033 12.5537 18.5387 12.3779 18.727C12.2022 18.909 11.9449 19 11.6059 19C11.267 19 11.0096 18.909 10.8339 18.727C10.6644 18.5387 10.5797 18.3033 10.5797 18.0208Z', fill: 'currentColor' }) })));
});
