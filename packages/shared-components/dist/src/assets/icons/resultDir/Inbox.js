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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M25.4881 10C26.9781 10 28.4114 10.5889 29.4658 11.6456C30.5214 12.7 31.1114 14.1222 31.1114 15.6111V24.3889C31.1114 27.4889 28.5892 30 25.4881 30H14.5114C11.4103 30 8.88916 27.4889 8.88916 24.3889V15.6111C8.88916 12.5111 11.3992 10 14.5114 10H25.4881ZM27.2558 17.2667L27.3447 17.1778C27.6103 16.8556 27.6103 16.3889 27.3325 16.0667C27.1781 15.9011 26.9658 15.8 26.7447 15.7778C26.5114 15.7656 26.2892 15.8444 26.1214 16L21.1114 20C20.4669 20.5344 19.5436 20.5344 18.8892 20L13.8892 16C13.5436 15.7444 13.0658 15.7778 12.7781 16.0778C12.4781 16.3778 12.4447 16.8556 12.6992 17.1889L12.8447 17.3333L17.9003 21.2778C18.5225 21.7667 19.2769 22.0333 20.0669 22.0333C20.8547 22.0333 21.6225 21.7667 22.2436 21.2778L27.2558 17.2667Z', fill: 'currentColor' }) })));
});
