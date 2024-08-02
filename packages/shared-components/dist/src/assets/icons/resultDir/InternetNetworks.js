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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M8.21242 14.6801C7.92904 14.952 7.93157 15.4014 8.20579 15.6825L10.1544 17.6802C10.4392 17.9722 10.9071 17.9713 11.2085 17.6965C13.4818 15.6237 16.4348 14.3716 19.6625 14.3716C22.8874 14.3716 25.8381 15.6215 28.1105 17.691C28.4119 17.9655 28.8796 17.9663 29.1643 17.6744L31.113 15.6765C31.3873 15.3953 31.3898 14.9458 31.1061 14.6739C28.0747 11.7683 24.0626 10 19.6625 10C15.2593 10 11.2446 11.7709 8.21242 14.6801Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M27.1398 19.7253C27.4358 19.99 27.4363 20.4459 27.1591 20.7302L25.1992 22.7394C24.9205 23.0251 24.4657 23.0297 24.153 22.7818C22.8993 21.7884 21.3454 21.2005 19.6625 21.2005C17.9769 21.2005 16.4206 21.7903 15.1659 22.7866C14.8532 23.035 14.3979 23.0307 14.119 22.7448L12.1595 20.7359C11.8824 20.4518 11.8828 19.9961 12.1784 19.7314C14.2014 17.92 16.8123 16.8288 19.6625 16.8288C22.5096 16.8288 25.1177 17.9176 27.1398 19.7253Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M19.6566 30C21.2632 30 22.5657 28.6975 22.5657 27.0909C22.5657 25.4842 21.2632 24.1817 19.6566 24.1817C18.0499 24.1817 16.7475 25.4842 16.7475 27.0909C16.7475 28.6975 18.0499 30 19.6566 30Z', fill: 'currentColor' })] })));
});
