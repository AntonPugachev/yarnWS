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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M27.9477 29.75C27.4472 29.75 27.0384 29.3705 26.7313 28.9753C26.3882 28.534 25.8523 28.25 25.25 28.25C24.6216 28.25 24.0655 28.5591 23.7252 29.0335C23.4582 29.4059 23.0832 29.75 22.625 29.75C22.1668 29.75 21.7918 29.4059 21.5248 29.0335C21.1845 28.5591 20.6284 28.25 20 28.25C19.3716 28.25 18.8155 28.5591 18.4752 29.0335C18.2082 29.4059 17.8332 29.75 17.375 29.75C16.9168 29.75 16.5418 29.4059 16.2748 29.0335C15.9345 28.5591 15.3784 28.25 14.75 28.25C14.1477 28.25 13.6118 28.534 13.2687 28.9753C12.9616 29.3705 12.5528 29.75 12.0523 29.75C11.4711 29.75 11 29.2789 11 28.6977V20V13.5C11 12.1193 12.1193 11 13.5 11H26.5C27.8807 11 29 12.1193 29 13.5L29 20L29 28.6977C29 29.2789 28.5289 29.75 27.9477 29.75ZM16.5 19C17.3284 19 18 18.3284 18 17.5C18 16.6716 17.3284 16 16.5 16C15.6716 16 15 16.6716 15 17.5C15 18.3284 15.6716 19 16.5 19ZM23.5 24C24.3284 24 25 23.3284 25 22.5C25 21.6716 24.3284 21 23.5 21C22.6716 21 22 21.6716 22 22.5C22 23.3284 22.6716 24 23.5 24ZM23.6187 17.6187C23.9604 17.277 23.9604 16.723 23.6187 16.3813C23.277 16.0396 22.723 16.0396 22.3813 16.3813L16.3813 22.3813C16.0396 22.723 16.0396 23.277 16.3813 23.6187C16.723 23.9604 17.277 23.9604 17.6187 23.6187L23.6187 17.6187Z', fill: 'currentColor' }) })));
});
