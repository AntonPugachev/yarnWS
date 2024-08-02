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
require("./Input.scss");
var indexIcon_1 = require("../../../indexIcon");
var useDebounce_1 = require("../../../hooks/useDebounce");
var Input = (0, react_1.forwardRef)(function (_a, ref) {
    var className = _a.className, onClear = _a.onClear, _b = _a.debounce, debounce = _b === void 0 ? 300 : _b, icon = _a.icon, _c = _a.variant, variant = _c === void 0 ? 'base' : _c, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, disabled = _a.disabled, readOnly = _a.readOnly, invalid = _a.invalid, _d = _a.filled, filled = _d === void 0 ? true : _d, onFocus = _a.onFocus, onBlur = _a.onBlur, onChange = _a.onChange, onDebounce = _a.onDebounce, _e = _a.isBorder, isBorder = _e === void 0 ? true : _e, pattern = _a.pattern, defaultValue = _a.defaultValue, value = _a.value, props = __rest(_a, ["className", "onClear", "debounce", "icon", "variant", "startAdornment", "endAdornment", "disabled", "readOnly", "invalid", "filled", "onFocus", "onBlur", "onChange", "onDebounce", "isBorder", "pattern", "defaultValue", "value"]);
    /** Ref */
    var inputRef = (0, react_1.useRef)(null);
    /** Значение поля */
    var _f = (0, react_1.useState)((defaultValue === null || defaultValue === void 0 ? void 0 : defaultValue.toString()) || (value === null || value === void 0 ? void 0 : value.toString()) || ''), internalValue = _f[0], setInternalValue = _f[1];
    /** Находится ли инпут в состоянии фокуса */
    var _g = (0, react_1.useState)(false), isFocused = _g[0], setFocused = _g[1];
    // Регулярное выражение для проверки ввода
    var regexp = (0, react_1.useMemo)(function () {
        if (pattern) {
            return new RegExp(pattern);
        }
        return null;
    }, [pattern]);
    (0, react_1.useEffect)(function () {
        // Controlled component
        if (value !== undefined) {
            setInternalValue(value.toString());
        }
    }, [value]);
    // ------------------------------------------------------------------------------------------------------------------
    (0, useDebounce_1.useDebounce)(internalValue, debounce, function (v) {
        if (onDebounce) {
            onDebounce({ debounceString: v.toString() });
        }
    });
    // ------------------------------------------------------------------------------------------------------------------
    /** Очистка поля ввода и сброс результатов поиска */
    var clearInput = function () {
        setInternalValue('');
        onDebounce && onDebounce({ debounceString: '' });
        onClear && onClear();
    };
    /** Кнопка поиска и сброса */
    var closeButton = onClear && internalValue.length > 0 && ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-input__action', onClick: clearInput, "aria-label": '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) }));
    // ------------------------------------------------------------------------------------------------------------------
    var onInputFocus = function (event) {
        setFocused(true);
        if (onFocus) {
            onFocus(event);
        }
    };
    var onInputBlur = function (event) {
        setFocused(false);
        if (onBlur) {
            onBlur(event);
        }
    };
    var onInputChange = function (event) {
        if (regexp && !regexp.test(event.target.value)) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        // Uncontrolled component
        if (value === undefined) {
            setInternalValue(event.target.value);
        }
        if (onChange) {
            onChange(event);
        }
    };
    // ------------------------------------------------------------------------------------------------------------------
    // Делаем проверку на className для обратной совместимости.
    var isInvalid = invalid || className && className.indexOf('invalid') !== -1;
    return ((0, jsx_runtime_1.jsxs)("div", { ref: ref, className: "\n        rf-input \n        ".concat(variant === 'inline' ? 'rf-input--inline' : '', " \n        ").concat(disabled ? 'rf-input--disabled' : '', " \n        ").concat(readOnly ? 'rf-input--readonly' : '', " \n        ").concat(isFocused ? 'rf-input--focused' : '', " \n        ").concat(isInvalid ? 'rf-input--invalid' : '', " \n        ").concat(filled ? 'rf-input--filled' : '', "\n        ").concat(className || '', "\n        ").concat(isBorder ? '' : 'rf-input--non-border', "\n        "), children: [!!startAdornment && (0, jsx_runtime_1.jsx)("div", { className: 'rf-input__adornment rf-input__adornment--start', children: startAdornment }), (0, jsx_runtime_1.jsx)("input", __assign({}, props, { value: value === undefined ? internalValue : value, ref: inputRef, className: 'rf-input__field', autoComplete: 'off', type: props.type || 'text', disabled: disabled, readOnly: readOnly, onChange: onInputChange, onFocus: onInputFocus, onBlur: onInputBlur, pattern: pattern })), !!endAdornment && (0, jsx_runtime_1.jsx)("div", { className: 'rf-input__adornment rf-input__adornment--end', children: endAdornment }), icon ? (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-input__action', children: icon }) : closeButton] }));
});
exports.default = Input;
