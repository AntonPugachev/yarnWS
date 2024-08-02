"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var indexIcon_1 = require("../../../../indexIcon");
var classnames_1 = require("../../../../utils/classnames");
var Stepper_1 = require("../Stepper");
require("./Step.scss");
var icons = {
    'default': (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
    'warning': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusWarning, { size: 'xs' }),
    'error': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInformation, { className: 'rf-step__icon-status--danger', size: 'xs' }),
    'inactive': (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {}),
};
var Step = function (_a) {
    var _b = _a.index, index = _b === void 0 ? 0 : _b, _c = _a.status, status = _c === void 0 ? 'default' : _c, disabled = _a.disabled, children = _a.children, onClick = _a.onClick;
    var _d = (0, Stepper_1.useStepper)(), _e = _d.value, value = _e === void 0 ? 0 : _e, variant = _d.variant, _f = _d.readonly, readonly = _f === void 0 ? false : _f, lastCompletedStep = _d.lastCompletedStep, onChange = _d.onChange;
    var handleClick = function () {
        if (!disabled && !readonly) {
            onClick === null || onClick === void 0 ? void 0 : onClick(index);
            onChange === null || onChange === void 0 ? void 0 : onChange(index);
        }
    };
    var isCurrent = (0, react_1.useMemo)(function () { return value === index; }, [value, index]);
    var isCompleted = (0, react_1.useMemo)(function () { return lastCompletedStep !== undefined ? lastCompletedStep >= index : false; }, [lastCompletedStep, index]);
    return ((0, jsx_runtime_1.jsxs)("div", { role: 'button', onClick: handleClick, className: (0, classnames_1.classnames)('rf-step', "rf-step--".concat(status), "rf-step__variant--".concat(variant), disabled && 'rf-step--disabled', isCurrent && 'rf-step--current', isCompleted && 'rf-step--completed', readonly && 'rf-step--readonly'), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-step__header', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-step__icon', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-step__icon-status', children: isCompleted ?
                                (0, jsx_runtime_1.jsx)(indexIcon_1.StatusReleaseSecondary, { className: 'rf-step__icon-status--active', size: 'xs' }) :
                                icons[status] }) }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-step__line' })] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-step__content', children: children })] }));
};
exports.default = Step;
