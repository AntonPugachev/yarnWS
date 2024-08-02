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
var react_1 = require("react");
require("./Checkbox.scss");
var indexIcon_1 = require("../../../indexIcon");
var Checkbox = (0, react_1.forwardRef)(function (_a, ref) {
    var label = _a.label, value = _a.value, _b = _a.icon, icon = _b === void 0 ? true : _b, _c = _a.align, align = _c === void 0 ? 'flex-start' : _c, _d = _a.halfChecked, halfChecked = _d === void 0 ? false : _d, _e = _a.position, position = _e === void 0 ? 'left' : _e, _f = _a.round, round = _f === void 0 ? false : _f, _g = _a.fullWidth, fullWidth = _g === void 0 ? false : _g, _h = _a.titleAtt, titleAtt = _h === void 0 ? '' : _h, props = __rest(_a, ["label", "value", "icon", "align", "halfChecked", "position", "round", "fullWidth", "titleAtt"]);
    var roundClass = round ? 'rf-checkbox__check--round' : '';
    var fullWidthClass = fullWidth ? 'rf-checkbox__check--fullWidth' : '';
    var disabledClass = props.disabled ? 'disabled' : '';
    var alignClass = {
        'flex-start': 'rf-checkbox--flex-start',
        'center': 'rf-checkbox--center',
        'flex-end': 'rf-checkbox--flex-end',
    };
    var showIconClass = icon ? '' : 'rf-checkbox__label--no-icon';
    var positionClass = position === 'left' ? 'rf-checkbox--left' : 'rf-checkbox--right';
    return ((0, jsx_runtime_1.jsxs)("label", { ref: ref, className: "rf-checkbox ".concat(props.className || '', " ").concat(disabledClass, " ").concat(alignClass[align], " ").concat(positionClass, " ").concat(fullWidthClass), children: [(0, jsx_runtime_1.jsx)("input", __assign({}, props, { type: 'checkbox', className: "rf-checkbox__input ".concat(halfChecked ? 'rf-checkbox__input--half-checked' : ''), value: value })), !!icon && (0, jsx_runtime_1.jsx)("span", { className: "rf-checkbox__check ".concat(roundClass), children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-checkbox__mark', children: halfChecked ? (0, jsx_runtime_1.jsx)(indexIcon_1.AllReduce, {}) : (0, jsx_runtime_1.jsx)(indexIcon_1.AllSuccess, {}) }) }), label && (0, jsx_runtime_1.jsx)("div", { title: titleAtt, className: "rf-checkbox__label ".concat(showIconClass), tabIndex: -1, children: label })] }));
});
exports.default = Checkbox;
