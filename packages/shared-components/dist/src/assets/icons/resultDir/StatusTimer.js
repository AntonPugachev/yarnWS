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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M6.87203 4C6.39042 4 6 4.39042 6 4.87203C6 6.7029 6.82179 8.43708 8.2388 9.59645L10.2862 11.2716C10.7464 11.6481 10.7464 12.3519 10.2862 12.7284L8.2388 14.4035C6.82179 15.5629 6 17.2971 6 19.128C6 19.6096 6.39042 20 6.87203 20H17.3633C17.8449 20 18.2353 19.6096 18.2353 19.128C18.2353 17.2971 17.4135 15.5629 15.9965 14.4035L13.9491 12.7284C13.4889 12.3519 13.4889 11.6481 13.9491 11.2716L15.9965 9.59645C17.4135 8.43708 18.2353 6.7029 18.2353 4.87203C18.2353 4.39042 17.8449 4 17.3633 4H6.87203ZM11.4921 15.3793L8.80721 17.7659C8.48379 18.0534 8.68714 18.5882 9.11985 18.5882H15.115C15.5477 18.5882 15.751 18.0534 15.4276 17.7659L12.7427 15.3793C12.3861 15.0624 11.8487 15.0624 11.4921 15.3793Z', fill: 'currentColor' }) })));
});
