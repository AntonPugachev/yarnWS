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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: 'M6.6 12.0002C6.6 12.9943 5.79411 13.8002 4.8 13.8002C3.80589 13.8002 3 12.9943 3 12.0002C3 11.0061 3.80589 10.2002 4.8 10.2002C5.79411 10.2002 6.6 11.0061 6.6 12.0002Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M13.8 12.0002C13.8 12.9943 12.9941 13.8002 12 13.8002C11.0059 13.8002 10.2 12.9943 10.2 12.0002C10.2 11.0061 11.0059 10.2002 12 10.2002C12.9941 10.2002 13.8 11.0061 13.8 12.0002Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M21 12.0002C21 12.9943 20.1941 13.8002 19.2 13.8002C18.2059 13.8002 17.4 12.9943 17.4 12.0002C17.4 11.0061 18.2059 10.2002 19.2 10.2002C20.1941 10.2002 21 11.0061 21 12.0002Z', fill: 'currentColor' })] })));
});
