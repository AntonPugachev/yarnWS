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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Search.scss");
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
var useDebounce_1 = require("../../../hooks/useDebounce");
var Search = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var onClear = _a.onClear, _b = _a.showClear, showClear = _b === void 0 ? true : _b, _c = _a.debounce, debounce = _c === void 0 ? 500 : _c, endAdornment = _a.endAdornment, _d = _a.onDebounce, onDebounce = _d === void 0 ? function () { } : _d, pattern = _a.pattern, _e = _a.isCardFilter, isCardFilter = _e === void 0 ? false : _e, props = __rest(_a, ["onClear", "showClear", "debounce", "endAdornment", "onDebounce", "pattern", "isCardFilter"]);
    var _f = (0, react_1.useState)(props.value ? props.value.toString() : ''), value = _f[0], setValue = _f[1];
    var ref = (0, react_1.useRef)(null);
    // Регулярное выражение для проверки ввода
    var regexp = (0, react_1.useMemo)(function () {
        if (pattern) {
            return new RegExp(pattern);
        }
        return null;
    }, [pattern]);
    // =======================
    (0, useDebounce_1.useDebounce)(value, debounce, function (v) {
        if (onDebounce) {
            onDebounce({ debounceString: v.toString() });
        }
    });
    (0, react_1.useEffect)(function () {
        setValue(props.value ? props.value.toString() : '');
    }, [props.value]);
    // -------------------------------------------------------------------------------------------------------------------
    var onChangeHandler = function (e) {
        if (regexp && !regexp.test(e.target.value)) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        setValue(e.target.value);
        props.onChange && props.onChange(e);
    };
    var onClearClickHandler = function (e) {
        e.preventDefault();
        setValue('');
        onClear && onClear();
        onDebounce && onDebounce({ debounceString: '' });
    };
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-search', isCardFilter && 'rf-search-hcf'), children: [(0, jsx_runtime_1.jsx)("input", __assign({}, props, { ref: ref, type: 'text', className: (0, classnames_1.classnames)(endAdornment ? 'rf-search__input-endAdornment' : 'rf-search__input'), placeholder: props.placeholder || 'Поиск', value: value, "data-testid": 'search-test-id', onChange: onChangeHandler, pattern: pattern })), (0, jsx_runtime_1.jsx)(indexIcon_1.AllSearch, { className: 'rf-search__search-icon' }), value.length > 0 && showClear &&
                (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, { "data-testid": 'search-clear-test-id', className: (0, classnames_1.classnames)('rf-search__close-icon', !!endAdornment && 'rf-search__close-withEndAdornment'), onMouseDown: onClearClickHandler }), endAdornment && (0, jsx_runtime_1.jsx)("div", { className: 'rf-search__endAdornment', children: endAdornment })] }));
};
exports.default = Search;
