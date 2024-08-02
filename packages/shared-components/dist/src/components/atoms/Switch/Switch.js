"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Switch.scss");
var classnames_1 = require("../../../utils/classnames");
var Switch = function (_a) {
    var label = _a.label, helperText = _a.helperText, _b = _a.value, value = _b === void 0 ? false : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, onChange = _a.onChange, _d = _a.size, size = _d === void 0 ? 'm' : _d, _e = _a.reverse, reverse = _e === void 0 ? false : _e, _f = _a.between, between = _f === void 0 ? false : _f;
    var _g = (0, react_1.useState)(value), s = _g[0], toggle = _g[1];
    (0, react_1.useEffect)(function () {
        toggle(value);
    }, [value]);
    var changeState = function () {
        if (!disabled) {
            onChange && onChange(!s);
            toggle(!s);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("button", { type: 'button', className: (0, classnames_1.classnames)('rf-switch', "rf-switch--".concat(size), disabled && 'rf-switch--disable', reverse && 'rf-switch--reverse', between && 'rf-switch--between'), onClick: changeState, children: [(0, jsx_runtime_1.jsx)("div", { className: "rf-switch__toggle ".concat(s ? 'on' : 'off'), children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-switch__circle' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-switch__content', children: [label && (0, jsx_runtime_1.jsx)("p", { className: 'rf-switch__label', children: label }), helperText && (0, jsx_runtime_1.jsx)("p", { className: 'rf-switch__helper-text', children: helperText })] })] }));
};
exports.default = Switch;
