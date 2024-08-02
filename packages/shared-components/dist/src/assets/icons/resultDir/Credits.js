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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M25 13.5C25 14.026 24.9098 14.5308 24.7439 15L16.2561 15C16.0902 14.5309 16 14.026 16 13.5C16 13.1563 16.0385 12.8216 16.1115 12.5C16.5662 10.496 18.3584 9 20.5 9C22.6416 9 24.4338 10.496 24.8885 12.5C24.8955 12.5309 24.9022 12.5619 24.9086 12.5931C24.9685 12.886 25 13.1893 25 13.5ZM26.8261 15H28.75C29.4403 15 30 14.4404 30 13.75C30 13.0597 29.4403 12.5 28.75 12.5H26.9236C26.9739 12.826 27 13.1599 27 13.5C27 14.0163 26.9398 14.5185 26.8261 15ZM14.0764 12.5H13C11.3431 12.5 10 13.8431 10 15.5V26C10 27.6569 11.3431 29 13 29H28C29.6569 29 31 27.6569 31 26V17.8C31 17.3582 30.6418 17 30.2 17H13.5C12.9477 17 12.5 16.5523 12.5 16C12.5 15.4477 12.9477 15 13.5 15H14.1739C14.0602 14.5185 14 14.0163 14 13.5C14 13.1599 14.0261 12.826 14.0764 12.5ZM28.5999 22.9999C28.5999 23.8836 27.8836 24.5999 26.9999 24.5999C26.1162 24.5999 25.3999 23.8836 25.3999 22.9999C25.3999 22.1162 26.1162 21.3999 26.9999 21.3999C27.8836 21.3999 28.5999 22.1162 28.5999 22.9999Z', fill: 'currentColor' }) })));
});
