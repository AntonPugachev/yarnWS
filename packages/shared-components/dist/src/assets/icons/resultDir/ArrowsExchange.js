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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10.4178 3.72665C10.8191 3.34722 10.8368 2.71431 10.4574 2.31299C10.078 1.91168 9.44507 1.89393 9.04376 2.27336L4.81299 6.27336C4.6132 6.46224 4.5 6.72506 4.5 7C4.5 7.27495 4.6132 7.53776 4.81299 7.72665L9.04376 11.7266C9.44507 12.1061 10.078 12.0883 10.4574 11.687C10.8368 11.2857 10.8191 10.6528 10.4178 10.2734L8.01327 8H18.5C19.0523 8 19.5 7.55229 19.5 7C19.5 6.44772 19.0523 6 18.5 6H8.01327L10.4178 3.72665ZM13.5822 13.7266C13.1809 13.3472 13.1632 12.7143 13.5426 12.313C13.922 11.9117 14.5549 11.8939 14.9562 12.2734L19.187 16.2734C19.3868 16.4622 19.5 16.7251 19.5 17C19.5 17.2749 19.3868 17.5378 19.187 17.7266L14.9562 21.7267C14.5549 22.1061 13.922 22.0883 13.5426 21.687C13.1632 21.2857 13.1809 20.6528 13.5822 20.2734L15.9867 18H5.5C4.94771 18 4.5 17.5523 4.5 17C4.5 16.4477 4.94771 16 5.5 16H15.9867L13.5822 13.7266Z', fill: 'currentColor' }) })));
});