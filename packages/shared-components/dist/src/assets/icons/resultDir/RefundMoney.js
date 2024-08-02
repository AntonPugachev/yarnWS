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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M22.1754 18.5884H19.7213V15.9H22.1754C22.9575 15.9 23.582 16.5262 23.582 17.2442C23.582 17.9622 22.9575 18.5884 22.1754 18.5884Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M31.5 20.0004C31.5 26.0755 26.5751 31.0004 20.5 31.0004C14.4249 31.0004 9.5 26.0755 9.5 20.0004C9.5 13.9252 14.4249 9.00037 20.5 9.00037C26.5751 9.00037 31.5 13.9252 31.5 20.0004ZM18.8213 14.1H22.1754C23.887 14.1 25.382 15.4686 25.382 17.2442C25.382 19.0198 23.887 20.3884 22.1754 20.3884H19.7213V22.0277H21.8637C22.3608 22.0277 22.7637 22.4307 22.7637 22.9277C22.7637 23.4248 22.3608 23.8277 21.8637 23.8277H19.7213V25.5697C19.7213 26.0667 19.3183 26.4697 18.8213 26.4697C18.3242 26.4697 17.9213 26.0667 17.9213 25.5697V23.8277H17.5C17.0029 23.8277 16.6 23.4248 16.6 22.9277C16.6 22.4307 17.0029 22.0277 17.5 22.0277H17.9213V20.3884H17.5C17.0029 20.3884 16.6 19.9855 16.6 19.4884C16.6 18.9914 17.0029 18.5884 17.5 18.5884H17.9213V15.012L17.9212 15C17.9212 14.5029 18.3242 14.1 18.8213 14.1Z', fill: 'currentColor' })] })));
});
