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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M28.1313 14.1857C28.9154 13.5882 29.0589 12.4488 28.3236 11.7922C26.3786 10.0556 23.8126 9 21 9C14.9249 9 10 13.9249 10 20C10 26.0751 14.9249 31 21 31C23.8126 31 26.3786 29.9444 28.3236 28.2078C29.0589 27.5512 28.9154 26.4118 28.1313 25.8143L22.066 21.1931C21.2781 20.5928 21.2781 19.4072 22.066 18.8069L28.1313 14.1857ZM19.5 16C20.3284 16 21 15.3284 21 14.5C21 13.6716 20.3284 13 19.5 13C18.6716 13 18 13.6716 18 14.5C18 15.3284 18.6716 16 19.5 16Z', fill: 'currentColor' }) })));
});
