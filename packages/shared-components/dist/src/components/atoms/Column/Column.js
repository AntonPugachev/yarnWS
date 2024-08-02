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
require("./Column.scss");
var Column = function (_a) {
    var children = _a.children, sm = _a.sm, md = _a.md, lg = _a.lg, gap = _a.gap, align = _a.align, _b = _a.className, className = _b === void 0 ? '' : _b, props = __rest(_a, ["children", "sm", "md", "lg", "gap", "align", "className"]);
    /** Класс для выравнивания колонки в контейнере */
    var alignClass = '';
    switch (align) {
        case 'top':
            alignClass = 'rf-col--top';
            break;
        case 'middle':
            alignClass = 'rf-col--middle';
            break;
        case 'bottom':
            alignClass = 'rf-col--bottom';
            break;
        default:
            alignClass = '';
    }
    /** Классы для размеров колонок */
    var smClass = sm ? "rf-col-sm-".concat(sm) : 'rf-col-sm-auto';
    var mdClass = md ? "rf-col-md-".concat(md) : 'rf-col-md-auto';
    var lgClass = lg ? "rf-col-lg-".concat(lg) : 'rf-col-lg-auto';
    return ((0, jsx_runtime_1.jsx)("div", __assign({}, props, { className: "rf-col ".concat(smClass, " ").concat(mdClass, " ").concat(lgClass, " ").concat(alignClass, " ").concat(className), style: {
            paddingLeft: "".concat(gap, "px"),
            paddingRight: "".concat(gap, "px")
        }, children: children })));
};
exports.default = Column;
