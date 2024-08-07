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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V7C21 6.46957 20.7893 5.96089 20.4142 5.58582C20.0391 5.21074 19.5304 5 19 5H17V4C17 3.73478 16.8946 3.48044 16.7071 3.29291C16.5196 3.10537 16.2652 3 16 3C15.7348 3 15.4804 3.10537 15.2929 3.29291C15.1054 3.48044 15 3.73478 15 4V5H9V4C9 3.73478 8.89463 3.48044 8.70709 3.29291C8.51956 3.10537 8.26522 3 8 3C7.73478 3 7.48044 3.10537 7.29291 3.29291C7.10537 3.48044 7 3.73478 7 4V5H5C4.46957 5 3.96089 5.21074 3.58582 5.58582C3.21074 5.96089 3 6.46957 3 7V19C3 19.5304 3.21074 20.0391 3.58582 20.4142C3.96089 20.7893 4.46957 21 5 21ZM18 11H6V18H18V11Z', fill: 'currentColor' }) })));
});
