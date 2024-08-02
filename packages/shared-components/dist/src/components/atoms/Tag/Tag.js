"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Tag.scss");
var indexIcon_1 = require("../../../indexIcon");
// FIXME: Elements must have sufficient color contrast
var Tag = function (_a) {
    var children = _a.children, icon = _a.icon, onClick = _a.onClick, onRemove = _a.onRemove, disabled = _a.disabled, _b = _a.variant, variant = _b === void 0 ? 'default' : _b, _c = _a.maxLength, maxLength = _c === void 0 ? 32 : _c, style = _a.style;
    var handleClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        onClick && onClick();
    };
    var handleRemove = function (e) {
        e.stopPropagation();
        onRemove && onRemove();
    };
    // -------------------------------------------------------------------------------------------------------------------
    var clickableClass = onClick && !disabled ? 'rf-tag--clickable' : '';
    // -------------------------------------------------------------------------------------------------------------------
    var overMaxLength = typeof children === 'string' && children.length > maxLength;
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-tag ".concat(clickableClass, " rf-tag--").concat(variant), onClick: onClick ? handleClick : undefined, style: style, children: [!!icon && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-tag__icon', children: icon })), overMaxLength ? children.slice(0, maxLength) + '...' : children, !!onRemove && ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-tag__remove', onClick: handleRemove, disabled: disabled, "aria-label": '\u0423\u0434\u0430\u043B\u0438\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) }))] }));
};
exports.default = Tag;
