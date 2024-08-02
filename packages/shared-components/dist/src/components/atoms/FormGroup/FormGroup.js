"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./FormGroup.scss");
var classnames_1 = require("../../../utils/classnames");
var FormGroup = function (_a) {
    var label = _a.label, labelSecondary = _a.labelSecondary, children = _a.children, errorMessage = _a.errorMessage, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.required, required = _c === void 0 ? false : _c, _d = _a.invalid, invalid = _d === void 0 ? true : _d, _e = _a.disabled, disabled = _e === void 0 ? false : _e, invalidLabelSecondary = _a.invalidLabelSecondary;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-form-group ".concat(className, " "), children: [(0, jsx_runtime_1.jsxs)("label", { className: 'rf-form-group__inner', children: [label && ((0, jsx_runtime_1.jsxs)("p", { className: (0, classnames_1.classnames)('rf-form-group__label', disabled && 'rf-form-group__label--disabled'), children: [label, required && (0, jsx_runtime_1.jsx)("span", { className: 'rf-form-group__required', children: "*" }), !!labelSecondary &&
                                (0, jsx_runtime_1.jsx)("span", { className: (0, classnames_1.classnames)('rf-form-group__label-secondary', invalidLabelSecondary && 'rf-form-group__message_no_invalidd'), children: labelSecondary })] })), children] }), errorMessage && (0, jsx_runtime_1.jsx)("p", { className: (0, classnames_1.classnames)('rf-form-group__message', !invalid && 'rf-form-group__message_no-invalid'), children: errorMessage })] }));
};
exports.default = FormGroup;
