"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./TimeElement.scss");
var timeData_1 = require("./timeData");
var Menu_1 = require("../../Menu/Menu");
var classnames_1 = require("../../../../utils/classnames");
var indexIcon_1 = require("../../../../indexIcon");
var getTime = function (time) { return (time === null || time === void 0 ? void 0 : time.split(':')) || []; };
exports.getTime = getTime;
var TimeElement = function (_a) {
    var updateTime = _a.updateTime, min = _a.min, max = _a.max, value = _a.value;
    var _b = (0, react_1.useState)(null), time = _b[0], setTime = _b[1];
    var _c = (0, react_1.useState)(false), translate = _c[0], setTranslate = _c[1];
    (0, react_1.useEffect)(function () {
        if (value) {
            var hours = (0, exports.getTime)(value)[0];
            setTime(hours);
        }
    }, [value]);
    /** Переключение часов и минут */
    (0, react_1.useEffect)(function () {
        var _a = (0, exports.getTime)(value), hours = _a[0], minutes = _a[1];
        if (hours) {
            var hasMinutes = minutes ? !minutes.includes('_') : false;
            setTranslate(!hours.includes('_') && !hasMinutes);
        }
    }, [value]);
    var clickHandler = function (event) {
        var hours = (0, exports.getTime)(event.currentTarget.innerText)[0];
        updateTime(hours);
        setTime(hours);
    };
    var applyTimeHandler = function (event, onClose) {
        updateTime(event.currentTarget.innerText);
        onClose();
    };
    // -------------------------------------------------------------------------------------------------------------------
    var minH = (0, react_1.useMemo)(function () { return min.split(':'); }, [min])[0];
    var maxH = (0, react_1.useMemo)(function () { return max.split(':'); }, [max])[0];
    var isActiveHours = (0, react_1.useCallback)(function (current) {
        var hours = (0, exports.getTime)(current)[0];
        var activeHours = (0, exports.getTime)(time)[0];
        return hours === activeHours;
    }, [time]);
    /** Сравнение времени */
    var isValidTime = (0, react_1.useCallback)(function (time, flag) {
        var _a = (0, exports.getTime)(time), h = _a[0], m = _a[1];
        if (flag === 'h') {
            return h >= minH && h <= maxH;
        }
        var cur = h + m;
        var minStr = min.replace(':', '');
        var maxStr = max.replace(':', '');
        return cur >= minStr && cur <= maxStr;
    }, [
        minH,
        maxH,
        min,
        max
    ]);
    // -------------------------------------------------------------------------------------------------------------------
    var getTimeHours = (0, react_1.useCallback)(function () {
        var hours = (0, exports.getTime)(time)[0];
        var secondHour = hours ? hours[1] : '_';
        /**
         * Если нету часов или часы ну указаны или оба часа указано то выводим все часы
         */
        if (!hours || hours === '__' || (!hours.startsWith('_') && secondHour !== '_')) {
            return timeData_1.arrayTimeHours;
        }
        /** Фильтруем часы по началу первого часа */
        return timeData_1.arrayTimeHours.reduce(function (acc, curr) {
            if (curr.some(function (time) { return +time[0] >= +hours[0]; })) {
                return __spreadArray(__spreadArray([], acc, true), [curr], false);
            }
            return acc;
        }, []);
    }, [timeData_1.arrayTimeHours, time]);
    /** Ячейки с часами */
    var itemsHour = getTimeHours().map(function (itemRow, id) { return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-time-element__item-row', children: itemRow.map(function (item) { return ((0, jsx_runtime_1.jsx)("button", { type: 'button', disabled: !isValidTime(item, 'h'), className: (0, classnames_1.classnames)('rf-time-element', isActiveHours(item) && 'rf-time-element--active'), onClick: clickHandler, children: item }, item)); }) }, id)); });
    var onClose = (0, react_1.useContext)(Menu_1.MenuContext).onClose;
    /** Ячейки с минутами */
    var itemsMinutes = timeData_1.arrayTimeMinutes.map(function (itemRow, id) { return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-time-element__item-row', children: itemRow.map(function (item) {
            var t = (time || '00') + item;
            return ((0, jsx_runtime_1.jsx)("button", { type: 'button', disabled: !isValidTime(t, 'm'), className: 'rf-time-element', onClick: function (e) { return applyTimeHandler(e, onClose); }, children: t }, item));
        }) }, id)); });
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-time-element__wrapper', children: (0, jsx_runtime_1.jsx)("div", { "data-testid": 'rf-time-element', className: "rf-time-element__translate ".concat(translate ? 'element__translate--active' : ''), children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-time-element__flex', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-time-element__column', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-time-element__header-container', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-time-element__name', children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0441" }) }), itemsHour] }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-time-element__column', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-time-element__header-container', children: (0, jsx_runtime_1.jsxs)("button", { className: 'rf-time-element__name rf-time-element__btn', onClick: function () { return setTranslate(false); }, children: [(0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}), " ", (0, jsx_runtime_1.jsx)("span", { children: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u0438\u043D\u0443\u0442\u044B" })] }) }), itemsMinutes] })] }) }) }));
};
exports.default = TimeElement;
