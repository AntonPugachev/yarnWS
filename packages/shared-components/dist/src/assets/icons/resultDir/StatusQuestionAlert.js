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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 25 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.5 21C17.4706 21 21.5 16.9706 21.5 12C21.5 7.02944 17.4706 3 12.5 3C7.52944 3 3.5 7.02944 3.5 12C3.5 16.9706 7.52944 21 12.5 21ZM10.2514 9.88668C9.78264 9.88668 9.39384 9.49139 9.52607 9.04163C9.88426 7.82335 10.9531 6.99981 12.6515 6.99981C14.5587 6.99981 15.8324 8.12051 15.8324 9.68098C15.8324 10.7662 15.3034 11.5252 14.3568 12.0997C13.445 12.6388 13.1875 13.0076 13.1875 13.7169C13.1875 13.9441 13.0033 14.1283 12.7761 14.1283H12.0763C11.7971 14.1283 11.5696 13.904 11.5657 13.6247C11.5031 12.5749 11.9068 11.9366 12.8673 11.362C13.7304 10.8301 14.0227 10.447 14.0227 9.74482C14.0227 8.99295 13.438 8.44679 12.561 8.44679C11.9525 8.44679 11.491 8.70422 11.2394 9.14398C11.0222 9.52383 10.689 9.88668 10.2514 9.88668ZM13.4102 16.4548C13.4102 17.0152 12.9647 17.462 12.401 17.462C11.8372 17.462 11.3847 17.0152 11.3847 16.4548C11.3847 15.8945 11.8372 15.4547 12.401 15.4547C12.9647 15.4547 13.4102 15.8945 13.4102 16.4548Z', fill: 'currentColor' }) })));
});
