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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M9.23879 12.5116C8.85406 12.2452 8.80604 11.695 9.18548 11.4211C10.846 10.2228 13.5732 9.46002 15.9999 10.5C18.7999 11.7001 19.8332 14 19.9999 15C20.1666 14 21.1999 11.7001 23.9999 10.5C26.4266 9.46002 29.1538 10.2228 30.8143 11.4211C31.1938 11.695 31.1458 12.2452 30.761 12.5116L24.9999 16.5C26.4999 16 28.4999 17.1667 29.4999 18.5001C30.3787 19.6718 30.8714 21.4871 30.6385 23.946C30.5897 24.462 30.0237 24.7355 29.5706 24.4838L22.1117 20.3399C21.8372 20.1874 21.4999 20.3859 21.4999 20.6999V21.3882C21.4999 25.0705 20.576 28.6939 18.8127 31.9265C18.6199 32.2801 18.2494 32.5 17.8467 32.5H16.3879C15.9878 32.5 15.7335 32.0717 15.9251 31.7204C17.6146 28.623 18.4999 25.1512 18.4999 21.623V20.6999C18.4999 20.3859 18.1626 20.1874 17.8881 20.3399L10.4292 24.4838C9.9761 24.7355 9.41015 24.462 9.36129 23.946C9.12845 21.4871 9.62111 19.6718 10.4999 18.5001C11.4999 17.1667 13.4999 16 14.9999 16.5L9.23879 12.5116Z', fill: 'currentColor' }) })));
});