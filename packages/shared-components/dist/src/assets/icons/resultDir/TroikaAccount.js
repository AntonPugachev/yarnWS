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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M26.0517 14.4885H21.8986V28.14C21.8986 28.9262 21.7235 29.5116 21.3731 29.8961C21.0227 30.2721 20.5698 30.4601 20.0143 30.4601C19.4504 30.4601 18.989 30.2678 18.63 29.8833C18.2797 29.4987 18.1045 28.9177 18.1045 28.14V14.4885H13.9514C13.3021 14.4885 12.8192 14.3476 12.5031 14.0655C12.1868 13.775 12.0288 13.3947 12.0288 12.9248C12.0288 12.4377 12.1911 12.0531 12.5159 11.7711C12.8492 11.4892 13.3276 11.3481 13.9514 11.3481H26.0515C26.7094 11.3481 27.1966 11.4935 27.5127 11.784C27.8374 12.0745 27.9998 12.4548 27.9998 12.9248C27.9998 13.3947 27.8374 13.775 27.5127 14.0655C27.188 14.3476 26.701 14.4885 26.0517 14.4885Z', fill: 'currentColor' }) })));
});
