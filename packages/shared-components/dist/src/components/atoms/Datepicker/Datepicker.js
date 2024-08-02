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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Datepicker.scss");
var helpersDatePicker_1 = require("../../../utils/helpersDatePicker");
var react_popper_1 = require("react-popper");
var indexIcon_1 = require("../../../indexIcon");
var Input_1 = __importDefault(require("../Input"));
var react_input_mask_1 = __importDefault(require("react-input-mask"));
var classnames_1 = require("../../../utils/classnames");
var Dropdown_1 = __importDefault(require("../Dropdown"));
var DatepickerCalendar_1 = __importDefault(require("./DatepickerCalendar"));
// FIXME: Добавить управление с клавиатуры
var Datepicker = function (_a) {
    var _b = _a.name, name = _b === void 0 ? 'datepicker' : _b, _c = _a.locale, locale = _c === void 0 ? 'ru' : _c, _d = _a.placeholder, placeholder = _d === void 0 ? locale === 'ru' ? 'Выберите дату' : 'Select date' : _d, defaultValue = _a.defaultValue, min = _a.min, max = _a.max, _e = _a.invalid, invalid = _e === void 0 ? false : _e, _f = _a.filled, filled = _f === void 0 ? true : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.readOnly, readOnly = _h === void 0 ? false : _h, onChange = _a.onChange, _j = _a.range, range = _j === void 0 ? false : _j, _k = _a.showDayOfWeek, showDayOfWeek = _k === void 0 ? false : _k, _l = _a.position, position = _l === void 0 ? 'bottom-start' : _l, _m = _a.format, format = _m === void 0 ? 'dd.mm.yyyy' : _m, _o = _a.disableWeekDays, disableWeekDays = _o === void 0 ? [0, 6] : _o, children = _a.children, _p = _a.tooltipBackground, tooltipBackground = _p === void 0 ? 'white' : _p, containerRef = _a.containerRef, controlRef = _a.controlRef, _q = _a.isFocusBorder, isFocusBorder = _q === void 0 ? false : _q;
    var separator = format[2];
    var _r = (0, react_1.useState)([]), dayOfWeek = _r[0], setDayOfWeek = _r[1];
    var _s = (0, react_1.useState)(undefined), minDate = _s[0], setMinDate = _s[1];
    var _t = (0, react_1.useState)(undefined), maxDate = _t[0], setMaxDate = _t[1];
    (0, react_1.useEffect)(function () {
        setMinDate(min ? (0, helpersDatePicker_1.parseToFormat)(format, min).date : undefined);
    }, [min]);
    (0, react_1.useEffect)(function () {
        setMaxDate(max ? (0, helpersDatePicker_1.parseToFormat)(format, max).date : undefined);
    }, [max]);
    (0, react_1.useImperativeHandle)(controlRef, function () { return ({ reset: function () { return clearDateRangeHandler(); }, }); });
    // -------------------------------------------------------------------------------------------------------------------
    var datepickerRef = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    var _u = (0, react_1.useState)(false), showCalendar = _u[0], toggleCalendar = _u[1];
    var onClose = function () { return toggleCalendar(false); };
    // -------------------------------------------------------------------------------------------------------------------
    var _v = (0, react_1.useState)(''), inputValue = _v[0], setInputValue = _v[1];
    var validate = function (date) {
        var result = date;
        if (range) {
            var _a = date.split(' - '), from = _a[0], to = _a[1];
            var fromD = 0;
            var toD = 0;
            if (from) {
                from = from.slice(0, 10);
            }
            if (to) {
                to = to.slice(0, 10);
            }
            if (from && !from.includes('_')) {
                fromD = (0, helpersDatePicker_1.stringToDate)(from, format).getTime();
                if (minDate && fromD < minDate.getTime()) {
                    fromD = minDate.getTime();
                }
                if (maxDate && fromD > maxDate.getTime()) {
                    fromD = minDate ? minDate.getTime() : maxDate.getTime();
                }
                from = (0, helpersDatePicker_1.formatDate)(fromD, format).date;
            }
            if (to && !to.includes('_')) {
                toD = (0, helpersDatePicker_1.stringToDate)(to, format).getTime();
                if (toD < fromD) {
                    toD = fromD + 24 * 3600 * 1000;
                }
                if (maxDate && toD > maxDate.getTime()) {
                    toD = maxDate.getTime();
                }
                to = (0, helpersDatePicker_1.formatDate)(toD, format).date;
            }
            if (from || to) {
                result = [from, to].join(' - ');
            }
            if (result === '__.__.____ - __.__.____') {
            }
        }
        else {
            var d = (0, helpersDatePicker_1.stringToDate)(date, format);
            if (date !== '' && minDate && d.getTime() < minDate.getTime()) {
                result = (0, helpersDatePicker_1.formatDate)(minDate.getTime(), format).date;
            }
            if (maxDate && d.getTime() > maxDate.getTime()) {
                result = (0, helpersDatePicker_1.formatDate)(maxDate.getTime(), format).date;
            }
        }
        return result;
    };
    (0, react_1.useEffect)(function () {
        if (!defaultValue) {
            return;
        }
        var inputValue = (0, helpersDatePicker_1.parseToFormat)(format, defaultValue).string;
        if (!inputValue.includes('_')) {
            inputValue = validate((0, helpersDatePicker_1.parseToFormat)(format, defaultValue).string);
        }
        setInputValue(inputValue);
    }, [defaultValue, minDate, maxDate]);
    // -------------------------------------------------------------------------------------------------------------------
    var getReturnValue = function (value, range) {
        if (range) {
            var _a = value.split(' - '), from = _a[0], to = _a[1];
            var fromD = (0, helpersDatePicker_1.stringToDate)(from, format).getTime();
            var toD = (0, helpersDatePicker_1.stringToDate)(to, format).getTime();
            var fromUTCD = (0, helpersDatePicker_1.stringToDate)(from, format, true).getTime();
            var toUTCD = (0, helpersDatePicker_1.stringToDate)(to, format, true).getTime();
            return {
                value: value,
                date: {
                    from: new Date(fromD),
                    to: new Date(toD),
                    value: new Date(fromD)
                },
                timestamp: {
                    from: fromD,
                    to: toD,
                    value: fromD,
                    utc: {
                        from: fromUTCD,
                        to: toUTCD,
                        value: fromUTCD,
                    }
                }
            };
        }
        var date = (0, helpersDatePicker_1.stringToDate)(value, format);
        var dateUTC = (0, helpersDatePicker_1.stringToDate)(value, format, true);
        return {
            date: {
                from: date,
                to: date,
                value: date
            },
            value: value,
            timestamp: {
                from: date.getTime(),
                to: date.getTime(),
                value: date.getTime(),
                utc: {
                    from: dateUTC.getTime(),
                    to: dateUTC.getTime(),
                    value: dateUTC.getTime(),
                }
            }
        };
    };
    var onDatepickerChange = function (e) {
        var result = e.target.value;
        if (range || (result.length === 10 && !result.includes('_'))) {
            result = validate(result);
        }
        setInputValue(result);
    };
    var setValue = function (value) {
        setInputValue(validate(value));
    };
    (0, react_1.useEffect)(function () {
        if (!inputValue.includes('_') && inputValue !== '') {
            var result = getReturnValue(inputValue, range);
            onChange && onChange(result, name);
            fireOnChange();
        }
        else {
            if (showDayOfWeek) {
                setDayOfWeek([]);
            }
        }
    }, [inputValue, showDayOfWeek]);
    var fireOnChange = function () {
        setTimeout(function () {
            if (inputRef.current) {
                var input = inputRef.current.querySelector('input');
                if (input) {
                    var event_1;
                    if (typeof (Event) === 'function') {
                        event_1 = new Event('change');
                    }
                    else {
                        event_1 = document.createEvent('Event');
                        event_1.initEvent('change', true, true);
                    }
                    input.dispatchEvent(event_1);
                }
            }
        }, 100);
    };
    // -------------------------------------------------------------------------------------------------------------------
    (0, react_1.useEffect)(function () {
        if (showDayOfWeek) {
            if (!range) {
                if (!inputValue.includes('_') && inputValue !== '') {
                    var result = getReturnValue(inputValue, range);
                    var dayFrom = result.date.value.getDay();
                    setDayOfWeek([(0, helpersDatePicker_1.getWeekDay)(dayFrom, locale)]);
                }
            }
            else {
                var _a = inputValue.split(' - '), fromValue = _a[0], toValue = _a[1];
                if (fromValue && !fromValue.includes('_')) {
                    var from = getReturnValue(fromValue, false);
                    var dayFrom = from.date.from.getDay();
                    setDayOfWeek([(0, helpersDatePicker_1.getWeekDay)(dayFrom, locale)]);
                }
                if (toValue && !toValue.includes('_')) {
                    var to = getReturnValue(toValue, false);
                    var dayTo = to.date.from.getDay();
                    setDayOfWeek(__spreadArray(__spreadArray([], dayOfWeek, true), [(0, helpersDatePicker_1.getWeekDay)(dayTo, locale)], false));
                }
            }
        }
    }, [inputValue, showDayOfWeek, range]);
    // -------------------------------------------------------------------------------------------------------------------
    var onKeyPress = function (e) {
        if (e.key.toLowerCase() === 'enter' || e.charCode === 13) {
            e.stopPropagation();
            e.preventDefault();
        }
    };
    var clearDateRangeHandler = function () {
        setInputValue('');
        var result = getReturnValue('', range);
        onChange && onChange(result, name);
        fireOnChange();
    };
    // -------------------------------------------------------------------------------------------------------------------
    var mask = (0, helpersDatePicker_1.generateMask)(inputValue, format, range, showDayOfWeek, dayOfWeek);
    // -------------------------------------------------------------------------------------------------------------------
    var isCrossChevronPicker = inputValue.split('-').length === 2 && inputValue.split('-')[1].trim() !== '__.__.____';
    return ((0, jsx_runtime_1.jsx)(react_popper_1.Manager, { children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-datepicker', isFocusBorder && 'rf-datepicker__focus-border'), ref: datepickerRef, children: [(0, jsx_runtime_1.jsx)(react_popper_1.Reference, { children: function (referenceProps) { return ((0, jsx_runtime_1.jsx)("div", __assign({}, referenceProps, { className: (0, classnames_1.classnames)('rf-datepicker__input-wrapper', {
                            'rf-datepicker__input-wrapper--disabled': disabled,
                            'rf-datepicker__input-wrapper--readonly': readOnly,
                            'rf-datepicker__input-wrapper--range': range,
                        }), onClick: function () { return toggleCalendar(function (prev) { return !prev; }); }, children: children || ((0, jsx_runtime_1.jsx)(react_input_mask_1.default, { mask: mask, name: name, placeholder: placeholder, value: inputValue, disabled: disabled, readOnly: readOnly, onKeyPress: onKeyPress, onChange: onDatepickerChange, children: (0, jsx_runtime_1.jsx)(Input_1.default, { invalid: invalid, filled: filled, startAdornment: (0, jsx_runtime_1.jsx)("div", { onClick: function (e) { return e.stopPropagation(); }, className: 'rf-datepicker__calendar-button', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllCalendar, {}) }), endAdornment: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-datepicker__calendar-chevron', isCrossChevronPicker && 'rf-datepicker__calendar-cross'), children: isCrossChevronPicker ?
                                        (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, { onClick: clearDateRangeHandler }) :
                                        (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, { onClick: function (e) { return e.stopPropagation(); } }) }) }) })) }))); } }), (0, jsx_runtime_1.jsx)(Dropdown_1.default, { show: showCalendar, toggleRef: datepickerRef, onClose: onClose, position: position, style: {
                        maxWidth: 'auto',
                        width: 'auto'
                    }, containerRef: containerRef, children: (0, jsx_runtime_1.jsx)(DatepickerCalendar_1.default, { value: inputValue, minDate: minDate, maxDate: maxDate, setInputValue: setValue, range: range, locale: locale, toggleCalendar: toggleCalendar, separator: separator, format: format, disableWeekDays: disableWeekDays || [], tooltipBackground: tooltipBackground }) })] }) }));
};
exports.default = Datepicker;
