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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M10 23.8984C10 25.0962 10.971 26.0672 12.1689 26.0672H27.8311C29.029 26.0672 30 25.0962 30 23.8984C30 23.3232 29.7715 22.7715 29.3648 22.3648L28.7095 21.7095C27.6015 20.6015 26.8945 19.1559 26.7001 17.6011L26.1822 13.4575C25.7925 10.3397 23.1421 8 20 8C16.8579 8 14.2075 10.3397 13.8178 13.4575L13.2999 17.6011C13.1055 19.1559 12.3985 20.6015 11.2905 21.7095L10.6352 22.3648C10.2285 22.7715 10 23.3232 10 23.8984Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M22.8356 29.049C23.0163 28.5271 22.5523 28.0671 22 28.0671H18C17.4477 28.0671 16.9837 28.5271 17.1644 29.049C17.5711 30.2237 18.687 31.0671 20 31.0671C21.313 31.0671 22.4289 30.2237 22.8356 29.049Z', fill: 'currentColor' })] })));
});
