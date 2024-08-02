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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M16.375 9C16.375 8.37868 16.8787 7.875 17.5 7.875H22.5C23.1213 7.875 23.625 8.37868 23.625 9C23.625 9.62132 23.1213 10.125 22.5 10.125H21.125V12.052C26.8631 12.5849 31.3666 17.1515 31.4971 22.75H8.50291C8.63343 17.1515 13.1369 12.5849 18.875 12.052V10.125H17.5C16.8787 10.125 16.375 9.62132 16.375 9Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9 24.5C8.17157 24.5 7.5 25.1716 7.5 26C7.5 26.8284 8.17157 27.5 9 27.5H31C31.8284 27.5 32.5 26.8284 32.5 26C32.5 25.1716 31.8284 24.5 31 24.5H9Z', fill: 'currentColor' })] })));
});
