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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M18.4825 12.7712L19.471 11.7774C19.8207 11.4258 20.3878 11.4258 20.7376 11.7774C21.0874 12.1291 21.0874 12.6992 20.7376 13.0509L18.3193 15.4822C17.9695 15.8338 17.4024 15.8338 17.0527 15.4822L14.6343 13.0509C14.2846 12.6992 14.2846 12.1291 14.6343 11.7774C14.9841 11.4258 15.5512 11.4258 15.901 11.7774L16.698 12.5786C16.6998 12.524 16.7008 12.4692 16.7008 12.4141C16.7008 9.82805 14.6156 7.73162 12.0433 7.73162C11.1632 7.73162 10.3401 7.97704 9.63809 8.40351C9.3028 8.60719 8.88232 8.64953 8.54306 8.45261C8.00564 8.14066 7.91051 7.39799 8.42382 7.04739C9.45577 6.34254 10.7017 5.93066 12.0433 5.93066C15.6049 5.93066 18.4921 8.83341 18.4921 12.4141C18.4921 12.5339 18.4889 12.653 18.4825 12.7712Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9.36562 13.0502C9.01584 13.4019 8.44873 13.4019 8.09895 13.0502L7.30192 12.2489C7.30004 12.3036 7.29909 12.3585 7.29909 12.4137C7.29909 14.9998 9.38432 17.0962 11.9566 17.0962C12.8367 17.0962 13.6597 16.8508 14.3618 16.4243C14.6971 16.2206 15.1175 16.1783 15.4568 16.3752C15.9942 16.6872 16.0894 17.4298 15.576 17.7804C14.5441 18.4853 13.2982 18.8971 11.9566 18.8971C8.39499 18.8971 5.50775 15.9944 5.50775 12.4137C5.50775 12.2939 5.51099 12.1748 5.51737 12.0565L4.529 13.0502C4.17922 13.4019 3.61212 13.4019 3.26234 13.0502C2.91255 12.6986 2.91255 12.1284 3.26234 11.7767L5.68064 9.34545C6.03043 8.99379 6.59753 8.99379 6.94731 9.34545L9.36562 11.7767C9.7154 12.1284 9.7154 12.6986 9.36562 13.0502Z', fill: 'currentColor' })] })));
});
