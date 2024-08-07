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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M15.7328 16.4726H12C10.8954 16.4726 10 17.3681 10 18.4726V24.167H30V18.4726C30 17.3681 29.1046 16.4726 28 16.4726H24.2924L20.887 19.792H24.0625C24.5803 19.792 25 20.2117 25 20.7295C25 21.2472 24.5803 21.667 24.0625 21.667H15.9375C15.4197 21.667 15 21.2472 15 20.7295C15 20.2117 15.4197 19.792 15.9375 19.792H18.9683L15.7328 16.4726Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M10 27.4138V26.042H30V27.4138C30 28.5184 29.1046 29.4138 28 29.4138H12C10.8954 29.4138 10 28.5184 10 27.4138Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M19.3541 8.39523C19.7496 8.00974 20.3827 8.01784 20.7682 8.41333L24.7921 12.5416C25.1776 12.9371 25.1695 13.5702 24.774 13.9557L20.6457 17.9796C20.2502 18.3651 19.6171 18.357 19.2316 17.9615L15.2077 13.8332C14.8222 13.4378 14.8303 12.8046 15.2258 12.4191L19.3541 8.39523Z', fill: 'currentColor' })] })));
});
