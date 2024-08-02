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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Timepicker.scss");
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var Input_1 = __importDefault(require("../../atoms/Input"));
var Button_1 = __importDefault(require("../../atoms/Button"));
var TimeElement_1 = __importStar(require("./TimeElement"));
var Menu_1 = __importDefault(require("../Menu"));
var classnames_1 = require("../../../utils/classnames");
var indexIcon_1 = require("../../../indexIcon");
// FIXME: Form elements must have labels
// FIXME: Elements must have sufficient color contrast
var Timepicker = function (_a) {
    var className = _a.className, _b = _a.initialValue, initialValue = _b === void 0 ? '' : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, _d = _a.invalid, invalid = _d === void 0 ? false : _d, onChangeValue = _a.onChangeValue, _e = _a.min, min = _e === void 0 ? '00:00' : _e, _f = _a.max, max = _f === void 0 ? '24:00' : _f, _g = _a.isMinified, isMinified = _g === void 0 ? false : _g, _h = _a.children, children = _h === void 0 ? null : _h, props = __rest(_a, ["className", "initialValue", "disabled", "invalid", "onChangeValue", "min", "max", "isMinified", "children"]);
    var _j = (0, react_1.useState)(initialValue), time = _j[0], setTime = _j[1];
    (0, react_1.useEffect)(function () {
        setTime(initialValue);
    }, [initialValue]);
    var onChange = (0, react_1.useCallback)(function (e) {
        var val = e.target.value;
        setTime(val);
        if (val && !~val.indexOf('_')) {
            onChangeValue && onChangeValue(val, props.id || '');
        }
    }, [onChangeValue, props.id]);
    var updateTime = (0, react_1.useCallback)(function (newTime) {
        setTime(newTime);
        onChangeValue && onChangeValue(newTime, props.id || '');
    }, [onChangeValue, props.id]);
    var onClearValue = (0, react_1.useCallback)(function () { return setTime(''); }, []);
    var content = (0, jsx_runtime_1.jsx)(TimeElement_1.default, { updateTime: updateTime, value: time, min: min, max: max });
    var emptyValue = !time || time === '' || time === '__:__';
    var getMask = (0, react_1.useCallback)(function () {
        var hours = (0, TimeElement_1.getTime)(time)[0];
        var startsWithTwo = hours === null || hours === void 0 ? void 0 : hours.startsWith('2');
        return [
            /[0-2]/,
            startsWithTwo ? /[0-3]/ : /[0-9]/,
            ':',
            /[0-5]/,
            /[0,5,8]/
        ];
    }, [time]);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-timepicker__wrapper', className, disabled && 'rf-timepicker--disabled', emptyValue && 'rf-timepicker--empty', isMinified && 'rf-timepicker-minified'), children: (0, jsx_runtime_1.jsxs)(Menu_1.default, { position: 'bottom', content: content, children: [!children && (0, jsx_runtime_1.jsx)(react_input_mask_1.default, { mask: getMask(), value: time, disabled: disabled, alwaysShowMask: true, readOnly: props.readOnly, onChange: onChange, children: (0, jsx_runtime_1.jsx)(Input_1.default, __assign({ isBorder: !isMinified, "data-testid": 'rf-timepicker__input', disabled: disabled, invalid: invalid }, props)) }), children || (0, jsx_runtime_1.jsx)("div", { className: 'rf-timepicker__menu', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', className: 'rf-timepicker__btn', disabled: disabled, "aria-label": emptyValue ? 'Выбрать время' : 'Сбросить', children: emptyValue ? ((0, jsx_runtime_1.jsx)(indexIcon_1.StatusPending, { className: 'rf-timepicker__icon rf-timepicker__icon-time' })) : ((0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, { className: 'rf-timepicker__icon rf-timepicker__icon-close', onClick: onClearValue })) }) })] }) }));
};
exports.default = Timepicker;
