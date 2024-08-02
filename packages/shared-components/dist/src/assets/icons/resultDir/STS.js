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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M13 9C12.1716 9 11.5 9.67157 11.5 10.5V29.5C11.5 30.3284 12.1716 31 13 31H27C27.8284 31 28.5 30.3284 28.5 29.5V10.5C28.5 9.67157 27.8284 9 27 9H13ZM24 28C25.1046 28 26 27.1046 26 26C26 24.8954 25.1046 24 24 24C22.8954 24 22 24.8954 22 26C22 27.1046 22.8954 28 24 28ZM15 13C14.4477 13 14 13.4477 14 14C14 14.5523 14.4477 15 15 15H25C25.5523 15 26 14.5523 26 14C26 13.4477 25.5523 13 25 13H15ZM14 18C14 17.4477 14.4477 17 15 17H25C25.5523 17 26 17.4477 26 18C26 18.5523 25.5523 19 25 19H15C14.4477 19 14 18.5523 14 18ZM15 25C14.4477 25 14 25.4477 14 26C14 26.5523 14.4477 27 15 27H18C18.5523 27 19 26.5523 19 26C19 25.4477 18.5523 25 18 25H15Z', fill: 'currentColor' }) })));
});
