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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M19.5158 13.2868C19.154 12.0264 17.5904 11.5793 16.6114 12.4561L15.0746 13.8326C14.7194 14.1508 14.8412 14.7321 15.2945 14.8825L16.3417 15.2298C16.7054 15.3505 16.9507 15.6892 16.9507 16.0708V17.7426C16.9507 18.1456 16.4611 18.3474 16.1748 18.0624L11.6515 13.5608C11.3037 13.2146 10.735 13.212 10.4275 13.5942C7.91609 16.7162 8.11415 21.2853 11.0217 24.179C12.6002 25.75 14.6748 26.5262 16.7436 26.5076C17.0989 26.5044 17.3594 26.871 17.2078 27.1909L16.6041 28.4656C16.2898 29.1293 16.5014 29.9218 17.1054 30.3426L18.5645 31.3591C19.7443 32.181 21.3052 32.2152 22.5202 31.4457L24.1905 30.3878C24.8738 29.9551 25.0939 29.064 24.6902 28.3653L24.0343 27.23C23.8507 26.9124 24.1041 26.5132 24.4723 26.5066C26.4688 26.4711 28.4544 25.6952 29.9779 24.179C32.8855 21.2853 33.0836 16.7162 30.5721 13.5942C30.2647 13.212 29.6959 13.2146 29.3481 13.5608L24.8519 18.0356C24.5655 18.3206 24.0759 18.1188 24.0759 17.7157V16.0708C24.0759 15.6892 24.3212 15.3505 24.6849 15.2298L25.7321 14.8825C26.1854 14.7321 26.3072 14.1508 25.952 13.8326L24.4152 12.4561C23.4362 11.5793 21.8727 12.0264 21.5108 13.2868L20.9504 15.2391C20.8248 15.6766 20.2018 15.6766 20.0762 15.2391L19.5158 13.2868Z', fill: 'currentColor' }) })));
});
