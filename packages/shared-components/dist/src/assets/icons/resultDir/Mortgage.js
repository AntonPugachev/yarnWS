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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 19.2859V26.0002C10 27.6571 11.3431 29.0002 13 29.0002H28C29.6569 29.0002 31 27.6571 31 26.0002V19.2859C31 18.4649 30.6635 17.6797 30.069 17.1135L22.569 9.97065C21.4103 8.8672 19.5897 8.8672 18.431 9.97065L10.931 17.1135C10.3365 17.6797 10 18.4649 10 19.2859ZM18.5 18.5002C18.5 19.3287 17.8284 20.0002 17 20.0002C16.1716 20.0002 15.5 19.3287 15.5 18.5002C15.5 17.6718 16.1716 17.0002 17 17.0002C17.8284 17.0002 18.5 17.6718 18.5 18.5002ZM25.5 23.5002C25.5 24.3287 24.8284 25.0002 24 25.0002C23.1716 25.0002 22.5 24.3287 22.5 23.5002C22.5 22.6718 23.1716 22.0002 24 22.0002C24.8284 22.0002 25.5 22.6718 25.5 23.5002ZM24.1187 17.3815C24.4604 17.7232 24.4604 18.2773 24.1187 18.619L18.1187 24.619C17.777 24.9607 17.223 24.9607 16.8813 24.619C16.5396 24.2773 16.5396 23.7232 16.8813 23.3815L22.8813 17.3815C23.223 17.0398 23.777 17.0398 24.1187 17.3815Z', fill: 'currentColor' }) })));
});
