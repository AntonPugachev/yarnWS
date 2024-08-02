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
var react_popper_1 = require("react-popper");
require("./Tooltip.scss");
var helpers_1 = require("../../../utils/helpers");
var server_1 = require("react-dom/server");
var TooltipContent_1 = __importDefault(require("./TooltipContent"));
var Tooltip = function (_a) {
    var children = _a.children, _b = _a.isVisible, isVisible = _b === void 0 ? true : _b, _c = _a.background, background = _c === void 0 ? 'white' : _c, _d = _a.closeDelay, closeDelay = _d === void 0 ? 0 : _d, _e = _a.className, className = _e === void 0 ? '' : _e, props = __rest(_a, ["children", "isVisible", "background", "closeDelay", "className"]);
    var content = children[0], contentTooltip = children[1];
    var _f = (0, react_1.useState)(false), visible = _f[0], setVisible = _f[1];
    var timeoutId = (0, react_1.useRef)();
    var text = (0, react_1.useMemo)(function () {
        try {
            // @ts-ignore
            return (0, helpers_1.extractTextFromHTML)((0, server_1.renderToStaticMarkup)(contentTooltip));
        }
        catch (_a) {
            return '';
        }
    }, [contentTooltip]);
    var onMouseEnter = function () {
        clearTimeout(timeoutId.current);
        timeoutId.current = setTimeout(function () {
            setVisible(true);
        }, closeDelay);
    };
    var onMouseLeave = function () {
        clearTimeout(timeoutId.current);
        setVisible(false);
    };
    return ((0, jsx_runtime_1.jsx)(react_popper_1.Manager, { children: (0, jsx_runtime_1.jsxs)("div", { "data-testid": 'rf-tooltip', className: "rf-tooltip rf-tooltip--".concat(background, " ").concat(className), onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, children: [(0, jsx_runtime_1.jsx)(react_popper_1.Reference, { children: function (referenceProps) { return (0, jsx_runtime_1.jsx)("div", __assign({ className: 'rf-tooltip__reference' }, referenceProps, { children: content })); } }), visible && isVisible && text.length > 0 && ((0, jsx_runtime_1.jsx)(TooltipContent_1.default, __assign({ background: background }, props, { children: contentTooltip })))] }) }));
};
exports.default = Tooltip;
