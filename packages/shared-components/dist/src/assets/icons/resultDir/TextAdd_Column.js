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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 4C10 2.89543 10.8954 2 12 2H16C17.1046 2 18 2.89543 18 4V20C18 21.1046 17.1046 22 16 22H14C13.4477 22 13 21.5523 13 21C13 20.4477 13.4477 20 14 20H16V4L12 4V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V4ZM8 13C8.55228 13 9 13.4477 9 14V16H11C11.5523 16 12 16.4477 12 17C12 17.5523 11.5523 18 11 18H9V20C9 20.5523 8.55228 21 8 21C7.44772 21 7 20.5523 7 20V18H5C4.44772 18 4 17.5523 4 17C4 16.4477 4.44772 16 5 16H7V14C7 13.4477 7.44772 13 8 13Z', fill: 'currentColor' }) })));
});
