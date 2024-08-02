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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.9999 12C20.9999 16.9706 16.9705 21 12 21C7.02942 21 3 16.9706 3 12C3 7.02944 7.02942 3 12 3C16.9705 3 20.9999 7.02944 20.9999 12ZM11.9768 6.99982C12.5163 6.99982 12.9536 7.43715 12.9536 7.97662V13.4467C12.9536 13.9862 12.5163 14.4235 11.9768 14.4235C11.4373 14.4235 11 13.9862 11 13.4467V7.97662C11 7.43715 11.4373 6.99982 11.9768 6.99982ZM11.9773 17.7444C12.5167 17.7444 12.954 17.3071 12.954 16.7676C12.954 16.2281 12.5167 15.7908 11.9773 15.7908C11.4378 15.7908 11.0005 16.2281 11.0005 16.7676C11.0005 17.3071 11.4378 17.7444 11.9773 17.7444Z', fill: '#FF8C19' }) })));
});
