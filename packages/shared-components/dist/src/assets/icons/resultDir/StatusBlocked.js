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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M11.75 3C9.34755 3 7.40001 4.94754 7.40001 7.34995V10.514C6.87802 10.5363 6.52504 10.5943 6.22852 10.7454C5.80516 10.9611 5.46095 11.3053 5.24524 11.7286C5 12.2099 5 12.84 5 14.1001V17.4C5 18.6601 5 19.2902 5.24524 19.7715C5.46095 20.1948 5.80516 20.539 6.22852 20.7548C6.70982 21 7.33988 21 8.6 21H15.0498C16.31 21 16.94 21 17.4213 20.7548C17.8447 20.539 18.1889 20.1948 18.4046 19.7715C18.6498 19.2902 18.6498 18.6601 18.6498 17.4V14.1001C18.6498 12.84 18.6498 12.2099 18.4046 11.7286C18.1889 11.3053 17.8447 10.9611 17.4213 10.7454C17.0973 10.5802 16.7058 10.5263 16.0999 10.5087V7.34995C16.0999 4.94754 14.1524 3 11.75 3ZM13.6999 10.5001V7.34995C13.6999 6.27301 12.8269 5.39997 11.75 5.39997C10.673 5.39997 9.79999 6.27301 9.79999 7.34995V10.5001H13.6999ZM10.775 15.2249C10.775 14.6451 11.2451 14.175 11.825 14.175C12.4049 14.175 12.8749 14.6451 12.8749 15.2249V16.2749C12.8749 16.8548 12.4049 17.3249 11.825 17.3249C11.2451 17.3249 10.775 16.8548 10.775 16.2749V15.2249Z', fill: '#DA0B20' }) })));
});
