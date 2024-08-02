"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindEntitiesPosition = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./FindEntitiesPosition.scss");
var Checkbox_1 = __importDefault(require("../../atoms/Checkbox"));
var Avatar_1 = __importDefault(require("../../atoms/Avatar"));
var Structure_1 = __importDefault(require("../../molecules/Structure"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
var indexIcon_1 = require("../../../indexIcon");
var __1 = require("../../..");
var FindEntitiesPosition = function (_a) {
    var position = _a.position, isSelected = _a.isSelected, onChange = _a.onChange, disabled = _a.disabled, tooltipBackground = _a.tooltipBackground;
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-position', children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { align: 'flex-start', value: position.position, checked: isSelected, disabled: disabled, onChange: onChange, fullWidth: true, label: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities-position__content', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-position__avatar', children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { icon: indexIcon_1.AllInvestmentProducts }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities-position__title', children: [position.positionText, !!position.departmentsPath && ((0, jsx_runtime_1.jsxs)(Tooltip_1.default, { position: 'right', background: tooltipBackground, children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-position__info', children: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, {}) }), (0, jsx_runtime_1.jsx)(Structure_1.default, { departmentsPath: position.departmentsPath })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities-position__subtitle', children: [position.position, (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-position__copy', children: (0, jsx_runtime_1.jsx)(__1.Copy, { tooltipLabel: '\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0422\u041D', copyMessage: position.position, successCopyMessage: '\u0422\u041D \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D', tooltipProps: {
                                                background: tooltipBackground,
                                                position: 'right'
                                            } }) })] })] })] }) }) }));
};
exports.FindEntitiesPosition = FindEntitiesPosition;
