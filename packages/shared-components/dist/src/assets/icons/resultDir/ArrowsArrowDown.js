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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M17.6099 14.0663C17.2085 13.6868 16.5756 13.7046 16.1962 14.1059L12.9998 17.4867L12.9998 4C12.9998 3.44771 12.5521 3 11.9998 3C11.4475 3 10.9998 3.44771 10.9998 4L10.9998 17.4867L7.80334 14.1059C7.42392 13.7046 6.791 13.6868 6.38968 14.0663C5.98837 14.4457 5.97062 15.0786 6.35005 15.4799L11.2731 20.687C11.462 20.8868 11.7248 21 11.9998 21C12.2747 21 12.5375 20.8868 12.7264 20.687L17.6495 15.4799C18.0289 15.0786 18.0112 14.4457 17.6099 14.0663Z', fill: 'currentColor' }) })));
});
