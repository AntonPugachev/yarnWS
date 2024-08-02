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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M3.49942 16.5006C4.32752 16.5006 4.99883 17.1719 4.99883 18C4.99883 18.8281 4.32752 19.4994 3.49942 19.4994C2.67131 19.4994 2 18.8281 2 18C2 17.1719 2.67131 16.5006 3.49942 16.5006ZM7.50034 17H21.0035C21.5558 17 22.0035 17.4477 22.0035 18C22.0035 18.5128 21.6174 18.9355 21.1201 18.9933L21.0035 19H7.50034C6.94805 19 6.50034 18.5523 6.50034 18C6.50034 17.4872 6.88638 17.0645 7.38372 17.0067L7.50034 17H21.0035H7.50034ZM3.49942 10.5006C4.32752 10.5006 4.99883 11.1719 4.99883 12C4.99883 12.8281 4.32752 13.4994 3.49942 13.4994C2.67131 13.4994 2 12.8281 2 12C2 11.1719 2.67131 10.5006 3.49942 10.5006ZM7.50034 11H21.0035C21.5558 11 22.0035 11.4477 22.0035 12C22.0035 12.5128 21.6174 12.9355 21.1201 12.9933L21.0035 13H7.50034C6.94805 13 6.50034 12.5523 6.50034 12C6.50034 11.4872 6.88638 11.0645 7.38372 11.0067L7.50034 11H21.0035H7.50034ZM3.49942 4.50781C4.32752 4.50781 4.99883 5.17912 4.99883 6.00723C4.99883 6.83533 4.32752 7.50664 3.49942 7.50664C2.67131 7.50664 2 6.83533 2 6.00723C2 5.17912 2.67131 4.50781 3.49942 4.50781ZM7.50034 5.00082H21.0035C21.5558 5.00082 22.0035 5.44854 22.0035 6.00082C22.0035 6.51366 21.6174 6.93633 21.1201 6.9941L21.0035 7.00082H7.50034C6.94805 7.00082 6.50034 6.55311 6.50034 6.00082C6.50034 5.48799 6.88638 5.06532 7.38372 5.00755L7.50034 5.00082H21.0035H7.50034Z', fill: 'currentColor' }) })));
});
