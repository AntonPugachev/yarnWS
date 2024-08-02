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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = require("../../../utils/classnames");
require("./Shimmer.scss");
var Shimmer = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? 'title' : _b, _c = _a.theme, theme = _c === void 0 ? 'light' : _c, width = _a.width, height = _a.height, style = _a.style;
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-shimmer', "rf-shimmer--".concat(variant), "rf-shimmer--".concat(theme)), style: __assign({ width: width, height: height }, style), children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-shimmer__wrap rf-shimmer__avatar', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-shimmer__inner' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-shimmer__wrap', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-shimmer__inner' }) })] });
};
exports.default = Shimmer;
