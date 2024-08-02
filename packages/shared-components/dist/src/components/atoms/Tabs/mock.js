"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._unreadTabs = exports._badgeTabs = exports._iconTabs = exports._simpleTabs = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var indexIcon_1 = require("../../../indexIcon");
var Badge_1 = __importDefault(require("../Badge"));
var Unread_1 = __importDefault(require("../Unread"));
exports._simpleTabs = [
    {
        label: 'Заявки',
        tab: (0, jsx_runtime_1.jsx)("div", { className: 'first-content', children: "Tab1" }),
    },
    {
        label: 'Запросы',
        tab: (0, jsx_runtime_1.jsx)("div", { className: 'active-tab', children: "Tab2" }),
        active: true,
    },
    {
        label: 'Запросы 2',
        tab: (0, jsx_runtime_1.jsx)("div", { className: 'active-tab', children: "Tab3" }),
    },
    {
        label: 'Ситуации',
        disabled: true,
    },
];
exports._iconTabs = [
    {
        label: 'Tab 1',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 's' }),
    },
    {
        label: 'Tab 2',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 's' }),
    },
    {
        label: 'Tab 3',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 's' }),
    },
    {
        label: 'Tab 4',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 's' }),
    },
];
exports._badgeTabs = [
    {
        label: ((0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 10, placeNear: true, children: "\u0417\u0430\u044F\u0432\u043A\u0438" })),
    },
    {
        label: ((0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 5, placeNear: true, children: "\u0417\u0430\u043F\u0440\u043E\u0441\u044B" })),
    },
    {
        label: ((0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 10, placeNear: true, children: "\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B" })),
    },
    {
        label: ((0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: 10, placeNear: true, children: "\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u0438" })),
        disabled: true,
    },
];
exports._unreadTabs = [
    {
        label: ((0, jsx_runtime_1.jsx)(Unread_1.default, { children: "\u0417\u0430\u044F\u0432\u043A\u0438" })),
    },
    {
        label: ((0, jsx_runtime_1.jsx)(Unread_1.default, { children: "\u0417\u0430\u043F\u0440\u043E\u0441\u044B" })),
    },
    { label: 'Вопросы и ответы', },
    {
        label: ((0, jsx_runtime_1.jsx)(Unread_1.default, { children: "\u0421\u0438\u0442\u0443\u0430\u0446\u0438\u0438" })),
        disabled: true,
    },
];
