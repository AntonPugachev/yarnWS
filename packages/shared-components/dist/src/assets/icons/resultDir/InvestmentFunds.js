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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M19.1709 11.3C19.1709 10.4464 18.4125 9.7825 17.5952 10.0287C13.3454 11.3091 10.25 15.2534 10.25 19.9206C10.25 25.6254 14.8746 30.2501 20.5795 30.2501C25.2468 30.2501 29.191 27.1547 30.4714 22.9048C30.7176 22.0876 30.0537 21.3291 29.2001 21.3291H21.988C20.4323 21.3291 19.1709 20.0679 19.1709 18.512V11.3Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M29.4254 19.4511C30.2281 19.4511 30.8778 18.7776 30.7286 17.989C29.9425 13.8331 26.6671 10.5575 22.5111 9.77139C21.7224 9.62221 21.049 10.2719 21.049 11.0746V18.512C21.049 19.0306 21.4695 19.4511 21.988 19.4511H29.4254Z', fill: 'currentColor' })] })));
});
