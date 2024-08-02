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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 41', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M18.998 18.9243C18.5838 18.9243 18.248 19.2602 18.248 19.6745C18.2481 20.0886 18.5839 20.4243 18.998 20.4243H20.9988C21.4131 20.4243 21.7489 20.0884 21.7488 19.6742C21.7487 19.26 21.413 18.9243 20.9988 18.9243H18.998Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8 13.0244C8 12.196 8.67157 11.5244 9.5 11.5244H30.5C31.3284 11.5244 32 12.196 32 13.0244C32 13.8528 31.3284 14.5244 30.5 14.5244H29.6047C29.2708 14.5244 29 14.7952 29 15.1292V15.9918C29 16.0003 28.9999 16.0088 28.9996 16.0173V27.5242C28.9996 28.9049 27.8803 30.0242 26.4996 30.0242H13.4996C12.1189 30.0242 10.9996 28.9049 10.9996 27.5242V15.0481C10.9882 14.757 10.7485 14.5244 10.4545 14.5244H9.5C8.67157 14.5244 8 13.8528 8 13.0244ZM18.7497 15.9243C17.999 15.9243 17.345 15.5108 17.0029 14.8991C16.904 14.7222 17.0474 14.5244 17.25 14.5244H22.7497C22.9523 14.5244 23.0957 14.7222 22.9968 14.8991C22.6548 15.5108 22.0007 15.9243 21.25 15.9243H18.7497ZM16.748 19.6748C16.7478 18.432 17.7552 17.4243 18.998 17.4243H20.9988C22.2413 17.4243 23.2486 18.4314 23.2488 19.6738C23.2491 20.9167 22.2416 21.9243 20.9988 21.9243H18.998C17.7556 21.9243 16.7483 20.9172 16.748 19.6748ZM17.4997 23.4243C17.2397 23.4243 16.9983 23.5589 16.8617 23.78C16.725 24.0011 16.7126 24.2772 16.8289 24.5097L17.3289 25.5097C17.5141 25.8802 17.9646 26.0304 18.3351 25.8451C18.6022 25.7116 18.7548 25.4401 18.7497 25.1602C18.7476 25.0428 18.8302 24.9243 18.9476 24.9243H22.4997C22.9139 24.9243 23.2497 24.5885 23.2497 24.1743C23.2497 23.7601 22.9139 23.4243 22.4997 23.4243H17.4997Z', fill: 'currentColor' })] })));
});
