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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M13.8522 5.18069C12.5461 4.42904 10.9325 4.4566 9.65289 5.25244L5.65277 7.74024C5.53129 7.81579 5.45743 7.9487 5.45743 8.09175H3.82178C3.82178 7.38346 4.18748 6.72536 4.78893 6.35129L8.78906 3.86349C10.5805 2.74932 12.8396 2.71073 14.668 3.76305L17.3091 5.28305C19.0842 6.30465 20.1784 8.19672 20.1784 10.2448V13.8125C20.1784 15.8758 19.068 17.7795 17.2721 18.7954L14.6298 20.29C12.8206 21.3133 10.5989 21.2757 8.82549 20.1916L4.94495 17.8196C4.24727 17.3931 3.82178 16.6344 3.82178 15.8167H5.45743C5.45743 16.0646 5.58646 16.2947 5.79801 16.424L9.67856 18.796C10.9453 19.5704 12.5322 19.5972 13.8245 18.8663L16.4668 17.3717C17.7496 16.6461 18.5427 15.2863 18.5427 13.8125V10.2448C18.5427 8.78188 17.7612 7.43041 16.4933 6.70069L13.8522 5.18069Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M3.82178 10.3672C3.82178 9.91557 4.18793 9.54942 4.63961 9.54942H8.55096C9.00264 9.54942 9.36879 9.91557 9.36879 10.3672C9.36879 10.8189 9.00264 11.1851 8.55096 11.1851H4.63961C4.18793 11.1851 3.82178 10.8189 3.82178 10.3672Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M3.82178 13.3542C3.82178 12.9026 4.18793 12.5364 4.63961 12.5364H13.2446C13.6963 12.5364 14.0624 12.9026 14.0624 13.3542C14.0624 13.8059 13.6963 14.1721 13.2446 14.1721H4.63961C4.18793 14.1721 3.82178 13.8059 3.82178 13.3542Z', fill: 'currentColor' })] })));
});
