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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M6.04792 5.10228L6.92601 4.25682C7.47481 3.7284 8.33454 3.85243 8.75319 4.50692L10.1616 6.95816C10.5274 7.55776 10.4054 8.30979 9.85861 8.73048L9.09234 9.36253C8.81794 9.62674 8.7041 9.94787 8.85854 10.3279C9.5759 12.2812 11.1083 13.8727 12.9781 14.7163C13.2993 14.8301 13.6773 14.7834 13.9517 14.5192L14.6123 13.7774C15.0534 13.2469 15.8095 13.1535 16.3948 13.5417L18.7361 15.0947C19.3743 15.5378 19.4657 16.4016 18.9169 16.93L18.0388 17.7755C16.5571 19.2022 14.2888 19.4825 12.5287 18.5333L12.1019 18.3097C9.00655 16.7425 6.57789 14.1103 5.12891 10.9578L4.97446 10.5777C4.09451 8.67527 4.56617 6.529 6.04792 5.10228Z', fill: 'currentColor' }) })));
});
