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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M22.4843 8.55779L23.2079 9.27924C23.3725 9.44342 23.6395 9.44342 23.8041 9.27924L24.5277 8.55779C24.8858 8.20064 25.3716 8 25.8782 8C27.92 8 28.9426 10.4616 27.4988 11.9013L24.1022 15.288C23.7729 15.6164 23.239 15.6164 22.9097 15.288L19.5132 11.9013C18.0694 10.4616 19.0919 8 21.1338 8C21.6404 8 22.1262 8.20064 22.4843 8.55779ZM25.5069 18.6712C25.5069 18.1275 25.4418 17.5989 25.319 17.0929C25.4276 17.0108 25.532 16.9203 25.6311 16.8214L27.435 15.0227C27.9112 16.1436 28.1747 17.3766 28.1747 18.6712C28.1747 20.6264 27.5737 22.4413 26.5465 23.9412L31.328 28.7227C31.849 29.2437 31.849 30.0882 31.328 30.6092C30.8071 31.1301 29.9625 31.1301 29.4416 30.6092L24.7395 25.907C23.1309 27.2207 21.0761 28.0086 18.8373 28.0086C13.6805 28.0086 9.5 23.8281 9.5 18.6712C9.5 14.2392 12.5879 10.5283 16.7296 9.57275C16.5808 10.4496 16.69 11.3763 17.1106 12.2274C14.2641 12.9882 12.1678 15.5849 12.1678 18.6712C12.1678 22.3547 15.1539 25.3408 18.8373 25.3408C22.5208 25.3408 25.5069 22.3547 25.5069 18.6712Z', fill: 'currentColor' }) })));
});
