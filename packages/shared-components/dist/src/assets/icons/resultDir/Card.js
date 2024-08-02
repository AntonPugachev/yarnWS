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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M28.5 12.7998H10.5C9.11929 12.7998 8 13.9191 8 15.2998V26.2998C8 27.6805 9.11929 28.7998 10.5 28.7998H28.5C29.8807 28.7998 31 27.6805 31 26.2998V15.2998C31 13.9191 29.8807 12.7998 28.5 12.7998ZM20.7299 16.8404C21.0631 16.5071 21.6034 16.5071 21.9367 16.8404L25.35 20.2537C25.6833 20.5869 25.6833 21.1272 25.35 21.4605L21.9368 24.8738C21.6036 25.2071 21.0633 25.2071 20.73 24.8738C20.3967 24.5406 20.3967 24.0003 20.73 23.667L22.6857 21.7112H13.6533C13.182 21.7112 12.8 21.3292 12.8 20.8579C12.8 20.3866 13.182 20.0046 13.6533 20.0046H22.6873L20.7299 18.0472C20.3966 17.7139 20.3966 17.1736 20.7299 16.8404Z', fill: 'currentColor' }) })));
});
