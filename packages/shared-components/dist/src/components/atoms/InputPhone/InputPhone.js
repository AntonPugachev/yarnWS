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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./InputPhone.scss");
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var Input_1 = __importDefault(require("../Input"));
var Menu_1 = __importStar(require("../Menu"));
var indexIcon_1 = require("../../../indexIcon");
var FlagRU_1 = __importDefault(require("./flagIcons/FlagRU"));
var classnames_1 = require("../../../utils/classnames");
/** Список стран для выбора по умолчанию */
var DEFAULT_COUNTRIES = [
    {
        flag: FlagRU_1.default,
        text: 'Россия',
        code: 7,
    },
];
var InputPhone = function (_a) {
    var defaultValue = _a.defaultValue, _b = _a.countries, countries = _b === void 0 ? DEFAULT_COUNTRIES : _b, defaultCountry = _a.defaultCountry, name = _a.name, disabled = _a.disabled, onChange = _a.onChange, invalid = _a.invalid, props = __rest(_a, ["defaultValue", "countries", "defaultCountry", "name", "disabled", "onChange", "invalid"]);
    var _c = (0, react_1.useState)(''), inputValue = _c[0], setInputValue = _c[1];
    var _d = (0, react_1.useState)(defaultValue || ''), displayValue = _d[0], setDisplayValue = _d[1];
    var _e = (0, react_1.useState)(defaultCountry || countries[0]), country = _e[0], setCountry = _e[1];
    var _f = (0, react_1.useState)(), dropdownWidth = _f[0], setDropdownWidth = _f[1];
    var toggleRef = (0, react_1.useRef)(null);
    var onInputChange = function (event) {
        setDisplayValue(event.target.value);
    };
    var onCountryChange = function (c) { return function () {
        var oldCountry;
        setCountry(function (value) {
            oldCountry = value;
            return c;
        });
        setDisplayValue(function (old) {
            return old.replace(oldCountry.code, c.code.toString());
        });
        setInputValue(function (old) {
            return old.replace(oldCountry.code, c.code.toString());
        });
    }; };
    (0, react_1.useEffect)(function () {
        setDisplayValue(defaultValue || '');
        setInputValue(defaultValue || '');
    }, [defaultValue]);
    (0, react_1.useEffect)(function () {
        var v = displayValue.replace(/(\s|-|_|\(|\))/g, '');
        setInputValue(v);
        if (onChange) {
            onChange({
                target: {
                    value: v,
                    name: name,
                },
            });
        }
    }, [displayValue, name, onChange]);
    var mask = (0, react_1.useMemo)(function () {
        return __spreadArray(__spreadArray([
            '+'
        ], country.code.toString().split(''), true), [
            ' ',
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            ' ',
            /[0-9]/,
            /[0-9]/,
            /[0-9]/,
            ' ',
            /[0-9]/,
            /[0-9]/,
            ' ',
            /[0-9]/,
            /[0-9]/,
        ], false);
    }, [country, defaultCountry]);
    (0, react_1.useEffect)(function () {
        var _a;
        setDropdownWidth((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(react_input_mask_1.default, { mask: mask, maskPlaceholder: null, value: displayValue, width: '100%', disabled: disabled, onChange: onInputChange, children: (0, jsx_runtime_1.jsx)(Input_1.default, __assign({ ref: toggleRef }, props, { invalid: invalid, name: "".concat(name, "-display"), className: (0, classnames_1.classnames)('rf-phone-input', disabled && 'rf-phone-input__text-disabled'), "data-testid": 'input-display', startAdornment: (0, jsx_runtime_1.jsx)(Menu_1.default, { position: 'bottom-start', offset: [-16, 16], style: {
                            maxWidth: dropdownWidth,
                            width: '100%',
                        }, content: countries.length > 1 &&
                            !disabled && ((0, jsx_runtime_1.jsx)(Menu_1.MenuContext.Consumer, { children: function (_a) {
                                var onClose = _a.onClose;
                                return ((0, jsx_runtime_1.jsx)("ul", { className: 'rf-list rf-phone-input__list', onClick: onClose, children: countries.map(function (c) { return ((0, jsx_runtime_1.jsx)("li", { className: 'rf-li', children: (0, jsx_runtime_1.jsxs)("button", { type: 'button', className: 'rf-list__element rf-phone-input__option', onClick: onCountryChange(c), children: [(0, jsx_runtime_1.jsx)(c.flag, { className: 'rf-phone-input__option-flag' }), (0, jsx_runtime_1.jsx)("span", { className: "\n                                rf-phone-input__option-text \n                                ".concat(country.code === c.code ? 'rf-phone-input__option-text--selected' : '', "\n                              "), children: c.text }), (0, jsx_runtime_1.jsxs)("span", { className: "\n                                rf-phone-input__option-code \n                                ".concat(country.code === c.code ? 'rf-phone-input__option-code--selected' : '', "\n                              "), children: ["+", c.code] })] }) }, c.code)); }) }));
                            } })), children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-phone-input__country', children: [(0, jsx_runtime_1.jsx)(country.flag, { className: (0, classnames_1.classnames)('rf-phone-input__flag', disabled && 'rf-phone-input__flag-disabled') }), countries.length > 1 && ((0, jsx_runtime_1.jsx)(Menu_1.MenuContext.Consumer, { children: function (_a) {
                                        var show = _a.show;
                                        return ((0, jsx_runtime_1.jsx)("button", { className: "rf-phone-input__button ".concat(show && !disabled ? 'rf-phone-input__button--rotate' : ''), type: 'button', disabled: disabled, "aria-label": '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0443', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, {}) }));
                                    } }))] }) }) })) }), (0, jsx_runtime_1.jsx)("input", { "data-testid": 'input', type: 'hidden', name: name, value: inputValue })] }));
};
exports.default = InputPhone;
