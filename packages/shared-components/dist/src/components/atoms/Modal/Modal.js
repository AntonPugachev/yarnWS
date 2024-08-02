"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Modal.scss");
var react_dom_1 = require("react-dom");
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
var Button_1 = __importDefault(require("../Button"));
var Modal = function (_a) {
    var children = _a.children, onClose = _a.onClose, header = _a.header, footer = _a.footer, _b = _a.custom, custom = _b === void 0 ? false : _b, _c = _a.showLine, showLine = _c === void 0 ? true : _c, _d = _a.variant, variant = _d === void 0 ? 'modal' : _d, _e = _a.size, size = _e === void 0 ? 'xxl' : _e;
    /** При маунте добавляем модалку. При дестрое - удаляем. */
    (0, react_1.useEffect)(function () {
        /** Закрывает модалку при нажатии на Escape */
        var closeOnEscPress = function (e) {
            if (e.key === 'Escape' && onClose) {
                onClose();
            }
        };
        document.body.style.overflowY = 'hidden';
        window.addEventListener('keyup', closeOnEscPress);
        return function () {
            document.body.style.overflowY = 'auto';
            window.removeEventListener('keyup', closeOnEscPress);
        };
    }, []);
    /** Обертка для модалки */
    var modal = ((0, jsx_runtime_1.jsxs)("div", { "data-testid": 'rf-modal', className: (0, classnames_1.classnames)('rf-modal', "rf-modal--".concat(variant), "rf-modal--".concat(size), showLine && 'rf-modal__footer--line'), children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-modal__bg', onClick: onClose }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-modal__container', children: [onClose && ((0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}), className: 'rf-modal__close-button', onClick: onClose })), custom ? children : ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-modal__wrapper', children: [header && (0, jsx_runtime_1.jsx)("div", { className: 'rf-modal__header', children: header }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-modal__content', children: children }), footer && (0, jsx_runtime_1.jsx)("div", { className: 'rf-modal__footer', children: footer })] }))] })] }));
    return (0, react_dom_1.createPortal)(modal, document.body);
};
exports.default = Modal;
