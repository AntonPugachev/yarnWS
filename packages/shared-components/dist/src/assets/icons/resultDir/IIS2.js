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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M29.5 12H11.5C10.1193 12 9 13.1193 9 14.5V25.5C9 26.8807 10.1193 28 11.5 28H29.5C30.8807 28 32 26.8807 32 25.5V14.5C32 13.1193 30.8807 12 29.5 12ZM23.6223 24.1284C23.6223 24.7268 23.1372 25.2119 22.5388 25.2119C21.9404 25.2119 21.4553 24.7268 21.4553 24.1284V15.7012C21.4553 15.1028 21.9404 14.6177 22.5388 14.6177C23.1372 14.6177 23.6223 15.1028 23.6223 15.7012V24.1284ZM19.5447 21.4103C19.5447 22.0086 19.0596 22.4937 18.4612 22.4937C17.8628 22.4937 17.3777 22.0086 17.3777 21.4102V18.7598C17.3777 18.1614 17.8628 17.6763 18.4612 17.6763C19.0596 17.6763 19.5447 18.1614 19.5447 18.7598V21.4103ZM15.467 21.478V24.1285C15.467 24.7269 14.9819 25.212 14.3835 25.212C13.7851 25.212 13.3 24.7269 13.3 24.1285V21.478C13.3 20.8796 13.7851 20.3945 14.3835 20.3945C14.9819 20.3945 15.467 20.8796 15.467 21.478ZM27.7 17.4004V22.0897C27.7 22.6881 27.2149 23.1732 26.6165 23.1732C26.0181 23.1732 25.533 22.6881 25.533 22.0897V17.4004C25.533 16.802 26.0181 16.3169 26.6165 16.3169C27.2149 16.3169 27.7 16.802 27.7 17.4004Z', fill: 'currentColor' }) })));
});
