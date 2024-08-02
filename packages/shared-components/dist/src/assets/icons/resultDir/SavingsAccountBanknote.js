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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M14.5 10.0002C13.3954 10.0002 12.5 10.8957 12.5 12.0002V12.5002L26.5001 12.5002C28.157 12.5002 29.5 13.8434 29.5 15.5002V23.5004L30.0001 23.5003C31.1046 23.5003 32 22.6049 32 21.5003V12.0002C32 10.8957 31.1045 10.0002 30 10.0002H14.5ZM10 28.0001C8.89543 28.0001 8 27.1047 8 26.0001L8.00004 16.5001C8.00005 15.3955 8.89547 14.5001 10 14.5001L25.4999 14.5001C26.6045 14.5001 27.4999 15.3956 27.4999 16.5001L27.4999 26.0001C27.4999 27.1047 26.6045 28.0001 25.4999 28.0001L10 28.0001ZM20.75 21.2502C20.75 19.5934 19.4069 18.2502 17.75 18.2502C16.0931 18.2502 14.75 19.5934 14.75 21.2502C14.75 22.9071 16.0931 24.2502 17.75 24.2502C19.4069 24.2502 20.75 22.9071 20.75 21.2502Z', fill: 'currentColor' }) })));
});
