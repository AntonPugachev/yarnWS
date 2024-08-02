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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M6 3C4.34315 3 3 4.34315 3 6V11H21V6C21 4.34315 19.6569 3 18 3H6ZM12.2359 8.47176C12.9184 8.47176 13.4718 7.91844 13.4718 7.23588C13.4718 6.55332 12.9184 6 12.2359 6C11.5533 6 11 6.55332 11 7.23588C11 7.91844 11.5533 8.47176 12.2359 8.47176Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M21 13H3V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V13ZM13.4718 17.2359C13.4718 17.9184 12.9184 18.4718 12.2359 18.4718C11.5533 18.4718 11 17.9184 11 17.2359C11 16.5533 11.5533 16 12.2359 16C12.9184 16 13.4718 16.5533 13.4718 17.2359Z', fill: 'currentColor' })] })));
});
