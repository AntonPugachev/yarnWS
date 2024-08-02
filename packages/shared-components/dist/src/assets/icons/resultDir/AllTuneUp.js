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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M12.7463 7.5498H20.1C20.5971 7.5498 21 7.95275 21 8.4498C21 8.94686 20.5971 9.3498 20.1 9.3498H12.7464C12.3758 10.3986 11.3757 11.15 10.2 11.15C9.02433 11.15 8.02416 10.3986 7.65357 9.3498H3.9C3.40294 9.3498 3 8.94686 3 8.4498C3 7.95275 3.40294 7.5498 3.9 7.5498H7.6537C8.02441 6.50123 9.02448 5.75 10.2 5.75C11.3755 5.75 12.3756 6.50123 12.7463 7.5498Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M13.8 19.2501C14.9756 19.2501 15.9758 18.4987 16.3464 17.4499H20.1C20.5971 17.4499 21 17.047 21 16.5499C21 16.0528 20.5971 15.6499 20.1 15.6499H16.3463C15.9756 14.6013 14.9755 13.8501 13.8 13.8501C12.6245 13.8501 11.6244 14.6013 11.2537 15.6499H3.9C3.40294 15.6499 3 16.0528 3 16.5499C3 17.047 3.40294 17.4499 3.9 17.4499H11.2535C11.6241 18.4987 12.6243 19.2501 13.8 19.2501Z', fill: 'currentColor' })] })));
});