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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M13.5214 18.9516C13.1615 19.2944 12.5918 19.2806 12.249 18.9207L6.24735 12.6201C5.91625 12.2725 5.91625 11.7262 6.24735 11.3786L12.249 5.07808C12.5918 4.71818 13.1615 4.70433 13.5214 5.04716C13.8813 5.38999 13.8951 5.95967 13.5523 6.31958L8.14199 11.9994L13.5523 17.6792C13.8951 18.0391 13.8813 18.6088 13.5214 18.9516ZM18.3225 18.9528C17.9626 19.2956 17.393 19.2818 17.0501 18.9219L11.0485 12.6213C10.7174 12.2737 10.7174 11.7274 11.0485 11.3798L17.0501 5.07925C17.393 4.71935 17.9626 4.7055 18.3225 5.04833C18.6825 5.39116 18.6963 5.96084 18.3535 6.32075L12.9432 12.0006L18.3535 17.6804C18.6963 18.0403 18.6825 18.61 18.3225 18.9528Z', fill: 'currentColor' }) })));
});