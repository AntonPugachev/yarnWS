"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindEntitiesUser = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./FindEntitiesUser.scss");
var Checkbox_1 = __importDefault(require("../../atoms/Checkbox"));
var Avatar_1 = __importDefault(require("../../atoms/Avatar"));
var Structure_1 = __importDefault(require("../../molecules/Structure"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
var indexIcon_1 = require("../../../indexIcon");
var __1 = require("../../..");
var FindEntitiesUser = function (_a) {
    var user = _a.user, isSelected = _a.isSelected, onChange = _a.onChange, disabled = _a.disabled, tooltipBackground = _a.tooltipBackground;
    var shortPosition = user.department.slice(0, 100);
    var isShorter = user.department.length > shortPosition.length;
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-user', children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { align: 'flex-start', value: user.id, checked: isSelected, disabled: disabled, onChange: onChange, fullWidth: true, label: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities-user__content', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-user__avatar', children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: user.photo, size: 'm', fullName: "".concat(user.firstName, " ").concat(user.lastName) }) }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities-user__title', children: ["".concat(user.lastName, " ").concat(user.firstName, " ").concat(user.middleName), !!user.departmentsPath && ((0, jsx_runtime_1.jsxs)(Tooltip_1.default, { position: 'right', background: tooltipBackground, children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-user__info', children: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, {}) }), (0, jsx_runtime_1.jsx)(Structure_1.default, { departmentsPath: user.departmentsPath, background: tooltipBackground })] }))] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-user__subtitle', title: isShorter ? user.department : undefined, children: isShorter ? "".concat(shortPosition, "...") : shortPosition }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities-user__subtitle', children: [user.id, (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities-user__copy', children: (0, jsx_runtime_1.jsx)(__1.Copy, { tooltipLabel: '\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0422\u041D', copyMessage: user.id, successCopyMessage: '\u0422\u041D \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D', tooltipProps: {
                                                background: tooltipBackground,
                                                position: 'right'
                                            } }) })] })] })] }) }) }));
};
exports.FindEntitiesUser = FindEntitiesUser;
