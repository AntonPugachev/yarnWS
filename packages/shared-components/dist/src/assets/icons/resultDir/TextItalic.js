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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M12.4305 5.36568C12.6325 4.85164 12.3795 4.27122 11.8654 4.06927C11.3514 3.86733 10.771 4.12033 10.569 4.63437L5.06903 18.6344C4.86708 19.1484 5.12009 19.7288 5.63413 19.9308C6.14817 20.1327 6.72859 19.8797 6.93053 19.3657L9.43646 12.9869L15.2457 19.6568C15.6084 20.0733 16.2401 20.1168 16.6566 19.7541C17.073 19.3914 17.1166 18.7597 16.7539 18.3433L10.7647 11.4668L19.5395 5.84191C20.0044 5.54386 20.1397 4.92532 19.8417 4.46037C19.5436 3.99541 18.9251 3.8601 18.4601 4.15815L11.035 8.91782L12.4305 5.36568Z', fill: 'currentColor' }) })));
});
