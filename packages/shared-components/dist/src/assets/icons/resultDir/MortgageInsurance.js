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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M11 13.5C11 12.3954 11.8954 11.5 13 11.5H28C29.1046 11.5 30 12.3954 30 13.5V21.7997C30 24.2965 28.8343 26.65 26.8483 28.1632L22.3181 31.6148C21.2441 32.433 19.7559 32.433 18.6819 31.6148L14.1517 28.1632C12.1657 26.65 11 24.2965 11 21.7997V13.5ZM13.5 21.7997V14.7C13.5 14.3134 13.8134 14 14.2 14H19.8C20.1866 14 20.5 14.3134 20.5 14.7V28.478C20.5 29.076 19.7985 29.3987 19.3444 29.0094L19 28.7142L15.6668 26.1746C14.3014 25.1343 13.5 23.5162 13.5 21.7997Z', fill: 'currentColor' }) })));
});
