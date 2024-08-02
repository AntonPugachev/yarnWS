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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M17.3287 13C16.7982 13 16.2895 12.7892 15.9145 12.4142L14.4571 10.9568C14.0406 10.5403 14.2448 9.82813 14.8188 9.69567L18.2014 8.91508C19.3851 8.64192 20.6154 8.64191 21.7991 8.91508L25.1817 9.69567C25.7557 9.82813 25.9599 10.5403 25.5434 10.9568L24.086 12.4142C23.711 12.7892 23.2022 13 22.6718 13H17.3287ZM24.0387 15.4482C26.4725 17.5523 29.4934 21.2225 29.4925 25C29.4921 26.7426 28.7572 27.9103 27.9182 28.6756C26.5524 29.9213 24.5667 30 22.7181 30H17.4548C15.4925 30 13.3709 29.909 11.9631 28.5421C11.1709 27.7729 10.5001 26.6379 10.5 25C10.4998 21.2799 13.5274 17.5599 15.9621 15.4486C16.3053 15.1511 16.7477 15 17.2018 15H22.7987C23.2528 15 23.6952 15.1512 24.0387 15.4482Z', fill: 'currentColor' }) })));
});
