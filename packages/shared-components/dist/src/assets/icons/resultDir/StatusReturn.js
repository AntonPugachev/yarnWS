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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM14.7512 14.8373C14.025 15.5635 13.0218 16.0126 11.9137 16.0126C9.69759 16.0126 7.90104 14.2161 7.90104 11.9999C7.90104 9.78377 9.69759 7.98723 11.9137 7.98723C13.8575 7.98723 15.4784 9.36922 15.8476 11.2042L14.8146 10.4994C14.5095 10.2912 14.0934 10.3698 13.8852 10.6749C13.677 10.98 13.7556 11.3961 14.0607 11.6042L16.4045 13.2035C16.7096 13.4117 17.1257 13.3331 17.3339 13.028L18.9331 10.6842C19.1413 10.3791 19.0627 9.96304 18.7576 9.75486C18.4525 9.54668 18.0364 9.62524 17.8283 9.93034L17.1545 10.9177C16.6541 8.48167 14.4979 6.64966 11.9137 6.64966C8.95887 6.64966 6.56348 9.04506 6.56348 11.9999C6.56348 14.9548 8.95887 17.3502 11.9137 17.3502C13.3912 17.3502 14.7288 16.7514 15.697 15.7831L14.7512 14.8373Z', fill: '#FF8C19' }) })));
});
