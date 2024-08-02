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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M14.9231 10C13.861 10 13 10.861 13 11.9231C13 12.2417 13.2529 12.5 13.5715 12.5L26.0017 12.5C28.2108 12.5 30 14.2909 30 16.5V22.9232C30 23.2418 30.2583 23.5001 30.577 23.5001C31.639 23.5 32.5 22.6391 32.5 21.577V12.5C32.5 11.1193 31.3807 10 30 10H14.9231Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.5 26.0003C8.5 27.1049 9.39543 28.0003 10.5 28.0003L25.9999 28.0003C27.1045 28.0003 27.9999 27.1049 27.9999 26.0003L27.9999 16.5003C27.9999 15.3958 27.1045 14.5003 25.9999 14.5003H10.5C9.39547 14.5003 8.50005 15.3958 8.50004 16.5003L8.5 26.0003ZM18.25 18.2502C18.7234 18.2502 19.1071 18.634 19.1071 19.1074V20.3931H20.3929C20.8662 20.3931 21.25 20.7768 21.25 21.2502C21.25 21.7236 20.8662 22.1074 20.3929 22.1074H19.1071V23.3931C19.1071 23.8665 18.7234 24.2502 18.25 24.2502C17.7766 24.2502 17.3928 23.8665 17.3928 23.3931V22.1074H16.1071C15.6338 22.1074 15.25 21.7236 15.25 21.2502C15.25 20.7768 15.6338 20.3931 16.1071 20.3931H17.3928V19.1074C17.3928 18.634 17.7766 18.2502 18.25 18.2502Z', fill: 'currentColor' })] })));
});
