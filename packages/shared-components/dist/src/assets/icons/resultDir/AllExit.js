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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M3 6C3 4.34315 4.34315 3 6 3H12.5V5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19H12.5V21H6C4.34315 21 3 19.6569 3 18V6ZM16.3012 8.78472C16.6962 8.39878 17.3294 8.40616 17.7153 8.80121L20.5793 11.7327C20.7698 11.9277 20.8724 12.1921 20.8634 12.4645C20.8544 12.737 20.7346 12.994 20.5316 13.176L17.6677 15.7445C17.2565 16.1132 16.6243 16.0788 16.2555 15.6677C15.8868 15.2565 15.9212 14.6243 16.3323 14.2556L17.2498 13.4327L8.43231 13.4328L8.43231 11.4328L17.4902 11.4327L16.2847 10.1988C15.8988 9.80379 15.9061 9.17067 16.3012 8.78472Z', fill: 'currentColor' }) })));
});
