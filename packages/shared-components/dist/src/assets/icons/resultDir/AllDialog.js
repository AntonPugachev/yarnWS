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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M3 10.8843C3 7.07598 7.02805 4 12.0082 4C16.9883 4 21.0164 7.07597 21.0897 10.9576C21.0897 14.7659 17.0616 17.8419 12.0814 17.8419C11.5688 17.8419 11.0561 17.8419 10.5435 17.7686C9.15194 19.0137 7.54073 19.6728 6.36893 19.9658C5.49008 20.1855 4.75769 19.3066 5.05064 18.501L5.9295 16.011C4.09856 14.6927 3 12.935 3 10.8843ZM8.93214 10.7376C8.93214 11.3444 8.4403 11.8362 7.83358 11.8362C7.22686 11.8362 6.73501 11.3444 6.73501 10.7376C6.73501 10.1309 7.22686 9.63907 7.83358 9.63907C8.4403 9.63907 8.93214 10.1309 8.93214 10.7376ZM12.0081 11.8362C12.6149 11.8362 13.1067 11.3444 13.1067 10.7376C13.1067 10.1309 12.6149 9.63907 12.0081 9.63907C11.4014 9.63907 10.9096 10.1309 10.9096 10.7376C10.9096 11.3444 11.4014 11.8362 12.0081 11.8362ZM17.2813 10.7376C17.2813 11.3444 16.7894 11.8362 16.1827 11.8362C15.576 11.8362 15.0841 11.3444 15.0841 10.7376C15.0841 10.1309 15.576 9.63907 16.1827 9.63907C16.7894 9.63907 17.2813 10.1309 17.2813 10.7376Z', fill: 'currentColor' }) })));
});
