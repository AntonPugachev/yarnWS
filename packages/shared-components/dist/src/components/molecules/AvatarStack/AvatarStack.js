"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Avatar_1 = __importDefault(require("../../atoms/Avatar/Avatar"));
var index_1 = require("../../../index");
require("./AvatarStack.scss");
var AvatarStack = function (_a) {
    var list = _a.list, _b = _a.size, size = _b === void 0 ? 'm' : _b, _c = _a.maxVisible, maxVisible = _c === void 0 ? 3 : _c, onClick = _a.onClick, _d = _a.position, position = _d === void 0 ? 'bottom' : _d, currentUserId = _a.currentUserId, _e = _a.isVisibleTooltip, isVisibleTooltip = _e === void 0 ? true : _e;
    var toggleRef = (0, react_1.useRef)(null);
    var visibleUsers = [];
    list.forEach(function (u, i) {
        i < maxVisible && visibleUsers.push(u);
    });
    var GAP = 4;
    var handleClick = function (user) {
        if (onClick) {
            onClick(user);
        }
    };
    var sortedList = (0, react_1.useMemo)(function () {
        return list.sort(function (a, b) { return a.fullName.localeCompare(b.fullName); }).sort(function (a) { return a.id === currentUserId ? -1 : 1; });
    }, [list, currentUserId]);
    var clickableClass = onClick ? 'rf-avatar-stack--clickable' : '';
    var usersJSX = visibleUsers.map(function (u, i) { return ((0, jsx_runtime_1.jsx)("div", { className: "rf-avatar-stack__item ".concat(clickableClass), onClick: function () { return handleClick(u); }, style: {
            transform: "translateX(-".concat(GAP * i, "px)"),
            zIndex: list.length + i
        }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: u.photo, fullName: u.fullName, size: size }) }, u.id)); });
    return ((0, jsx_runtime_1.jsxs)(index_1.Tooltip, { isVisible: isVisibleTooltip, position: position, background: 'white', hidePadding: true, className: 'rf-avatar-stack__tooltip', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-avatar-stack', ref: toggleRef, children: [usersJSX, maxVisible < list.length && ((0, jsx_runtime_1.jsx)("div", { "data-testid": 'rf-avatar-stack__toggle', className: 'rf-avatar-stack__item rf-avatar-stack__collective-avatar rf-avatar-stack--clickable', style: {
                            transform: "translateX(-".concat(GAP * maxVisible, "px)"),
                            zIndex: list.length + maxVisible
                        }, children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { size: size, fullName: "+".concat(list.length - maxVisible) }) }))] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-avatar-stack__collective-tooltip-wrapper', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-avatar-stack--inner-tooltip-container', children: sortedList.map(function (user) { return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-avatar-stack__tooltip-content-container', children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-avatar-stack__tooltip-content-wrapper', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-avatar-stack__tooltip-avatar-wrapper', children: (0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: user.photo, fullName: user.fullName, size: 'm' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-avatar-stack__tooltip-info-column', children: [(0, jsx_runtime_1.jsx)("p", { className: "".concat(user.id === currentUserId ?
                                                'rf-avatar-stack__tooltip-name--you' :
                                                'rf-avatar-stack__tooltip-name'), children: user.id === currentUserId ? 'Вы' : user.fullName }), (0, jsx_runtime_1.jsxs)("p", { className: 'rf-avatar-stack__tooltip-TN', children: ["\u0422\u041D: ", user.id] })] })] }) }, user.id)); }) }) })] }));
};
exports.default = AvatarStack;
