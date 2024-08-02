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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Button.scss");
var Preloader_1 = __importDefault(require("../Preloader"));
var classnames_1 = require("../../../utils/classnames");
// FIXME: Elements must have sufficient color contrast
var Button = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'button' : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c, _d = _a.fullWidth, fullWidth = _d === void 0 ? false : _d, _e = _a.buttonType, buttonType = _e === void 0 ? 'primary' : _e, preloader = _a.preloader, _f = _a.textColor, textColor = _f === void 0 ? 'default' : _f, _g = _a.round, round = _g === void 0 ? false : _g, pressedCondition = _a.pressedCondition, children = _a.children, startAdornment = _a.startAdornment, endAdornment = _a.endAdornment, props = __rest(_a, ["type", "size", "fullWidth", "buttonType", "preloader", "textColor", "round", "pressedCondition", "children", "startAdornment", "endAdornment"]);
    var getPreloaderSize = (0, react_1.useCallback)(function () {
        if (size === 'xs' || size === 's') {
            return 's';
        }
        return 'm';
    }, [size]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({}, props, { type: type, className: (0, classnames_1.classnames)(props.className, 'rf-button', "rf-button--".concat(buttonType), "rf-button--".concat(size), buttonType === 'text' && "rf-button--text-".concat(textColor), fullWidth && 'rf-button__full-width', round && 'rf-button--round'), children: [(0, jsx_runtime_1.jsxs)("div", { "data-testid": 'rf-button__content', className: (0, classnames_1.classnames)('rf-button__content', preloader && 'rf-button__content--hidden'), children: [!!startAdornment && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-button__adornment rf-button__adornment--start', children: startAdornment })), !!children && (0, jsx_runtime_1.jsx)("div", { className: 'rf-button__text', children: children }), !!endAdornment && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-button__adornment rf-button__adornment--end', children: endAdornment }))] }), !!preloader &&
                (0, jsx_runtime_1.jsx)(Preloader_1.default, { className: (0, classnames_1.classnames)(buttonType === 'round' && 'rf-button--round-loading'), size: getPreloaderSize(), variant: 'inherit' })] })));
};
exports.default = Button;
