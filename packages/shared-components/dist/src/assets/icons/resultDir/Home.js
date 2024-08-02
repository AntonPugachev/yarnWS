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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M17.6437 28.7821V25.7152C17.6437 24.9381 18.2757 24.3067 19.0584 24.3018H21.9326C22.7189 24.3018 23.3563 24.9346 23.3563 25.7152V28.7732C23.3562 29.4473 23.904 29.9951 24.5829 30H26.5438C27.4596 30.0023 28.3388 29.6428 28.9872 29.0007C29.6356 28.3586 30 27.4868 30 26.5775V17.8658C30 17.1314 29.6721 16.4347 29.1046 15.9635L22.443 10.6743C21.2785 9.74912 19.6154 9.77901 18.4854 10.7454L11.967 15.9635C11.3727 16.4208 11.0176 17.1196 11 17.8658V26.5686C11 28.4637 12.5474 30 14.4562 30H16.3723C16.6992 30.0023 17.0135 29.8751 17.2455 29.6464C17.4775 29.4178 17.6079 29.1067 17.6079 28.7821H17.6437Z', fill: 'currentColor' }) })));
});
