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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M14.932 11.3001L15.6378 9.00608C15.8218 8.40807 16.3743 8 17 8C17.6257 8 18.1782 8.40807 18.3622 9.00608L19.068 11.3001C19.7498 13.5158 21.4842 15.2502 23.6999 15.932L25.9939 16.6378C26.5919 16.8218 27 17.3743 27 18C27 18.6257 26.5919 19.1782 25.9939 19.3622L23.6999 20.068C21.4842 20.7498 19.7498 22.4842 19.068 24.6999L18.3622 26.9939C18.1782 27.5919 17.6257 28 17 28C16.3743 28 15.8218 27.5919 15.6378 26.9939L14.932 24.6999C14.2502 22.4842 12.5158 20.7498 10.3001 20.068L8.00608 19.3622C7.40807 19.1782 7 18.6257 7 18C7 17.3743 7.40807 16.8218 8.00608 16.6378L10.3001 15.932C12.5158 15.2502 14.2502 13.5158 14.932 11.3001Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M25.5201 23.7729L25.7688 23.027C25.8737 22.7123 26.1682 22.5 26.5 22.5C26.8318 22.5 27.1263 22.7123 27.2312 23.027L27.3797 23.4724C27.8751 24.9586 29.0414 26.1249 30.5276 26.6203L30.973 26.7688C31.2877 26.8737 31.5 27.1682 31.5 27.5C31.5 27.8318 31.2877 28.1263 30.973 28.2312L30.5276 28.3797C29.0414 28.8751 27.8751 30.0414 27.3797 31.5276L27.2312 31.973C27.1263 32.2877 26.8318 32.5 26.5 32.5C26.1682 32.5 25.8737 32.2877 25.7688 31.973L25.5201 31.2271C25.0878 29.93 24.07 28.9122 22.7729 28.4799L22.027 28.2312C21.7123 28.1263 21.5 27.8318 21.5 27.5C21.5 27.1682 21.7123 26.8737 22.027 26.7688L22.7729 26.5201C24.07 26.0878 25.0878 25.07 25.5201 23.7729Z', fill: 'currentColor' })] })));
});
