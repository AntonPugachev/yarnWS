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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 41', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 31.2554C26.0751 31.2554 31 26.3305 31 20.2554C31 14.1802 26.0751 9.25537 20 9.25537C13.9249 9.25537 9 14.1802 9 20.2554C9 26.3305 13.9249 31.2554 20 31.2554ZM18.3 16.7553C18.3 17.7494 17.4941 18.5553 16.5 18.5553C15.5058 18.5553 14.7 17.7494 14.7 16.7553C14.7 15.7612 15.5058 14.9553 16.5 14.9553C17.4941 14.9553 18.3 15.7612 18.3 16.7553ZM25.3 23.7553C25.3 24.7494 24.4941 25.5553 23.5 25.5553C22.5058 25.5553 21.7 24.7494 21.7 23.7553C21.7 22.7612 22.5058 21.9553 23.5 21.9553C24.4941 21.9553 25.3 22.7612 25.3 23.7553ZM24.2071 16.0483C24.5976 16.4388 24.5976 17.072 24.2071 17.4625L17.2071 24.4625C16.8166 24.853 16.1834 24.853 15.7929 24.4625C15.4024 24.072 15.4024 23.4388 15.7929 23.0483L22.7929 16.0483C23.1834 15.6577 23.8166 15.6577 24.2071 16.0483Z', fill: 'currentColor' }) })));
});
