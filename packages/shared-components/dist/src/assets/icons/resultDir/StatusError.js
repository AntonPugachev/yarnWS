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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM15.7466 8.22749C15.4168 7.91686 14.8908 7.92542 14.5718 8.24661L12 10.8362L9.42818 8.24661C9.10919 7.92542 8.58321 7.91686 8.25338 8.22749C7.92354 8.53812 7.91475 9.05031 8.23374 9.3715L10.8442 11.9999L8.23361 14.6285C7.91462 14.9497 7.92341 15.4619 8.25324 15.7725C8.58308 16.0831 9.10906 16.0746 9.42805 15.7534L12 13.1637L14.572 15.7534C14.8909 16.0746 15.4169 16.0831 15.7468 15.7725C16.0766 15.4619 16.0854 14.9497 15.7664 14.6285L13.1558 11.9999L15.7663 9.3715C16.0852 9.05031 16.0765 8.53812 15.7466 8.22749Z', fill: '#DA0B20' }) })));
});
