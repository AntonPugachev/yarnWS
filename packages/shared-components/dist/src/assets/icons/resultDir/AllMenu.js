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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M1.99609 5.99707C1.99609 5.44479 2.44381 4.99707 2.99609 4.99707H21.0036C21.5559 4.99707 22.0036 5.44479 22.0036 5.99707C22.0036 6.54935 21.5559 6.99707 21.0036 6.99707H2.99609C2.44381 6.99707 1.99609 6.54935 1.99609 5.99707ZM1.99609 12C1.99609 11.4477 2.44381 11 2.99609 11H17.0019C17.5542 11 18.0019 11.4477 18.0019 12C18.0019 12.5523 17.5542 13 17.0019 13H2.99609C2.44381 13 1.99609 12.5523 1.99609 12ZM1.99609 18.0024C1.99609 17.4502 2.44381 17.0024 2.99609 17.0024H13.0003C13.5525 17.0024 14.0003 17.4502 14.0003 18.0024C14.0003 18.5547 13.5525 19.0024 13.0003 19.0024H2.99609C2.44381 19.0024 1.99609 18.5547 1.99609 18.0024Z', fill: 'currentColor' }) })));
});
