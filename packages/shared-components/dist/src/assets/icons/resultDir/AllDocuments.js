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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M11.209 5.4138C10.9181 4.40065 9.66125 4.04118 8.8743 4.74606L7.63898 5.85254C7.35344 6.1083 7.45132 6.57555 7.81576 6.69645L8.65751 6.9757C8.94987 7.0727 9.14706 7.34496 9.14706 7.65167V8.99553C9.14706 9.3195 8.75349 9.48175 8.52331 9.25267L4.88731 5.63403C4.60773 5.35576 4.15056 5.35369 3.90343 5.66088C1.88461 8.17046 2.04383 11.8434 4.38107 14.1694C5.64992 15.4323 7.31758 16.0562 8.98054 16.0413C9.2662 16.0387 9.47555 16.3333 9.35374 16.5905L8.86844 17.6152C8.61578 18.1487 8.78592 18.7858 9.27142 19.124L10.4443 19.9411C11.3927 20.6018 12.6474 20.6293 13.6241 20.0107L14.9668 19.1604C15.516 18.8125 15.6929 18.0962 15.3684 17.5346L14.8411 16.622C14.6936 16.3666 14.8973 16.0458 15.1932 16.0405C16.7981 16.0119 18.3943 15.3883 19.6189 14.1694C21.9562 11.8434 22.1154 8.17046 20.0966 5.66088C19.8494 5.35369 19.3923 5.35576 19.1127 5.63403L15.4984 9.23109C15.2682 9.46018 14.8746 9.29793 14.8746 8.97396V7.65167C14.8746 7.34496 15.0718 7.0727 15.3642 6.9757L16.2059 6.69645C16.5704 6.57555 16.6682 6.1083 16.3827 5.85254L15.1474 4.74606C14.3604 4.04118 13.1035 4.40065 12.8127 5.4138L12.3622 6.98313C12.2612 7.33478 11.7605 7.33478 11.6595 6.98313L11.209 5.4138Z', fill: 'currentColor' }) })));
});