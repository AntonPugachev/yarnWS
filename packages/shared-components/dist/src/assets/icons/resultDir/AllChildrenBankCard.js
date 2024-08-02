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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M18.4456 3.00517C20.06 3.00712 21.3672 4.31736 21.3652 5.93175C21.3634 7.08733 20.6802 8.13302 19.6226 8.59874C20.9457 11.079 20.9457 14.0555 19.6226 16.5357C17.4309 20.644 12.3237 22.1977 8.21535 20.006C4.10703 17.8143 2.55335 12.7071 4.74506 8.59874C4.0216 8.27992 3.45819 7.68165 3.18324 6.94043C2.62183 5.42682 3.39376 3.74464 4.90737 3.18323C6.42099 2.62183 8.10311 3.39376 8.66452 4.90737C10.8963 3.87119 13.4713 3.87119 15.7031 4.90737C16.1299 3.7624 17.2237 3.00372 18.4456 3.00517ZM14.7208 9.0349L14.7128 9.03891C14.165 9.04331 13.7226 9.48747 13.7204 10.0353C13.7204 10.5878 14.1683 11.0356 14.7208 11.0356C15.2733 11.0356 15.7211 10.5878 15.7211 10.0353C15.7211 9.48277 15.2733 9.0349 14.7208 9.0349ZM9.66289 9.0349L9.65488 9.03891C9.10708 9.04331 8.66472 9.48747 8.66252 10.0353C8.66252 10.5878 9.11038 11.0356 9.66289 11.0356C10.2154 11.0356 10.6633 10.5878 10.6633 10.0353C10.6633 9.48277 10.2154 9.0349 9.66289 9.0349ZM11.4001 16.2C11.7001 16.6 12.3001 16.6 12.6001 16.2L14.1001 14.2C14.4709 13.7056 14.1181 13 13.5001 13H10.5001C9.88207 13 9.52928 13.7056 9.9001 14.2L11.4001 16.2Z', fill: 'currentColor' }) })));
});
