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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M19.498 18.8999C19.0838 18.8999 18.748 19.2358 18.748 19.6501C18.7481 20.0642 19.0839 20.3999 19.498 20.3999H21.4988C21.9131 20.3999 22.2489 20.064 22.2488 19.6497C22.2487 19.2356 21.913 18.8999 21.4988 18.8999H19.498Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8.5 13C8.5 12.1716 9.17157 11.5 10 11.5H31C31.8284 11.5 32.5 12.1716 32.5 13C32.5 13.8284 31.8284 14.5 31 14.5H30.1047C29.7708 14.5 29.5 14.7708 29.5 15.1047V15.9674C29.5 15.9759 29.4999 15.9844 29.4996 15.9929V27.4998C29.4996 28.8805 28.3803 29.9998 26.9996 29.9998H13.9996C12.6189 29.9998 11.4996 28.8805 11.4996 27.4998V15.0237C11.4882 14.7326 11.2485 14.5 10.9545 14.5H10C9.17157 14.5 8.5 13.8284 8.5 13ZM19.2497 15.8999C18.499 15.8999 17.845 15.4863 17.5029 14.8746C17.404 14.6978 17.5474 14.5 17.75 14.5H23.2497C23.4523 14.5 23.5957 14.6978 23.4968 14.8746C23.1548 15.4863 22.5007 15.8999 21.75 15.8999H19.2497ZM17.248 19.6504C17.2478 18.4076 18.2552 17.3999 19.498 17.3999H21.4988C22.7413 17.3999 23.7486 18.407 23.7488 19.6494C23.7491 20.8923 22.7416 21.8999 21.4988 21.8999H19.498C18.2556 21.8999 17.2483 20.8928 17.248 19.6504ZM17.9997 23.3999C17.7397 23.3999 17.4983 23.5345 17.3617 23.7556C17.225 23.9767 17.2126 24.2528 17.3289 24.4853L17.8289 25.4853C18.0141 25.8558 18.4646 26.006 18.8351 25.8207C19.1022 25.6872 19.2548 25.4157 19.2497 25.1357C19.2476 25.0183 19.3302 24.8999 19.4476 24.8999H22.9997C23.4139 24.8999 23.7497 24.5641 23.7497 24.1499C23.7497 23.7357 23.4139 23.3999 22.9997 23.3999H17.9997Z', fill: 'currentColor' })] })));
});
