"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./CalendarPage.scss");
var classnames_1 = require("../../../utils/classnames");
// Суббота
var SATURDAY = 6;
// Воскресенье
var SUNDAY = 0;
// Воскресенье при начале недели с понедельника
var END_OF_WEEK_SUNDAY = 7;
// FIXME: Elements must have sufficient color contrast
var CalendarPage = function (_a) {
    var year = _a.year, month = _a.month, _b = _a.marks, marks = _b === void 0 ? [] : _b;
    var content = (0, react_1.useMemo)(function () {
        var prevYear = new Date(year, month - 1, 1).getFullYear();
        var prevMonth = new Date(year, month - 1, 1).getMonth();
        var nextYear = new Date(year, month + 1, 1).getFullYear();
        var nextMonth = new Date(year, month + 1, 1).getMonth();
        var startWeekday = new Date(year, month, 1).getDay();
        var endWeekday = new Date(year, month + 1, 0).getDay();
        // Меняем нумерацию для воскресенья на седьмой день недели
        if (startWeekday === SUNDAY) {
            startWeekday = END_OF_WEEK_SUNDAY;
        }
        if (endWeekday === SUNDAY) {
            endWeekday = END_OF_WEEK_SUNDAY;
        }
        // Дни текущего месяца
        var days = Array.from({ length: new Date(year, month + 1, 0).getDate() }, function (_, i) { return i + 1; });
        // Выходные дни
        var weekends = {};
        for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
            var day = days_1[_i];
            var date = new Date(year, month, day);
            var weekday = date.getDay();
            if (weekday === SATURDAY || weekday === SUNDAY) {
                weekends[day] = true;
            }
        }
        var startDate = new Date(year, month, -(startWeekday - 1)).getDate();
        // Видимые дни предыдущего месяца
        var prevDays = Array.from({ length: new Date(year, month, 0).getDate() - startDate }, function (_, i) { return i + startDate + 1; });
        // Видимые дни следующего месяца
        var nextDays = Array.from({ length: 7 - endWeekday }, function (_, i) { return i + 1; });
        // Отметки на календаре
        var marksMap = {};
        for (var _a = 0, marks_1 = marks; _a < marks_1.length; _a++) {
            var mark = marks_1[_a];
            var fromYear = mark.from.getFullYear();
            var fromMonth = mark.from.getMonth();
            if (!marksMap[fromYear]) {
                marksMap[fromYear] = {};
            }
            if (!marksMap[fromYear][fromMonth]) {
                marksMap[fromYear][fromMonth] = {};
            }
            marksMap[fromYear][fromMonth][mark.from.getDate()] = mark.variant;
            if (mark.to) {
                var toYear = mark.to.getFullYear();
                var toMonth = mark.to.getMonth();
                if (!marksMap[toYear]) {
                    marksMap[toYear] = {};
                }
                if (!marksMap[toYear][toMonth]) {
                    marksMap[toYear][toMonth] = {};
                }
                marksMap[toYear][toMonth][mark.to.getDate()] = mark.variant;
                var i = new Date(mark.from);
                i.setDate(i.getDate() + 1);
                for (i; i < mark.to; i.setDate(i.getDate() + 1)) {
                    var year_1 = i.getFullYear();
                    var month_1 = i.getMonth();
                    if (!marksMap[year_1]) {
                        marksMap[year_1] = {};
                    }
                    if (!marksMap[year_1][month_1]) {
                        marksMap[year_1][month_1] = {};
                    }
                    marksMap[year_1][month_1][i.getDate()] = "".concat(mark.variant, "-intermediate");
                }
            }
        }
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [prevDays.map(function (i) {
                    var _a, _b;
                    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-calendar-page__cell rf-calendar-page__cell_disabled', ((_b = (_a = marksMap[prevYear]) === null || _a === void 0 ? void 0 : _a[prevMonth]) === null || _b === void 0 ? void 0 : _b[i]) && "rf-calendar-page__cell_".concat(marksMap[prevYear][prevMonth][i])), children: i }, "".concat(month - 1, "-").concat(i)));
                }), days.map(function (i) {
                    var _a, _b;
                    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-calendar-page__cell', weekends[i] && 'rf-calendar-page__cell_disabled', ((_b = (_a = marksMap[year]) === null || _a === void 0 ? void 0 : _a[month]) === null || _b === void 0 ? void 0 : _b[i]) && "rf-calendar-page__cell_".concat(marksMap[year][month][i])), children: i }, "".concat(month, "-").concat(i)));
                }), nextDays.map(function (i) {
                    var _a, _b;
                    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-calendar-page__cell rf-calendar-page__cell_disabled', ((_b = (_a = marksMap[nextYear]) === null || _a === void 0 ? void 0 : _a[nextMonth]) === null || _b === void 0 ? void 0 : _b[i]) && "rf-calendar-page__cell_".concat(marksMap[nextYear][nextMonth][i])), children: i }, "".concat(month + 1, "-").concat(i)));
                })] }));
    }, [year, month, marks]);
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page', children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-calendar-page__content', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u041F\u043D" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u0412\u0442" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u0421\u0440" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u0427\u0442" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u041F\u0442" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u0421\u0431" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-calendar-page__cell rf-calendar-page__cell_weekday', children: "\u0412\u0441" }), content] }) }));
};
exports.default = CalendarPage;
