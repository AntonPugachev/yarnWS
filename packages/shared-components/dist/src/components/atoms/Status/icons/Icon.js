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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM13.4806 7.29881C13.879 6.9004 14.525 6.9004 14.9234 7.29881C15.3218 7.69722 15.3218 8.34318 14.9234 8.74159L9.9234 13.7416C9.52498 14.14 8.87903 14.14 8.48061 13.7416L5.75334 11.0143C5.35493 10.6159 5.35493 9.96995 5.75334 9.57154C6.15175 9.17312 6.79771 9.17312 7.19612 9.57154L9.202 11.5774L13.4806 7.29881Z', fill: 'currentColor' }) })));
});
