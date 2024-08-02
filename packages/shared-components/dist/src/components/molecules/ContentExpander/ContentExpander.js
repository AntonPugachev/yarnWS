"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./ContentExpander.scss");
var indexIcon_1 = require("../../../indexIcon");
var Button_1 = __importDefault(require("../../atoms/Button"));
var ContentExpander = function (_a) {
    var title = _a.title, children = _a.children, onExpand = _a.onExpand, expanded = _a.expanded, _b = _a.defaultValue, defaultValue = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.stickArrow, stickArrow = _e === void 0 ? false : _e, _f = _a.showTitle, showTitle = _f === void 0 ? true : _f, _g = _a.titleOpen, titleOpen = _g === void 0 ? '' : _g;
    /** Раскрыть / Скрыть */
    var _h = (0, react_1.useState)(defaultValue), innerExpanded = _h[0], setInnerExpanded = _h[1];
    (0, react_1.useEffect)(function () {
        defaultValue && setInnerExpanded(defaultValue);
    }, [defaultValue]);
    var onClick = function () {
        if (disabled) {
            return;
        }
        onExpand ? onExpand() : setInnerExpanded(!innerExpanded);
    };
    var disabledClass = disabled ? 'expander--disabled' : '';
    var stickArrowClass = stickArrow ? 'expander--arrow-stick' : '';
    var hideTitleClass = !showTitle ? 'expander__title--hidden' : '';
    return ((0, jsx_runtime_1.jsxs)("div", { className: "expander ".concat(className, " ").concat(stickArrowClass, " ").concat(disabledClass), children: [(0, jsx_runtime_1.jsx)("h3", { className: "expander__title ".concat(hideTitleClass), onClick: onClick, "data-expander": true, children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', children: (0, jsx_runtime_1.jsxs)("div", { className: 'expander__button-wrapper', children: [(0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, { className: "expander__icon ".concat(expanded || innerExpanded ? 'expander__icon--rotate' : '') }), (0, jsx_runtime_1.jsx)("span", { className: 'expander__title-text', children: !innerExpanded ? title : titleOpen || title })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "expander__content ".concat(expanded || innerExpanded ? 'expander__content--active' : ''), children: children })] }));
};
exports.default = ContentExpander;
