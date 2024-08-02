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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M17.6099 9.93375C17.2085 10.3132 16.5756 10.2954 16.1962 9.89411L12.9998 6.51327L12.9998 20C12.9998 20.5523 12.5521 21 11.9998 21C11.4475 21 10.9998 20.5523 10.9998 20L10.9998 6.51327L7.80334 9.89411C7.42392 10.2954 6.791 10.3132 6.38968 9.93375C5.98837 9.55432 5.97062 8.9214 6.35005 8.52009L11.2731 3.31299C11.462 3.1132 11.7248 3 11.9998 3C12.2747 3 12.5375 3.1132 12.7264 3.31299L17.6495 8.52009C18.0289 8.92141 18.0112 9.55432 17.6099 9.93375Z', fill: 'currentColor' }) })));
});
