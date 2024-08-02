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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M13.3073 3.1469C12.4788 2.83204 11.5428 3.03263 10.9161 3.6593L3.65924 10.9162C2.78025 11.7951 2.78025 13.2202 3.65924 14.0992L9.90078 20.3408C10.7798 21.2197 12.2049 21.2197 13.0838 20.3408L20.3407 13.0839C20.9674 12.4572 21.168 11.5212 20.8531 10.6927L19.1342 6.17011C18.9057 5.56899 18.431 5.0943 17.8299 4.86583L13.3073 3.1469ZM13.9924 9.50279C14.4903 10.0006 15.2974 10.0006 15.7952 9.50279C16.293 9.00497 16.293 8.19785 15.7952 7.70002C15.2974 7.2022 14.4903 7.2022 13.9924 7.70002C13.4946 8.19784 13.4946 9.00497 13.9924 9.50279Z', fill: 'currentColor' }) })));
});
