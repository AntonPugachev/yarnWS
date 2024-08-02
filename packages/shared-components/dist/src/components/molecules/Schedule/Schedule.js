"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Schedule.scss");
var Button_1 = __importDefault(require("../../atoms/Button"));
var CalendarPage_1 = __importDefault(require("../../atoms/CalendarPage"));
var indexIcon_1 = require("../../../indexIcon");
// FIXME: Elements must have sufficient color contrast
var Schedule = function (_a) {
    var children = _a.children, defaultYear = _a.defaultYear, defaultMonth = _a.defaultMonth, _b = _a.marks, marks = _b === void 0 ? [] : _b;
    var _c = (0, react_1.useState)(defaultYear), year = _c[0], setYear = _c[1];
    var _d = (0, react_1.useState)(defaultMonth), month = _d[0], setMonth = _d[1];
    var _e = (0, react_1.useMemo)(function () {
        var date = new Date(year, month + 1, 1);
        return {
            nextYear: date.getFullYear(),
            nextMonth: date.getMonth()
        };
    }, [year, month]), nextYear = _e.nextYear, nextMonth = _e.nextMonth;
    var _f = (0, react_1.useMemo)(function () {
        var monthName = new Date(year, month).toLocaleString('ru', { month: 'long' });
        monthName = monthName.charAt(0).toUpperCase() + monthName.slice(1);
        var nextMonthName = new Date(nextYear, nextMonth).toLocaleString('ru', { month: 'long' });
        nextMonthName = nextMonthName.charAt(0).toUpperCase() + nextMonthName.slice(1);
        return {
            monthName: monthName,
            nextMonthName: nextMonthName
        };
    }, [
        year,
        month,
        nextYear,
        nextMonth
    ]), monthName = _f.monthName, nextMonthName = _f.nextMonthName;
    var onPrevClick = function () {
        var date = new Date(year, month - 1, 1);
        setYear(date.getFullYear());
        setMonth(date.getMonth());
    };
    var onNextClick = function () {
        var date = new Date(year, month + 1, 1);
        setYear(date.getFullYear());
        setMonth(date.getMonth());
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__calendars', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__calendar', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__heading rf-schedule__heading_start', children: [(0, jsx_runtime_1.jsx)(Button_1.default, { className: 'rf-schedule__button', buttonType: 'ghost', size: 's', round: true, onClick: onPrevClick, "aria-label": '\u041D\u0430\u0437\u0430\u0434', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, { className: 'rf-schedule__chevron' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__date', children: [monthName, " ", year] })] }), (0, jsx_runtime_1.jsx)(CalendarPage_1.default, { year: year, month: month, marks: marks })] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-schedule__separator' }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__calendar', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__heading rf-schedule__heading_end', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-schedule__date', children: [nextMonthName, " ", nextYear] }), (0, jsx_runtime_1.jsx)(Button_1.default, { className: 'rf-schedule__button', buttonType: 'ghost', size: 's', round: true, onClick: onNextClick, "aria-label": '\u0412\u043F\u0435\u0440\u0435\u0434', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronRight, { className: 'rf-schedule__chevron' }) })] }), (0, jsx_runtime_1.jsx)(CalendarPage_1.default, { year: nextYear, month: nextMonth, marks: marks })] })] }), children] }));
};
exports.default = Schedule;
