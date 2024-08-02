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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M33.5209 19.267C33.5818 19.2785 33.6449 19.2886 33.7102 19.2971C33.8764 19.3187 34 19.4634 34 19.631L34 20.7559C34 20.9236 33.8763 21.0682 33.71 21.0898C33.6156 21.102 33.5258 21.1178 33.4406 21.1363C32.9667 21.2395 32.4694 21.7092 32.3035 22.165C31.4961 24.3839 29.3702 25.9743 26.8754 25.9743C23.5295 25.9743 20.8384 23.117 21.114 19.7143C21.1265 19.5597 21.0898 19.4029 20.9941 19.2808C20.8475 19.0936 20.5604 18.869 20.0271 18.869C19.4738 18.869 19.1726 19.0898 19.0171 19.2759C18.9137 19.3996 18.874 19.5631 18.8868 19.7238C19.1566 23.1223 16.4673 25.9743 13.1246 25.9743C10.6301 25.9743 8.50431 24.3843 7.69666 22.1657C7.50044 21.6267 7.02917 21.222 6.46517 21.1173C6.40927 21.1069 6.35155 21.0978 6.292 21.0901C6.12498 21.0684 6.00001 20.9243 6.00001 20.7559L6 19.631C6 19.4712 6.12998 19.3179 6.28842 19.2973C6.37279 19.2864 6.45342 19.2728 6.53051 19.2568C7.08458 19.1425 7.51125 18.7217 7.70774 18.1912C8.59508 15.7953 11.0224 14.1414 13.7849 14.4495C15.4178 14.6316 16.8552 15.5169 17.7878 16.7891L17.7912 16.7938C17.9512 17.0087 18.2451 17.0796 18.4981 16.9916C18.9182 16.8455 19.4235 16.7491 20.0271 16.7491C20.6189 16.7491 21.1098 16.8425 21.5178 16.9846C21.7335 17.0598 21.9841 17.0209 22.1468 16.8605C22.1755 16.8322 22.2023 16.8014 22.227 16.768C23.1601 15.507 24.591 14.6307 26.215 14.4495C28.9655 14.1427 31.3836 15.7809 32.2805 18.1597C32.4894 18.7137 32.9391 19.1569 33.5209 19.267ZM10.4 19.2001C10.8419 18.8687 11.4687 18.9582 11.8 19.4001L13.3 21.4001C13.6314 21.8419 13.5419 22.4687 13.1 22.8001C12.6582 23.1314 12.0314 23.0419 11.7 22.6001L10.2 20.6001C9.86868 20.1582 9.95822 19.5314 10.4 19.2001ZM24.4 19.2001C24.8419 18.8687 25.4687 18.9582 25.8 19.4001L27.3 21.4001C27.6314 21.8419 27.5419 22.4687 27.1 22.8001C26.6582 23.1314 26.0314 23.0419 25.7 22.6001L24.2 20.6001C23.8687 20.1582 23.9582 19.5314 24.4 19.2001Z', fill: 'currentColor' }) })));
});
