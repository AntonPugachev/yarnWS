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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM4.59276 5.71052C4.40304 5.84743 4.42705 6.12257 4.61942 6.25575L7.49998 8.24996C6.74998 7.99996 5.74998 8.58332 5.24998 9.24999C4.81057 9.83586 4.56425 10.7435 4.68067 11.973C4.7051 12.231 4.98807 12.3677 5.21461 12.2418L8.9441 10.1699C9.08133 10.0937 9.24998 10.1929 9.24998 10.3499V10.8115C9.24998 12.5756 8.80733 14.3115 7.96259 15.8602C7.86679 16.0358 7.99392 16.25 8.19399 16.25H8.92337C9.12471 16.25 9.30996 16.14 9.40637 15.9632C10.288 14.3469 10.75 12.5352 10.75 10.6941V10.3499C10.75 10.1929 10.9186 10.0937 11.0559 10.1699L14.7853 12.2418C15.0119 12.3677 15.2949 12.231 15.3193 11.973C15.4357 10.7435 15.1894 9.83586 14.75 9.24999C14.25 8.58332 13.25 7.99996 12.5 8.24996L15.3805 6.25575C15.5729 6.12257 15.5969 5.84743 15.4072 5.71052C14.5769 5.11134 13.2133 4.72997 12 5.24998C10.6 5.84999 10.0833 6.99998 9.99998 7.49998C9.91664 6.99998 9.39998 5.84999 7.99998 5.24998C6.78661 4.72997 5.42302 5.11134 4.59276 5.71052Z', fill: 'currentColor' }) })));
});
