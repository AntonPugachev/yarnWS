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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M19 13C20.6569 13 22 11.6569 22 10C22 8.34315 20.6569 7 19 7C17.3431 7 16 8.34315 16 10C16 11.6569 17.3431 13 19 13Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M29.732 27.2582L26.4715 21.7586C26.3809 21.5849 26.2602 21.4113 26.1092 21.2665H27.2564C27.9206 21.2665 28.4942 20.8034 28.5546 20.1955C28.615 19.4719 28.0414 18.893 27.3168 18.893H22.8789C22.4563 18.893 22.094 18.6614 21.9431 18.2851L20.9166 15.3616C20.6449 14.5801 19.8902 14.0302 19.0147 14.0012H18.9845C18.1392 13.9723 17.3542 14.4643 17.0222 15.2169L15.3617 19.1246C14.0636 22.1638 16.4184 25.5215 19.8902 25.5215H24.2073L26.5319 29.1397C27.0753 29.9791 28.2527 30.2686 29.1584 29.7186C30.0037 29.2265 30.2452 28.0977 29.732 27.2582Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M17 30C19.7614 30 22 27.7614 22 25C22 22.2386 19.7614 20 17 20C14.2386 20 12 22.2386 12 25C12 27.7614 14.2386 30 17 30ZM17 32C20.866 32 24 28.866 24 25C24 21.134 20.866 18 17 18C13.134 18 10 21.134 10 25C10 28.866 13.134 32 17 32Z', fill: 'currentColor' })] })));
});
