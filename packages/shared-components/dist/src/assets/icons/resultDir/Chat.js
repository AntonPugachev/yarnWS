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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 10C14.4772 10 10 14.4772 10 20C10 25.5228 14.4772 30 20 30H30V20C30 14.4772 25.5228 10 20 10ZM17.2727 20.4545C17.2727 21.2076 16.6622 21.8182 15.909 21.8182C15.1559 21.8182 14.5454 21.2076 14.5454 20.4545C14.5454 19.7014 15.1559 19.0909 15.909 19.0909C16.6622 19.0909 17.2727 19.7014 17.2727 20.4545ZM20.4546 21.8182C21.2077 21.8182 21.8182 21.2076 21.8182 20.4545C21.8182 19.7014 21.2077 19.0909 20.4546 19.0909C19.7015 19.0909 19.0909 19.7014 19.0909 20.4545C19.0909 21.2076 19.7015 21.8182 20.4546 21.8182ZM26.3639 20.4545C26.3639 21.2076 25.7533 21.8182 25.0002 21.8182C24.2471 21.8182 23.6366 21.2076 23.6366 20.4545C23.6366 19.7014 24.2471 19.0909 25.0002 19.0909C25.7533 19.0909 26.3639 19.7014 26.3639 20.4545Z', fill: 'currentColor' }) })));
});
