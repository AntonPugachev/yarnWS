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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M30.5 11.5C31.3284 11.5 32 12.1716 32 13V27C32 27.8284 31.3284 28.5 30.5 28.5L9.5 28.5C8.67157 28.5 8 27.8284 8 27V13C8 12.1716 8.67157 11.5 9.5 11.5H30.5ZM14.1388 16C13.2157 16 12.4674 16.7483 12.4674 17.6715C12.4674 18.5946 13.2157 19.3429 14.1388 19.3429C15.0619 19.3429 15.8103 18.5946 15.8103 17.6715C15.8103 16.7483 15.0619 16 14.1388 16ZM17.1446 22.9076C17.2483 22.7829 17.2959 22.6204 17.2727 22.4598C17.0722 21.0721 15.7173 20.0856 14.1387 20.0856C12.5614 20.0856 11.2132 21.0779 11.0062 22.4578C10.9819 22.6196 11.0297 22.7836 11.1342 22.9093C11.7961 23.7061 12.9343 24.2457 14.1388 24.2457C15.3398 24.2457 16.4866 23.699 17.1446 22.9076ZM21 17C20.4477 17 20 17.4477 20 18C20 18.5523 20.4477 19 21 19H28C28.5523 19 29 18.5523 29 18C29 17.4477 28.5523 17 28 17H21ZM21 21C20.4477 21 20 21.4477 20 22C20 22.5523 20.4477 23 21 23H28C28.5523 23 29 22.5523 29 22C29 21.4477 28.5523 21 28 21H21Z', fill: 'currentColor' }) })));
});
