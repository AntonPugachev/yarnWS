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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.5 11.9226C12.5 10.8605 13.361 9.99951 14.4231 9.99951L29.5 9.99951C30.8807 9.99951 32 11.1188 32 12.4995V21.5765C32 22.6386 31.139 23.4996 30.077 23.4996C29.7583 23.4996 29.5 23.2413 29.5 22.9227V16.4995C29.5 14.2904 27.7108 12.4995 25.5017 12.4995L13.0715 12.4995C12.7529 12.4995 12.5 12.2412 12.5 11.9226ZM10 27.9998C8.89543 27.9998 8 27.1044 8 25.9998L8.00004 16.4998C8.00005 15.3953 8.89547 14.4998 10 14.4998H25.4999C26.6045 14.4998 27.4999 15.3953 27.4999 16.4998L27.4999 25.9998C27.4999 27.1044 26.6045 27.9998 25.4999 27.9998L10 27.9998ZM21.932 18.5676C22.3225 18.9581 22.3225 19.5913 21.932 19.9818L17.9722 23.9416C17.4254 24.4883 16.539 24.4883 15.9923 23.9416L13.8003 21.7496C13.4097 21.359 13.4097 20.7259 13.8003 20.3353C14.1908 19.9448 14.8239 19.9448 15.2145 20.3353L16.9822 22.1031L20.5178 18.5676C20.9083 18.177 21.5415 18.177 21.932 18.5676Z', fill: 'currentColor' }) })));
});
