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
var Button_1 = __importDefault(require("../../atoms/Button"));
var FormGroup_1 = __importDefault(require("../../atoms/FormGroup"));
var Input_1 = __importDefault(require("../../atoms/Input"));
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
require("./EditMode.scss");
var EditMode = function (_a) {
    var defaultValue = _a.defaultValue, onSave = _a.onSave, onChange = _a.onChange, _b = _a.fromGroupProps, fromGroupProps = _b === void 0 ? {} : _b, _c = _a.defaultEdited, defaultEdited = _c === void 0 ? false : _c, props = __rest(_a, ["defaultValue", "onSave", "onChange", "fromGroupProps", "defaultEdited"]);
    var initialValue = (0, react_1.useRef)(defaultValue);
    var inputRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(defaultValue), value = _d[0], setValue = _d[1];
    var _e = (0, react_1.useState)(defaultEdited), isEdit = _e[0], setIsEdit = _e[1];
    (0, react_1.useEffect)(function () {
        var _a;
        if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
            (_a = inputRef.current.getElementsByTagName('input').item(0)) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }, [isEdit]);
    var handleChange = (0, react_1.useCallback)(function (e) {
        setValue(e.target.value);
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value);
    }, []);
    var handleSave = (0, react_1.useCallback)(function () {
        onSave === null || onSave === void 0 ? void 0 : onSave(value);
        setIsEdit(false);
        initialValue.current = value;
    }, [value]);
    var handleCancel = (0, react_1.useCallback)(function () {
        setIsEdit(false);
        setValue(initialValue.current);
        onChange === null || onChange === void 0 ? void 0 : onChange(initialValue.current);
    }, []);
    var memoEditView = (0, react_1.useMemo)(function () {
        return ((0, jsx_runtime_1.jsx)(FormGroup_1.default, __assign({}, fromGroupProps, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-edit-mode__edit', children: [(0, jsx_runtime_1.jsx)(Input_1.default, __assign({ ref: inputRef }, props, { value: value, onChange: handleChange })), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-edit-mode__actions', children: [(0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'secondary', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllSuccess, {}), onClick: handleSave, className: (0, classnames_1.classnames)('rf-edit-mode__btn', props.invalid && 'rf-edit-mode__btn--disabled'), disabled: props.invalid, title: '\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C' }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'secondary', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}), onClick: handleCancel, className: 'rf-edit-mode__btn', title: '\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C' })] })] }) })));
    }, [
        isEdit,
        props,
        handleChange,
        handleCancel,
        handleSave
    ]);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-edit-mode', isEdit && 'rf-edit-mode--edit', props.disabled && 'rf-edit-mode--disabled'), children: isEdit ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: memoEditView }) :
            (0, jsx_runtime_1.jsxs)("div", { className: 'rf-edit-mode__content', children: [(0, jsx_runtime_1.jsx)(FormGroup_1.default, __assign({}, fromGroupProps, { children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-edit-mode__text', children: defaultValue }) })), (0, jsx_runtime_1.jsx)("div", { className: 'rf-edit-mode__actions', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllEdit, {}), onClick: function () { return setIsEdit(true); }, className: 'rf-edit-mode__btn rf-edit-mode__btn-edit', disabled: props.disabled, title: '\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C' }) })] }) }));
};
exports.default = EditMode;
