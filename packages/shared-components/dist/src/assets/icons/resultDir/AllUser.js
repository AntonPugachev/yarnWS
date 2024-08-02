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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M11.8201 3C9.80501 3 8.17145 4.63355 8.17145 6.64864C8.17145 8.66373 9.80503 10.2973 11.8201 10.2973C13.8352 10.2973 15.4688 8.66372 15.4688 6.64864C15.4688 4.63355 13.8352 3 11.8201 3Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M18.1877 18.3022C18.555 17.8984 18.7189 17.3456 18.6111 16.8105C18.0318 13.9354 15.1546 11.9189 11.8202 11.9189C8.48984 11.9189 5.62754 13.9455 5.03455 16.8039C4.92277 17.3427 5.08706 17.9007 5.45708 18.308C6.92412 19.923 9.30608 21 11.8203 21C14.3277 21 16.7267 19.9085 18.1877 18.3022Z', fill: 'currentColor' })] })));
});
