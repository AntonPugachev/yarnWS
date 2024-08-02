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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M12 11C10.8954 11 10 11.8954 10 13V21.2997C10 22.1624 10.1392 23.008 10.4032 23.8077L15.4867 19.3086C15.8657 18.9732 16.4355 18.9738 16.8138 19.3101L19.025 21.2755L24.3128 16.2735C24.714 15.894 25.347 15.9116 25.7265 16.3128C26.106 16.714 26.0884 17.3469 25.6872 17.7265L19.7332 23.3587C19.3563 23.7152 18.7694 23.7243 18.3816 23.3796L16.148 21.3942L11.3056 25.6799C11.7977 26.4321 12.4188 27.1048 13.1517 27.6632L17.6819 31.1148C18.7559 31.933 20.2441 31.933 21.3181 31.1148L25.8483 27.6632C27.8343 26.15 29 23.7965 29 21.2997V13C29 11.8954 28.1046 11 27 11H12Z', fill: 'currentColor' }) })));
});
