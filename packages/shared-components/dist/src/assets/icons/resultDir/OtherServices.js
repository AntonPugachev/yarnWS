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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 31.25C26.2132 31.25 31.25 26.2132 31.25 20C31.25 13.7868 26.2132 8.75 20 8.75C13.7868 8.75 8.75 13.7868 8.75 20C8.75 26.2132 13.7868 31.25 20 31.25ZM16.875 20.3125C16.875 21.1754 16.1754 21.875 15.3125 21.875C14.4496 21.875 13.75 21.1754 13.75 20.3125C13.75 19.4496 14.4496 18.75 15.3125 18.75C16.1754 18.75 16.875 19.4496 16.875 20.3125ZM21.875 20.3125C21.875 21.1754 21.1754 21.875 20.3125 21.875C19.4496 21.875 18.75 21.1754 18.75 20.3125C18.75 19.4496 19.4496 18.75 20.3125 18.75C21.1754 18.75 21.875 19.4496 21.875 20.3125ZM25.3125 21.875C26.1754 21.875 26.875 21.1754 26.875 20.3125C26.875 19.4496 26.1754 18.75 25.3125 18.75C24.4496 18.75 23.75 19.4496 23.75 20.3125C23.75 21.1754 24.4496 21.875 25.3125 21.875Z', fill: 'currentColor' }) })));
});
