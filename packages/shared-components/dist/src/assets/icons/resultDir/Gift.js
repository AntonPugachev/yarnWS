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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M18.1445 8.42632C17.0777 7.06852 14.9566 7.10041 13.8412 8.41863C13.8004 8.46683 13.7602 8.51563 13.7204 8.56509C12.3802 10.2333 13.4843 12.9616 15.9453 13H10.5C9.67157 13 9 13.6716 9 14.5V17.125H31V14.5C31 13.6716 30.3284 13 29.5 13H23.9993C26.5 13 27.627 10.2451 26.2773 8.56509C26.2376 8.51563 26.1973 8.46683 26.1565 8.41863C25.0412 7.10041 22.9201 7.06852 21.8533 8.42632C20.9403 9.58837 20.5356 10.9085 19.999 13C19.4624 10.9085 19.0575 9.58837 18.1445 8.42632Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M31 18.875H20.875V30H29.5C30.3284 30 31 29.3284 31 28.5V18.875Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9 18.875H19.125V30H10.5C9.67157 30 9 29.3284 9 28.5V18.875Z', fill: 'currentColor' })] })));
});
