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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M11.9981 3C10.4692 3 9.22982 4.23941 9.22982 5.7683V10.6591C9.22982 12.188 10.4692 13.4274 11.9981 13.4274C13.527 13.4274 14.7664 12.188 14.7664 10.6591V5.7683C14.7664 4.23941 13.527 3 11.9981 3Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M5.91191 9.82466C6.46205 9.77598 6.94748 10.1825 6.99617 10.7326C7.0578 11.4291 7.38547 12.5265 8.15652 13.4303C8.89591 14.297 10.0792 15.0331 11.9926 15.0345L11.9982 15.0344L12.0037 15.0345C13.917 15.033 15.1002 14.297 15.8396 13.4303C16.6106 12.5265 16.9383 11.4291 16.9999 10.7326C17.0486 10.1825 17.534 9.77598 18.0842 9.82466C18.6343 9.87334 19.0408 10.3588 18.9921 10.9089C18.9 11.9504 18.4433 13.4598 17.3611 14.7283C16.4022 15.8524 14.9801 16.7512 12.9982 16.9787V19.9447C12.9982 20.497 12.5505 20.9447 11.9982 20.9447C11.4459 20.9447 10.9982 20.497 10.9982 19.9447V16.9787C9.01608 16.7513 7.59392 15.8524 6.63497 14.7283C5.5528 13.4598 5.09612 11.9504 5.00395 10.9089C4.95527 10.3588 5.36178 9.87334 5.91191 9.82466Z', fill: 'currentColor' })] })));
});
