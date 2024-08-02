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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M3.56113 5.95898C3.07702 5.95898 2.68457 6.35143 2.68457 6.83554C2.68457 7.31965 3.07702 7.7121 3.56113 7.7121H5.41875L6.7948 13.28L7.27665 15.4483C7.41034 16.0499 7.94391 16.4779 8.56018 16.4779H17.4077C18.024 16.4779 18.5575 16.0499 18.6912 15.4483L19.9785 9.65561C20.1001 9.10818 19.6836 8.5889 19.1228 8.5889H7.44131L6.95601 6.62524C6.85929 6.23391 6.50816 5.95898 6.10505 5.95898H3.56113Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9.25856 17.3465C8.5324 17.3465 7.94373 17.9352 7.94373 18.6614C7.94373 19.3875 8.5324 19.9762 9.25856 19.9762C9.98473 19.9762 10.5734 19.3875 10.5734 18.6614C10.5734 17.9352 9.98473 17.3465 9.25856 17.3465Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M15.3945 18.6614C15.3945 17.9352 15.9831 17.3465 16.7093 17.3465C17.4355 17.3465 18.0241 17.9352 18.0241 18.6614C18.0241 19.3875 17.4355 19.9762 16.7093 19.9762C15.9831 19.9762 15.3945 19.3875 15.3945 18.6614Z', fill: 'currentColor' })] })));
});
