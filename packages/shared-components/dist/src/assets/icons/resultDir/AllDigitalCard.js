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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M18.1579 5H21V7.8421H18.1579V5Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M5 5.94737H15.3158V8.73691L3 8.73692V7.94737C3 6.8428 3.89543 5.94737 5 5.94737Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.0526 10.7369L3 10.7369V17.2105C3 18.3151 3.89543 19.2105 5 19.2105H18.0526C19.1572 19.2105 20.0526 18.3151 20.0526 17.2105V10.7369ZM6.10526 15.5001C5.55298 15.5001 5.10526 15.9478 5.10526 16.5001C5.10526 17.0524 5.55298 17.5001 6.10526 17.5001H8C8.55228 17.5001 9 17.0524 9 16.5001C9 15.9478 8.55228 15.5001 8 15.5001H6.10526Z', fill: 'currentColor' })] })));
});
