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
require("./Radio.scss");
var classnames_1 = require("../../../utils/classnames");
var Radio = function (_a) {
    var label = _a.label, value = _a.value, _b = _a.icon, icon = _b === void 0 ? true : _b, _c = _a.fullWidth, fullWidth = _c === void 0 ? true : _c, props = __rest(_a, ["label", "value", "icon", "fullWidth"]);
    return ((0, jsx_runtime_1.jsxs)("label", { className: (0, classnames_1.classnames)('rf-radio', props.className, props.disabled && 'disabled', fullWidth && 'rf-radio--fullwidth'), children: [(0, jsx_runtime_1.jsx)("input", __assign({}, props, { type: 'radio', className: 'rf-radio__input', value: value })), !!icon && ((0, jsx_runtime_1.jsx)("span", { className: 'rf-radio__circle', children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-radio__mark' }) })), (0, jsx_runtime_1.jsx)("span", { className: 'rf-radio__label', children: label })] }));
};
exports.default = Radio;