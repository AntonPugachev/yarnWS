"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unread = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Unread.scss");
var Unread = function (_a) {
    var _b = _a.children, children = _b === void 0 ? '' : _b, _c = _a.isBadgeOfMenu, isBadgeOfMenu = _c === void 0 ? false : _c;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'unread', children: [children, (0, jsx_runtime_1.jsx)("div", { className: "unread__badge ".concat(isBadgeOfMenu ? 'unread__badge-menu' : '') })] }));
};
exports.Unread = Unread;
