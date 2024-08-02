"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Preloader.scss");
var classnames_1 = require("../../../utils/classnames");
var Preloader = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c, _d = _a.variant, variant = _d === void 0 ? 'default' : _d;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('preloader', "preloader--".concat(size), "preloader--".concat(variant), className), children: (0, jsx_runtime_1.jsx)("svg", { className: 'preloader__circle', viewBox: '0 0 50 50', children: (0, jsx_runtime_1.jsx)("circle", { className: 'preloader__path', cx: '25', cy: '25', r: '20', fill: 'none', strokeWidth: '5' }) }) }));
};
exports.default = Preloader;
