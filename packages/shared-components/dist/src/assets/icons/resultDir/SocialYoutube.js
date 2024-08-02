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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.3146 16.4803C20.1843 17.5463 19.319 18.3717 18.2481 18.4517C17.5984 18.546 14.4809 18.666 12.0046 18.666C9.52836 18.666 6.41179 18.546 5.76207 18.4517C4.69093 18.3718 3.82537 17.5464 3.69464 16.4803C3.53728 15.2492 3.45142 14.0099 3.4375 12.7689V12.5632C3.45142 11.3221 3.53728 10.0829 3.69464 8.85173C3.82537 7.78559 4.69093 6.96023 5.76207 6.8803C6.41179 6.78602 9.52836 6.66602 12.0046 6.66602C14.4809 6.66602 17.5984 6.78602 18.2481 6.8803C19.319 6.96029 20.1843 7.78573 20.3146 8.85173C20.4724 10.0828 20.5583 11.3221 20.5718 12.5632V12.7689C20.5583 14.01 20.4724 15.2492 20.3146 16.4803ZM9.42893 9.23744V16.0946L15.4135 12.5546L9.42893 9.23744Z', fill: 'currentColor' }) })));
});
