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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M13.6457 25.0633L12.8462 29.0458C12.8166 29.2086 12.787 29.4455 12.787 29.6083C12.787 30.467 13.3496 31 14.2675 31C15.2594 31 15.8368 30.4966 16.0441 29.4603L16.9324 25.0633H20.8261L20.0266 29.0458C19.9822 29.2086 19.9674 29.4455 19.9674 29.6083C19.9674 30.467 20.5151 31 21.4479 31C22.425 31 23.0172 30.4818 23.2244 29.4455L24.1127 25.0633H26.3779C27.5178 25.0633 28.2285 24.3526 28.2285 23.2867C28.2285 22.4428 27.6511 21.8654 26.7332 21.8654H24.7345L25.534 17.8681H27.7547C28.8947 17.8681 29.6053 17.1723 29.6053 16.1063C29.6053 15.2624 29.0279 14.6999 28.0952 14.6999H26.1706L26.9256 10.969C26.9701 10.7914 26.9849 10.5545 26.9849 10.3917C26.9849 9.53297 26.4371 9 25.5044 9C24.5273 9 23.9351 9.51817 23.7278 10.5693L22.8839 14.6999H19.0051L19.7601 10.969C19.7897 10.7914 19.8193 10.5545 19.8193 10.3917C19.8193 9.53297 19.2567 9 18.3388 9C17.3469 9 16.7695 9.51817 16.5623 10.5545L15.7036 14.6999H13.4977C12.3577 14.6999 11.647 15.4105 11.647 16.4764C11.647 17.3203 12.2244 17.8829 13.1423 17.8829H15.0818L14.2823 21.895H12.1504C11.0104 21.895 10.2998 22.5908 10.2998 23.6568C10.2998 24.5007 10.8772 25.0633 11.7951 25.0633H13.6457ZM17.2877 22.1467L18.2056 17.6016H22.5286L21.5959 22.1467H17.2877Z', fill: 'currentColor' }) })));
});
