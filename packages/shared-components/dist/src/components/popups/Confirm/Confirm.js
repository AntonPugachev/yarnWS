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
require("./Confirm.scss");
var Button_1 = __importDefault(require("../../atoms/Button"));
var FormGroup_1 = __importDefault(require("../../atoms/FormGroup"));
var Textarea_1 = __importDefault(require("../../atoms/Textarea"));
var Confirm = function (_a) {
    var comment = _a.comment, _b = _a.showComment, showComment = _b === void 0 ? false : _b, _c = _a.textAccept, textAccept = _c === void 0 ? 'Подтвердить' : _c, onAction = _a.onAction, onClose = _a.onClose, onBack = _a.onBack, text = _a.text, _d = _a.lang, lang = _d === void 0 ? 'ru' : _d, _e = _a.preloader, preloader = _e === void 0 ? false : _e, _f = _a.maxLength, maxLength = _f === void 0 ? 255 : _f, props = __rest(_a, ["comment", "showComment", "textAccept", "onAction", "onClose", "onBack", "text", "lang", "preloader", "maxLength"]);
    var handleSubmit = function () { return onAction(state); };
    var _g = (0, react_1.useState)(''), state = _g[0], setState = _g[1];
    (0, react_1.useEffect)(function () {
        if (comment && showComment) {
            setState(comment);
        }
    }, [comment, showComment]);
    var onChange = function (e) {
        e.target && setState(e.target.value);
    };
    var isRussian = lang === null || lang === void 0 ? void 0 : lang.toLowerCase().includes('ru');
    var declineText = isRussian ? 'Отменить' : 'Cancel';
    var commentTitle = isRussian ? 'Комментарий' : 'Comment';
    var title = isRussian ? 'Подтвердите действие' : 'Confirm action';
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'confirm-popup', children: [(0, jsx_runtime_1.jsx)("h2", { className: 'confirm-popup__title', children: title }), text && (0, jsx_runtime_1.jsx)("p", { className: 'confirm-popup__text', children: text }), showComment && ((0, jsx_runtime_1.jsx)(FormGroup_1.default, { label: commentTitle, labelSecondary: "(".concat(state.length, "/").concat(maxLength, ")"), children: (0, jsx_runtime_1.jsx)(Textarea_1.default, __assign({ defaultValue: state, onDebounce: onChange, maxLength: maxLength, placeholder: '\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439' }, props)) })), (0, jsx_runtime_1.jsxs)("footer", { className: 'confirm-popup__footer', children: [onBack && ((0, jsx_runtime_1.jsx)("div", { className: 'confirm-popup__footer-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onBack, buttonType: 'light', size: 'l', children: "\u041D\u0430\u0437\u0430\u0434" }) })), (0, jsx_runtime_1.jsx)("div", { className: 'confirm-popup__footer-button confirm-popup__footer-left', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onClose, buttonType: 'light', size: 'l', children: declineText }) }), (0, jsx_runtime_1.jsx)("div", { className: 'confirm-popup__footer-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { disabled: showComment && state === '', onClick: handleSubmit, preloader: preloader, size: 'l', children: textAccept }) })] })] }));
};
exports.default = Confirm;
