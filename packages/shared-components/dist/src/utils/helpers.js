"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.today = exports.initialFiles = exports.extractTextFromHTML = exports.LocalToUTC = exports.UTCToLocal = exports.numberWithSpaces = exports.oDataTransform = exports.iconSize = exports.sizeClass = exports.variantClass = exports.replaceAt = exports.getShortString = exports.stringToDate = exports.formatDate = exports.addLeadingZeros = exports.getMonthName = void 0;
exports.debounce = debounce;
var operators_1 = require("rxjs/operators");
var pdf_1 = require("../components/molecules/PDFViewer/pdf");
var months = [
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
];
var monthsShort = [
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'июнь',
    'июль',
    'авг',
    'сент',
    'окт',
    'нояб',
    'дек'
];
var week = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
];
/**
 * Функция для добавления окончаний к месяцам
 * @param value - имя месяца
 *
 */
var getMonthName = function (value) {
    if (value) {
        var arr = value.split('');
        var result = void 0;
        if (months.indexOf(value) !== -1) {
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
/** Добавить нули */
var addLeadingZeros = function (number, length) {
    if (length === void 0) { length = 2; }
    return ('0'.repeat(length) + number).slice(-length);
};
exports.addLeadingZeros = addLeadingZeros;
/**
 * Функция для форматирования даты
 *  @param date - дата, которую нужно преобразовать
 *
 */
var formatDate = function (date) {
    if (!date) {
        date = Date.now();
    }
    var tempDate = new Date(date);
    var month = (0, exports.addLeadingZeros)(tempDate.getMonth() + 1);
    var monthLong = (0, exports.getMonthName)(months[tempDate.getMonth()]);
    var monthName = months[tempDate.getMonth()];
    var monthShort = monthsShort[tempDate.getMonth()];
    var dayOfMonth = (0, exports.addLeadingZeros)(tempDate.getDate());
    var dayOfWeek = week[tempDate.getDay()];
    var tempHour = tempDate.getHours();
    var hour = (0, exports.addLeadingZeros)(tempHour);
    var tempMinutes = tempDate.getMinutes();
    var minutes = (0, exports.addLeadingZeros)(tempMinutes);
    var year = tempDate.getFullYear();
    return {
        month: month,
        monthLong: monthLong,
        monthShort: monthShort,
        monthName: monthName,
        dayOfMonth: dayOfMonth,
        dayOfWeek: dayOfWeek,
        hour: hour,
        minutes: minutes,
        year: year,
        date: "".concat(dayOfMonth, ".").concat(month, ".").concat(year),
        time: "".concat(hour, ":").concat(minutes)
    };
};
exports.formatDate = formatDate;
/** Преобразовать dd.mm.yyy в Date */
var stringToDate = function (s) {
    var d = new Date();
    if (!s) {
        return d;
    }
    var formatToday = (0, exports.formatDate)(d.getTime()).date.split('.');
    var _a = s.slice(0, 10).split('.'), dd = _a[0], mm = _a[1], yyyy = _a[2];
    dd = dd.includes('_') ? formatToday[0] : dd;
    mm = mm.includes('_') ? formatToday[1] : mm;
    yyyy = yyyy.includes('_') ? formatToday[2] : yyyy;
    return new Date(+yyyy, +mm - 1, +dd);
};
exports.stringToDate = stringToDate;
/**
 * Функция обрезки текста
 * @param text - строка, которую нужно сократить
 * @param n - количество видимых символов
 * @param symbol - символ, который нужно поставить в конце строки
 */
var getShortString = function (text, n, symbol) {
    if (n === void 0) { n = 50; }
    if (symbol === void 0) { symbol = '...'; }
    return n > text.length ? text : "".concat(text.slice(0, n)).concat(symbol);
};
exports.getShortString = getShortString;
/** Заменить подстроку по индексу */
var replaceAt = function (str, index, replacement) {
    return str.substr(0, index) + replacement + str.substr(index + replacement.length);
};
exports.replaceAt = replaceAt;
/** Общий класс для цветового оформления */
exports.variantClass = {
    base: 'rf--base',
    accent: 'rf--accent',
    complement: 'rf--complement',
    info: 'rf--info',
    success: 'rf--success',
    danger: 'rf--danger',
    warning: 'rf--warning'
};
exports.sizeClass = {
    'xxxs': 'rf--xxxs',
    'xxs': 'rf--xxs',
    'xs': 'rf--xs',
    's': 'rf--s',
    'm': 'rf--m',
    'l': 'rf--l',
    'xl': 'rf--xl',
    'xxl': 'rf--xxl',
    'xxxl': 'rf--xxxl',
    'xxxxl': 'rf--xxxxl'
};
exports.iconSize = {
    'xxxs': '16',
    'xxs': '20',
    'xs': '24',
    's': '32',
    'm': '40',
    'l': '48',
    'xl': '56',
    'xxl': '64',
    'xxxl': '72',
    'xxxxl': '80'
};
function oDataServ(data) {
    (data.results) && (data = data.results);
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            (key === '__metadata') && delete data[key];
            if (Array.isArray(data[key])) {
                data[key].forEach(function (item) {
                    oDataServ(item);
                });
            }
            else if (typeof data[key] === 'object') {
                data[key] = oDataServ(data[key]);
            }
        }
    }
    return data;
}
var oDataTransform = function () { return (0, operators_1.map)(function (data) {
    delete data['@odata.context'];
    delete data['@odata.metadataEtag'];
    return data.d ? oDataServ(data.d) : data;
}); };
exports.oDataTransform = oDataTransform;
/** Функция для добавления пробелов в число */
var numberWithSpaces = function (x, n, s) {
    if (n === void 0) { n = 3; }
    if (s === void 0) { s = ' '; }
    var parts = x.toString().split('.');
    var regex = new RegExp("\\B(?=(\\d{".concat(n, "})+(?!\\d))"), 'g');
    parts[0] = parts[0].replace(regex, s);
    return parts.join('.');
};
exports.numberWithSpaces = numberWithSpaces;
var UTCToLocal = function (date) {
    var offset = -new Date().getTimezoneOffset();
    var withOffset = new Date(date).getTime() + offset * 60000;
    return new Date(withOffset);
};
exports.UTCToLocal = UTCToLocal;
var LocalToUTC = function (date) {
    var offset = -new Date().getTimezoneOffset();
    var withOffset = new Date(date).getTime() - offset * 60000;
    return new Date(withOffset);
};
exports.LocalToUTC = LocalToUTC;
/** Выделить текст из HTML */
var extractTextFromHTML = function (element) {
    var result = '';
    var skip = false;
    for (var i = 0; i < element.length; i++) {
        if (element[i] === '<') {
            skip = true;
        }
        if (element[i] === '>') {
            skip = false;
            continue;
        }
        if (skip) {
            continue;
        }
        result += element[i];
    }
    return result;
};
exports.extractTextFromHTML = extractTextFromHTML;
/** Debounce */
function debounce(fn, ms) {
    var timeout;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // @ts-ignore
        var fnCall = function () { return fn.apply(_this, args); };
        clearTimeout(timeout);
        timeout = setTimeout(fnCall, ms);
    };
}
exports.initialFiles = [
    {
        file: {
            lastModified: 1633960085077,
            name: 'screenshot1.jpg',
            webkitRelativePath: '',
        },
        base64: '',
    },
    {
        file: {
            lastModified: 1633960085077,
            name: 'pdfFile.pdf',
            webkitRelativePath: '',
        },
        base64: pdf_1.pdfFile,
    },
    {
        file: {
            lastModified: 1633960085077,
            name: 'quston.png',
            webkitRelativePath: '',
        },
        base64: '',
        id: '00505683-c29f-1eec-93d2-5fcd53023f78'
    },
    {
        file: {
            lastModified: 1633960085077,
            name: 'word_file.docx',
            webkitRelativePath: '',
        },
        base64: '',
        id: '00505683-c29f-1eec-9390-0b884bf2ff6f'
    }
];
/** Сегодня приведенное к 00:00:00 */
var today = function (utc) {
    if (utc === void 0) { utc = true; }
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return utc ? (0, exports.UTCToLocal)(date).getTime() : date.getTime();
};
exports.today = today;
