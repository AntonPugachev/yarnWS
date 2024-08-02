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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./HistoryCardFilter.scss");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var Datepicker_1 = __importDefault(require("../../atoms/Datepicker"));
var Search_1 = __importDefault(require("../../atoms/Search"));
var Select_1 = __importDefault(require("../../atoms/Select"));
var HistoryCardFilter = function (_a) {
    var _b = _a.isShowDatePicker, isShowDatePicker = _b === void 0 ? true : _b, _c = _a.isShowStatusFilter, isShowStatusFilter = _c === void 0 ? true : _c, _d = _a.isShowSearch, isShowSearch = _d === void 0 ? true : _d, _e = _a.searchPlaceholder, searchPlaceholder = _e === void 0 ? 'Номер, ФИО, ТН' : _e, initialValues = _a.initialValues, _f = _a.statusOptions, statusOptions = _f === void 0 ? [
        {
            label: 'test',
            value: 'f'
        }
    ] : _f, _g = _a.onChange, onChange = _g === void 0 ? function () {
    } : _g, pattern = _a.pattern;
    // текущие состояние фильтров
    var _h = (0, react_1.useState)({}), filterStatus = _h[0], setStatus = _h[1];
    // =======================
    (0, react_1.useEffect)(function () {
        initialValues && setStatus(__assign(__assign({}, filterStatus), initialValues));
    }, [initialValues]);
    // =======================================================================================================================================
    // Если изменился календарь
    var changeDateHandler = function (value) {
        var newValues = {};
        if (!value.value) {
            newValues = __assign(__assign({}, filterStatus), { datePicker: {
                    startDate: '',
                    endDate: ''
                } });
        }
        else {
            newValues = __assign(__assign({}, filterStatus), { datePicker: {
                    startDate: value.timestamp.from,
                    endDate: value.timestamp.to
                } });
        }
        setStatus(newValues);
        onChange(newValues);
    };
    //* *****************************************
    // Если изменился статус
    var changeSelectHandler = function (option) {
        var newValues = __assign(__assign({}, filterStatus), { status: option[0].value });
        setStatus(newValues);
        onChange(newValues);
    };
    //* *****************************************
    // Если изменился результат поиска
    var changeSearchHandler = function (result) {
        var newValues = __assign(__assign({}, filterStatus), { search: result.debounceString });
        setStatus(newValues);
        onChange(newValues);
    };
    // =======================================================================================================================================
    var dateTSX = isShowDatePicker &&
        (0, jsx_runtime_1.jsx)("div", { className: 'card-filter__datepicker', children: (0, jsx_runtime_1.jsx)(Datepicker_1.default, { isFocusBorder: true, onChange: changeDateHandler, placeholder: '\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u043F\u0435\u0440\u0438\u043E\u0434', range: true }) });
    //* *****************************************
    var statusTSX = isShowStatusFilter &&
        (0, jsx_runtime_1.jsx)("div", { className: 'card-filter__status-picker', children: (0, jsx_runtime_1.jsx)(Select_1.default, { placeholder: '\u0421\u0442\u0430\u0442\u0443\u0441', readOnly: true, options: statusOptions, values: statusOptions === null || statusOptions === void 0 ? void 0 : statusOptions.filter(function (i) { return i.value === filterStatus.status; }), onChange: changeSelectHandler }) });
    //* *****************************************
    var searchTSX = isShowSearch &&
        (0, jsx_runtime_1.jsx)("div", { className: 'card-filter__search', children: (0, jsx_runtime_1.jsx)(Search_1.default, { isCardFilter: true, onDebounce: changeSearchHandler, placeholder: searchPlaceholder, pattern: pattern }) });
    // =======================================================================================================================================
    return (0, jsx_runtime_1.jsx)("div", { className: 'filter__wrapper', children: (0, jsx_runtime_1.jsx)(Tile_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'card-filter__wrapper', children: [dateTSX, statusTSX, searchTSX] }) }) });
};
exports.default = HistoryCardFilter;
