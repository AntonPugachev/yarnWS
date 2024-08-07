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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM10.25 4.16667C8.88028 4.16667 7.74445 5.16806 7.53469 6.47868H6.25C5.55964 6.47868 5 7.03832 5 7.72868V13.2287C5 13.919 5.55964 14.4787 6.25 14.4787H14.1481C14.8384 14.4787 15.3981 13.919 15.3981 13.2287V7.72868C15.3981 7.03832 14.8384 6.47868 14.1481 6.47868H12.9653C12.7555 5.16806 11.6197 4.16667 10.25 4.16667ZM10.25 5.16667C11.0653 5.16667 11.7503 5.72414 11.9447 6.47868H8.55526C8.7497 5.72414 9.43475 5.16667 10.25 5.16667ZM8 8.66667C7.72386 8.66667 7.5 8.89052 7.5 9.16667C7.5 9.44281 7.72386 9.66667 8 9.66667H12.5C12.7761 9.66667 13 9.44281 13 9.16667C13 8.89052 12.7761 8.66667 12.5 8.66667H8Z', fill: 'currentColor' }) })));
});
