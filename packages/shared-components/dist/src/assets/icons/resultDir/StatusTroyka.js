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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 25 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M5.07019 7.16077L4.5 6.84444C4.5 6.84444 6.1 4 10.9007 4C20.5 4 20.5 15.3778 20.5 15.3778V19C20.5 19.5523 20.0523 20 19.5 20H11.134C10.564 20 10.1092 19.5242 10.1351 18.9547L10.4264 12.5333L8.31047 13.346C7.91428 13.4982 7.6573 13.8839 7.66943 14.3081L7.6706 14.3492C7.6867 14.9125 7.23449 15.3778 6.67101 15.3778H5.5C4.94772 15.3778 4.5 14.9301 4.5 14.3778V14.0479C4.5 13.9865 4.50566 13.9252 4.51689 13.8648L5.56817 8.21825C5.64691 7.79534 5.44636 7.36946 5.07019 7.16077Z', fill: 'currentColor' }) })));
});
