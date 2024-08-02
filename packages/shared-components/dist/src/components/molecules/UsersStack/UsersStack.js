"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./UsersStack.scss");
var Avatar_1 = __importDefault(require("../../atoms/Avatar"));
var UsersStack = function (_a) {
    var users = _a.users, size = _a.size, _b = _a.max, max = _b === void 0 ? 3 : _b;
    var slicedUsers = users.filter(function (_, i) { return i < max; });
    var usersJSX = slicedUsers.map(function (u, i) { return ((0, jsx_runtime_1.jsx)("div", { className: 'users-stack__item', style: {
            transform: "translateX(-".concat(16 * i, "px)"),
            zIndex: users.length - i
        }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: u.photo, fullName: u.fullName, size: size }) }, u.id)); });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'users-stack', children: [usersJSX, max < users.length && (0, jsx_runtime_1.jsxs)("span", { className: 'users-stack__value', children: ["+", users.length - max] })] }));
};
exports.default = UsersStack;
