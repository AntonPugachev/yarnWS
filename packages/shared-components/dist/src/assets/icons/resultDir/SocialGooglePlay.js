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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 25 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.0739 13.2038C19.9572 13.266 18.7518 13.8882 17.1342 14.7281L15.0033 12.7061L17.1653 10.6296C18.6896 11.4151 19.8484 12.0217 20.0739 12.1383C20.8205 12.5272 20.4394 13.0094 20.0739 13.2038ZM7.57641 5.66797C7.60881 5.67758 7.64009 5.69062 7.66973 5.70685C8.12857 5.94016 15.0422 9.53309 16.5354 10.303L14.5134 12.2394L7.57641 5.66797ZM6.75984 19.6742C6.57453 19.481 6.48107 19.2176 6.5032 18.9509V6.4301C6.48461 6.19285 6.56643 5.95868 6.72873 5.78462L14.0312 12.7061L6.75984 19.6742ZM16.5121 15.0547C13.2535 16.7501 8.82071 19.0598 7.83305 19.5731L14.5134 13.1649L16.5121 15.0547Z', fill: 'currentColor' }) })));
});
