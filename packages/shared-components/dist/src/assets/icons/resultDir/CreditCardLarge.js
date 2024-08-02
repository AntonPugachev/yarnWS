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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M11.5 12C10.1193 12 9 13.1193 9 14.5V25.5C9 26.8807 10.1193 28 11.5 28H29.5C30.8807 28 32 26.8807 32 25.5V14.5C32 13.1193 30.8807 12 29.5 12H11.5ZM23.5 24.5C24.4665 24.5 25.25 23.7165 25.25 22.75C25.25 21.7835 24.4665 21 23.5 21C22.5335 21 21.75 21.7835 21.75 22.75C21.75 23.7165 22.5335 24.5 23.5 24.5ZM19.25 17.25C19.25 18.2165 18.4665 19 17.5 19C16.5335 19 15.75 18.2165 15.75 17.25C15.75 16.2835 16.5335 15.5 17.5 15.5C18.4665 15.5 19.25 16.2835 19.25 17.25ZM24.6187 17.1187C24.9604 16.777 24.9604 16.223 24.6187 15.8813C24.277 15.5396 23.723 15.5396 23.3813 15.8813L16.3813 22.8813C16.0396 23.223 16.0396 23.777 16.3813 24.1187C16.723 24.4604 17.277 24.4604 17.6187 24.1187L24.6187 17.1187Z', fill: 'currentColor' }) })));
});
