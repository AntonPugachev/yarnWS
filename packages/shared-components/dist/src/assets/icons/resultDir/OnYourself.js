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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M19.4524 13.239C19.4524 12.8792 19.2605 12.5443 18.9399 12.381C16.5363 11.1567 13.8122 10.7264 11.1437 11.1705L10.5412 11.2709C9.94116 11.3707 9.5 11.9054 9.5 12.5329V26.7321C9.5 27.5816 10.2005 28.2512 11.0208 28.1861L12.2528 28.0883C14.6969 27.8942 17.1424 28.446 19.2853 29.675C20.0407 30.1083 20.9593 30.1083 21.7147 29.675C23.8576 28.446 26.3031 27.8942 28.7472 28.0883L29.9792 28.1861C30.7995 28.2512 31.5 27.5816 31.5 26.7321V12.5329C31.5 11.9054 31.0588 11.3707 30.4588 11.2709L29.8563 11.1705C27.1878 10.7264 24.4637 11.1567 22.0601 12.381C21.7395 12.5443 21.5476 12.8792 21.5476 13.239V25.5046C21.5476 26.1019 21.0786 26.5862 20.5 26.5862C19.9214 26.5862 19.4524 26.1019 19.4524 25.5046V13.239Z', fill: 'currentColor' }) })));
});
