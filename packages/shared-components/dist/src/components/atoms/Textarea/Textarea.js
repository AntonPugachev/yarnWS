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
require("./Textarea.scss");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var classnames_1 = require("../../../utils/classnames");
var indexIcon_1 = require("../../../indexIcon");
var Textarea = function (_a) {
    var _b, _c;
    var _d = _a.className, className = _d === void 0 ? '' : _d, _e = _a.autoResize, autoResize = _e === void 0 ? false : _e, _f = _a.initialRowCount, initialRowCount = _f === void 0 ? 3 : _f, _g = _a.debounce, debounce = _g === void 0 ? 300 : _g, getValue = _a.getValue, disabled = _a.disabled, invalid = _a.invalid, onFocus = _a.onFocus, onBlur = _a.onBlur, _h = _a.onDebounce, onDebounce = _h === void 0 ? function () { } : _h, onClear = _a.onClear, props = __rest(_a, ["className", "autoResize", "initialRowCount", "debounce", "getValue", "disabled", "invalid", "onFocus", "onBlur", "onDebounce", "onClear"]);
    /** Ссылка на поле */
    var textarea = (0, react_1.useRef)(null);
    var _j = (0, react_1.useState)(((_b = props.defaultValue) === null || _b === void 0 ? void 0 : _b.toString()) || ((_c = props.value) === null || _c === void 0 ? void 0 : _c.toString()) || ''), value = _j[0], setValue = _j[1];
    /** Находится ли инпут в состоянии фокуса */
    var _k = (0, react_1.useState)(false), isFocused = _k[0], setFocused = _k[1];
    (0, react_1.useEffect)(function () {
        /** Подписываемся на ввод текста */
        var sub;
        if (textarea.current) {
            sub = (0, rxjs_1.fromEvent)(textarea.current, 'keyup')
                .pipe((0, operators_1.map)(function (e) { return e; }), (0, operators_1.debounceTime)(debounce), (0, operators_1.distinctUntilChanged)())
                .subscribe(function (e) {
                if (textarea.current) {
                    if (props.maxLength) {
                        setValue(textarea.current.value);
                    }
                    getValue && getValue(textarea.current.value);
                }
                // @ts-ignore
                props.onKeyUp && props.onKeyUp(e);
                onDebounce(e);
            });
        }
        return function () {
            try {
                if (sub) {
                    sub.unsubscribe();
                }
            }
            catch (e) {
                console.log(e);
            }
        };
    }, [
        props.maxLength,
        autoResize,
        onDebounce,
        debounce
    ]);
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
    // ------------------------------------------------------------------------------------------------------------------
    /** Очистка поля ввода */
    var clearInput = function () {
        if (textarea.current) {
            textarea.current.value = '';
            setValue('');
            onClear && onClear();
        }
    };
    /** Кнопка сброса */
    var closeButton = onClear && value.length > 0 && ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-textarea__action', onClick: clearInput, "aria-label": '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) }));
    // ------------------------------------------------------------------------------------------------------------------
    // Делаем проверку на className для обратной совместимости.
    var isInvalid = invalid || className && className.indexOf('invalid') !== -1;
    return ((0, jsx_runtime_1.jsx)("div", { className: "rf-textarea ".concat(className), children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-textarea__wrapper', disabled && 'rf-textarea__wrapper--disabled', isFocused && 'rf-textarea__wrapper--focused', isInvalid && 'rf-textarea__wrapper--invalid', autoResize && 'rf-textarea__wrapper--auto-resize', !autoResize && 'rf-textarea--scroll', onClear && value.length > 0 && 'rf-textarea--clearable'), "data-replicated-value": props.value, children: [(0, jsx_runtime_1.jsx)("textarea", __assign({}, props, { disabled: disabled, ref: textarea, rows: initialRowCount, className: (0, classnames_1.classnames)('rf-textarea__field', !autoResize && 'rf-textarea--scroll'), autoComplete: 'off', onFocus: onInputFocus, onBlur: onInputBlur })), closeButton] }) }));
};
exports.default = Textarea;
