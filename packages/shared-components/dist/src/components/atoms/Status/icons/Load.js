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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM12.6188 12.8138C11.8986 13.5339 10.9038 13.9793 9.80492 13.9793C7.60719 13.9793 5.82557 12.1977 5.82557 9.99997C5.82557 7.80223 7.60719 6.02061 9.80492 6.02061C11.7325 6.02061 13.34 7.39112 13.706 9.21085L12.6817 8.51189C12.3791 8.30543 11.9665 8.38335 11.76 8.68591C11.5536 8.98848 11.6315 9.40112 11.934 9.60757L14.2583 11.1935C14.5609 11.4 14.9736 11.3221 15.18 11.0195L16.766 8.69522C16.9724 8.39265 16.8945 7.98001 16.5919 7.77356C16.2894 7.5671 15.8767 7.64502 15.6703 7.94758L15.0021 8.92677C14.5059 6.51094 12.3676 4.69416 9.80492 4.69416C6.87461 4.69416 4.49911 7.06965 4.49911 9.99997C4.49911 12.9303 6.87461 15.3058 9.80492 15.3058C11.2701 15.3058 12.5965 14.7119 13.5567 13.7517L12.6188 12.8138Z', fill: 'currentColor' }) })));
});
