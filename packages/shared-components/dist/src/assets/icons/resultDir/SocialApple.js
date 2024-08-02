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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M15.4492 7.24873C16.7227 7.34954 17.8871 8.00653 18.6318 9.04454C17.4981 9.67731 16.7793 10.8584 16.7382 12.1561C16.7546 13.64 17.7063 14.9517 19.1119 15.4276C19.1119 15.4276 17.2361 19.686 15.138 19.686C13.9556 19.686 13.8756 19.0281 12.3021 19.0281C10.933 19.0281 10.4796 19.686 9.43944 19.686C7.44805 19.686 4.8877 15.5343 4.8877 12.1561C4.8877 8.65337 7.48361 7.24873 9.1105 7.24873C10.5418 7.24873 11.1375 8.04885 12.2843 8.04885C13.2533 8.04885 14.0179 7.24873 15.4492 7.24873ZM15.1202 3.66602C15.2085 4.60851 14.9067 5.54601 14.2851 6.25997C13.6636 6.97393 12.7766 7.40198 11.8309 7.44432C11.5464 5.25735 13.6445 3.78159 15.1202 3.66602Z', fill: 'currentColor' }) })));
});
