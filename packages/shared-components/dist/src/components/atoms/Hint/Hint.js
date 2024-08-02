"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Hint.scss");
var indexIcon_1 = require("../../../indexIcon");
var ICON_MAPPING = {
    'default': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, {}),
    'red': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusError, {}),
    'green': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusRelease, {}),
    'blue': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, {}),
    'yellow': (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, {}),
};
// FIXME: Elements must have sufficient color contrast
var Hint = function (_a) {
    var children = _a.children, button = _a.button, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.iconMapping, iconMapping = _c === void 0 ? ICON_MAPPING : _c, icon = _a.icon, title = _a.title, _d = _a.maxWidth, maxWidth = _d === void 0 ? '648px' : _d, onClose = _a.onClose;
    return ((0, jsx_runtime_1.jsxs)("div", { style: { maxWidth: maxWidth }, className: "rf-hint rf-hint--".concat(variant), children: [icon !== false &&
                (0, jsx_runtime_1.jsx)("div", { className: 'rf-hint__icon', children: icon === undefined || typeof icon === 'string' ? iconMapping[variant] : icon }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-hint__body', children: [title && (0, jsx_runtime_1.jsx)("div", { className: 'rf-hint__title', children: title }), children && (0, jsx_runtime_1.jsxs)("div", { className: 'rf-hint__message', children: [" ", children, " "] }), button && (0, jsx_runtime_1.jsx)("div", { className: 'rf-hint__button', children: button })] }), !!onClose && ((0, jsx_runtime_1.jsx)("button", { className: 'rf-hint__close', onClick: onClose, "aria-label": '\u0417\u0430\u043A\u0440\u044B\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, { size: 'xxs' }) }))] }));
};
exports.default = Hint;
