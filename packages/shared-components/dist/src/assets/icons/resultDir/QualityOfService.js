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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 41', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M27.0843 16.5152C27.0843 20.6522 23.7305 24.0059 19.5935 24.0059C15.4565 24.0059 12.1028 20.6522 12.1028 16.5152C12.1028 12.3781 15.4565 9.02441 19.5935 9.02441C23.7305 9.02441 27.0843 12.3781 27.0843 16.5152ZM9.14477 27.4604L12.0982 22.4485C13.7836 24.5747 16.3545 25.9671 19.2536 26.0684L16.1496 31.3537C15.7581 32.0203 14.8003 32.0374 14.3853 31.3852L13.1848 29.4987C12.9949 29.2004 12.6658 29.0197 12.3122 29.0197H10.0358C9.23555 29.0197 8.73849 28.1498 9.14477 27.4604ZM23.8514 31.3537L20.7128 26.0096C23.557 25.6779 26.02 24.0977 27.5393 21.8316L30.8563 27.4604C31.2625 28.1498 30.7655 29.0197 29.9652 29.0197H27.6888C27.3352 29.0197 27.0061 29.2004 26.8163 29.4987L25.6158 31.3852C25.2007 32.0374 24.2429 32.0203 23.8514 31.3537Z', fill: 'currentColor' }) })));
});
