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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10.7437 13.9995C9.93547 13.9995 9.28027 14.6711 9.28027 15.4995V25.4995C9.28027 26.3279 9.93547 26.9995 10.7437 26.9995H30.2559C31.0641 26.9995 31.7193 26.3279 31.7193 25.4995V15.4995C31.7193 14.6711 31.0641 13.9995 30.2559 13.9995H10.7437ZM20.4993 22.9999C21.8463 22.9999 22.9383 21.8806 22.9383 20.4999C22.9383 19.1191 21.8463 17.9999 20.4993 17.9999C19.1522 17.9999 18.0603 19.1191 18.0603 20.4999C18.0603 21.8806 19.1522 22.9999 20.4993 22.9999Z', fill: 'currentColor' }) })));
});
