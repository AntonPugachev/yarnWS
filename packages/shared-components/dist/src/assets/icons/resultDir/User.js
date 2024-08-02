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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M20.4997 6.25C17.3932 6.25 14.8747 8.76839 14.8747 11.875C14.8747 14.9816 17.3932 17.5 20.4998 17.5C23.6064 17.5 26.1247 14.9816 26.1247 11.875C26.1247 8.76839 23.6063 6.25 20.4997 6.25Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M30.6156 29.4971C30.9646 29.0774 31.1248 28.5304 31.0468 27.9902C30.372 23.3201 25.8123 20 20.4999 20C15.1916 20 10.6546 23.3396 9.9579 27.9834C9.87625 28.5276 10.0369 29.0796 10.3885 29.5029C12.6161 32.1842 16.4466 34 20.5001 34C24.542 34 28.4013 32.1602 30.6156 29.4971Z', fill: 'currentColor' })] })));
});
