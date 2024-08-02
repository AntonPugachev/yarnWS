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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M20.9763 9.00006H19.3762C16.6762 9.00006 14.2762 10.6001 13.3762 13.2001L13.1763 13.7001C11.6763 18.0001 11.5762 22.7001 13.0762 27.0001L13.2762 27.6001C14.0762 30.1001 16.4762 31.9001 19.1762 31.9001H20.7762C21.7762 31.9001 22.4762 31.0001 22.2762 30.0001L21.4763 26.4001C21.2763 25.5001 20.4763 24.9001 19.5763 25.0001L18.2762 25.1001C17.7762 25.1001 17.3762 24.8001 17.1762 24.4001C16.1762 21.9001 16.1762 19.0001 17.2762 16.5001C17.4762 16.0001 17.8762 15.8001 18.3762 15.8001L19.6762 15.9001C20.5762 16.0001 21.3763 15.4001 21.5763 14.5001L22.4763 10.9001C22.6763 9.90006 21.9763 9.00006 20.9763 9.00006Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M27.4763 17.3L27.5763 23.4C27.5763 24.2 26.7763 24.6 26.0763 24.1L22.2762 21.2C21.7762 20.8 21.7762 20 22.2762 19.6L25.9763 16.6C26.5763 16.1 27.4763 16.5 27.4763 17.3Z', fill: 'currentColor' })] })));
});
