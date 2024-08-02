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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M18.193 20.2873C18.4756 20.6508 18.8516 21 19.3121 21C19.8468 21 20.2802 20.5665 20.2802 20.0319V6.25C20.2802 4.86929 19.1609 3.75 17.7802 3.75H6.22022C4.8395 3.75 3.72021 4.86929 3.72021 6.25V20.0319C3.72021 20.5665 4.15367 21 4.68836 21C5.14881 21 5.52487 20.6508 5.80744 20.2873C6.12305 19.8812 6.61612 19.62 7.17021 19.62C7.74831 19.62 8.25999 19.9044 8.57299 20.3409C8.81865 20.6834 9.16367 21 9.58521 21C10.0068 21 10.3518 20.6834 10.5974 20.3409C10.9104 19.9044 11.4221 19.62 12.0002 19.62C12.5783 19.62 13.09 19.9044 13.403 20.3409C13.6486 20.6834 13.9937 21 14.4152 21C14.8368 21 15.1818 20.6834 15.4274 20.3409C15.7404 19.9044 16.2521 19.62 16.8302 19.62C17.3843 19.62 17.8774 19.8812 18.193 20.2873ZM8.32024 8.35C8.32024 7.8419 8.73214 7.43 9.24024 7.43H14.7602C15.2683 7.43 15.6802 7.8419 15.6802 8.35C15.6802 8.8581 15.2683 9.27 14.7602 9.27H9.24024C8.73214 9.27 8.32024 8.8581 8.32024 8.35ZM9.24024 11.11C8.73214 11.11 8.32024 11.5219 8.32024 12.03C8.32024 12.5381 8.73214 12.95 9.24024 12.95H14.7602C15.2683 12.95 15.6802 12.5381 15.6802 12.03C15.6802 11.5219 15.2683 11.11 14.7602 11.11H9.24024Z', fill: 'currentColor' }) })));
});
