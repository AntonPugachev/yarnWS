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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M7.0663 18.3208L8.64801 21.6886C9.10298 22.6573 10.0768 23.2759 11.1471 23.2759H31.3087C31.8427 23.2759 32.1745 22.6955 31.9035 22.2353L31.3772 21.3419C30.881 20.4993 29.9761 19.9821 28.9982 19.9821H11.3546L8.9424 17.5421C8.81274 17.4109 8.63598 17.3371 8.45154 17.3371H7.69107C7.18534 17.3371 6.85132 17.863 7.0663 18.3208Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M22.6499 18.146L18.1406 13.224C18.0099 13.0813 17.8252 13.0001 17.6317 13.0001H16.6692C16.1634 13.0001 15.8293 13.5261 16.0445 13.9839L18.0008 18.146H22.6499Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M22.6275 23.2759L17.7014 29.5447C17.5705 29.7113 17.3705 29.8085 17.1587 29.8085L15.7495 29.8086C15.2567 29.8086 14.9227 29.3072 15.1124 28.8525L17.4397 23.2759H22.6275Z', fill: 'currentColor' })] })));
});
