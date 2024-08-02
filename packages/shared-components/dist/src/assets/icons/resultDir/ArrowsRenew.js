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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M11.713 17.9235C13.3104 17.9235 14.7566 17.276 15.8034 16.2292L17.1669 17.5927C15.7711 18.9884 13.8429 19.8518 11.713 19.8518C7.45322 19.8518 4 16.3985 4 12.1388C4 7.879 7.45322 4.42578 11.713 4.42578C15.4383 4.42578 18.5467 7.06682 19.2681 10.5787L20.2394 9.15524C20.5395 8.7154 21.1394 8.60214 21.5792 8.90226C22.019 9.20238 22.1323 9.80223 21.8322 10.2421L19.5267 13.6209C19.2265 14.0607 18.6267 14.174 18.1869 13.8738L14.8081 11.5683C14.3682 11.2682 14.255 10.6684 14.5551 10.2285C14.8552 9.7887 15.4551 9.67544 15.8949 9.97555L17.384 10.9916C16.8518 8.34631 14.5151 6.35403 11.713 6.35403C8.51816 6.35403 5.92825 8.94394 5.92825 12.1388C5.92825 15.3336 8.51816 17.9235 11.713 17.9235Z', fill: 'currentColor' }) })));
});
