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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M10.3453 15.4102C10.5407 15.4102 10.7284 15.3339 10.8684 15.1976L18.813 7.465C19.3002 6.95506 19.5685 6.27475 19.5606 5.56955C19.5527 4.86435 19.2691 4.19024 18.7706 3.69139C18.2721 3.19253 17.5982 2.90852 16.893 2.9001C16.1878 2.89167 15.5073 3.15948 14.997 3.64629L7.26263 11.5918C7.12632 11.7318 7.05005 11.9195 7.05005 12.115V14.6602C7.05005 15.0744 7.38584 15.4102 7.80005 15.4102H10.3453Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M3.9 18.2999C3.40294 18.2999 3 18.7028 3 19.1999C3 19.697 3.40294 20.0999 3.9 20.0999H20.1C20.5971 20.0999 21 19.697 21 19.1999C21 18.7028 20.5971 18.2999 20.1 18.2999H3.9Z', fill: 'currentColor' })] })));
});
