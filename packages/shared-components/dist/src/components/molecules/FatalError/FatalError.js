"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./FatalError.scss");
var FatalErrorIcon_1 = __importDefault(require("./FatalErrorIcon"));
var FatalError = function (_a) {
    var _b = _a.description, description = _b === void 0 ? 'Что-то пошло не так. Пожалуйста, обновите страницу.' : _b, _c = _a.icon, icon = _c === void 0 ? (0, jsx_runtime_1.jsx)(FatalErrorIcon_1.default, {}) : _c, _d = _a.title, title = _d === void 0 ? 'Ошибка' : _d;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'fatal-error', children: [icon, (0, jsx_runtime_1.jsx)("p", { className: 'fatal-error__label', children: title }), (0, jsx_runtime_1.jsxs)("p", { className: 'fatal-error__message', children: [description, " "] })] }));
};
exports.default = FatalError;
