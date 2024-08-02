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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.openPopup = exports.popups$$ = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./PopupMaker.scss");
var rxjs_1 = require("rxjs");
var Modal_1 = __importDefault(require("../../atoms/Modal"));
/** Стак попапов */
exports.popups$$ = new rxjs_1.BehaviorSubject([]);
/** Закрываем последний открытый попап */
var onClose = function () {
    exports.popups$$.next(exports.popups$$.getValue().slice(0, -1));
};
/** Основная функция добавления попапа в стек */
var openPopup = function (component, modalProps) {
    var componentModal = ((0, jsx_runtime_1.jsx)(Modal_1.default, __assign({ onClose: onClose }, modalProps, { children: React.cloneElement(component, { onClose: onClose }, []) }), exports.popups$$.getValue().length));
    exports.popups$$.next(exports.popups$$.getValue().concat([componentModal]));
};
exports.openPopup = openPopup;
var PopupMaker = function () {
    var _a = (0, react_1.useState)([]), modalComponent = _a[0], setModalComponent = _a[1];
    /** Подписываемся на стек попапов*/
    (0, react_1.useEffect)(function () {
        if (exports.popups$$.closed) {
            exports.popups$$ = new rxjs_1.BehaviorSubject([]);
        }
        exports.popups$$.subscribe(function (data) {
            setModalComponent(data);
        });
        return function () { return exports.popups$$.unsubscribe(); };
    }, []);
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: modalComponent });
};
exports.default = PopupMaker;
