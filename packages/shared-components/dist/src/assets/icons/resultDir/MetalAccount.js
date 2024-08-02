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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M6.80419 25.5263L8.56133 19.9034C8.82226 19.0685 9.59552 18.5 10.4703 18.5H12.9485C13.2766 18.5 13.5665 18.2868 13.6644 17.9737L15.5613 11.9034C15.8223 11.0685 16.5955 10.5 17.4703 10.5H22.5295C23.4043 10.5 24.1776 11.0685 24.4385 11.9035L26.3354 17.9737C26.4333 18.2868 26.7233 18.5 27.0513 18.5H29.5295C30.4043 18.5 31.1776 19.0685 31.4385 19.9035L33.1956 25.5263C33.3465 26.0092 32.9857 26.5 32.4798 26.5H7.52005C7.01407 26.5 6.65327 26.0092 6.80419 25.5263ZM17.4911 19.5643L19.3189 23.5246C19.587 24.1055 20.4127 24.1055 20.6808 23.5246L22.5086 19.5643C22.738 19.0673 22.375 18.5 21.8277 18.5H18.172C17.6247 18.5 17.2617 19.0673 17.4911 19.5643Z', fill: 'currentColor' }) })));
});
