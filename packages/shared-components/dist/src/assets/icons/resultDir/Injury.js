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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M18.3898 28.2155L28.5029 18.5588C30.6469 16.5117 30.7473 13.1483 28.7278 11.0333C26.7082 8.91828 23.3438 8.86341 21.1999 10.9105L11.0867 20.5672C8.94284 22.6143 8.84235 25.9776 10.8619 28.0927C12.8815 30.2077 16.2459 30.2626 18.3898 28.2155ZM17.9735 18.7316C18.3989 19.1771 18.3826 19.8832 17.9371 20.3086C17.4916 20.734 16.7856 20.7177 16.3602 20.2721C15.9347 19.8266 15.9511 19.1206 16.3966 18.6952C16.8421 18.2698 17.5481 18.2861 17.9735 18.7316ZM20.6625 16.1642C21.0879 16.6098 21.0716 17.3158 20.6261 17.7412C20.1806 18.1666 19.4745 18.1503 19.0491 17.7048C18.6237 17.2592 18.64 16.5532 19.0855 16.1278C19.5311 15.7024 20.2371 15.7187 20.6625 16.1642ZM20.5045 22.998C20.95 22.5726 20.9663 21.8666 20.5409 21.4211C20.1155 20.9755 19.4095 20.9592 18.964 21.3846C18.5184 21.8101 18.5021 22.5161 18.9275 22.9616C19.3529 23.4071 20.059 23.4234 20.5045 22.998ZM23.2301 18.8537C23.6555 19.2992 23.6392 20.0052 23.1937 20.4306C22.7482 20.856 22.0422 20.8397 21.6167 20.3942C21.1913 19.9487 21.2076 19.2427 21.6532 18.8173C22.0987 18.3919 22.8047 18.4082 23.2301 18.8537Z', fill: 'currentColor' }) })));
});
