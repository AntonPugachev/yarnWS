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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M13.5 9C12.1193 9 11 10.1193 11 11.5V28C11 29.3807 12.1193 30.5 13.5 30.5H27.5C28.8807 30.5 30 29.3807 30 28V11.5C30 10.1193 28.8807 9 27.5 9H13.5ZM15.5 22.501C16.3284 22.501 17 21.8294 17 21.001C17 20.1725 16.3284 19.501 15.5 19.501C14.6716 19.501 14 20.1725 14 21.001C14 21.8294 14.6716 22.501 15.5 22.501ZM17 26.002C17 26.8304 16.3284 27.502 15.5 27.502C14.6716 27.502 14 26.8304 14 26.002C14 25.1735 14.6716 24.502 15.5 24.502C16.3284 24.502 17 25.1735 17 26.002ZM20.5 22.501C21.3284 22.501 22 21.8294 22 21.001C22 20.1725 21.3284 19.501 20.5 19.501C19.6716 19.501 19 20.1725 19 21.001C19 21.8294 19.6716 22.501 20.5 22.501ZM22 26.002C22 26.8304 21.3284 27.502 20.5 27.502C19.6716 27.502 19 26.8304 19 26.002C19 25.1735 19.6716 24.502 20.5 24.502C21.3284 24.502 22 25.1735 22 26.002ZM25.4999 22.5C26.3284 22.5 26.9999 21.8284 26.9999 21C26.9999 20.1716 26.3284 19.5 25.4999 19.5C24.6715 19.5 23.9999 20.1716 23.9999 21C23.9999 21.8284 24.6715 22.5 25.4999 22.5ZM26.9999 26.002C26.9999 26.8304 26.3284 27.502 25.4999 27.502C24.6715 27.502 23.9999 26.8304 23.9999 26.002C23.9999 25.1735 24.6715 24.502 25.4999 24.502C26.3284 24.502 26.9999 25.1735 26.9999 26.002ZM14.75 12C14.3358 12 14 12.3358 14 12.75V15.75C14 16.1642 14.3358 16.5 14.75 16.5H26.25C26.6642 16.5 27 16.1642 27 15.75V12.75C27 12.3358 26.6642 12 26.25 12H14.75Z', fill: 'currentColor' }) })));
});
