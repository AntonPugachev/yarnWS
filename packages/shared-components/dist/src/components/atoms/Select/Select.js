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
// eslint-disable-next-line object-curly-newline
var react_1 = require("react");
var react_infinite_scroll_component_1 = __importDefault(require("react-infinite-scroll-component"));
var react_popper_1 = require("react-popper");
require("./Select.scss");
var Chip_1 = __importDefault(require("../Chip"));
var indexIcon_1 = require("../../../indexIcon");
var Checkbox_1 = __importDefault(require("../Checkbox/Checkbox"));
var classnames_1 = require("../../../utils/classnames");
var Dropdown_1 = __importDefault(require("../Dropdown"));
var Preloader_1 = __importDefault(require("../Preloader"));
var usePrevious_1 = __importDefault(require("../../../hooks/usePrevious"));
var Select = function (_a) {
    var options = _a.options, onChange = _a.onChange, _b = _a.invalid, invalid = _b === void 0 ? false : _b, onSearch = _a.onSearch, _c = _a.values, values = _c === void 0 ? [] : _c, _d = _a.multiselect, multiselect = _d === void 0 ? false : _d, _e = _a.placeholder, placeholder = _e === void 0 ? '' : _e, _f = _a.variant, variant = _f === void 0 ? 'base' : _f, _g = _a.disabled, disabled = _g === void 0 ? false : _g, _h = _a.readOnly, readOnly = _h === void 0 ? variant === 'menu' : _h, _j = _a.maxOptions, maxOptions = _j === void 0 ? undefined : _j, _k = _a.preloader, preloader = _k === void 0 ? false : _k, _l = _a.clearOnSelect, clearOnSelect = _l === void 0 ? false : _l, clearHook = _a.clearHook, isAsync = _a.isAsync, infinityScrollProps = _a.infinityScrollProps, _m = _a.position, position = _m === void 0 ? variant === 'menu' ? 'bottom-end' : 'bottom' : _m, endAdornment = _a.endAdornment, startAdornment = _a.startAdornment, onScroll = _a.onScroll, dropdownMaxWidth = _a.dropdownMaxWidth, containerRef = _a.containerRef, _o = _a.backgroundColor, backgroundColor = _o === void 0 ? 'white' : _o, _p = _a.menuVariantSize, menuVariantSize = _p === void 0 ? 'm' : _p;
    var id = (0, react_1.useMemo)(function () {
        return Select.id++;
    }, []);
    var _q = (0, react_1.useState)(false), showDropdown = _q[0], setShowDropdown = _q[1];
    var toggleRef = (0, react_1.useRef)(null);
    var _r = (0, react_1.useState)(false), isOnMove = _r[0], setIsonMove = _r[1];
    var _s = (0, react_1.useState)(false), isOnActive = _s[0], setIsonActive = _s[1];
    var firstElementPosition = (0, react_1.useRef)(0);
    var prevShowDropDown = (0, usePrevious_1.default)(showDropdown) || false;
    var _t = (0, react_1.useState)(function () { return (values.length > 0 && !multiselect ? values[0].label : ''); }), inputValue = _t[0], setInputValue = _t[1];
    var _u = (0, react_1.useState)(function () { return values; }), selectValues = _u[0], setSelectValues = _u[1];
    /** Очистка селекта */
    var onClear = function () {
        setInputValue('');
        if (!multiselect) {
            setSelectValues([]);
        }
        onSearch && onSearch('');
    };
    var onClearSelectedValues = function () {
        onChange([
            {
                label: '',
                value: ''
            }
        ]);
    };
    var onClose = (0, react_1.useCallback)(function () {
        setShowDropdown(false);
    }, []);
    var onOpen = (0, react_1.useCallback)(function () {
        if (!disabled) {
            setShowDropdown(true);
        }
    }, [disabled]);
    var onReset = function (e) {
        e.stopPropagation();
        onClear();
        onClearSelectedValues();
        onOpen();
    };
    // -------------------------------------------------------------------------------------------------------------------
    (0, react_1.useEffect)(function () {
        setInputValue(values.length > 0 && !multiselect ? values[0].label : '');
    }, [values]);
    /*   useEffect(() => {
      const onClick = (e: React.MouseEvent) => clickRef.current!.contains(e.target as Node) || console.log('клик вне компонента');
      document.addEventListener('click', onClick);
      return () => document.removeEventListener('click', onClick);
    }, []); */
    /** Очистка при изменении извне через clearHook */
    (0, react_1.useEffect)(function () {
        if (!multiselect) {
            setSelectValues([]);
        }
        if (clearHook === undefined) {
            return;
        }
        setInputValue('');
        onSearch && onSearch('');
    }, [clearHook]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Поиск в селекте */
    var onSelectSearch = function (e) {
        setInputValue(e.target.value);
    };
    (0, react_1.useEffect)(function () {
        if (readOnly) {
            return;
        }
        if (onSearch) {
            onSearch(inputValue);
            return;
        }
        var filtered = options.filter(function (o) { return o.label.toLowerCase().includes(inputValue.toLowerCase()); });
        setFilteredOptions(filtered);
    }, [inputValue]);
    // -------------------------------------------------------------------------------------------------------------------
    (0, react_1.useEffect)(function () {
        setSelectValues(values);
    }, [values]);
    var _v = (0, react_1.useState)({}), selectedMap = _v[0], setSelectedMap = _v[1];
    (0, react_1.useEffect)(function () {
        var map = selectValues.reduce(function (acc, o) {
            acc[o.value] = true;
            return acc;
        }, {});
        setSelectedMap(map);
        if (clearOnSelect) {
            setInputValue('');
        }
        if (multiselect && selectValues.length === 1) {
            toggleRef.current.getBoundingClientRect().y = firstElementPosition.current;
        }
    }, [selectValues]);
    var onValueChange = function (option) {
        var result = undefined;
        if (multiselect) {
            var index_1 = selectValues.findIndex(function (o) { return option.value === o.value; });
            if (index_1 >= 0) {
                result = selectValues.filter(function (_, i) { return i !== index_1; });
            }
            else {
                if (typeof maxOptions === 'number' ? selectValues.length < maxOptions : true) {
                    result = __spreadArray(__spreadArray([], selectValues, true), [option], false);
                }
            }
        }
        else {
            result = [option];
        }
        if (result) {
            setSelectValues(result);
            onChange(result);
        }
    };
    var hasInfinityScroll = typeof onSearch === 'function';
    // -------------------------------------------------------------------------------------------------------------------
    var _w = (0, react_1.useState)([]), filteredOptions = _w[0], setFilteredOptions = _w[1];
    (0, react_1.useEffect)(function () {
        setFilteredOptions(options);
    }, [options]);
    // -------------------------------------------------------------------------------------------------------------------
    var listJSX = filteredOptions.map(function (o) {
        var optionDisabled = o.disabled || false;
        var active = selectedMap[o.value] || false;
        var handleChange = function (e) {
            e.stopPropagation();
            onValueChange(o);
            if (!multiselect) {
                setInputValue(clearOnSelect ? '' : o.label);
                onClose();
            }
            else {
                setInputValue('');
            }
        };
        var disabledClass = optionDisabled ? 'rf-select__list-element--disabled' : '';
        var activeClass = active ? 'rf-select__list-element--active' : '';
        var label = o.label;
        // TODO: думаю это можно вынести в отдельный компонент (Highlighter)
        if (inputValue) {
            var indexStart = o.label.toLowerCase().indexOf(inputValue.toLowerCase());
            if (indexStart >= 0) {
                var indexEnd = indexStart + inputValue.length - 1;
                var left = '';
                var query = '';
                var right = '';
                for (var i = 0; i < o.label.length; i++) {
                    if (i < indexStart) {
                        left += o.label[i];
                        continue;
                    }
                    if (i >= indexStart && i <= indexEnd) {
                        query += o.label[i];
                        continue;
                    }
                    right += o.label[i];
                }
                label = ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [left, (0, jsx_runtime_1.jsx)("span", { title: query, className: 'rf-select__list-element--query', children: query }), right] }));
            }
        }
        return ((0, jsx_runtime_1.jsx)("div", { "data-testid": "rf-select__list-element-".concat(o.value), className: "rf-select__list-element ".concat(disabledClass, " ").concat(activeClass), children: multiselect ? ((0, jsx_runtime_1.jsx)(Checkbox_1.default, { titleAtt: o.label, label: label, checked: active, onChange: handleChange, fullWidth: true })) : ((0, jsx_runtime_1.jsx)("div", { title: o.label, className: 'rf-select__list-element-single', onClick: handleChange, children: label })) }, o.value));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var noop = function () { };
    var inputElement = (0, jsx_runtime_1.jsx)("input", { autoSave: 'false', autoComplete: 'off', "data-testid": 'rf-select__input', className: "rf-select__input ".concat(multiselect && selectValues.length ? 'rf-select__input--multiselect' : '', "\n     ").concat(variant === 'menu' ? "rf-select__menu".concat(disabled ? '--disabled' : '', " rf-select__menu--").concat(menuVariantSize) : '', " ").concat(isOnMove && variant === 'menu' ? 'rf-button__hover' : ''), onChange: onSelectSearch, value: inputValue, disabled: disabled, readOnly: readOnly, placeholder: multiselect && selectValues.length ? '' : options.length ? placeholder : '' });
    var tagsRef = (0, react_1.useRef)(null);
    var tagsJSX = multiselect && selectValues.length > 0 && ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-select__tags', onClick: function () { return !disabled && onOpen(); }, children: [selectValues.map(function (t) { return ((0, jsx_runtime_1.jsx)("div", { ref: tagsRef, className: (0, classnames_1.classnames)('rf-select__tag'), children: (0, jsx_runtime_1.jsx)(Chip_1.default, { type: 'secondary', size: 'xs', onRemove: function () { return onValueChange(t); }, onClick: noop, disabled: disabled, children: t.label }) }, t.value)); }), (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-select__input--multiselect'), children: inputElement })] }));
    // -------------------------------------------------------------------------------------------------------------------
    var closeButton = !disabled && !readOnly && inputValue.length > 0 && ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: "rf-select__button".concat(multiselect && selectValues.length ? '--multiselect' : ''), onClick: onReset, "aria-label": '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) }));
    var onChevronClick = function (e) {
        console.log(selectValues);
        e.stopPropagation();
        setShowDropdown(function (state) { return !state; });
    };
    var onMouseMoveHandler = function (e) {
        setIsonMove(true);
    };
    var onMouseLeaveHandler = function (e) {
        setIsonMove(false);
    };
    (0, react_1.useEffect)(function () {
        if (!showDropdown && showDropdown !== prevShowDropDown) {
            if (!listJSX.length || !options.find(function (opt) { return opt.label === inputValue; })) {
                onClear();
            }
        }
    }, [prevShowDropDown, listJSX, options]);
    var chevronButton = (multiselect ? readOnly || inputValue.length === 0 || inputValue.length > 0 : readOnly || inputValue.length === 0) &&
        ((0, jsx_runtime_1.jsx)("button", { type: 'button', "data-testid": 'rf-select__chevron', className: (0, classnames_1.classnames)((multiselect && selectValues.length) ? 'rf-select__button-multiselect-chevron' : 'rf-select__button', showDropdown && 'rf-select__button--rotate', variant === 'menu' ? 'rf-select__button--menu' : '', isOnMove && variant === 'menu' ? 'rf-button__hover' : ''), onClick: onChevronClick, onMouseMove: onMouseMoveHandler, "aria-label": showDropdown ? 'Скрыть меню' : 'Раскрыть меню', children: options.length ? (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, { color: variant === 'menu' ? '#fff' : '' }) : null }));
    var startAdornmentIcon = startAdornment && variant !== 'tag' ? (0, jsx_runtime_1.jsx)("div", { className: 'rf-select__button__icon', children: startAdornment }) : null;
    var endAdornmentIcon = endAdornment && variant !== 'tag' ? (0, jsx_runtime_1.jsx)("div", { className: 'rf-select__button__icon--end', children: endAdornment }) : null;
    // -------------------------------------------------------------------------------------------------------------------
    var isTagVariant = variant === 'tag';
    var openClass = showDropdown ? 'rf-select__wrapper--open' : '';
    var tagClass = isTagVariant ? 'rf-select__wrapper--tag' : '';
    var loader = ((0, jsx_runtime_1.jsx)("div", { className: 'rf-select__preloader', children: (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 'm' }) }));
    var makeLazyFetch = (0, react_1.useCallback)(function () {
        if (onSearch && isAsync) {
            return function () { return onSearch(inputValue, isAsync); };
        }
        return noop;
    }, [onSearch, isAsync, inputValue]);
    var getWidthDropdown = (0, react_1.useCallback)(function () {
        var _a;
        return dropdownMaxWidth || ((_a = toggleRef.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width);
    }, [dropdownMaxWidth]);
    return ((0, jsx_runtime_1.jsx)(react_popper_1.Manager, { children: (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-select', tagClass, backgroundColor === 'gray' && 'rf-select__background-gray'), ref: toggleRef, children: [(0, jsx_runtime_1.jsx)(react_popper_1.Reference, { children: function (referenceProps) { return ((0, jsx_runtime_1.jsxs)("div", __assign({ onMouseLeave: onMouseLeaveHandler }, referenceProps, { "data-testid": 'rf-select', className: (0, classnames_1.classnames)('rf-select__wrapper', invalid && 'rf-select__wrapper--invalid', openClass, disabled && 'rf-select__wrapper--disabled', variant === 'menu' ? 'rf-select__wrapper--menu' : ''), onClick: function () { return onOpen(); }, children: [startAdornmentIcon, (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)(multiselect && selectValues.length ?
                                    'rf-select__wrapper--input' : 'rf-select-input__container', !showDropdown && multiselect && selectValues.length ? 'rf-select--multiselect--fixed' : ''), children: [tagsJSX, multiselect ? selectValues.length < 1 ? inputElement : null : inputElement] }), endAdornmentIcon, closeButton, chevronButton] }))); } }), (0, jsx_runtime_1.jsx)(Dropdown_1.default, { show: showDropdown && (!!listJSX.length || preloader), toggleRef: toggleRef, containerRef: containerRef, onClose: onClose, position: position, style: {
                        maxWidth: isTagVariant ? 'auto' : getWidthDropdown(),
                        width: isTagVariant ? 'auto' : '100%'
                    }, children: (0, jsx_runtime_1.jsx)("div", { "data-testid": 'rf-select-list-scroll', className: (0, classnames_1.classnames)('rf-select__list', "rf-select__list--".concat(menuVariantSize)), id: "Select-".concat(id, "-list-scroll"), onScroll: onScroll, children: hasInfinityScroll ? ((0, jsx_runtime_1.jsx)(react_infinite_scroll_component_1.default, __assign({ dataLength: 0, hasMore: false }, infinityScrollProps, { next: makeLazyFetch(), loader: loader, scrollableTarget: "Select-".concat(id, "-list-scroll"), className: 'rf-select__infinity-list', children: listJSX }))) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: preloader ? loader : listJSX })) }) })] }) }));
};
Select.id = 0;
exports.default = Select;
