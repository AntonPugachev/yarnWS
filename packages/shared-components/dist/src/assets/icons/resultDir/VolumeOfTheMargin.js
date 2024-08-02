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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M14.5224 14C14.775 11.1967 17.131 9 20 9C22.869 9 25.225 11.1967 25.4776 14H28.5C29.8807 14 31 15.1193 31 16.5V27.5C31 28.8807 29.8807 30 28.5 30H10.5C9.11929 30 8 28.8807 8 27.5V16.5C8 15.1193 9.11929 14 10.5 14H14.5224ZM16.5354 14H23.4646C23.2219 12.3039 21.7632 11 20 11C18.2368 11 16.7781 12.3039 16.5354 14ZM26.5563 19.3097C26.6688 18.9634 26.5874 18.568 26.3124 18.2929C26.0379 18.0185 25.6437 17.9369 25.298 18.0481L22.2915 18.9501C21.9544 19.0512 21.6953 19.3222 21.6092 19.6635C21.5232 20.0047 21.6229 20.3661 21.8718 20.615L22.2239 20.9672L19.8553 23.3358L17.8387 21.3192C17.6511 21.1317 17.3968 21.0263 17.1316 21.0263C16.8664 21.0263 16.612 21.1317 16.4245 21.3192L12.7929 24.9508C12.4024 25.3413 12.4024 25.9745 12.7929 26.365C13.1834 26.7555 13.8166 26.7555 14.2071 26.365L17.1316 23.4405L19.1482 25.4571C19.5387 25.8476 20.1718 25.8476 20.5624 25.4571L23.6381 22.3814L23.9902 22.7334C24.2391 22.9823 24.6005 23.082 24.9418 22.996C25.2831 22.91 25.554 22.6508 25.6551 22.3137L26.5563 19.3097Z', fill: 'currentColor' }) })));
});
