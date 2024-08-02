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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M31.5 20C31.5 26.0751 26.5751 31 20.5 31C14.4249 31 9.5 26.0751 9.5 20C9.5 13.9249 14.4249 9 20.5 9C26.5751 9 31.5 13.9249 31.5 20ZM20.5 14C21.0523 14 21.5 14.4477 21.5 15V19H25.5C26.0523 19 26.5 19.4477 26.5 20C26.5 20.5523 26.0523 21 25.5 21H21.5V25C21.5 25.5523 21.0523 26 20.5 26C19.9477 26 19.5 25.5523 19.5 25V21H15.5C14.9477 21 14.5 20.5523 14.5 20C14.5 19.4477 14.9477 19 15.5 19H19.5V15C19.5 14.4477 19.9477 14 20.5 14Z', fill: 'currentColor' }) })));
});
