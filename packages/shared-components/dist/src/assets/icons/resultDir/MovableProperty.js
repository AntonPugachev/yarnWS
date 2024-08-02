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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M19 12.3C18.8505 12.3032 18.6989 12.3068 18.5459 12.3104C17.4773 12.3356 16.3359 12.3625 15.3104 12.2869C13.5372 12.156 12 13.5459 12 15.324V17.5002C12 16.6717 11.3284 16.0002 10.5 16.0002C9.67157 16.0002 9 16.6717 9 17.5002V25.5002C9 26.8809 10.1193 28.0002 11.5 28.0002H28.5C29.8807 28.0002 31 26.8809 31 25.5002V17.5002C31 16.6717 30.3284 16.0002 29.5 16.0002C28.6716 16.0002 28 16.6717 28 17.5002V15.324C28 13.5459 26.4628 12.156 24.6896 12.2869C23.6641 12.3625 22.5227 12.3356 21.4541 12.3104C21.3011 12.3068 21.1495 12.3032 21 12.3V15C21 15.5523 20.5523 16 20 16C19.4477 16 19 15.5523 19 15V12.3ZM13 21C13 20.4477 13.4477 20 14 20H26C26.5523 20 27 20.4477 27 21C27 21.5523 26.5523 22 26 22H14C13.4477 22 13 21.5523 13 21Z', fill: 'currentColor' }) })));
});
