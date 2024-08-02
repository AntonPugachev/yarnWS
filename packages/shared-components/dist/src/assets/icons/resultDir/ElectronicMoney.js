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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M13 10.5001C11.3431 10.5001 10 11.8432 10 13.5001V26.0001C10 27.6569 11.3431 29.0001 13 29.0001H28C29.6569 29.0001 31 27.6569 31 26.0001V18.0001C31 16.3432 29.6569 15.0001 28 15.0001H13.5C12.9477 15.0001 12.5 14.5523 12.5 14.0001C12.5 13.4478 12.9477 13.0001 13.5 13.0001H26.75C27.4404 13.0001 28 12.4404 28 11.7501C28 11.0597 27.4404 10.5001 26.75 10.5001H13ZM27 23.5001C27.8284 23.5001 28.5 22.8285 28.5 22.0001C28.5 21.1716 27.8284 20.5001 27 20.5001C26.1716 20.5001 25.5 21.1716 25.5 22.0001C25.5 22.8285 26.1716 23.5001 27 23.5001Z', fill: 'currentColor' }) })));
});
