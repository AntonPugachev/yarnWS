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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var react_popper_1 = require("react-popper");
require("./Menu.scss");
var List_1 = __importDefault(require("./List"));
var classnames_1 = require("../../../utils/classnames");
var Dropdown_1 = __importDefault(require("../Dropdown"));
/** Контекст для передачи функций работы с меню. */
exports.MenuContext = react_1.default.createContext({
    onClose: function () { },
    show: false,
});
var Menu = function (_a) {
    var list = _a.list, children = _a.children, content = _a.content, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.toggleTagret, toggleTagret = _c === void 0 ? true : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, props = __rest(_a, ["list", "children", "content", "className", "toggleTagret", "disabled"]);
    var toggleRef = (0, react_1.useRef)(null);
    /** Флаг отображения выпадающего списка  */
    var _e = (0, react_1.useState)(false), show = _e[0], setShow = _e[1];
    /** Изменение состояния выпадающего списка */
    var onToggle = (0, react_1.useCallback)(function () {
        setShow(function (show) { return !show; });
    }, [setShow]);
    var onClose = (0, react_1.useCallback)(function () {
        setShow(false);
    }, [setShow]);
    /** Клик по кнопке */
    var onClick = (0, react_1.useCallback)(function (e) {
        e.preventDefault();
        if (disabled) {
            return;
        }
        if (toggleTagret) {
            onToggle();
        }
        else {
            setShow(true);
        }
    }, [onToggle, disabled, toggleTagret]);
    return ((0, jsx_runtime_1.jsx)(exports.MenuContext.Provider, { value: {
            onClose: onClose,
            show: show,
        }, children: (0, jsx_runtime_1.jsx)(react_popper_1.Manager, { children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-menu', className), "data-testid": 'rf-menu', ref: toggleRef, children: [(0, jsx_runtime_1.jsx)(react_popper_1.Reference, { children: function (referenceProps) { return ((0, jsx_runtime_1.jsx)("div", __assign({}, referenceProps, { className: 'rf-menu__toggle', onClick: onClick, children: children }))); } }), (0, jsx_runtime_1.jsx)(Dropdown_1.default, __assign({}, props, { show: show, toggleRef: toggleRef, onClose: onClose, children: content ? content : list && list.length > 0 && (0, jsx_runtime_1.jsx)(List_1.default, { list: list }) }))] }) }) }));
};
exports.default = Menu;
