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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M29.2935 15.8772C29.896 19.3059 28.7329 22.18 25.875 24.2101C24.8672 24.9448 24.1925 25.8224 23.8663 27.0306C23.0073 30.0404 20.0472 31.8615 16.9885 31.3279C13.9657 30.7724 11.7556 28.0237 12.0217 24.9302C12.0979 24.1276 12.398 23.3229 13.0441 22.8407C13.9737 22.1468 15.216 21.9543 16.3212 22.3964C16.8339 22.6015 17.4159 22.3521 17.621 21.8393C17.8261 21.3265 17.5767 20.7445 17.0639 20.5394C15.6643 19.9796 14.1436 20.0567 12.8436 20.6487C12.9001 20.1067 12.9104 19.554 12.8157 19.0526C11.6144 12.9322 16.9343 7.73244 23.6105 9.27371C26.4685 10.1262 28.6833 12.3547 29.2935 15.8772ZM23.8952 16.9906C23.5467 15.8334 22.5103 15.0398 21.4491 14.9947C20.8973 14.9712 20.4691 14.5048 20.4925 13.9531C20.516 13.4013 20.9824 12.973 21.5342 12.9965C23.4954 13.0799 25.2284 14.4896 25.8087 16.4086C26.3843 18.256 25.7442 20.4313 24.0432 21.5737C22.6906 22.5043 21.8383 23.6407 21.4411 25.1754C21.3027 25.7101 20.7571 26.0314 20.2224 25.893C19.6878 25.7546 19.3665 25.209 19.5049 24.6743C20.0369 22.6187 21.2094 21.0941 22.9151 19.9222L22.9251 19.9153C23.8371 19.3048 24.2339 18.0732 23.8984 17.0008L23.8952 16.9906Z', fill: 'currentColor' }) })));
});
