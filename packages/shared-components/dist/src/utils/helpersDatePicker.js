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
exports.generateMask = exports.getWeekDay = exports.getDaysForMonth = exports.compareMonths = exports.isCurrentMonth = exports.isCurrentDay = exports.parseToFormat = exports.replaceAt = exports.stringToDate = exports.formatDate = exports.weekDays = exports.getMonthName = exports.addLeadingZeros = exports.months = void 0;
var helpers_1 = require("./helpers");
exports.months = {
    ru: [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ],
    en: [
        'january',
        'february',
        'march',
        'april',
        'may',
        'june',
        'july',
        'august',
        'september',
        'october',
        'november',
        'december'
    ]
};
var addLeadingZeros = function (number, length) {
    if (length === void 0) { length = 2; }
    return ('0'.repeat(length) + number).slice(-length);
};
exports.addLeadingZeros = addLeadingZeros;
var getMonthName = function (value) {
    if (value) {
        var arr = value.split('');
        var result = void 0;
        if (exports.months.en.indexOf(value) !== -1) {
            arr.splice(arr.length - 1, 1, 'я');
            result = arr.join('');
            return result;
        }
        arr.push('а');
        result = arr.join('');
        return result;
    }
    return '';
};
exports.getMonthName = getMonthName;
exports.weekDays = {
    ru: [
        'пн',
        'вт',
        'ср',
        'чт',
        'пт',
        'сб',
        'вс'
    ],
    en: [
        'mon',
        'tue',
        'wed',
        'thu',
        'fri',
        'sat',
        'sun'
    ]
};
var formatDate = function (date, format) {
    if (!date) {
        date = (0, helpers_1.today)();
    }
    var tempDate = new Date(date);
    var month = (0, exports.addLeadingZeros)(tempDate.getMonth() + 1);
    var monthLong = (0, exports.getMonthName)(exports.months.en[tempDate.getMonth()]);
    var monthName = exports.months.en[tempDate.getMonth()];
    var dayOfMonth = (0, exports.addLeadingZeros)(tempDate.getDate());
    var dayOfWeek = exports.weekDays.en[tempDate.getDay()];
    var tempHour = tempDate.getHours();
    var hour = (0, exports.addLeadingZeros)(tempHour);
    var tempMinutes = tempDate.getMinutes();
    var minutes = (0, exports.addLeadingZeros)(tempMinutes);
    var year = tempDate.getFullYear();
    var separator = format[2];
    var order = format.split(separator);
    var dateString = '';
    if (order[0] === 'dd') {
        dateString = "".concat(dayOfMonth).concat(separator).concat(month).concat(separator).concat(year);
    }
    else {
        dateString = "".concat(month).concat(separator).concat(dayOfMonth).concat(separator).concat(year);
    }
    return {
        month: month,
        monthLong: monthLong,
        monthShort: '',
        monthName: monthName,
        dayOfMonth: dayOfMonth,
        dayOfWeek: dayOfWeek,
        hour: hour,
        minutes: minutes,
        year: year,
        date: dateString,
        time: "".concat(hour, ":").concat(minutes)
    };
};
exports.formatDate = formatDate;
var stringToDate = function (s, format, isUTC) {
    var _a, _b;
    if (isUTC === void 0) { isUTC = false; }
    var d = new Date();
    if (!s) {
        return d;
    }
    var separator = format[2];
    var formatToday = (0, exports.formatDate)(d.getTime(), format).date.split(separator);
    var order = format.split(separator);
    var dd, mm, yyyy;
    var dayFirst = order[0] === 'dd';
    if (dayFirst) {
        _a = s.slice(0, 10).split(separator), dd = _a[0], mm = _a[1], yyyy = _a[2];
    }
    else {
        _b = s.slice(0, 10).split(separator), mm = _b[0], dd = _b[1], yyyy = _b[2];
    }
    dd = dd.includes('_') ? formatToday[dayFirst ? 0 : 1] : dd;
    mm = mm.includes('_') ? formatToday[dayFirst ? 1 : 0] : mm;
    yyyy = yyyy.includes('_') ? formatToday[2] : yyyy;
    return !isUTC ? new Date(+yyyy, +mm - 1, +dd) : new Date(Date.UTC(+yyyy, +mm - 1, +dd));
};
exports.stringToDate = stringToDate;
var replaceAt = function (str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
};
exports.replaceAt = replaceAt;
var parseToFormat = function (format, defaultValue) {
    var _a, _b;
    var separator = format[2];
    var inputValue = '';
    if (typeof defaultValue === 'string' && defaultValue.length > 0) {
        var newInputValue = defaultValue;
        if (newInputValue[2] !== separator) {
            newInputValue = (0, exports.replaceAt)(newInputValue, 2, separator);
        }
        if (newInputValue[5] !== separator) {
            newInputValue = (0, exports.replaceAt)(newInputValue, 5, separator);
        }
        inputValue = newInputValue;
    }
    if (typeof defaultValue === 'number') {
        inputValue = (0, exports.formatDate)(defaultValue, format).date;
    }
    if (defaultValue instanceof Date) {
        inputValue = (0, exports.formatDate)(defaultValue.getTime(), format).date;
    }
    var order = format.split(separator);
    var dd, mm, yyyy;
    if (order[0] === 'dd') {
        _a = inputValue.split(separator), dd = _a[0], mm = _a[1], yyyy = _a[2];
    }
    else {
        _b = inputValue.split(separator), mm = _b[0], dd = _b[1], yyyy = _b[2];
    }
    var date = new Date(+yyyy, +mm - 1, +dd);
    return {
        date: date,
        string: inputValue
    };
};
exports.parseToFormat = parseToFormat;
var isCurrentDay = function (d1, d2) {
    var d = d2 || new Date();
    return d1.getDate() === d.getDate() &&
        d1.getMonth() === d.getMonth() &&
        d1.getFullYear() === d.getFullYear();
};
exports.isCurrentDay = isCurrentDay;
var isCurrentMonth = function (d1, d2) {
    var d = d2 || new Date();
    return d1.getMonth() === d.getMonth() && d1.getFullYear() === d.getFullYear();
};
exports.isCurrentMonth = isCurrentMonth;
var compareMonths = function (d1, d2) {
    var d = d2 || new Date();
    var m1 = d1.getMonth();
    var y1 = d1.getFullYear();
    var m2 = d.getMonth();
    var y2 = d.getFullYear();
    var date1 = new Date(y1, m1);
    var date2 = new Date(y2, m2);
    if (date1.getTime() > date2.getTime()) {
        return 1;
    }
    else if (date1.getTime() < date2.getTime()) {
        return -1;
    }
    return 0;
};
exports.compareMonths = compareMonths;
var getDaysForMonth = function (d) {
    var date = d || new Date();
    var result = {
        month: date.getMonth(),
        year: date.getFullYear(),
        days: []
    };
    var daysInCurrentMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var weekDayOfFirstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    var weekDayOfLastDay = new Date(date.getFullYear(), date.getMonth(), daysInCurrentMonth).getDay();
    if (weekDayOfFirstDay !== 1) {
        var daysFromPrevMonth = weekDayOfFirstDay - 2;
        if (daysFromPrevMonth < 0) {
            daysFromPrevMonth = 7 - Math.abs(daysFromPrevMonth);
        }
        var lastDayInPrevMonth = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
        for (var i = daysFromPrevMonth; i >= 0; i--) {
            result.days[i] = {
                period: 'prev',
                date: new Date(date.getFullYear(), date.getMonth() - 1, lastDayInPrevMonth)
            };
            lastDayInPrevMonth--;
        }
    }
    for (var i = 1; i <= daysInCurrentMonth; i++) {
        result.days.push({
            period: 'current',
            date: new Date(date.getFullYear(), date.getMonth(), i)
        });
    }
    if (weekDayOfLastDay !== 0) {
        var daysFromNextMonth = 7 - weekDayOfLastDay;
        for (var i = 1; i <= daysFromNextMonth; i++) {
            result.days.push({
                period: 'next',
                date: new Date(date.getFullYear(), date.getMonth() + 1, i)
            });
        }
    }
    return result;
};
exports.getDaysForMonth = getDaysForMonth;
var getWeekDay = function (n, locale) {
    var weekDays = {
        ru: [
            'Вс',
            'Пн',
            'Вт',
            'Ср',
            'Чт',
            'Пт',
            'Сб'
        ],
        en: [
            'Sun',
            'Mon',
            'Tue',
            'Wed',
            'Thu',
            'Fri',
            'Sat'
        ]
    };
    return weekDays[locale][n];
};
exports.getWeekDay = getWeekDay;
var generateMask = function (inputValue, format, range, showDayOfWeek, dayOfWeek) {
    var mask, fromMask, toMask;
    var separator = format[2];
    var order = format.split(separator);
    var dayFirst = order[0] === 'dd';
    var dd = [/[0-3]/, inputValue[dayFirst ? 0 : 3] === '3' ? /[0,1]/ : inputValue[dayFirst ? 0 : 3] === '0' ? /[1-9]/ : /[0-9]/];
    var mm = [/[0,1]/, inputValue[dayFirst ? 3 : 0] === '0' ? /[1-9]/ : /[0-2]/];
    var yyyy = [
        /[1,2]/,
        /\d/,
        /\d/,
        /\d/
    ];
    var ddTo = [/[0-3]/, inputValue[dayFirst ? 13 : 16] === '3' ? /[0,1]/ : inputValue[dayFirst ? 13 : 16] === '0' ? /[1-9]/ : /[0-9]/];
    var mmTo = [/[0,1]/, inputValue[dayFirst ? 16 : 13] === '0' ? /[1-9]/ : /[0-2]/,];
    var first = dayFirst ? dd : mm;
    var second = dayFirst ? mm : dd;
    var firstTo = dayFirst ? ddTo : mmTo;
    var secondTo = dayFirst ? mmTo : ddTo;
    if (range) {
        var defaultFromMask = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], first, true), [
            separator
        ], false), second, true), [
            separator
        ], false), yyyy, true);
        var defaultToMask = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], firstTo, true), [
            separator
        ], false), secondTo, true), [
            separator
        ], false), yyyy, true);
        fromMask = defaultFromMask;
        toMask = defaultToMask;
        if (showDayOfWeek) {
            if (dayOfWeek[0]) {
                fromMask.push(' ');
                for (var i = 0; i < dayOfWeek[0].length; i++) {
                    fromMask.push(dayOfWeek[0][i]);
                }
            }
            else {
                fromMask = defaultFromMask;
            }
            if (dayOfWeek[1]) {
                toMask.push(' ');
                for (var i = 0; i < dayOfWeek[1].length; i++) {
                    toMask.push(dayOfWeek[1][i]);
                }
            }
            else {
                toMask = defaultToMask;
            }
        }
        mask = __spreadArray(__spreadArray(__spreadArray([], fromMask, true), [
            ' ',
            '-',
            ' '
        ], false), toMask, true);
    }
    else {
        var defaultMask = __spreadArray(__spreadArray(__spreadArray(__spreadArray(__spreadArray([], first, true), [
            separator
        ], false), second, true), [
            separator
        ], false), yyyy, true);
        mask = defaultMask;
        if (showDayOfWeek) {
            if (dayOfWeek[0]) {
                mask.push(' ');
                for (var i = 0; i < dayOfWeek[0].length; i++) {
                    mask.push(dayOfWeek[0][i]);
                }
            }
            else {
                mask = defaultMask;
            }
        }
    }
    return mask;
};
exports.generateMask = generateMask;
