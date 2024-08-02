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
exports.InputHook = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Input.scss");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var indexIcon_1 = require("../../../indexIcon");
var Input = (0, react_1.forwardRef)(function (props, ref) {
    var _a, _b;
    var onClear = props.onClear, onKeyUp = props.onKeyUp, _c = props.debounce, debounce = _c === void 0 ? 300 : _c, icon = props.icon, attrs = __rest(props, ["onClear", "onKeyUp", "debounce", "icon"]);
    var inputRef = (0, react_1.useRef)(null);
    /** Значение поля */
    var _d = (0, react_1.useState)(((_a = props.defaultValue) === null || _a === void 0 ? void 0 : _a.toString()) || ((_b = props.value) === null || _b === void 0 ? void 0 : _b.toString()) || ''), value = _d[0], setValue = _d[1];
    // ------------------------------------------------------------------------------------------------------------------
    (0, react_1.useEffect)(function () {
        if (typeof ref === 'function') {
            ref(inputRef.current);
        }
        else if (ref && 'current' in ref) {
            ref.current = inputRef.current;
        }
        return function () {
            if (typeof ref === 'function') {
                ref(null);
            }
            else if (ref && 'current' in ref) {
                ref.current = null;
            }
        };
    }, [ref, inputRef]);
    (0, react_1.useEffect)(function () {
        /** Подписываемся на ввод текста */
        var sub;
        if (inputRef.current) {
            sub = (0, rxjs_1.fromEvent)(inputRef.current, 'keyup')
                .pipe((0, operators_1.map)(function (e) { return e; }), (0, operators_1.debounceTime)(debounce), (0, operators_1.distinctUntilChanged)())
                .subscribe(function (e) {
                setValue(e.target.value);
                onKeyUp && onKeyUp(e);
            });
        }
        return function () {
            try {
                sub && sub.unsubscribe();
            }
            catch (e) {
                console.log(e);
            }
        };
    }, [onClear, debounce, props.onKeyUp]);
    // ------------------------------------------------------------------------------------------------------------------
    /** Очистка поля ввода и сброс результатов поиска */
    var clearInput = function () {
        if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
            inputRef.current.value = '';
            setValue('');
            onClear && onClear();
        }
    };
    /** Кнопка поиска и сброса */
    var closeButton = onClear && value.length > 0 && ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-input__action', onClick: clearInput, children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) }));
    // ------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-input ".concat(props.className || ''), children: [(0, jsx_runtime_1.jsx)("input", __assign({ ref: inputRef, className: 'rf-input__field', autoComplete: 'off', type: props.type || 'text' }, attrs)), icon ? (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-input__action', children: icon }) : closeButton] }));
});
exports.InputHook = Input;
