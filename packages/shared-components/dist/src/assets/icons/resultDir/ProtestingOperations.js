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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M16.1319 14.1873C16.699 14.1873 17.2545 14.0266 17.7339 13.7238L24.966 9.15612C25.6319 8.73557 26.5 9.21406 26.5 10.0016V28.373C26.5 29.1605 25.6319 29.639 24.966 29.2184L17.7339 24.6508C17.2545 24.348 16.699 24.1873 16.1319 24.1873H15.5V28.6873C15.5 29.5157 14.8284 30.1873 14 30.1873C13.1716 30.1873 12.5 29.5157 12.5 28.6873V24.1873H11C9.89543 24.1873 9 23.2919 9 22.1873V16.1873C9 15.0827 9.89543 14.1873 11 14.1873H16.1319Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M31 19.1873C31 20.9542 29.9817 22.4832 28.5 23.2195V15.1551C29.9817 15.8914 31 17.4204 31 19.1873Z', fill: 'currentColor' })] })));
});
