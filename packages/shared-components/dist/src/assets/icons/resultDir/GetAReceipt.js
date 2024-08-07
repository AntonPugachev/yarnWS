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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 41', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M26.7313 28.9997C27.0384 29.3949 27.4472 29.7744 27.9477 29.7744C28.5289 29.7744 29 29.3033 29 28.7221V13.5244C29 12.1437 27.8807 11.0244 26.5 11.0244H13.5C12.1193 11.0244 11 12.1437 11 13.5244V28.7221C11 29.3033 11.4711 29.7744 12.0523 29.7744C12.5528 29.7744 12.9616 29.3949 13.2687 28.9997C13.6118 28.5584 14.1477 28.2744 14.75 28.2744C15.3784 28.2744 15.9345 28.5835 16.2748 29.058C16.5418 29.4303 16.9168 29.7744 17.375 29.7744C17.8332 29.7744 18.2082 29.4303 18.4752 29.058C18.8155 28.5835 19.3716 28.2744 20 28.2744C20.6284 28.2744 21.1845 28.5835 21.5248 29.058C21.7918 29.4303 22.1668 29.7744 22.625 29.7744C23.0832 29.7744 23.4582 29.4303 23.7252 29.058C24.0655 28.5835 24.6216 28.2744 25.25 28.2744C25.8523 28.2744 26.3882 28.5584 26.7313 28.9997ZM20 15.0244C20.5523 15.0244 21 15.4721 21 16.0244V18.0244H23C23.5523 18.0244 24 18.4721 24 19.0244C24 19.5767 23.5523 20.0244 23 20.0244H21V22.0244C21 22.5767 20.5523 23.0244 20 23.0244C19.4477 23.0244 19 22.5767 19 22.0244V20.0244H17C16.4477 20.0244 16 19.5767 16 19.0244C16 18.4721 16.4477 18.0244 17 18.0244H19V16.0244C19 15.4721 19.4477 15.0244 20 15.0244Z', fill: 'currentColor' }) })));
});
