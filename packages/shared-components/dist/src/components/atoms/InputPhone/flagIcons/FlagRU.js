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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var FlagRU = function (props) {
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({ width: '24', height: '16', viewBox: '0 0 24 16', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: [(0, jsx_runtime_1.jsx)("path", { d: 'M24 .016H0v15.969h24V.015Z', fill: '#0052B4' }), (0, jsx_runtime_1.jsx)("path", { d: 'M24 .016H0v5.322h24V.016Z', fill: '#F0F0F0' }), (0, jsx_runtime_1.jsx)("path", { d: 'M24 10.661H0v5.323h24V10.66Z', fill: '#D80027' })] })));
};
exports.default = FlagRU;
