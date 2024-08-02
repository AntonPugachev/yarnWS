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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M26.6867 9.40791C26.6957 8.78754 27.2059 8.29191 27.8263 8.3009L32.2578 8.36987C32.8782 8.37886 33.3738 8.88905 33.3648 9.50942L33.2955 13.8021C33.2866 14.4225 32.7764 14.9181 32.156 14.9091C31.5356 14.9001 31.04 14.3899 31.049 13.7696L31.0787 12.2043L28.4203 14.7586C29.187 15.8814 29.6354 17.2389 29.6354 18.7012C29.6354 22.5672 26.5013 25.7012 22.6354 25.7012C21.9398 25.7012 21.268 25.5997 20.6338 25.4108C21.2049 24.8999 21.7105 24.317 22.1361 23.6766C22.3003 23.6928 22.4669 23.7012 22.6354 23.7012C25.3968 23.7012 27.6354 21.4626 27.6354 18.7012C27.6354 15.9397 25.3968 13.7012 22.6354 13.7012C22.4669 13.7012 22.3003 13.7095 22.1361 13.7258C21.7105 13.0853 21.2049 12.5025 20.6338 11.9915C21.268 11.8026 21.9398 11.7012 22.6354 11.7012C24.2282 11.7012 25.6968 12.2332 26.8732 13.1293L29.529 10.5774L27.7937 10.5475C27.1734 10.5385 26.6777 10.0283 26.6867 9.40791ZM14.6353 23.7012C17.3967 23.7012 19.6353 21.4626 19.6353 18.7012C19.6353 15.9397 17.3967 13.7012 14.6353 13.7012C11.8738 13.7012 9.63525 15.9397 9.63525 18.7012C9.63525 21.4626 11.8738 23.7012 14.6353 23.7012ZM15.6353 25.6303C19.0275 25.1451 21.6353 22.2276 21.6353 18.7012C21.6353 14.8352 18.5012 11.7012 14.6353 11.7012C10.7693 11.7012 7.63525 14.8352 7.63525 18.7012C7.63525 22.2276 10.243 25.1451 13.6353 25.6303V27.0117H11.6853C11.1054 27.0117 10.6353 27.4818 10.6353 28.0617C10.6353 28.6416 11.1054 29.1117 11.6853 29.1117H13.6353V30.7012C13.6353 31.2535 14.083 31.7012 14.6353 31.7012C15.1875 31.7012 15.6353 31.2535 15.6353 30.7012V29.1117H17.5853C18.1652 29.1117 18.6353 28.6416 18.6353 28.0617C18.6353 27.4818 18.1652 27.0117 17.5853 27.0117H15.6353V25.6303Z', fill: 'currentColor' }) })));
});
