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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 31.5C26.3513 31.5 31.5 26.3513 31.5 20C31.5 13.6487 26.3513 8.5 20 8.5C13.6487 8.5 8.5 13.6487 8.5 20C8.5 26.3513 13.6487 31.5 20 31.5ZM21.4656 14.4484C21.4656 13.639 20.8094 12.9828 20 12.9828C19.1906 12.9828 18.5344 13.639 18.5344 14.4484V20.6344C18.5344 21.0623 18.7213 21.4687 19.0462 21.7472L23.4875 25.554C24.1021 26.0807 25.0273 26.0096 25.554 25.395C26.0808 24.7804 26.0096 23.8552 25.395 23.3284L21.4656 19.9603V14.4484Z', fill: 'currentColor' }) })));
});
