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
require("./Row.scss");
var Row = function (_a) {
    var children = _a.children, _b = _a.gap, gap = _b === void 0 ? 0 : _b, _c = _a.mb, mb = _c === void 0 ? 0 : _c, _d = _a.align, align = _d === void 0 ? 'top' : _d, _e = _a.justify, justify = _e === void 0 ? 'left' : _e, _f = _a.className, className = _f === void 0 ? '' : _f, props = __rest(_a, ["children", "gap", "mb", "align", "justify", "className"]);
    var alignClass = '';
    switch (align) {
        case 'top':
            alignClass = 'rf-row--top';
            break;
        case 'middle':
            alignClass = 'rf-row--middle';
            break;
        case 'bottom':
            alignClass = 'rf-row--bottom';
            break;
        default:
            alignClass = '';
    }
    var justifyClass = '';
    switch (justify) {
        case 'left':
            justifyClass = 'rf-row--left';
            break;
        case 'center':
            justifyClass = 'rf-row--center';
            break;
        case 'right':
            justifyClass = 'rf-row--right';
            break;
        case 'between':
            justifyClass = 'rf-row--between';
            break;
        case 'around':
            justifyClass = 'rf-row--around';
            break;
        default:
            justifyClass = '';
    }
    return ((0, jsx_runtime_1.jsx)("div", __assign({}, props, { className: "rf-row ".concat(alignClass, " ").concat(justifyClass, " ").concat(className), style: { margin: "0 -".concat(gap, "px ").concat(mb, "px") }, children: children })));
};
exports.default = Row;
