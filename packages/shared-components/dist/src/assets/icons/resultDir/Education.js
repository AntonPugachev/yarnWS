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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M17.6685 10.8502C18.8336 10.3093 20.1742 10.292 21.3528 10.8028L31.3239 15.1236C32.5286 15.6456 32.5286 17.3542 31.3239 17.8762L21.3528 22.197C20.1742 22.7077 18.8336 22.6905 17.6685 22.1496L9.56982 18.3895V23.9999C9.56982 24.5522 9.12211 24.9999 8.56982 24.9999C8.01754 24.9999 7.56982 24.5522 7.56982 23.9999V16.8454C7.56983 15.9999 7.79655 15.4336 8.43035 15.1394L17.6685 10.8502ZM11.5 25.9999V21.4907L16.8263 23.9636C18.5091 24.745 20.4456 24.7699 22.148 24.0322L28.5 21.2797V25.9999C28.5 28.7614 24.6944 30.9999 20 30.9999C15.3056 30.9999 11.5 28.7614 11.5 25.9999Z', fill: 'currentColor' }) })));
});
