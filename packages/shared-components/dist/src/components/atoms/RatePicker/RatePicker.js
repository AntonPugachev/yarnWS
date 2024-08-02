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
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
require("./RatePicker.scss");
var RatePicker = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? true : _b, _c = _a.isStarPicker, isStarPicker = _c === void 0 ? false : _c, _d = _a.defaultPickedValue, defaultPickedValue = _d === void 0 ? 0 : _d, _e = _a.getRate, getRate = _e === void 0 ? function () { } : _e, _f = _a.sizePicker, sizePicker = _f === void 0 ? 5 : _f, _g = _a.textContent, textContent = _g === void 0 ? '' : _g, _h = _a.isReverse, isReverse = _h === void 0 ? false : _h, _j = _a.variant, variant = _j === void 0 ? 'm' : _j, props = __rest(_a, ["isActive", "isStarPicker", "defaultPickedValue", "getRate", "sizePicker", "textContent", "isReverse", "variant"]);
    var id = (0, react_1.useMemo)(function () {
        return RatePicker.id++;
    }, []);
    var _k = (0, react_1.useState)(defaultPickedValue), rating = _k[0], setRating = _k[1];
    var _l = (0, react_1.useState)(0), hover = _l[0], setHover = _l[1];
    (0, react_1.useEffect)(function () {
        setRating(defaultPickedValue);
    }, [defaultPickedValue, isActive]);
    if (sizePicker < 1) {
        sizePicker = 1;
    }
    var clickRateHandler = function (e) {
        var _a;
        if (rating === +e.currentTarget.textContent) {
            setRating(0);
            getRate('0');
            e.stopPropagation();
        }
        else if (typeof ((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.textContent) === 'string') {
            isActive && setRating(+e.currentTarget.textContent);
            getRate(e.currentTarget.textContent);
            e.stopPropagation();
        }
        else {
            setRating(0);
            e.stopPropagation();
        }
    };
    var onMoveMouseHandler = function (item) { return function (e) {
        setHover(item);
    }; };
    var onMoveMouseLeaveHandler = function () {
        setHover(0);
    };
    var clickRateStarHandler = function (value, e) {
        var _a;
        if (rating === value) {
            setRating(0);
            getRate('0');
            e.stopPropagation();
        }
        else if (typeof ((_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.textContent) === 'string') {
            isActive && setRating(value);
            getRate(value.toString());
            e.stopPropagation();
        }
        else {
            setRating(0);
            e.stopPropagation();
        }
    };
    var rates = Array.from(Array(sizePicker), function (_, index) { return index + 1; });
    if (isReverse) {
        rates = rates.reverse();
    }
    var rateComponent = rates.map(function (item, index) {
        var labelClassName = +rating >= item && !isReverse ?
            "rate-picker__label_picked_".concat(isActive ?
                'primary' :
                'tertiary') :
            isReverse && +rating <= item ?
                "rate-picker__label_picked_".concat(isActive ?
                    'primary' :
                    'tertiary') :
                '';
        var containerClassName = "".concat(isReverse && item === 1 ? 'rate-picker__item--right' : '', "\n    ").concat(isReverse && rates.length === item ? 'rate-picker__item--left' : 'rate-picker__item', "\n    ").concat(!isReverse && item === 1 ? 'rate-picker__item--left' : 'rate-picker__item', " \n    ").concat(!isReverse && rates.length === item ? 'rate-picker__item--right' : 'rate-picker__item');
        return ((0, jsx_runtime_1.jsx)("button", { type: 'button', className: (0, classnames_1.classnames)(containerClassName), id: "RatePicker-".concat(id, "-").concat(item), onClick: function (e) {
                return isStarPicker ?
                    clickRateStarHandler(index + 1, e) :
                    isActive ? clickRateHandler(e) : function () { };
            }, children: isStarPicker ? ((0, jsx_runtime_1.jsx)("label", { onMouseMove: onMoveMouseHandler(item), onMouseLeave: onMoveMouseLeaveHandler, className: (0, classnames_1.classnames)(labelClassName, 'star-picker', isActive && hover >= item && hover > 0 ? 'star-hover' : '', !isActive && 'disabled-star', rating === index + 1 && 'picked'), children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllStar, { size: isActive ? variant : 'xxs' }) })) : ((0, jsx_runtime_1.jsx)("label", __assign({ className: (0, classnames_1.classnames)(labelClassName, 'rate-picker__label', isActive && hover >= item && hover > 0 ? 'rate-hover' : '', !isActive && 'disabled-picker'), onMouseMove: onMoveMouseHandler(item), onMouseLeave: onMoveMouseLeaveHandler, htmlFor: "RatePicker-".concat(id, "-").concat(item) }, props, { children: item }))) }, item.toString()));
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rate-picker', !isActive ? 'disabled' : ''), children: [textContent && (0, jsx_runtime_1.jsx)("p", { className: 'rate-picker__content', children: textContent }), (0, jsx_runtime_1.jsx)("div", { className: 'rate-picker__container', children: rateComponent })] }));
};
RatePicker.id = 0;
exports.default = RatePicker;
