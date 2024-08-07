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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M10.5471 25.338L10.5429 24.875H31.5289C31.3212 26.1166 30.2437 27.0627 28.943 27.0627H27.7138C27.9371 27.4488 28.0649 27.897 28.0649 28.375C28.0649 29.8248 26.8896 31.0001 25.4399 31.0001C23.9901 31.0001 22.8148 29.8248 22.8148 28.375C22.8148 27.897 22.9426 27.4488 23.1659 27.0627H17.2138C17.4371 27.4488 17.5649 27.897 17.5649 28.375C17.5649 29.8248 16.3896 31.0001 14.9399 31.0001C13.4901 31.0001 12.3148 29.8248 12.3148 28.375C12.3148 27.897 12.4426 27.4488 12.6659 27.0627H12.2878C11.3293 27.0627 10.5561 26.2965 10.5471 25.338Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M31.531 23.125H10.5284C10.5027 19.7293 10.4804 14.8823 10.5277 11.69C10.5416 10.7455 11.3147 10 12.2593 10H17.8238C18.4721 10 19.0672 10.3583 19.3705 10.9312L20.1568 12.4165L17.8056 14.4318C17.4387 14.7463 17.3962 15.2987 17.7107 15.6657C18.0252 16.0326 18.5776 16.0751 18.9445 15.7606L21.0192 13.9822C21.4644 14.6892 21.9893 15.3356 22.5802 15.9107L20.8056 17.4318C20.4387 17.7463 20.3962 18.2987 20.7107 18.6657C21.0252 19.0326 21.5776 19.0751 21.9445 18.7606L23.954 17.0381C24.9768 17.7416 26.127 18.2656 27.3575 18.5732L27.5884 18.6309C29.7294 19.1662 31.285 20.9734 31.531 23.125Z', fill: 'currentColor' })] })));
});
