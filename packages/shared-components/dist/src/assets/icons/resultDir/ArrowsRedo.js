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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M16.2929 4.29289C15.9024 4.68342 15.9024 5.31658 16.2929 5.70711L18.5858 8L16.2929 10.2929C15.9024 10.6834 15.9024 11.3166 16.2929 11.7071C16.6834 12.0976 17.3166 12.0976 17.7071 11.7071L20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L17.7071 4.29289C17.3166 3.90237 16.6834 3.90237 16.2929 4.29289Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M21 8C21 7.44772 20.5523 7 20 7H11C7.21742 7 4 9.82957 4 13.5C4 17.1704 7.21742 20 11 20H16C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18H11C8.15458 18 6 15.9056 6 13.5C6 11.0944 8.15458 9 11 9H20C20.5523 9 21 8.55228 21 8Z', fill: 'currentColor' })] })));
});
