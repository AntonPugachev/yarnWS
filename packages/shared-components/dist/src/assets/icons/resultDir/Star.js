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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M19.1354 9.79121C19.6691 8.62135 21.331 8.62135 21.8647 9.79121L23.8742 14.1958C24.2217 14.9574 24.9409 15.4829 25.7721 15.5826L30.5596 16.1565C31.8258 16.3082 32.3371 17.8706 31.4055 18.7415L27.8375 22.0775C27.2325 22.6431 26.9619 23.4807 27.1216 24.2934L28.0659 29.0981C28.3131 30.3558 26.9709 31.3241 25.8553 30.6928L21.6821 28.3311C20.9487 27.916 20.0514 27.916 19.318 28.3311L15.1448 30.6928C14.0293 31.3241 12.687 30.3558 12.9342 29.0981L13.8785 24.2934C14.0382 23.4807 13.7676 22.6431 13.1626 22.0775L9.59458 18.7415C8.66306 17.8706 9.1743 16.3082 10.4405 16.1565L15.228 15.5826C16.0592 15.4829 16.7784 14.9574 17.1259 14.1958L19.1354 9.79121Z', fill: 'currentColor' }) })));
});
