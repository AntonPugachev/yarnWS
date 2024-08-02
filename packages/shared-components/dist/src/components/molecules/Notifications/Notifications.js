"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotification = exports.removeNotification = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Notifications.scss");
var Notification_1 = __importDefault(require("../Notification"));
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var react_dom_1 = require("react-dom");
// ---------------------------------------------------------------------------------------------------------------------
/** Стэк уведомлений */
var notifications$$ = new rxjs_1.BehaviorSubject([]);
/** Удалить уведомление */
var removeNotification = function (id) {
    if (notifications$$.closed || notifications$$.isStopped) {
        return;
    }
    var tmp = __spreadArray([], notifications$$.getValue(), true);
    if (tmp.length > 0) {
        if (id !== undefined) {
            tmp = tmp.filter(function (n) { return n.id !== id; });
        }
        else {
            tmp.shift();
        }
        notifications$$.next(tmp);
    }
};
exports.removeNotification = removeNotification;
/** Добавить уведомление */
var sendNotification = function (message, delay) {
    if (delay === void 0) { delay = 8000; }
    if (notifications$$.closed || notifications$$.isStopped) {
        return;
    }
    var tmp = __spreadArray([], notifications$$.getValue(), true);
    tmp.push(__assign(__assign({}, message), { id: message.id || Date.now() }));
    notifications$$.next(tmp);
    setTimeout(function () {
        (0, exports.removeNotification)(message.id);
    }, delay);
};
exports.sendNotification = sendNotification;
var Notifications = function () {
    /** Флаг по которому остановить подписку */
    var obstacle = (0, react_1.useRef)(new rxjs_1.Subject());
    var _a = (0, react_1.useState)(null), sub = _a[0], setSub = _a[1];
    (0, react_1.useEffect)(function () {
        if (notifications$$.closed) {
            notifications$$ = new rxjs_1.BehaviorSubject([]);
        }
        setSub(notifications$$);
    }, []);
    /** Список уведомлений */
    var _b = (0, react_1.useState)([]), notifications = _b[0], setNotifications = _b[1];
    // -------------------------------------------------------------------------------------------------------------------
    /** Подписываемся на список уведомлений */
    (0, react_1.useEffect)(function () {
        if (!sub || sub.closed) {
            return;
        }
        var until = obstacle.current;
        sub.pipe((0, operators_1.takeUntil)(until)).subscribe(function (data) {
            setNotifications(data);
        });
        return function () {
            until.next(true);
        };
    }, [sub]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Список уведомлений TSX */
    var list = notifications.map(function (n, i) { return ((0, jsx_runtime_1.jsx)(Notification_1.default, { item: n, remove: exports.removeNotification }, n.id || i)); });
    // -------------------------------------------------------------------------------------------------------------------
    if (!list.length) {
        return null;
    }
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)("div", { "data-testid": 'rf-notifications', className: 'rf-notifications__list', children: list }), document.body);
};
exports.default = Notifications;
