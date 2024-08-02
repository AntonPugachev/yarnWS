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
var error_message_1 = require("@hookform/error-message");
var __1 = require("../../..");
var FormControl = function (_a) {
    var name = _a.name, children = _a.children, formState = _a.formState, props = __rest(_a, ["name", "children", "formState"]);
    var _b = (formState || {}).errors, errors = _b === void 0 ? {} : _b;
    var invalid = !!errors[name];
    return ((0, jsx_runtime_1.jsx)(__1.FormGroup, __assign({ invalid: invalid, errorMessage: (0, jsx_runtime_1.jsx)(error_message_1.ErrorMessage, { errors: errors, name: name, render: function (_a) {
                var message = _a.message;
                return message;
            } }) }, props, { children: React.cloneElement(children, { invalid: invalid }) })));
};
exports.default = FormControl;
