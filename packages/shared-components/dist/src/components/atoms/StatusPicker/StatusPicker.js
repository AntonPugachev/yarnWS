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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./StatusPicker.scss");
// FIXME: Добавить управление с клавиатуры
var StatusPicker = function (_a) {
    var _b = _a.getRate, getRate = _b === void 0 ? function () { } : _b, pickedValues = _a.pickedValues, position = _a.position, props = __rest(_a, ["getRate", "pickedValues", "position"]);
    var id = (0, react_1.useMemo)(function () {
        return StatusPicker.id++;
    }, []);
    var statusColors = ['low', 'medium', 'high'];
    var prevCurrentIndex = (0, react_1.useRef)(-1);
    var clickStatusHandler = function (selectIndex /* row*/, currentIndex /* col*/) { return function (e) {
        var target = e.target;
        var res = +target.dataset.value;
        if (pickedValues[position][currentIndex] === '') {
            var newArr = __spreadArray([], pickedValues, true);
            if (pickedValues[position].find(function (i) { return i === '0'; })) {
                pickedValues.map(function (pv, index) {
                    if (index !== selectIndex) {
                        pv[prevCurrentIndex.current] = '';
                    }
                });
            }
            prevCurrentIndex.current = currentIndex;
            newArr = pickedValues.map(function (pv, index) {
                if (index === selectIndex) {
                    pv = pv.map(function (a, i) { return res - 1 === i ? a = '0' : a !== 'X' ? '' : 'X'; });
                    return pv;
                }
                return pv = pv.map(function (a, i) { return res - 1 === i ? a = 'X' : a; });
            });
            getRate(res, newArr, position);
        }
        if (pickedValues[position][currentIndex] === '0') {
            var newArr = pickedValues.map(function (pv, index) {
                return pv.map(function (p, index) {
                    if (index === currentIndex) {
                        return p = '';
                    }
                    return p;
                });
            });
            getRate(res, newArr, position);
        }
    }; };
    var status = [
        {
            value: 1,
            name: 'Низкий'
        },
        {
            value: 2,
            name: 'Средний'
        },
        {
            value: 3,
            name: 'Высокий'
        }
    ];
    var statusComponent = status.map(function (item, index) {
        var statusComponentLabelClass = "status-picker__label--".concat(pickedValues[position][index] !== '' ?
            pickedValues[position][index] === '0' ?
                statusColors[item.value - 1] :
                'disabled' :
            '');
        return (0, jsx_runtime_1.jsxs)("div", { className: 'status-picker__items', children: [(0, jsx_runtime_1.jsx)("input", { type: 'radio', id: "StatusPicker-".concat(id, "-").concat(item.value.toString()), value: item.value }), (0, jsx_runtime_1.jsx)("label", __assign({ "data-testid": "".concat((position + 1).toString() + index), "data-value": item.value.toString(), className: statusComponentLabelClass, onClick: clickStatusHandler(position, index), htmlFor: "StatusPicker-".concat(id, "-").concat(item.value.toString()) }, props, { children: item.name }))] }, item.value);
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: 'status-picker', children: (0, jsx_runtime_1.jsx)("div", { className: 'status-picker__container', children: statusComponent }) }));
};
StatusPicker.id = 0;
exports.default = StatusPicker;
