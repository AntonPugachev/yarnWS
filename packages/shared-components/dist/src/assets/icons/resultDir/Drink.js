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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M9.72862 13.1888C9.61002 12.5721 10.0826 12 10.7106 12H31.2874C33.0617 12 34.5 13.4383 34.5 15.2126C34.5 16.5684 33.6489 17.7783 32.3728 18.2363L29.0729 19.4209L28.2041 23.9388C28.1135 24.4097 27.7015 24.75 27.2221 24.75H12.7779C12.2985 24.75 11.8865 24.4097 11.7959 23.9388L9.72862 13.1888ZM29.5118 17.1384L30.1154 14H31.2874C31.9571 14 32.5 14.5429 32.5 15.2126C32.5 15.7244 32.1787 16.1811 31.6971 16.354L29.5118 17.1384Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M32.5 26.5H7.5V27C7.5 28.1046 8.39543 29 9.5 29H30.5C31.6046 29 32.5 28.1046 32.5 27V26.5Z', fill: 'currentColor' })] })));
});
