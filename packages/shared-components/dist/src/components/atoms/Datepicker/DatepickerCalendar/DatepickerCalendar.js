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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./DatepickerCalendar.scss");
var indexIcon_1 = require("../../../../indexIcon");
var Tooltip_1 = __importDefault(require("../../Tooltip"));
var helpersDatePicker_1 = require("../../../../utils/helpersDatePicker");
var DatepickerCalendar = function (_a) {
    var value = _a.value, setInputValue = _a.setInputValue, toggleCalendar = _a.toggleCalendar, minDate = _a.minDate, maxDate = _a.maxDate, range = _a.range, _b = _a.locale, locale = _b === void 0 ? 'ru' : _b, _c = _a.format, format = _c === void 0 ? 'dd.mm.yyyy' : _c, _d = _a.separator, separator = _d === void 0 ? '-' : _d, _e = _a.disableWeekDays, disableWeekDays = _e === void 0 ? [] : _e, _f = _a.tooltipBackground, tooltipBackground = _f === void 0 ? 'white' : _f;
    var contentRef = (0, react_1.useRef)(null);
    // -------------------------------------------------------------------------------------------------------------------
    var setCurrent = (0, react_1.useCallback)(function () {
        if (value && !range) {
            return (0, helpersDatePicker_1.stringToDate)(value, format);
        }
        return new Date();
    }, [value, range]);
    var setRange = function () {
        var _a, _b;
        if (value && range) {
            var values = value.split(' - ');
            var from = ((_a = values[0]) === null || _a === void 0 ? void 0 : _a.includes('_')) ? undefined : values[0];
            var to = ((_b = values[1]) === null || _b === void 0 ? void 0 : _b.includes('_')) ? undefined : values[1];
            return [from ? (0, helpersDatePicker_1.stringToDate)(from, format) : undefined, to ? (0, helpersDatePicker_1.stringToDate)(to, format) : undefined];
        }
        return [undefined, undefined];
    };
    var _g = (0, react_1.useState)(setCurrent()), currentDate = _g[0], setCurrentDate = _g[1];
    var _h = (0, react_1.useState)([undefined, undefined]), rangeDates = _h[0], setRangeDates = _h[1];
    (0, react_1.useEffect)(function () {
        if (range) {
            setRangeDates(setRange());
        }
        else {
            setCurrentDate(setCurrent());
        }
    }, [value, range]);
    // -------------------------------------------------------------------------------------------------------------------
    var onDateChange = function (date) {
        var _a, _b, _c;
        if (range) {
            var dates = __spreadArray([], rangeDates, true);
            if (dates[0] !== undefined && dates[1] !== undefined) {
                dates = [undefined, undefined];
            }
            if (dates[0] === undefined) {
                dates[0] = date;
                setInputValue((0, helpersDatePicker_1.formatDate)(date.getTime(), format).date + " - __".concat(separator, "__").concat(separator, "____"));
            }
            else {
                dates[1] = date;
                if (dates[1].getTime() < ((_a = dates[0]) === null || _a === void 0 ? void 0 : _a.getTime())) {
                    dates = [dates[1], dates[0]];
                }
                var newValue = "".concat((0, helpersDatePicker_1.formatDate)((_b = dates[0]) === null || _b === void 0 ? void 0 : _b.getTime(), format).date, " - ").concat((0, helpersDatePicker_1.formatDate)((_c = dates[1]) === null || _c === void 0 ? void 0 : _c.getTime(), format).date);
                setInputValue(newValue);
                toggleCalendar(false);
            }
        }
        else {
            setInputValue((0, helpersDatePicker_1.formatDate)(date.getTime(), format).date);
            setCurrentDate(date);
            toggleCalendar(false);
        }
        setPeriodType('day');
    };
    // -------------------------------------------------------------------------------------------------------------------
    var _j = (0, react_1.useState)((0, helpersDatePicker_1.getDaysForMonth)(currentDate)), activePeriod = _j[0], setActivePeriod = _j[1];
    (0, react_1.useEffect)(function () {
        if (!range) {
            setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(currentDate));
            if (minDate && currentDate.getTime() < minDate.getTime()) {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(minDate));
            }
            if (maxDate && currentDate.getTime() > maxDate.getTime()) {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(maxDate));
            }
        }
        else {
            if (minDate && rangeDates[0] && rangeDates[0].getTime() < minDate.getTime()) {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(minDate));
            }
            if (maxDate && rangeDates[1] && rangeDates[1].getTime() > maxDate.getTime()) {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(maxDate));
            }
        }
    }, [
        currentDate,
        range,
        minDate,
        maxDate
    ]);
    (0, react_1.useEffect)(function () {
        if (range) {
            if (rangeDates[1] !== undefined) {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(rangeDates[1]));
            }
            else if (rangeDates[0] !== undefined) {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(rangeDates[0]));
            }
            else {
                setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(new Date()));
            }
        }
    }, [rangeDates, range]);
    // -------------------------------------------------------------------------------------------------------------------
    var onBlur = function (lastButton) {
        if (lastButton) {
            toggleCalendar(false);
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    var onDayClick = function (date) {
        onDateChange(date);
    };
    var daysJSX = activePeriod.days.map(function (_a, i, array) {
        var _b, _c;
        var period = _a.period, date = _a.date;
        var periodClass = "rf-datepicker__calendar-day--".concat(period);
        var isToday = new Date().toDateString() === date.toDateString();
        var rangeDayCondition = (rangeDates[0] && (0, helpersDatePicker_1.isCurrentDay)(date, rangeDates[0])) || (rangeDates[1] && (0, helpersDatePicker_1.isCurrentDay)(date, rangeDates[1]));
        var activeCondition = range ? rangeDayCondition : (0, helpersDatePicker_1.isCurrentDay)(date, currentDate);
        var currentDayClass = activeCondition ? 'rf-datepicker__calendar-date--active' : isToday ? 'rf-datepicker__today-day' : '';
        var fromDateClass = rangeDates[0] && ((_b = rangeDates[0]) === null || _b === void 0 ? void 0 : _b.getTime()) === date.getTime() ? 'rf-datepicker__calendar-date--from' : '';
        var toDateClass = rangeDates[1] && ((_c = rangeDates[1]) === null || _c === void 0 ? void 0 : _c.getTime()) === date.getTime() ? 'rf-datepicker__calendar-date--to' : '';
        var inRangeClass = range && rangeDates[0] && rangeDates[1] &&
            (date.getTime() >= rangeDates[0].getTime() && date.getTime() <= rangeDates[1].getTime()) ?
            'rf-datepicker__calendar-tile--range rf-datepicker__calendar-date--range  ' : '';
        var d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        var disabledWeekDay = disableWeekDays.includes(d.getDay());
        var disabledMin = minDate && minDate.getTime() > d.getTime();
        var disabledMax = maxDate && maxDate.getTime() < d.getTime();
        var disabledClass = disabledWeekDay || disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';
        return ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: "rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-day\n          ".concat(periodClass, "\n          ").concat(currentDayClass, "\n          ").concat(disabledClass, " \n          ").concat(fromDateClass, "\n          ").concat(toDateClass, " \n          ").concat(inRangeClass, "\n        "), onClick: function () { return onDayClick(date); }, onBlur: function () { return onBlur(i === array.length - 1); }, children: date.getDate() }, date.getTime()));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var onMonthClick = function (e, monthIndex) {
        e.stopPropagation();
        setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(new Date(activePeriod.year, monthIndex)));
        setTimeout(function () {
            setPeriodType('day');
        });
    };
    var monthsJSX = helpersDatePicker_1.months[locale].map(function (m, i, array) {
        var d = new Date(activePeriod.year, i);
        var rangeMonthCondition = (rangeDates[0] && (0, helpersDatePicker_1.isCurrentMonth)(d, rangeDates[0])) || (rangeDates[1] && (0, helpersDatePicker_1.isCurrentMonth)(d, rangeDates[1]));
        var activeCondition = range ? rangeMonthCondition : (0, helpersDatePicker_1.isCurrentMonth)(d, currentDate);
        var currentMonthClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';
        var fromMonthCondition = rangeDates[0] && (0, helpersDatePicker_1.isCurrentMonth)(d, rangeDates[0]);
        var fromMonthClass = fromMonthCondition ? 'rf-datepicker__calendar-month-wrapper--from' : '';
        var toMonthClass = rangeDates[1] && (0, helpersDatePicker_1.isCurrentMonth)(d, rangeDates[1]) ? 'rf-datepicker__calendar-month-wrapper--to' : '';
        var inRangeCondition = range && rangeDates[0] && rangeDates[1] &&
            ((0, helpersDatePicker_1.compareMonths)(d, rangeDates[0]) >= 0 && (0, helpersDatePicker_1.compareMonths)(d, rangeDates[1]) <= 0);
        var inRangeClass = inRangeCondition ?
            'rf-datepicker__calendar-tile--range rf-datepicker__calendar-month-wrapper--range' : '';
        var monthMs = 1000 * 3600 * 24 * 31;
        var disabledMin = minDate && ((minDate.getTime() - monthMs) > d.getTime());
        var disabledMax = maxDate && ((maxDate.getTime()) < d.getTime());
        var disabledClass = disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';
        return ((0, jsx_runtime_1.jsx)("div", { className: "rf-datepicker__calendar-month-wrapper ".concat(inRangeClass, " ").concat(fromMonthClass, " ").concat(toMonthClass), children: (0, jsx_runtime_1.jsx)("button", { type: 'button', className: "rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-month\n        ".concat(currentMonthClass, " ").concat(disabledClass), onClick: function (e) { return onMonthClick(e, i); }, onBlur: function () { return onBlur(i === array.length - 1); }, children: m }) }, m));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var stringYear = activePeriod.year.toString();
    var _k = (0, react_1.useState)(activePeriod.year - +stringYear[stringYear.length - 1]), decadeStart = _k[0], setDecadeStart = _k[1];
    (0, react_1.useEffect)(function () {
        setDecadeStart(activePeriod.year - +stringYear[stringYear.length - 1]);
    }, [activePeriod]);
    var years = [];
    for (var i = 0; i < 10; i++) {
        years.push(decadeStart + i);
    }
    var onYearClick = function (e, year) {
        e.stopPropagation();
        setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(new Date(year, activePeriod.month)));
        setTimeout(function () {
            setPeriodType('month');
        });
    };
    var yearsJSX = years.map(function (y, i, array) {
        var _a, _b, _c, _d, _e;
        var rangeMonthCondition = (rangeDates[0] && y === rangeDates[0].getFullYear()) ||
            (rangeDates[1] && y === ((_a = rangeDates[1]) === null || _a === void 0 ? void 0 : _a.getFullYear()));
        var activeCondition = range ? rangeMonthCondition : activePeriod.year === y;
        var currentMonthClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';
        var fromYearClass = rangeDates[0] && ((_b = rangeDates[0]) === null || _b === void 0 ? void 0 : _b.getFullYear()) === y ? 'rf-datepicker__calendar-year--from' : '';
        var toYearClass = rangeDates[1] && ((_c = rangeDates[1]) === null || _c === void 0 ? void 0 : _c.getFullYear()) === y ? 'rf-datepicker__calendar-year--to' : '';
        var inRangeClass = range && rangeDates[0] && rangeDates[1] &&
            (y >= ((_d = rangeDates[0]) === null || _d === void 0 ? void 0 : _d.getFullYear()) && y <= ((_e = rangeDates[1]) === null || _e === void 0 ? void 0 : _e.getFullYear())) ?
            'rf-datepicker__calendar-tile--range rf-datepicker__calendar-year--range' : '';
        var disabledMin = minDate && minDate.getFullYear() > y;
        var disabledMax = maxDate && maxDate.getFullYear() < y;
        var disabledClass = disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';
        return ((0, jsx_runtime_1.jsx)("div", { className: "rf-datepicker__calendar-year-wrapper ".concat(inRangeClass, " ").concat(fromYearClass, " ").concat(toYearClass), children: (0, jsx_runtime_1.jsx)("button", { type: 'button', className: "rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-year\n        ".concat(currentMonthClass, " ").concat(disabledClass), onClick: function (e) { return onYearClick(e, y); }, onBlur: function () { return onBlur(i === array.length - 1); }, children: y }) }, y));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var onPeriodChange = function (n) {
        if (periodType === 'day') {
            var nextMonth = activePeriod.month + n;
            var nextYear = activePeriod.year;
            if (nextMonth > 11) {
                nextMonth = 0;
                nextYear++;
            }
            if (nextMonth < 0) {
                nextMonth = 11;
                nextYear--;
            }
            setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(new Date(nextYear, nextMonth)));
        }
        if (periodType === 'month') {
            setActivePeriod((0, helpersDatePicker_1.getDaysForMonth)(new Date(activePeriod.year + n, activePeriod.month)));
        }
        if (periodType === 'year') {
            setDecadeStart(function (decade) { return decade + n * 10; });
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    var _l = (0, react_1.useState)('day'), periodType = _l[0], setPeriodType = _l[1];
    var periodTypeLabel = {
        day: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", helpersDatePicker_1.months[locale][activePeriod.month], " "] }),
        month: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", activePeriod.year, " "] }),
        year: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", decadeStart, " - ", decadeStart + 9, " "] })
    };
    var onPeriodTypeChange = function (periodType) { return function () {
        setPeriodType(periodType);
    }; };
    // -------------------------------------------------------------------------------------------------------------------
    var prevYearDisabled = !!minDate && minDate.getFullYear() > activePeriod.year - 1;
    var nextYearDisabled = !!maxDate && maxDate.getFullYear() < activePeriod.year + 1;
    var arrowsDisabled = {
        prevArrowDisabled: {
            day: prevYearDisabled && !!minDate && minDate.getMonth() > activePeriod.month - 1,
            month: prevYearDisabled,
            year: !!minDate && minDate.getFullYear() > decadeStart
        },
        nextArrowDisabled: {
            day: nextYearDisabled && !!maxDate && maxDate.getMonth() < activePeriod.month + 1,
            month: nextYearDisabled,
            year: !!maxDate && maxDate.getFullYear() < decadeStart + 10
        }
    };
    var prevArrowDisabled = arrowsDisabled.prevArrowDisabled[periodType];
    var nextArrowDisabled = arrowsDisabled.nextArrowDisabled[periodType];
    var d = new Date();
    var today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    var disabledMin = !!minDate && minDate.getTime() > today.getTime();
    var disabledMax = !!maxDate && maxDate.getTime() < today.getTime();
    // -------------------------------------------------------------------------------------------------------------------
    var getButtonWithTooltip = function (period, tipText) { return ((0, jsx_runtime_1.jsxs)(Tooltip_1.default, { background: tooltipBackground, className: 'rf-datepicker-calendar__tooltip', children: [(0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-datepicker-calendar__button rf-datepicker-calendar__label-button', onClick: onPeriodTypeChange(period), children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-datepicker__calendar-label', children: periodTypeLabel[period === 'month' ? 'day' : 'month'] }) }), (0, jsx_runtime_1.jsx)("div", { children: tipText })] })); };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-datepicker__calendar', ref: contentRef, children: [(0, jsx_runtime_1.jsx)("header", { className: 'rf-datepicker__calendar-header', children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-datepicker-calendar__control', children: [(0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-datepicker-calendar__button rf-datepicker-calendar__button--arrow rf-datepicker-calendar__button-prev', disabled: prevArrowDisabled, onClick: function () { return onPeriodChange(-1); }, children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-datepicker__calendar-left', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-datepicker-calendar__control__button-section', children: [getButtonWithTooltip('month', 'Выбор месяца'), getButtonWithTooltip('year', 'Выбор года')] }), (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-datepicker-calendar__button rf-datepicker-calendar__button--arrow rf-datepicker-calendar__button-next', disabled: nextArrowDisabled, onClick: function () { return onPeriodChange(1); }, children: (0, jsx_runtime_1.jsx)("span", { className: 'rf-datepicker__calendar-right', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }) })] }) }), (0, jsx_runtime_1.jsxs)("div", { children: [periodType === 'day' && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-datepicker__calendar-week', children: helpersDatePicker_1.weekDays[locale].map(function (d) {
                            return (0, jsx_runtime_1.jsx)("div", { className: 'rf-datepicker__calendar-tile rf-datepicker__calendar-week-day', children: d }, d);
                        }) })), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-datepicker__calendar-periods', children: [periodType === 'day' && daysJSX, (0, jsx_runtime_1.jsx)("div", { className: 'rf-datepicker__calendar-periods-month', children: periodType === 'month' && monthsJSX }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-datepicker__calendar-periods-year', children: periodType === 'year' && yearsJSX })] })] })] }));
};
exports.default = DatepickerCalendar;
