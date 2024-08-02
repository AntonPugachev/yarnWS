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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M31.3329 16.9999H8.58294C8.08294 16.9999 7.83294 16.4999 8.08294 16.1666L8.99961 14.8333C9.41627 14.2499 10.1663 13.8333 10.9163 13.8333H28.9163C29.6663 13.8333 30.4163 14.1666 30.8329 14.8333L31.7496 16.1666C32.0829 16.4999 31.7496 16.9999 31.3329 16.9999Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.91684 24.4169V17.0002H31.0002V24.4169C31.0002 25.4169 30.1668 26.2502 29.1668 26.2502H10.7502C9.75018 26.2502 8.91684 25.4169 8.91684 24.4169ZM14.2495 22.0831H15.8329C16.1662 22.0831 16.4995 21.8331 16.4995 21.4165V19.8331C16.4995 19.4165 16.1662 19.1665 15.8329 19.1665H14.2495C13.8329 19.1665 13.5829 19.4998 13.5829 19.8331V21.4165C13.5829 21.8331 13.9162 22.0831 14.2495 22.0831ZM24.0827 22.0831H25.666C25.9994 22.0831 26.2494 21.8331 26.3327 21.4165V19.8331C26.3327 19.4165 25.9994 19.1665 25.666 19.1665H24.0827C23.666 19.1665 23.416 19.4998 23.416 19.8331V21.4165C23.416 21.8331 23.7494 22.0831 24.0827 22.0831Z', fill: 'currentColor' })] })));
});
