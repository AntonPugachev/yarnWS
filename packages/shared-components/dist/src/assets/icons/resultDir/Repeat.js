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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M29 12H11C9.61929 12 8.5 13.1193 8.5 14.5V25.5C8.5 26.8807 9.61929 28 11 28H29C30.3807 28 31.5 26.8807 31.5 25.5V14.5C31.5 13.1193 30.3807 12 29 12ZM20.4199 16.5C20.112 16.5 19.8146 16.5404 19.5324 16.6157C19.1322 16.7225 18.7212 16.4846 18.6144 16.0844C18.5076 15.6842 18.7454 15.2732 19.1457 15.1664C19.5529 15.0577 19.9803 15 20.4199 15C23.1435 15 25.3515 17.208 25.3515 19.9316C25.3515 22.6553 23.1435 24.8632 20.4199 24.8632C17.6962 24.8632 15.4883 22.6553 15.4883 19.9316C15.4883 19.616 15.518 19.3071 15.5748 19.0076L15.5408 19.0219C15.159 19.1825 14.7193 19.0033 14.5586 18.6215C14.398 18.2397 14.5773 17.7999 14.9591 17.6393L16.6033 16.9476C16.9851 16.7869 17.4248 16.9662 17.5854 17.348L18.2772 18.9922C18.4378 19.374 18.2585 19.8137 17.8767 19.9743C17.5569 20.1089 17.1964 20.0049 16.9934 19.7431C16.99 19.8055 16.9883 19.8683 16.9883 19.9316C16.9883 21.8268 18.5247 23.3632 20.4199 23.3632C22.3151 23.3632 23.8515 21.8268 23.8515 19.9316C23.8515 18.0364 22.3151 16.5 20.4199 16.5Z', fill: 'currentColor' }) })));
});