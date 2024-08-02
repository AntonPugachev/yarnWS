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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 31C26.0751 31 31 26.0751 31 20C31 13.9249 26.0751 9 20 9C13.9249 9 9 13.9249 9 20C9 26.0751 13.9249 31 20 31ZM18.3 16.5C18.3 17.4941 17.4941 18.3 16.5 18.3C15.5058 18.3 14.7 17.4941 14.7 16.5C14.7 15.5058 15.5058 14.7 16.5 14.7C17.4941 14.7 18.3 15.5058 18.3 16.5ZM25.3 23.4999C25.3 24.4941 24.4941 25.3 23.5 25.3C22.5058 25.3 21.7 24.4941 21.7 23.4999C21.7 22.5058 22.5058 21.7 23.5 21.7C24.4941 21.7 25.3 22.5058 25.3 23.4999ZM24.2071 15.7929C24.5976 16.1834 24.5976 16.8166 24.2071 17.2071L17.2071 24.2071C16.8166 24.5976 16.1834 24.5976 15.7929 24.2071C15.4024 23.8166 15.4024 23.1834 15.7929 22.7929L22.7929 15.7929C23.1834 15.4024 23.8166 15.4024 24.2071 15.7929Z', fill: 'currentColor' }) })));
});
