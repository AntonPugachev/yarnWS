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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M16 4C16.5523 4 17 4.44772 17 5V16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16V12.2263L12.6245 12.8394C9.77612 13.5744 7 11.4238 7 8.48211V5C7 4.44772 7.44772 4 8 4C8.55228 4 9 4.44772 9 5V8.48211C9 10.1164 10.5423 11.3112 12.1247 10.9028L15 10.1608V5C15 4.44772 15.4477 4 16 4ZM6 19C6 18.4477 6.44772 18 7 18H17C17.5523 18 18 18.4477 18 19C18 19.5523 17.5523 20 17 20H7C6.44772 20 6 19.5523 6 19Z', fill: 'currentColor' }) })));
});
