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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.079 4.5548C14.2008 5.08858 16.4205 5.08858 18.5423 4.5548L19.2613 4.37377C19.6847 4.26719 20.0765 4.63281 19.9757 5.06006C19.5296 6.95113 18.7969 8.18189 18.1383 9.83849C18.0041 10.176 18.0317 10.7363 18.1383 11.0581C18.4194 11.9064 19.3544 13.2335 19.8475 13.8994C20.0346 14.152 20.0656 14.4921 19.8497 14.7203C19.6013 14.9827 19.1856 15.3131 18.5423 15.529C16.4675 16.2251 14.2008 16.0627 12.079 15.529C9.31667 14.834 8.03009 14.733 6.70551 15.2261C6.27501 15.3864 6.01976 15.8206 6.01976 16.2824V18.9839C6.01976 19.545 5.56763 20 5.00988 20C4.45213 20 4 19.545 4 18.9839V6.18061C4 2.92873 10.5491 4.16992 12.079 4.5548Z', fill: 'currentColor' }) })));
});
