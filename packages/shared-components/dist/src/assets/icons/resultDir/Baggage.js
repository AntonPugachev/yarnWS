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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M17.8237 6C16.7192 6 15.8237 6.89543 15.8237 8V12.8237H13C11.8954 12.8237 11 13.7192 11 14.8237V30.412C11 31.5165 11.8954 32.412 13 32.412H13.9854V33.4704C13.9854 34.1608 14.545 34.7204 15.2354 34.7204C15.9257 34.7204 16.4854 34.1608 16.4854 33.4704V32.412H23.5148V33.4704C23.5148 34.1608 24.0744 34.7204 24.7648 34.7204C25.4551 34.7204 26.0148 34.1608 26.0148 33.4704V32.412H27C28.1046 32.412 29 31.5165 29 30.412V14.8237C29 13.7192 28.1046 12.8237 27 12.8237H24.1767V8C24.1767 6.89543 23.2812 6 22.1767 6H17.8237ZM22.1767 12.8237L22.1767 8L17.8237 8V12.8237H22.1767ZM15 18C14.4477 18 14 18.4477 14 19C14 19.5523 14.4477 20 15 20H25C25.5523 20 26 19.5523 26 19C26 18.4477 25.5523 18 25 18H15Z', fill: 'currentColor' }) })));
});
