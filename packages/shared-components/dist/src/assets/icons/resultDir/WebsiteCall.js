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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M11.362 17.802C11.362 13.2695 15.0175 9.61395 19.5501 9.61395C24.0826 9.61395 27.7382 13.2695 27.7382 17.802C27.7382 19.3302 27.3322 20.7374 26.6072 21.9472C26.5982 20.5073 25.4255 19.3401 23.9835 19.3401C22.5359 19.3401 21.3597 20.5163 21.3597 21.964V27.483C21.3597 28.4803 21.9179 29.3488 22.7386 29.7926C22.5045 30.3745 21.9348 30.7853 21.2691 30.7853H20.3643C19.7397 30.7853 19.2334 31.2916 19.2334 31.9162C19.2334 32.5408 19.7397 33.0472 20.3643 33.0472H21.2691C23.162 33.0472 24.7355 31.6794 25.055 29.8782C25.9694 29.4679 26.6073 28.549 26.6073 27.483V25.4713C28.7103 23.5584 30.0001 20.868 30.0001 17.802C30.0001 12.0203 25.3318 7.35205 19.5501 7.35205C13.7683 7.35205 9.1001 12.0203 9.1001 17.802C9.1001 20.8338 10.4259 23.5556 12.493 25.4781V27.483C12.493 28.9306 13.6691 30.1068 15.1168 30.1068C16.5644 30.1068 17.7406 28.9306 17.7406 27.483V21.964C17.7406 20.5163 16.5644 19.3401 15.1168 19.3401C13.6861 19.3401 12.5205 20.4889 12.4934 21.9132C11.7744 20.6961 11.362 19.2918 11.362 17.802Z', fill: 'currentColor' }) })));
});
