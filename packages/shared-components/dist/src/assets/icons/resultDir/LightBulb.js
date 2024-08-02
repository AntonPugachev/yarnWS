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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M11.5 17.5002C11.5 12.5297 15.5294 8.50024 20.5 8.50024C25.4706 8.50024 29.5 12.5297 29.5 17.5002C29.5 19.778 28.2715 21.858 26.6525 23.4433C25.4327 24.6377 24.5 26.174 24.5 27.8812C24.5 28.2231 24.2228 28.5002 23.881 28.5002H22.25C21.8358 28.5002 21.5 28.1645 21.5 27.7502V19.2502C21.5 18.836 21.8358 18.5002 22.25 18.5002H23C23.5523 18.5002 24 18.0526 24 17.5002C24 16.9479 23.5523 16.5002 23 16.5002H18C17.4477 16.5002 17 16.9479 17 17.5002C17 18.0526 17.4477 18.5002 18 18.5002H18.75C19.1642 18.5002 19.5 18.836 19.5 19.2502V27.7502C19.5 28.1645 19.1642 28.5002 18.75 28.5002H17.119C16.7772 28.5002 16.5 28.2231 16.5 27.8812C16.5 26.174 15.5673 24.6377 14.3475 23.4433C12.7285 21.858 11.5 19.778 11.5 17.5002Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M22.3636 33.0002C23.3151 33.0002 24.1343 32.3286 24.3209 31.3956C24.4136 30.9324 24.0593 30.5002 23.5869 30.5002H17.4131C16.9407 30.5002 16.5864 30.9324 16.6791 31.3956C16.8657 32.3286 17.6849 33.0002 18.6364 33.0002H22.3636Z', fill: 'currentColor' })] })));
});
