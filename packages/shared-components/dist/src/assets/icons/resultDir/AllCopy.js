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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M7 4C7 2.89543 7.89543 2 9 2H20C21.1046 2 22 2.89543 22 4V15C22 16.1046 21.1046 17 20 17H9C7.89543 17 7 16.1046 7 15V4ZM9.5 4C9.22386 4 9 4.22386 9 4.5V14.5C9 14.7761 9.22386 15 9.5 15H19.5C19.7761 15 20 14.7761 20 14.5V4.5C20 4.22386 19.7761 4 19.5 4H9.5Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M4 7H5V9H4.5C4.22386 9 4 9.22386 4 9.5V19.5C4 19.7761 4.22386 20 4.5 20H14.5C14.7761 20 15 19.7761 15 19.5V19H17V20C17 21.1046 16.1046 22 15 22H4C2.89543 22 2 21.1046 2 20V9C2 7.89543 2.89543 7 4 7Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M17 17V15H15V17H17Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9 9H7V7H9V9Z', fill: 'currentColor' })] })));
});
