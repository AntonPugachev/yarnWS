"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./GhostScreen.scss");
var GhostImage_1 = __importDefault(require("./icons/GhostImage"));
var GhostScreen = function (_a) {
    var _b = _a.text, text = _b === void 0 ? 'Задачи не найдены' : _b;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'ghost__wrapper', children: [(0, jsx_runtime_1.jsx)(GhostImage_1.default, {}), (0, jsx_runtime_1.jsx)("div", { className: 'ghost__text', children: text })] }));
};
exports.default = GhostScreen;
