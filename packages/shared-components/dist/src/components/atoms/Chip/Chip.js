"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Chip.scss");
var classnames_1 = require("../../../utils/classnames");
var Tooltip_1 = __importDefault(require("../Tooltip"));
var indexIcon_1 = require("../../../indexIcon");
var Chip = function (_a) {
    var children = _a.children, onClick = _a.onClick, onRemove = _a.onRemove, _b = _a.size, size = _b === void 0 ? 's' : _b, _c = _a.type, type = _c === void 0 ? 'primary' : _c, icon = _a.icon, _d = _a.iconPosition, iconPosition = _d === void 0 ? 'left' : _d, badge = _a.badge, disabled = _a.disabled, _e = _a.maxLength, maxLength = _e === void 0 ? 32 : _e, _f = _a.tooltipBackground, tooltipBackground = _f === void 0 ? 'white' : _f, _g = _a.isBubble, isBubble = _g === void 0 ? false : _g;
    var handleClick = function (e) {
        e.preventDefault();
        !isBubble && e.stopPropagation();
        onClick && onClick();
    };
    var handleRemove = function (e) {
        e.stopPropagation();
        onRemove && !disabled && onRemove();
    };
    // -------------------------------------------------------------------------------------------------------------------
    var clickableClass = onClick && !disabled ? 'rf-chip--clickable' : '';
    // -------------------------------------------------------------------------------------------------------------------
    var overMaxLength = typeof children === 'string' && children.length > maxLength;
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)(Tooltip_1.default, { background: tooltipBackground, position: 'bottom', isVisible: overMaxLength, children: [(0, jsx_runtime_1.jsxs)("button", { type: 'button', className: (0, classnames_1.classnames)('rf-chip', "rf-chip--".concat(type), "rf-chip--".concat(size), disabled && 'rf-chip--disabled', clickableClass), onClick: handleClick, children: [!!icon && iconPosition === 'left' && (0, jsx_runtime_1.jsx)("div", { className: 'rf-chip__icon rf-chip__icon--left', children: icon }), overMaxLength ? children.slice(0, maxLength) + '...' : children, onRemove && ((0, jsx_runtime_1.jsx)("button", { className: (0, classnames_1.classnames)('rf-chip__icon', 'rf-chip__icon--right'), onClick: handleRemove, disabled: disabled, type: 'button', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, { size: size === 's' ? 'xxs' : 'xxxs' }) })), !!icon && iconPosition === 'right' && (0, jsx_runtime_1.jsx)("div", { className: 'rf-chip__icon rf-chip__icon--right', children: icon }), !!badge && (0, jsx_runtime_1.jsx)("div", { className: 'rf-chip__badge', children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-chip__badge-text', children: badge }) })] }), children] }));
};
exports.default = Chip;
