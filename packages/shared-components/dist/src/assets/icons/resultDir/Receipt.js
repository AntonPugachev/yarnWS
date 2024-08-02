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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M26.7313 28.9753C27.0384 29.3705 27.4472 29.75 27.9477 29.75C28.5289 29.75 29 29.2789 29 28.6977V13.5C29 12.1193 27.8807 11 26.5 11H13.5C12.1193 11 11 12.1193 11 13.5V28.6977C11 29.2789 11.4711 29.75 12.0523 29.75C12.5528 29.75 12.9616 29.3705 13.2687 28.9753C13.6118 28.534 14.1477 28.25 14.75 28.25C15.3784 28.25 15.9345 28.5591 16.2748 29.0335C16.5418 29.4059 16.9168 29.75 17.375 29.75C17.8332 29.75 18.2082 29.4059 18.4752 29.0335C18.8155 28.5591 19.3716 28.25 20 28.25C20.6284 28.25 21.1845 28.5591 21.5248 29.0335C21.7918 29.4059 22.1668 29.75 22.625 29.75C23.0832 29.75 23.4582 29.4059 23.7252 29.0335C24.0655 28.5591 24.6216 28.25 25.25 28.25C25.8523 28.25 26.3882 28.534 26.7313 28.9753ZM16 16C16 15.4477 16.4477 15 17 15H23C23.5523 15 24 15.4477 24 16C24 16.5523 23.5523 17 23 17H17C16.4477 17 16 16.5523 16 16ZM17 19C16.4477 19 16 19.4477 16 20C16 20.5523 16.4477 21 17 21H23C23.5523 21 24 20.5523 24 20C24 19.4477 23.5523 19 23 19H17Z', fill: 'currentColor' }) })));
});
