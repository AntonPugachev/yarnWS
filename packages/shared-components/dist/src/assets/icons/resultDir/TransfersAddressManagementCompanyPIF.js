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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M15.5694 14.624C15.9889 12.0028 18.2606 10 21 10C23.7394 10 26.0111 12.0028 26.4306 14.624H28.7962C30.1769 14.624 31.2962 15.7433 31.2962 17.124V28.124C31.2962 29.5047 30.1769 30.624 28.7962 30.624H13C11.6193 30.624 10.5 29.5047 10.5 28.124V17.124C10.5 15.7433 11.6193 14.624 13 14.624H15.5694ZM17.6105 14.624H24.3895C24.0006 13.1149 22.6305 12 21 12C19.3695 12 17.9994 13.1149 17.6105 14.624ZM15.5 20C15.5 19.4477 15.9477 19 16.5 19H25.5C26.0523 19 26.5 19.4477 26.5 20C26.5 20.5523 26.0523 21 25.5 21H16.5C15.9477 21 15.5 20.5523 15.5 20Z', fill: 'currentColor' }) })));
});
