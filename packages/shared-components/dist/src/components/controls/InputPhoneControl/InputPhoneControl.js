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
var FormControl_1 = __importDefault(require("../FormControl"));
var __1 = require("../../..");
var __2 = require("..");
var InputPhoneControl = function (_a) {
    var name = _a.name, rules = _a.rules, defaultValue = _a.defaultValue, control = _a.control, formState = _a.formState, shouldUnregister = _a.shouldUnregister, label = _a.label, formGroupProps = _a.formGroupProps, props = __rest(_a, ["name", "rules", "defaultValue", "control", "formState", "shouldUnregister", "label", "formGroupProps"]);
    var Controller = (0, __2.useHookFormController)();
    return ((0, jsx_runtime_1.jsx)(Controller, { control: control, name: name, rules: rules, shouldUnregister: shouldUnregister, defaultValue: defaultValue, render: function (_a) {
            var _b = _a.field, ref = _b.ref, onBlur = _b.onBlur, value = _b.value, fieldProps = __rest(_b, ["ref", "onBlur", "value"]);
            return ((0, jsx_runtime_1.jsx)(FormControl_1.default, __assign({ name: name, label: label, formState: formState }, formGroupProps, { children: (0, jsx_runtime_1.jsx)(__1.InputPhone, __assign({}, props, fieldProps, { defaultValue: value })) })));
        } }));
};
exports.default = InputPhoneControl;
