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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M3 4.40416C3 3.43885 3.90575 2.76189 4.773 3.07901L6.61046 3.75091C10.0822 5.0204 12.409 8.46112 12.409 12.3254V13.2615C12.409 13.6928 12.7416 14.0425 13.1519 14.0425C13.5052 14.0425 13.805 13.7789 13.9095 13.424C14.6835 10.7931 17.0158 8.8817 19.7727 8.8817H20.0143C20.5587 8.8817 21 9.34563 21 9.91792C21 13.621 18.1445 16.6229 14.6221 16.6229H14.4215C13.9879 16.6229 13.6364 16.9924 13.6364 17.4482V19.9248C13.6364 20.5186 13.1785 21 12.6137 21C12.0489 21 11.591 20.5186 11.591 19.9248V17.0212C11.591 15.8945 10.8674 14.9099 9.83038 14.6255L9.45568 14.5227C5.65322 13.4799 3 9.86963 3 5.73841V4.40416Z', fill: 'currentColor' }) })));
});
