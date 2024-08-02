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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M25.2439 14C25.4098 13.5308 25.5 13.026 25.5 12.5C25.5 12.1893 25.4685 11.886 25.4086 11.5931C25.4022 11.5619 25.3955 11.5309 25.3885 11.5C24.9338 9.49601 23.1416 8 21 8C18.8584 8 17.0662 9.49601 16.6115 11.5C16.5385 11.8216 16.5 12.1563 16.5 12.5C16.5 13.0259 16.5902 13.5308 16.7561 14C16.7561 14 16.7561 14 16.7561 14H25.2439Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M14.5 12.5C14.5 13.0146 14.5602 13.5171 14.6744 14H13.5C12.9477 14 12.5 14.4477 12.5 15C12.5 15.5523 12.9477 16 13.5 16H28C29.6569 16 31 17.3431 31 19V27C31 28.6569 29.6569 30 28 30H13C11.3431 30 10 28.6569 10 27V14.5C10 12.8431 11.3431 11.5 13 11.5H14.5767C14.5261 11.8269 14.5 12.161 14.5 12.5ZM26.5 19.3637C26.7476 19.6113 26.8208 19.9672 26.7196 20.2789L25.9483 22.8496C25.8573 23.1531 25.6135 23.3863 25.3063 23.4637C24.9992 23.5412 24.6739 23.4514 24.4499 23.2274L24.1795 22.957L21.5773 25.5592C21.2258 25.9107 20.656 25.9107 20.3045 25.5592L18.6091 23.8638L16.1364 26.3365C15.7849 26.688 15.2151 26.688 14.8636 26.3365C14.5121 25.985 14.5121 25.4152 14.8636 25.0637L17.9727 21.9546C18.3242 21.6031 18.894 21.6031 19.2455 21.9546L20.9409 23.65L22.9067 21.6842L22.6363 21.4138C22.4123 21.1898 22.3225 20.8645 22.4 20.5574C22.4774 20.2502 22.7106 20.0064 23.0141 19.9153L25.5871 19.1434C25.8982 19.0433 26.2531 19.1167 26.5 19.3637Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M29.75 14H27.3256C27.4398 13.5171 27.5 13.0146 27.5 12.5C27.5 12.161 27.4739 11.827 27.4233 11.5H29.75C30.4404 11.5 31 12.0596 31 12.75C31 13.4404 30.4404 14 29.75 14Z', fill: 'currentColor' })] })));
});