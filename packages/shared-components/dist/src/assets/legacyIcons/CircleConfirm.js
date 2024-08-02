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
/* eslint-disable max-len */
exports.default = (function (props) {
    return (0, jsx_runtime_1.jsxs)("svg", __assign({ width: '80', height: '80', viewBox: '0 0 80 80', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: [(0, jsx_runtime_1.jsx)("circle", { cx: '40', cy: '40', r: '40', fill: '#E6EEFF' }), (0, jsx_runtime_1.jsx)("circle", { cx: '40', cy: '40', r: '40', fill: "".concat(props.color1 ? props.color1 || '' : '#E6EEFF') }), (0, jsx_runtime_1.jsx)("path", { d: 'M56.4142 33.4142C57.1953 32.6332 57.1953 31.3668 56.4142 30.5858C55.6332 29.8047 54.3668 29.8047 53.5858 30.5858L37 47.1716L28.4142 38.5858C27.6332 37.8047 26.3668 37.8047 25.5858 38.5858C24.8047 39.3668 24.8047 40.6332 25.5858 41.4142L35.5858 51.4142C36.3668 52.1953 37.6332 52.1953 38.4142 51.4142L56.4142 33.4142Z', fill: "".concat(props.color2 ? props.color2 || '' : '#0D69F2') })] }));
});
