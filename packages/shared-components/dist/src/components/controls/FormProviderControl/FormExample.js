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
exports.RATE_OPTIONS = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var _1 = __importDefault(require("."));
var __1 = require("..");
var __2 = require("../../..");
exports.RATE_OPTIONS = [
    {
        value: '3',
        label: '3 месяца'
    },
    {
        value: '6',
        label: '6 месяцев'
    },
    {
        value: '12',
        label: '12 месяцев'
    },
    {
        value: 'other',
        label: 'Другой период'
    },
];
var FormExample = function (_a) {
    var _b = _a.withReset, withReset = _b === void 0 ? true : _b, props = __rest(_a, ["withReset"]);
    var password = (0, react_1.useRef)({});
    password.current = (0, react_hook_form_1.useWatch)({
        control: props.formMethods.control,
        name: 'password'
    });
    var onReset = function () { return props.formMethods.reset(); };
    return (0, jsx_runtime_1.jsx)(_1.default, __assign({}, props, { children: (0, jsx_runtime_1.jsxs)(__1.HookFormProvider, { controller: react_hook_form_1.Controller, children: [(0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.InputControl, { label: 'Email', name: 'email', formState: props.formMethods.formState, control: props.formMethods.control, rules: {
                                required: 'Обязательное поле',
                                pattern: {
                                    value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                    message: 'Не валидный email'
                                }
                            } }), (0, jsx_runtime_1.jsx)(__2.InputPhoneControl, { label: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D', name: 'phone', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.InputControl, { label: '\u0418\u043C\u044F', name: 'firstName', defaultValue: 'value', formState: props.formMethods.formState, rules: {
                                required: 'Обязательное поле',
                                minLength: {
                                    value: 2,
                                    message: 'Минимальная длина 2 символа'
                                }
                            } }), (0, jsx_runtime_1.jsx)(__2.InputControl, { label: '\u0424\u0430\u0438\u043B\u0438\u044F', name: 'lastName', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.InputNumberControl, { label: '\u0413\u043E\u0434', name: 'year', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } }), (0, jsx_runtime_1.jsx)(__2.DatepickerControl, { label: '\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F', name: 'date-birth', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } }), (0, jsx_runtime_1.jsx)(__2.TimepickerControl, { label: '\u0412\u0440\u0435\u043C\u044F', name: 'time', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } }), (0, jsx_runtime_1.jsx)(__2.SelectControl, { label: '\u041F\u0435\u0440\u0438\u043E\u0434', name: 'rate', readOnly: true, placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0435\u0440\u0438\u043E\u0434', options: exports.RATE_OPTIONS, formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.InputControl, { label: '\u041F\u0430\u0440\u043E\u043B\u044C', name: 'password', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' }, type: 'password' }), (0, jsx_runtime_1.jsx)(__2.InputControl, { label: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u043F\u0430\u0440\u043E\u043B\u044F', name: 'password-confirm', formState: props.formMethods.formState, rules: {
                                required: 'Обязательное поле',
                                validate: function (value) { return value === password.current || 'Пароль не совпадает'; }
                            }, type: 'password' })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        flexDirection: 'column',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.RatepickerControl, { label: '\u0420\u0435\u0439\u0442\u0438\u043D\u0433', name: 'rates', isStarPicker: true }), (0, jsx_runtime_1.jsx)(__2.TextareaControl, { name: 'text', label: '\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } }), (0, jsx_runtime_1.jsx)(__2.InputFileControl, { name: 'file', rules: { required: 'Обязательное поле' }, formState: props.formMethods.formState, placeholder: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B' })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsxs)(__2.ControlGroup, { children: [(0, jsx_runtime_1.jsx)(__2.RadioControl, { name: 'vertical-group', label: '\u0413\u043E\u0440\u043E\u0434 1', value: '1' }), (0, jsx_runtime_1.jsx)(__2.RadioControl, { name: 'vertical-group', label: '\u0413\u043E\u0440\u043E\u0434 1', value: '2' }), (0, jsx_runtime_1.jsx)(__2.RadioControl, { name: 'vertical-group', label: '\u0413\u043E\u0440\u043E\u0434 3', value: '3' })] }), (0, jsx_runtime_1.jsxs)(__2.ControlGroup, { children: [(0, jsx_runtime_1.jsx)(__2.RadioControl, { name: 'vertical-name', label: '\u0413\u043E\u0440\u043E\u0434 4', value: '1' }), (0, jsx_runtime_1.jsx)(__2.RadioControl, { name: 'vertical-name', label: '\u0413\u043E\u0440\u043E\u0434 6', value: '2' }), (0, jsx_runtime_1.jsx)(__2.RadioControl, { name: 'vertical-name', label: '\u0413\u043E\u0440\u043E\u0434 7', value: '3' })] })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.CheckboxControl, { name: 'privacy', label: '\u0421\u043E\u0433\u043B\u0430\u0448\u0430\u044E\u0441\u044C \u0441 \u043F\u0440\u0430\u0432\u0438\u043B\u0430\u043C\u0438', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } }), (0, jsx_runtime_1.jsx)(__2.SwitchControl, { name: 'switch', label: '\u041F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0438\u0442\u044C', formState: props.formMethods.formState, rules: { required: 'Обязательное поле' } })] }), (0, jsx_runtime_1.jsx)("div", { style: {
                        display: 'flex',
                        columnGap: '20px',
                        marginBottom: '20px'
                    }, children: (0, jsx_runtime_1.jsx)(__2.CommentTileControl, { name: 'comment' }) }), (0, jsx_runtime_1.jsxs)("div", { style: {
                        display: 'flex',
                        justifyContent: 'space-between'
                    }, children: [(0, jsx_runtime_1.jsx)(__2.Button, { onClick: onReset, buttonType: 'light', children: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C" }), (0, jsx_runtime_1.jsx)(__2.Button, { type: 'submit', children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })] })] }) }));
};
exports.default = FormExample;
