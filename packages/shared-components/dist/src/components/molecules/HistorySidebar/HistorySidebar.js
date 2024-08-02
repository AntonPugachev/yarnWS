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
exports.Statuses = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var __1 = require("../../..");
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
var helpers_1 = require("../../../utils/helpers");
var Attachment_1 = __importDefault(require("../Attachment/Attachment"));
var AvatarStatus_1 = __importDefault(require("../AvatarStatus"));
var StatusWithText_1 = __importDefault(require("../../atoms/StatusWithText"));
var Badge_1 = __importDefault(require("../../atoms/Badge"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
require("./HistorySidebar.scss");
var TextCollapse_1 = __importDefault(require("../TextCollapse"));
var Statuses;
(function (Statuses) {
    Statuses["POSITIVE"] = "POSITIVE";
    Statuses["NEGATIVE"] = "NEGATIVE";
    Statuses["NEUTRAL"] = "NEUTRAL";
})(Statuses || (exports.Statuses = Statuses = {}));
var statusByType = {
    'POSITIVE': 'icon',
    'NEUTRAL': 'load',
    'NEGATIVE': 'decline'
};
var variantByType = {
    'POSITIVE': 'green',
    'NEUTRAL': 'yellow',
    'NEGATIVE': 'red'
};
var criticalityByType = {
    'POSITIVE': '3',
    'NEUTRAL': '2',
    'NEGATIVE': '1'
};
var HistorySidebar = function (_a) {
    var history = _a.history, attachments = _a.attachments, _b = _a.defaultOpened, defaultOpened = _b === void 0 ? false : _b, _c = _a.useHeightOffsetTop, useHeightOffsetTop = _c === void 0 ? false : _c, currentUserId = _a.userId, activeStyle = _a.activeStyle, style = _a.style;
    var containerRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(0), prevCount = _d[0], setPrevCount = _d[1];
    var _e = (0, react_1.useState)(0), nextCount = _e[0], setNextCount = _e[1];
    var refs = (0, react_1.useRef)([]);
    var listRef = (0, react_1.useRef)(null);
    var getActiveIndex = (0, react_1.useCallback)(function (list) { return list.findIndex(function (item) { return !item.approveDateTime; }); }, []);
    var getIndexByUserId = (0, react_1.useCallback)(function (list) {
        return list.findIndex(function (item) { return !!item.approvers.find(function (approver) { return approver.id === currentUserId; }); });
    }, [currentUserId]);
    /**
     * Определяем список шагов которые будут отображаться при открытом и закрытом сайдбаре
     * Если передан currentUserId то определяем список по пользователю и только если он найден,
     * иначе определяем список по текущему шагу (первый шаг в котором нету approveDateTime)
     */
    var getActiveHistory = function () {
        if (opened || history.length < 4) {
            return history;
        }
        var countHistory = history.length - 1;
        var indexByUserId = getIndexByUserId(history);
        var indexByApproveDate = getActiveIndex(history) !== -1 ? getActiveIndex(history) : countHistory;
        var activeIndex = indexByUserId !== -1 ? indexByUserId : indexByApproveDate;
        if (activeIndex > 2) {
            setPrevCount(activeIndex - 2);
        }
        if ((countHistory - activeIndex) > 1) {
            setNextCount(countHistory - activeIndex - 1);
        }
        return history.reduce(function (acc, curr, index) {
            var diffIndex = index - activeIndex;
            var nextStep = diffIndex === 1;
            var currentStep = diffIndex === 0;
            var prevTwoStep = diffIndex >= -2 && diffIndex < 0;
            var nextTwoStep = acc.length < 4 && index > activeIndex;
            if (!currentStep && !prevTwoStep && !nextStep && nextTwoStep) {
                setNextCount(function (nextCount) { return nextCount - 1; });
            }
            if (currentStep || prevTwoStep || nextStep || nextTwoStep) {
                return __spreadArray(__spreadArray([], acc, true), [curr], false);
            }
            return acc;
        }, []);
    };
    var _f = (0, react_1.useState)(defaultOpened), opened = _f[0], setOpened = _f[1];
    var _g = (0, react_1.useState)(function () { return getActiveHistory(); }), list = _g[0], setList = _g[1];
    (0, react_1.useEffect)(function () {
        setList(getActiveHistory());
    }, [opened, history, currentUserId]);
    var getHeightByIndex = (0, react_1.useCallback)(function () {
        var height = 0;
        var MARGIN_BOTTOM = 32;
        for (var i = 0; i < prevCount; i++) {
            height += refs.current[i].getBoundingClientRect().height + MARGIN_BOTTOM;
        }
        return height;
    }, [prevCount]);
    (0, react_1.useLayoutEffect)(function () {
        if (opened) {
            setTimeout(function () {
                var _a;
                var scrollTop = getHeightByIndex();
                (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.scrollTo({
                    top: scrollTop,
                    behavior: 'smooth'
                });
            }, 0);
        }
    }, [opened, getHeightByIndex]);
    var getOffsetDateStirng = (0, react_1.useCallback)(function (approveDateTime) {
        var currentDate = new Date(approveDateTime);
        var offset = currentDate.getTimezoneOffset() * 60 * 1000;
        var dateWithOffset = currentDate.getTime() + offset * -1;
        var _a = (0, helpers_1.formatDate)(dateWithOffset), dayOfMonth = _a.dayOfMonth, monthShort = _a.monthShort, year = _a.year, hour = _a.hour, minutes = _a.minutes;
        return "".concat(dayOfMonth, " ").concat(monthShort, " ").concat(year, " \u0432 ").concat(hour, ":").concat(minutes);
    }, []);
    /**
     * Устанавливаем цвет автотарок по их статусу
     * Синий цвет для автивного шага (первый шаг в котором нету approveDateTime)
     */
    var getAvatarVariant = (0, react_1.useCallback)(function (item, index) {
        var activeIndex = getActiveIndex(list);
        return activeIndex === index ? 'blue' : item.statusType ? variantByType[item.statusType] : 'default';
    }, [getActiveIndex, list]);
    var styles = (0, react_1.useMemo)(function () { return opened ? __assign(__assign({}, style), activeStyle) : style; }, [style, activeStyle, opened]);
    /**
     * Если установлено useHeightOffsetTop, тогда определяем выосту компонента от верхней границы экрана
     * только в открытом состоянии
     */
    (0, react_1.useLayoutEffect)(function () {
        var _a;
        if (containerRef.current && useHeightOffsetTop) {
            var topToHeight = (_a = containerRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top;
            containerRef.current.style.height = opened ? "calc(100vh - ".concat(topToHeight, "px - 20px") : 'auto';
        }
    }, [opened, history, useHeightOffsetTop]);
    var isCurrentUser = function (userId) { return userId === currentUserId; };
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-history-sidebar', opened && 'rf-history-sidebar--opened', !useHeightOffsetTop && 'rf-history-sidebar--default'), style: styles, ref: containerRef, children: (0, jsx_runtime_1.jsxs)(__1.Tile, { variant: opened ? 'non-clickable' : 'none', padding: opened ? '0' : '20px', className: 'rf-history-sidebar__tile', children: [(0, jsx_runtime_1.jsxs)("div", { className: "rf-history-sidebar__list ".concat(opened ? 'opened-padding' : ''), ref: listRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "rf-history-sidebar__head ".concat(!opened ? 'rf-history-sidebar__head-closed' : 'rf-history-sidebar__head-opened'), children: (0, jsx_runtime_1.jsx)(__1.Button, { onClick: function () { return setOpened(!opened); }, size: 'm', buttonType: 'icon-round', className: 'rf-history-sidebar__btn', "aria-label": opened ? 'Свернуть' : 'Развернуть', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__btn-icon', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }) }) }), !!prevCount && !opened &&
                            (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-history-sidebar__item', 'rf-history-sidebar__item--prev-count'), children: (0, jsx_runtime_1.jsx)(AvatarStatus_1.default, { size: 'l', variant: 'default', isShowBrowserTooltip: false, fullName: "+".concat(prevCount) }) }), opened &&
                            (0, jsx_runtime_1.jsx)("h3", { className: 'rf-history-sidebar__title', children: "\u0418\u0441\u0442\u043E\u0440\u0438\u044F \u0441\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u044F" }), list.map(function (item, index) {
                            var variant = getAvatarVariant(item, index);
                            var isMe = isCurrentUser(item.approvers[0].id);
                            var isMultiApprovers = item.approvers.length > 1;
                            return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-history-sidebar__item', item.statusType && "rf-history-sidebar__item--".concat(variant)), ref: function (el) { return refs.current[index] = el; }, children: [(0, jsx_runtime_1.jsx)(AvatarStatus_1.default, __assign({ size: 'l', variant: variant, isShowBrowserTooltip: false, type: opened ? undefined : item.statusType && statusByType[item.statusType] }, (!isMultiApprovers && item.approvers[0]), (isMultiApprovers && { icon: function () { return (0, jsx_runtime_1.jsx)(indexIcon_1.OtherPeople, { size: 'm' }); } }))), opened && (0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-sidebar__item-content', children: [(0, jsx_runtime_1.jsxs)("h4", { className: 'rf-history-sidebar__item-name', children: [isMe && !isMultiApprovers ?
                                                        (0, jsx_runtime_1.jsx)("span", { className: 'rf-history-sidebar__item-me', children: "\u0412\u044B" }) :
                                                        (0, jsx_runtime_1.jsx)("span", { children: isMultiApprovers ? item.approverName : item.approvers[0].fullName }), item.approvers.length > 1 &&
                                                        (0, jsx_runtime_1.jsxs)(Tooltip_1.default, { position: 'top', background: 'white', hidePadding: true, children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__item-info-icon', children: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusInformation, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__item-list rf-history-sidebar__approvers', children: item.approvers.map(function (approver, index) { return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-sidebar__approvers-item', children: [(0, jsx_runtime_1.jsx)(__1.Avatar, __assign({}, approver)), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-sidebar__approvers-item__content', children: [(0, jsx_runtime_1.jsx)("h5", { className: 'rf-history-sidebar__approvers-item__name', children: isCurrentUser(approver.id) ?
                                                                                            (0, jsx_runtime_1.jsx)("span", { className: 'rf-history-sidebar__item-me', children: "\u0412\u044B" }) :
                                                                                            (0, jsx_runtime_1.jsx)("span", { children: approver.fullName }) }), (0, jsx_runtime_1.jsxs)("p", { className: 'rf-history-sidebar__approvers-item__TN', children: ["\u0422\u041D: ", approver.id] })] })] }, index)); }) })] })] }), (0, jsx_runtime_1.jsx)("p", { className: 'rf-history-sidebar__item-text', children: item.name }), item.approveDateTime &&
                                                (0, jsx_runtime_1.jsx)("p", { className: 'rf-history-sidebar__item-text', children: getOffsetDateStirng(item.approveDateTime) }), item.status && item.statusType && (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__item-status', children: (0, jsx_runtime_1.jsx)(StatusWithText_1.default, { statusText: item.status, criticality: criticalityByType[item.statusType] }) }), item.comment &&
                                                (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__item-comment', children: (0, jsx_runtime_1.jsx)(TextCollapse_1.default, { lineHeight: '20px', children: item.comment }) })] })] }, index));
                        }), !!nextCount && !opened &&
                            (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-history-sidebar__item', 'rf-history-sidebar__item--prev-count'), children: (0, jsx_runtime_1.jsx)(AvatarStatus_1.default, { size: 'l', variant: 'default', isShowBrowserTooltip: false, fullName: "+".concat(nextCount) }) })] }), !!(attachments === null || attachments === void 0 ? void 0 : attachments.length) &&
                    (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-history-sidebar__attachments', !(attachments === null || attachments === void 0 ? void 0 : attachments.length) && 'rf-history-sidebar__attachments-empty'), children: opened ?
                            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'rf-history-sidebar__attachments-title', children: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__attachments-container', children: attachments === null || attachments === void 0 ? void 0 : attachments.map(function (attachment, index) { return ((0, jsx_runtime_1.jsx)(Attachment_1.default, { attachment: {
                                                id: attachment.id,
                                                file: new File([attachment.base64], attachment.fileName),
                                                base64: attachment.base64
                                            }, type: 'secondary', showRemoveIcon: false, tooltipBackground: 'white' }, index)); }) })] }) :
                            (0, jsx_runtime_1.jsx)(Badge_1.default, { display: !!(attachments === null || attachments === void 0 ? void 0 : attachments.length), badgeContent: attachments === null || attachments === void 0 ? void 0 : attachments.length, children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-sidebar__attachments-preview', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllDoc, {}) }) }) })] }) }));
};
exports.default = HistorySidebar;
