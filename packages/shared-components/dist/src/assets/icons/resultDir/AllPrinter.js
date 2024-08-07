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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M10.6 16.3C10.0754 16.3 9.65005 16.7253 9.65005 17.25C9.65005 17.7747 10.0754 18.2 10.6 18.2L13.45 18.2C13.9747 18.2 14.4 17.7747 14.4 17.25C14.4 16.7253 13.9747 16.3 13.45 16.3H10.6Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7.75 3C6.70066 3 5.85 3.85066 5.85 4.9V7.75H4.9C3.85066 7.75 3 8.60066 3 9.65V15.35C3 16.3993 3.85066 17.25 4.9 17.25H5.85005V20.1C5.85005 21.1493 6.70071 22 7.75005 22H16.3C17.3494 22 18.2 21.1493 18.2 20.1V17.25H19.15C20.1993 17.25 21.05 16.3993 21.05 15.35V9.65C21.05 8.60066 20.1993 7.75 19.15 7.75H18.2L18.2 4.9C18.2 3.85066 17.3493 3 16.3 3H7.75ZM16.3 4.9H7.75V7.75H16.3V4.9ZM7.75005 20.1V13.45H16.3V20.1H7.75005ZM18.2 10.6C18.2 11.1247 17.7747 11.55 17.25 11.55C16.7254 11.55 16.3 11.1247 16.3 10.6C16.3 10.0753 16.7254 9.65 17.25 9.65C17.7747 9.65 18.2 10.0753 18.2 10.6Z', fill: 'currentColor' })] })));
});
