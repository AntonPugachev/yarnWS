"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Notification.scss");
var indexIcon_1 = require("../../../indexIcon");
var Notification = function (_a) {
    var item = _a.item, remove = _a.remove;
    /** Удалить уведомление */
    var removeNotification = function () {
        item.id && remove && remove(item.id);
    };
    var Icon = item.variant === 'green' ? indexIcon_1.StatusRelease : indexIcon_1.StatusInfoFill;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-notification', children: [(0, jsx_runtime_1.jsx)(Icon, { className: "rf-notification__icon rf-notification--".concat(item.variant || 'default') }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-notification__wrap', children: [(0, jsx_runtime_1.jsx)("h3", { className: 'rf-notification__title', children: item.title }), (0, jsx_runtime_1.jsx)("p", { className: 'rf-notification__message', children: item.message })] }), (0, jsx_runtime_1.jsx)("button", { className: 'rf-notification__close', onClick: removeNotification, "aria-label": '\u0421\u043A\u0440\u044B\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) })] }));
};
exports.default = Notification;
