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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M9.93375 6.31299C10.3132 6.71431 10.2954 7.34722 9.89411 7.72665L6.51327 10.9231H20C20.5523 10.9231 21 11.3708 21 11.9231C21 12.4754 20.5523 12.9231 20 12.9231H6.51327L9.89411 16.1195C10.2954 16.4989 10.3132 17.1319 9.93375 17.5332C9.55432 17.9345 8.92141 17.9522 8.52009 17.5728L3.31299 12.6497C3.1132 12.4608 3 12.198 3 11.9231C3 11.6481 3.1132 11.3853 3.31299 11.1964L8.52009 6.27336C8.92141 5.89393 9.55432 5.91168 9.93375 6.31299Z', fill: 'currentColor' }) })));
});
