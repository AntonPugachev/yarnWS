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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.70711 4.29289C9.09763 4.68342 9.09763 5.31658 8.70711 5.70711L7.41421 7H14C17.7826 7 21 9.82957 21 13.5C21 17.1704 17.7826 20 14 20H9C8.44772 20 8 19.5523 8 19C8 18.4477 8.44772 18 9 18H14C16.8454 18 19 15.9056 19 13.5C19 11.0944 16.8454 9 14 9H7.41421L8.70711 10.2929C9.09763 10.6834 9.09763 11.3166 8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071L4.29289 8.70711C3.90237 8.31658 3.90237 7.68342 4.29289 7.29289L7.29289 4.29289C7.68342 3.90237 8.31658 3.90237 8.70711 4.29289Z', fill: 'currentColor' }) })));
});
