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
exports.default = (function (props) {
    return (0, jsx_runtime_1.jsx)("svg", __assign({ width: '16', height: '11', viewBox: '0 0 16 11', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { d: 'M1 0.999878L1 3.99988C1 7.31359 3.68629 9.99988 7 9.99988H15', stroke: 'currentColor', strokeWidth: '2', strokeLinecap: 'round' }) }));
});