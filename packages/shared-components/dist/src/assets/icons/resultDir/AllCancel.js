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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M2.34255 6.43039C2 7.10268 2 7.98276 2 9.74293V13.9715C2 15.7317 2 16.6117 2.34255 17.284C2.64387 17.8754 3.12466 18.3562 3.71603 18.6575C4.38832 19.0001 5.26841 19.0001 7.02857 19.0001H16.9714C18.7316 19.0001 19.6117 19.0001 20.284 18.6575C20.8753 18.3562 21.3561 17.8754 21.6574 17.284C22 16.6117 22 15.7317 22 13.9715V9.74293C22 7.98276 22 7.10268 21.6574 6.43039C21.3561 5.83902 20.8753 5.35822 20.284 5.05691C19.6117 4.71436 18.7316 4.71436 16.9714 4.71436H7.02857C5.26841 4.71436 4.38832 4.71436 3.71603 5.05691C3.12466 5.35822 2.64387 5.83902 2.34255 6.43039ZM15.2988 8.55986C15.0035 8.27428 14.5327 8.28215 14.2471 8.57744L11.9446 10.9581L9.64222 8.57744C9.35664 8.28215 8.88576 8.27428 8.59047 8.55986C8.29519 8.84544 8.28732 9.31632 8.5729 9.61161L10.9099 12.0281L8.57278 14.4446C8.2872 14.7399 8.29507 15.2108 8.59035 15.4964C8.88564 15.7819 9.35652 15.7741 9.6421 15.4788L11.9446 13.098L14.2472 15.4788C14.5328 15.7741 15.0037 15.7819 15.2989 15.4964C15.5942 15.2108 15.6021 14.7399 15.3165 14.4446L12.9794 12.0281L15.3164 9.61161C15.602 9.31632 15.5941 8.84544 15.2988 8.55986Z', fill: 'currentColor' }) })));
});
