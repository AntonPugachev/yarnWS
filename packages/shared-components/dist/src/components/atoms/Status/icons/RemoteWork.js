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
var helpers_1 = require("./helpers");
/* eslint-disable max-len */
exports.default = (function (props) {
    var size = props.size ? helpers_1.statusIconSize[props.size] : '20';
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM4.75001 13.4999V9.96421C4.75001 9.34844 5.00238 8.75957 5.44829 8.3349L9.13794 4.82094C9.6207 4.36117 10.3793 4.36117 10.8621 4.82094L14.5517 8.3349C14.9976 8.75957 15.25 9.34844 15.25 9.96421V13.4999C15.25 14.0522 14.8023 14.4999 14.25 14.4999H5.75001C5.19773 14.4999 4.75001 14.0522 4.75001 13.4999ZM8.75001 9.62492C8.75001 9.41781 8.9179 9.24992 9.12501 9.24992H10.875C11.0821 9.24992 11.25 9.41781 11.25 9.62492V11.3749C11.25 11.582 11.0821 11.7499 10.875 11.7499H9.12501C8.9179 11.7499 8.75001 11.582 8.75001 11.3749V9.62492Z', fill: 'currentColor' }) })));
});
