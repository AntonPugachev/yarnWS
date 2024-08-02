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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 25 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M21.1751 7.21105C20.5214 7.47591 19.8338 7.64803 19.1323 7.7224C19.8567 7.33013 20.4118 6.68555 20.6924 5.91102C19.9864 6.29451 19.2241 6.56364 18.4338 6.70837C17.7377 6.03299 16.8035 5.65929 15.8337 5.66835C13.9473 5.59945 12.3596 7.06716 12.2803 8.9531C12.2807 9.20441 12.3118 9.45472 12.373 9.69846C9.56688 9.5899 6.92365 8.3522 5.0434 6.26636C4.72834 6.76097 4.56115 7.33531 4.56152 7.92174C4.57703 9.04521 5.1763 10.0796 6.14323 10.6518C5.58305 10.636 5.03324 10.4969 4.53292 10.2445C4.53292 10.2531 4.53292 10.2705 4.53292 10.2791C4.58293 11.9009 5.78243 13.2563 7.38606 13.5032C7.07907 13.5763 6.76474 13.6141 6.44917 13.6159C6.22469 13.6178 6.00056 13.5975 5.78008 13.5552C6.30214 14.9347 7.62718 15.8439 9.10211 15.8346C7.81414 16.758 6.26672 17.2495 4.68199 17.2387C4.39511 17.2387 4.1117 17.2213 3.8335 17.1953C5.48638 18.1647 7.36882 18.6735 9.28498 18.6687C15.8259 18.6687 19.4036 13.6679 19.4036 9.33445C19.4036 9.18711 19.4036 9.04844 19.3932 8.90977C20.0824 8.45271 20.6856 7.87767 21.1751 7.21105Z', fill: 'currentColor' }) })));
});
