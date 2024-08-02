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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M10.921 4.17868C11.343 3.27377 12.657 3.27377 13.079 4.17868L14.6678 7.58572C14.9426 8.17485 15.5112 8.58135 16.1684 8.65842L19.9537 9.10235C20.9548 9.21975 21.3591 10.4282 20.6225 11.1019L17.8014 13.6824C17.3231 14.1199 17.1091 14.7678 17.2354 15.3965L17.982 19.113C18.1775 20.0859 17.1162 20.8349 16.2342 20.3465L12.9346 18.5197C12.3547 18.1986 11.6453 18.1986 11.0654 18.5197L7.76583 20.3465C6.88379 20.8349 5.82252 20.0859 6.01797 19.113L6.76457 15.3965C6.89086 14.7678 6.67691 14.1199 6.19857 13.6824L3.37745 11.1019C2.64094 10.4282 3.04516 9.21975 4.04627 9.10235L7.83162 8.65842C8.4888 8.58135 9.05744 8.17485 9.33217 7.58573L10.921 4.17868Z', fill: 'currentColor' }) })));
});
