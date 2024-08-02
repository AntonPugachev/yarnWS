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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M26.9998 17.6004V15.4004C26.9998 11.8004 24.0998 8.90039 20.4998 8.90039C16.8998 8.90039 13.9998 11.8004 13.9998 15.4004V17.6004C12.4998 17.6004 11.2998 18.8004 11.2998 20.3004V28.4004C11.2998 29.9004 12.4998 31.1004 13.9998 31.1004H26.9998C28.4998 31.1004 29.6998 29.9004 29.6998 28.4004V20.3004C29.6998 18.8004 28.4998 17.6004 26.9998 17.6004ZM24.7998 17.6004V15.4004C24.7998 13.0004 22.8998 11.1004 20.4998 11.1004C18.0998 11.1004 16.1998 13.0004 16.1998 15.4004V17.6004H24.7998ZM22.0998 23.4004C22.0998 24.0004 21.7998 24.5004 21.2998 24.8004V26.6004C21.2998 27.0004 20.8998 27.4004 20.4998 27.4004C20.0998 27.4004 19.6998 27.0004 19.6998 26.6004V24.8004C19.1998 24.5004 18.8998 24.0004 18.8998 23.4004C18.8998 22.5004 19.5998 21.7004 20.4998 21.7004C21.3998 21.8004 22.0998 22.5004 22.0998 23.4004Z', fill: 'currentColor' }) })));
});
