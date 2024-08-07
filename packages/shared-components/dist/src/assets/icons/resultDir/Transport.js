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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10.5 13V28.1429C10.5 29.1685 11.3315 30 12.3571 30H12.65C13.5139 30 14.2143 29.2997 14.2143 28.4358C14.2143 28.1951 14.4094 28 14.65 28H25.6C25.8406 28 26.0357 28.1951 26.0357 28.4358C26.0357 29.2997 26.7361 30 27.6 30H27.7857C28.7522 30 29.5357 29.2165 29.5357 28.25V13C29.5357 11.3431 28.1926 10 26.5357 10H13.5C11.8431 10 10.5 11.3431 10.5 13ZM13.9821 25.3214C14.6232 25.3214 15.1429 24.8018 15.1429 24.1607C15.1429 23.5197 14.6232 23 13.9821 23C13.3411 23 12.8214 23.5197 12.8214 24.1607C12.8214 24.8018 13.3411 25.3214 13.9821 25.3214ZM12.8214 13.1965C12.8214 12.8119 13.1332 12.5001 13.5179 12.5001H26.625C27.0096 12.5001 27.3214 12.8119 27.3214 13.1965V18.8036C27.3214 19.1883 27.0096 19.5001 26.625 19.5001H13.5179C13.1332 19.5001 12.8214 19.1883 12.8214 18.8036V13.1965ZM26.0536 25.3215C26.6946 25.3215 27.2143 24.8018 27.2143 24.1608C27.2143 23.5197 26.6946 23.0001 26.0536 23.0001C25.4125 23.0001 24.8929 23.5197 24.8929 24.1608C24.8929 24.8018 25.4125 25.3215 26.0536 25.3215Z', fill: 'currentColor' }) })));
});
