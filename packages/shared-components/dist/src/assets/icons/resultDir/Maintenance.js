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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M29.5 17.5H23C23.6701 14.8197 23.6666 13.262 23.5915 11.6232C23.525 10.175 22.3247 9 20.875 9C20.3918 9 19.9892 9.39022 19.9159 9.86788C19.6672 11.4898 18.6828 15.1122 14.7859 18.3771C14.3034 18.7814 14 19.3705 14 20V29.5C14 30.6046 14.8954 31.5 16 31.5H25.9478C27.185 31.5 28.2954 30.7405 28.7438 29.5873L31.024 23.7239C31.3386 22.915 31.5 22.0547 31.5 21.1868V19.5C31.5 18.3954 30.6046 17.5 29.5 17.5Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M12 19H10C9.44772 19 9 19.4477 9 20V30.5C9 31.0523 9.44772 31.5 10 31.5H12V19Z', fill: 'currentColor' })] })));
});
