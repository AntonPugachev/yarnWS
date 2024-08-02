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
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
var Toast_1 = __importDefault(require("../Toast"));
var Tooltip_1 = __importDefault(require("../Tooltip/Tooltip"));
require("./Copy.scss");
// TODO: заменить в других компонентах
var Copy = function (_a) {
    var tooltipLabel = _a.tooltipLabel, copyMessage = _a.copyMessage, successCopyMessage = _a.successCopyMessage, disabled = _a.disabled, tooltipProps = _a.tooltipProps, containerRef = _a.containerRef, props = __rest(_a, ["tooltipLabel", "copyMessage", "successCopyMessage", "disabled", "tooltipProps", "containerRef"]);
    var _b = (0, react_1.useState)(false), isCopied = _b[0], setIsCopied = _b[1];
    var onCopy = function (event) {
        event.stopPropagation();
        event.preventDefault();
        setIsCopied(true);
        navigator.clipboard.writeText(copyMessage);
    };
    var toastStyle = (0, react_1.useMemo)(function () { return containerRef ? { top: '-50px' } : {}; }, [containerRef]);
    return ((0, jsx_runtime_1.jsxs)("button", { type: 'button', disabled: disabled, className: (0, classnames_1.classnames)('rf-copy', disabled && 'rf-copy--disabled'), 
        /** При типе 'button' у кнопки необходимо навесить собственный обработчик,
        иначе событие focus с enter не срабатывает при переходе по tab */
        onClick: onCopy, children: [(0, jsx_runtime_1.jsxs)(Tooltip_1.default, __assign({}, tooltipProps, { children: [(0, jsx_runtime_1.jsx)(indexIcon_1.AllCopy, __assign({ onClick: onCopy, className: 'rf-copy__icon', "aria-label": '\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C' }, props)), (0, jsx_runtime_1.jsx)("div", { children: tooltipLabel })] })), (0, jsx_runtime_1.jsx)(Toast_1.default, { isVisible: isCopied, setVisibility: setIsCopied, containerRef: containerRef, style: toastStyle, children: (0, jsx_runtime_1.jsx)("p", { className: 'rf-copy__toast-message', children: successCopyMessage }) })] }));
};
exports.default = Copy;
