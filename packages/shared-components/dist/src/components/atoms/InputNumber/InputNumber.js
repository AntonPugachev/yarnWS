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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./InputNumber.scss");
var Input_1 = __importDefault(require("../Input/Input"));
var helpers_1 = require("../../../utils/helpers");
var InputNumber = (0, react_1.forwardRef)(function (_a, ref) {
    var max = _a.max, _b = _a.defaultValue, defaultValue = _b === void 0 ? '' : _b, _c = _a.separator, separator = _c === void 0 ? ' ' : _c, _d = _a.floatPoints, floatPoints = _d === void 0 ? 0 : _d, _e = _a.groupBy, groupBy = _e === void 0 ? 3 : _e, onInputChange = _a.onInputChange, props = __rest(_a, ["max", "defaultValue", "separator", "floatPoints", "groupBy", "onInputChange"]);
    var input = (0, react_1.useRef)(null);
    var defaultVal = floatPoints === 0 ? defaultValue.toString().split('.')[0] : defaultValue;
    var _f = (0, react_1.useState)(''), inputValue = _f[0], setInputValue = _f[1];
    var _g = (0, react_1.useState)(defaultVal), value = _g[0], setValue = _g[1];
    // -------------------------------------------------------------------------------------------------------------------
    var onChange = function (e) {
        var value = e.target.value;
        /** Исключить все буквы алфавита */
        if (isNaN(+value.replace(/\s/g, ''))) {
            e.preventDefault();
            return;
        }
        if (floatPoints === 0 && value.includes('.')) {
            var idx = value.indexOf('.');
            value = value.slice(0, idx);
        }
        /** Исключить повторение точек */
        var dotMap = { '.': 0 };
        for (var i = 0; i < value.length; i++) {
            if (!dotMap[value[i]]) {
                dotMap[value[i]] = 1;
            }
            else {
                dotMap[value[i]]++;
            }
        }
        if (dotMap['.'] > 1) {
            return;
        }
        var values = value.split('.');
        var value1 = values[0].replace(/\s/g, '');
        var value2 = values[1];
        var result = '';
        if (value1) {
            var integer = +value1;
            /** Исключить экспоненциальные значения и infinity */
            if (integer > Number.MAX_SAFE_INTEGER) {
                return;
            }
            if (value2 && value2.toString().length > floatPoints) {
                value2 = value2.slice(0, floatPoints);
            }
            var float = +value2;
            result = isNaN(float) ?
                (0, helpers_1.numberWithSpaces)(integer, groupBy, separator) :
                [(0, helpers_1.numberWithSpaces)(integer, groupBy, separator), value2].join('.');
        }
        onInputChange && onInputChange(result);
        setValue(result);
    };
    // -------------------------------------------------------------------------------------------------------------------
    var handleDefault = function (v) {
        var val = v.toString();
        if (val.includes('.')) {
            var values = val.split('.');
            var result = [(0, helpers_1.numberWithSpaces)(+values[0]), values[1]].join('.');
            setValue(result);
        }
        else {
            val ? setValue((0, helpers_1.numberWithSpaces)(+val)) : setValue(val);
        }
    };
    (0, react_1.useEffect)(function () {
        if (defaultVal) {
            handleDefault(defaultVal);
        }
    }, [defaultVal]);
    (0, react_1.useEffect)(function () {
        if (max && +value.toString().replace(/\s/g, '') > max) {
            var floatMax = floatPoints === 0 ? max.toString().split('.')[0] : max;
            handleDefault(floatMax);
        }
    }, [value]);
    (0, react_1.useEffect)(function () {
        setInputValue(value.toString().replace(/\s/g, ''));
    }, [value]);
    (0, react_1.useEffect)(function () {
        if (!input.current) {
            return;
        }
        var event;
        if (typeof (Event) === 'function') {
            event = new Event('change');
        }
        else {
            event = document.createEvent('Event');
            event.initEvent('change', true, true);
        }
        input.current.dispatchEvent(event);
    }, [inputValue]);
    // -------------------------------------------------------------------------------------------------------------------
    var onKeyPress = function (e) {
        if (e.keyCode === 13 || e.charCode === 13 || e.key === 'Enter') {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Input_1.default, __assign({ ref: ref }, props, { value: value, placeholder: props.placeholder, disabled: props.disabled, readOnly: props.readOnly, onChange: onChange, onKeyPress: onKeyPress })), (0, jsx_runtime_1.jsx)("input", { type: 'text', className: 'rf-number-input__hidden', name: props.name, value: inputValue, ref: input, readOnly: true })] }));
});
exports.default = InputNumber;
