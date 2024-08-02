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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10.875 3V10.875H3V4.125C3 3.50368 3.50368 3 4.125 3H10.875ZM5.8125 5.8125V8.0625H8.0625V5.8125H5.8125ZM13.125 3V10.875H21V4.125C21 3.50368 20.4963 3 19.875 3H13.125ZM18.1875 5.8125V8.0625H15.9375V5.8125H18.1875ZM10.875 13.125V21H4.125C3.50368 21 3 20.4963 3 19.875V13.125H10.875ZM5.8125 15.9375V18.1875H8.0625V15.9375H5.8125ZM13.125 13.125H15.375V15.375H13.125V13.125ZM17.625 15.375H15.375V17.625H17.625V18.75H13.125V21H17.625V18.75H18.75V21H21V16.5H17.625V15.375ZM17.625 15.375V13.125H21V15.375H17.625Z', fill: 'currentColor' }) })));
});
