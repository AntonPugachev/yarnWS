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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.75 17.0355L8.75 25.5C8.75 26.8807 9.86929 28 11.25 28L28.75 28C30.1307 28 31.25 26.8807 31.25 25.5L31.25 14.5C31.25 13.1193 30.1307 12 28.75 12L13.7855 12C13.1225 12 12.4866 12.2634 12.0178 12.7322L9.48223 15.2678C9.01339 15.7366 8.75 16.3725 8.75 17.0355ZM23.6059 22.3738C23.928 22.3738 24.1661 22.674 24.0928 22.9876L23.9229 23.7139C23.87 23.9401 23.6683 24.1001 23.4361 24.1001H15.3805C15.0583 24.1001 14.8202 23.7999 14.8936 23.4863L15.0634 22.7599C15.1163 22.5338 15.318 22.3738 15.5503 22.3738L23.6059 22.3738ZM24.3628 19.1369C24.6849 19.1369 24.923 19.4371 24.8496 19.7508L24.6798 20.4771C24.6269 20.7033 24.4252 20.8633 24.1929 20.8633H16.1373C15.8152 20.8633 15.5771 20.5631 15.6505 20.2494L15.8203 19.5231C15.8732 19.2969 16.0749 19.1369 16.3072 19.1369L24.3628 19.1369ZM25.6065 16.5139C25.6799 16.2003 25.4418 15.9001 25.1197 15.9001L17.0641 15.9001C16.8318 15.9001 16.6301 16.0601 16.5772 16.2863L16.4074 17.0126C16.334 17.3262 16.5721 17.6264 16.8942 17.6264L24.9498 17.6264C25.1821 17.6264 25.3838 17.4664 25.4367 17.2403L25.6065 16.5139Z', fill: 'currentColor' }) })));
});
