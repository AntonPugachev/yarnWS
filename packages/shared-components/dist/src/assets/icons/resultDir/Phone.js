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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M12.3137 11.1737L13.4663 10.0639C14.1867 9.37034 15.3152 9.53315 15.8647 10.3922L17.7133 13.6098C18.1935 14.3968 18.0334 15.3839 17.3157 15.9361L16.3099 16.7658C15.9497 17.1126 15.8003 17.5341 16.003 18.033C16.9446 20.5968 18.956 22.6859 21.4104 23.7932C21.8319 23.9426 22.3281 23.8813 22.6883 23.5345L23.5554 22.5607C24.1344 21.8645 25.1268 21.7418 25.8952 22.2514L28.9684 24.2898C29.8061 24.8715 29.9261 26.0053 29.2057 26.6989L28.0531 27.8087C26.1081 29.6814 23.1308 30.0494 20.8205 28.8034L20.2603 28.5099C16.1973 26.4527 13.0094 22.9977 11.1074 18.8597L10.9047 18.3608C9.74967 15.8636 10.3688 13.0464 12.3137 11.1737Z', fill: 'currentColor' }) })));
});
