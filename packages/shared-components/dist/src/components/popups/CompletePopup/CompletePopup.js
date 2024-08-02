"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./CompletePopup.scss");
var Button_1 = __importDefault(require("../../atoms/Button"));
var legacyIcons_1 = require("../../../assets/legacyIcons");
var classnames_1 = require("../../../utils/classnames");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var getIcon = function (icon) {
    var icons = {
        success: (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleConfirm, {}),
        close: (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleReject, {}),
        trash: (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleTrash, {}),
        return: (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleReturn, {}),
        refresh: (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleRefresh, {}),
    };
    return icons[icon];
};
var CompletePopup = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var label = _a.label, description = _a.description, onClose = _a.onClose, buttons = _a.buttons, _b = _a.icon, icon = _b === void 0 ? 'success' : _b;
    return ((0, jsx_runtime_1.jsxs)(Tile_1.default, { className: 'rf-complete-popup', padding: '32px 20px 24px', variant: 'clickable-hover', children: [(0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-complete-popup__icon', "rf-complete-popup__icon--".concat(icon)), children: getIcon(icon) }), (0, jsx_runtime_1.jsx)("h5", { className: 'rf-complete-popup__label', children: label }), description && (0, jsx_runtime_1.jsx)("p", { className: 'rf-complete-popup__description', children: description }), buttons || ((0, jsx_runtime_1.jsx)(Button_1.default, { fullWidth: true, onClick: onClose, size: 'l', className: 'rf-complete-popup__btn', children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C" }))] }));
};
exports.default = CompletePopup;
