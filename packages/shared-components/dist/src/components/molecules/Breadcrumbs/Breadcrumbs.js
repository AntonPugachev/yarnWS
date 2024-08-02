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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_resize_detector_1 = require("react-resize-detector");
var Breadcrumb_1 = __importDefault(require("./Breadcrumb"));
var Menu_1 = __importDefault(require("../../atoms/Menu"));
require("./Breadcrumbs.scss");
var AllMenuHorizontal_1 = __importDefault(require("../../../assets/icons/resultDir/AllMenuHorizontal"));
var MENU_WIDTH = 58;
var Breadcrumbs = function (_a) {
    var _b = _a.list, list = _b === void 0 ? [] : _b;
    var hiddenIndexes = (0, react_1.useRef)([]);
    var refs = (0, react_1.useRef)([]);
    /** Определяем ширину элемента */
    var getWidthElement = function (element) { return (element === null || element === void 0 ? void 0 : element.getBoundingClientRect().width) || 0; };
    /** Определяем ширину по массиву элементов */
    var getWidthByVisible = function (elements) {
        var fullWidth = 0;
        elements.map(function (element) {
            fullWidth += getWidthElement(element);
        });
        return fullWidth;
    };
    var onResize = (0, react_1.useCallback)(function (width) {
        if (!width) {
            return;
        }
        var visibleElements = __spreadArray([], refs.current, true).filter(function (_, index) { return !hiddenIndexes.current.includes(index); });
        var hasHidden = !!hiddenIndexes.current.length;
        var fullWidth = hasHidden ?
            getWidthByVisible(visibleElements) + MENU_WIDTH :
            getWidthByVisible(visibleElements);
        var lastHiddenIndex = hiddenIndexes.current[hiddenIndexes.current.length - 1];
        if (width < fullWidth) {
            hiddenIndexes.current.push(lastHiddenIndex ? lastHiddenIndex + 1 : 1);
            onResize(width);
        }
        else {
            if (hiddenIndexes.current.length) {
                var isLastIndex = hiddenIndexes.current.length === 1;
                var fullWidthWithLastElement = isLastIndex ?
                    fullWidth + getWidthElement(refs.current[lastHiddenIndex]) - MENU_WIDTH :
                    fullWidth + getWidthElement(refs.current[lastHiddenIndex]);
                if (width > fullWidthWithLastElement) {
                    hiddenIndexes.current = hiddenIndexes.current.filter(function (index) { return index !== lastHiddenIndex; });
                    onResize(width);
                }
            }
        }
    }, []);
    var ref = (0, react_resize_detector_1.useResizeDetector)({
        onResize: onResize,
        refreshMode: 'debounce',
        refreshRate: 200,
    }).ref;
    var getMenuByHiddenIndexes = (0, react_1.useCallback)(function () {
        return hiddenIndexes.current.map(function (index) {
            var currentItem = list[index];
            return ({
                value: currentItem.href,
                href: currentItem.href,
                label: currentItem.children
            });
        });
    }, [list]);
    if (!list.length) {
        return null;
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-breadcrumbs', ref: ref, children: list.map(function (_a, index) {
            var children = _a.children, breadcrumb = __rest(_a, ["children"]);
            return ((0, jsx_runtime_1.jsxs)(react_1.Fragment, { children: [(hiddenIndexes.current.length > 0 && hiddenIndexes.current[0] === index) && ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(Menu_1.default, { position: 'bottom-start', className: 'rf-breadcrumbs__menu', list: getMenuByHiddenIndexes(), style: { maxWidth: '240px' }, children: (0, jsx_runtime_1.jsx)(Breadcrumb_1.default, { component: 'button', isLast: hiddenIndexes.current.includes(list.length - 1), children: (0, jsx_runtime_1.jsx)(AllMenuHorizontal_1.default, { height: '20px' }) }) }) })), (0, jsx_runtime_1.jsx)(Breadcrumb_1.default, __assign({ ref: function (el) { return refs.current[index] = el; } }, breadcrumb, { isHidden: hiddenIndexes.current.includes(index), isLast: index === list.length - 1, children: children }))] }, "".concat(breadcrumb.href, "/").concat(index)));
        }) }));
};
exports.default = Breadcrumbs;
