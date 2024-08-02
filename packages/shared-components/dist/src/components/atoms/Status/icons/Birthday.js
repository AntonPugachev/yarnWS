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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM9.1383 4.63438C8.64299 4.00397 7.65816 4.01877 7.14032 4.63081C7.12138 4.65319 7.10269 4.67585 7.08424 4.69881C6.46196 5.47337 6.97461 6.74006 8.11723 6.75791H5.58902C5.20438 6.75791 4.89258 7.06971 4.89258 7.45435V8.67311H15.107V7.45435C15.107 7.06971 14.7952 6.75791 14.4106 6.75791H11.8566C13.0177 6.75791 13.541 5.47882 12.9143 4.69881C12.8959 4.67585 12.8772 4.65319 12.8582 4.63081C12.3404 4.01877 11.3556 4.00397 10.8603 4.63438C10.4363 5.17391 10.2485 5.78686 9.99932 6.75791C9.7502 5.78686 9.5622 5.17391 9.1383 4.63438ZM15.107 9.48563H10.4061V14.6509H14.4106C14.7952 14.6509 15.107 14.3391 15.107 13.9544V9.48563ZM9.59354 9.48563H4.89258V13.9544C4.89258 14.3391 5.20438 14.6509 5.58902 14.6509H9.59354V9.48563Z', fill: 'currentColor' }) })));
});
