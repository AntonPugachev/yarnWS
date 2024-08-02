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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M32 20C32 26.3513 26.8513 31.5 20.5 31.5C14.1487 31.5 9 26.3513 9 20C9 13.6487 14.1487 8.5 20.5 8.5C26.8513 8.5 32 13.6487 32 20ZM26.7016 18.5124C27.0951 18.1249 27.1001 17.4917 26.7126 17.0982C26.3251 16.7047 25.6919 16.6998 25.2984 17.0872L19.4976 22.7988L15.6991 19.0848C15.3042 18.6987 14.6711 18.7058 14.285 19.1007C13.8989 19.4956 13.906 20.1287 14.3009 20.5148L18.8009 24.9148C19.1905 25.2958 19.8133 25.2947 20.2016 24.9124L26.7016 18.5124Z', fill: 'currentColor' }) })));
});
