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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 11.5C12 10.1193 13.1193 9 14.5 9H26.5C27.8807 9 29 10.1193 29 11.5V27.5C29 28.8807 27.8807 30 26.5 30H14.5C13.1193 30 12 28.8807 12 27.5V11.5ZM15 13C15 12.4477 15.4477 12 16 12H25C25.5523 12 26 12.4477 26 13C26 13.5523 25.5523 14 25 14H16C15.4477 14 15 13.5523 15 13ZM16 16C15.4477 16 15 16.4477 15 17C15 17.5523 15.4477 18 16 18H22.75C23.3023 18 23.75 17.5523 23.75 17C23.75 16.4477 23.3023 16 22.75 16H16Z', fill: 'currentColor' }) })));
});
