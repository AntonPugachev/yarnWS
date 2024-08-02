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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 41', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M23.7871 14.794C23.7944 14.7277 23.8 14.6392 23.8 14.5244C23.8 12.7019 22.3225 11.2244 20.5 11.2244C18.6775 11.2244 17.2 12.7019 17.2 14.5244C17.2 14.6392 17.2056 14.7277 17.2129 14.794C17.4371 14.8379 17.7869 14.8635 18.3493 14.861C18.6268 14.8597 18.9192 14.8525 19.25 14.8444C19.2789 14.8437 19.3082 14.843 19.3377 14.8422C19.6959 14.8335 20.0906 14.8244 20.5 14.8244C20.9094 14.8244 21.3041 14.8335 21.6623 14.8422C21.6918 14.843 21.7211 14.8437 21.75 14.8444C22.0808 14.8525 22.3732 14.8597 22.6507 14.861C23.213 14.8635 23.5629 14.8379 23.7871 14.794ZM21.7 17.0438C24.1605 17.1045 26 17.1498 26 14.5244C26 11.4868 23.5376 9.02441 20.5 9.02441C17.4624 9.02441 15 11.4868 15 14.5244C15 17.1498 16.8395 17.1045 19.3 17.0438C19.6863 17.0343 20.0878 17.0244 20.5 17.0244C20.9122 17.0244 21.3137 17.0343 21.7 17.0438Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M12.5 29.6484H28.2962C29.6769 29.6484 30.7962 28.5291 30.7962 27.1484V20.0244H10V27.1484C10 28.5291 11.1193 29.6484 12.5 29.6484Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M10 18.0244V16.1484C10 14.7677 11.1193 13.6484 12.5 13.6484H28.2962C29.6769 13.6484 30.7962 14.7677 30.7962 16.1484V18.0244H10Z', fill: 'currentColor' })] })));
});
