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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M25 11.5C25 11.2239 25.2239 11 25.5 11H27.75C28.0261 11 28.25 11.2239 28.25 11.5V13.75C28.25 14.0261 28.0261 14.25 27.75 14.25H25.5C25.2239 14.25 25 14.0261 25 13.75V11.5Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10.5 12.25C9.11929 12.25 8 13.3693 8 14.75V25.75C8 27.1307 9.11929 28.25 10.5 28.25H28.5C29.8807 28.25 31 27.1307 31 25.75V20.75C31 20.4739 30.7761 20.25 30.5 20.25H28V17.25C28 16.9739 27.7761 16.75 27.5 16.75H23C22.7239 16.75 22.5 16.5261 22.5 16.25V12.75C22.5 12.4739 22.2761 12.25 22 12.25H10.5ZM28 20.25V22.75C28 23.0261 27.7761 23.25 27.5 23.25H25.5C25.2239 23.25 25 23.0261 25 22.75V20.75C25 20.4739 25.2239 20.25 25.5 20.25H28Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M30.5 14.25C30.2239 14.25 30 14.4739 30 14.75V17C30 17.2761 30.2239 17.5 30.5 17.5H32.75C33.0261 17.5 33.25 17.2761 33.25 17V14.75C33.25 14.4739 33.0261 14.25 32.75 14.25H30.5Z', fill: 'currentColor' })] })));
});
