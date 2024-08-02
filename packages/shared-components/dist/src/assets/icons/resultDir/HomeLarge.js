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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M9.5 19.9286V27C9.5 28.1046 10.3954 29 11.5 29H28.5C29.6046 29 30.5 28.1046 30.5 27V19.9286C30.5 18.697 29.9953 17.5193 29.1034 16.67L21.7241 9.64205C20.7586 8.72251 19.2414 8.72251 18.2759 9.64205L10.8966 16.67C10.0047 17.5193 9.5 18.697 9.5 19.9286ZM18.25 18.5C17.8358 18.5 17.5 18.8358 17.5 19.25V22.75C17.5 23.1642 17.8358 23.5 18.25 23.5H21.75C22.1642 23.5 22.5 23.1642 22.5 22.75V19.25C22.5 18.8358 22.1642 18.5 21.75 18.5H18.25Z', fill: 'currentColor' }) })));
});
