"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var __1 = require("../../..");
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
require("./TextCollapse.scss");
var TextCollapse = function (_a) {
    var children = _a.children, _b = _a.lineHeight, lineHeight = _b === void 0 ? '21px' : _b, _c = _a.row, row = _c === void 0 ? 3 : _c;
    var contentRef = (0, react_1.useRef)(null);
    var textRef = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(false), opened = _d[0], setOpened = _d[1];
    var _e = (0, react_1.useState)(false), showExpander = _e[0], setShowExpander = _e[1];
    var handleHeightText = (0, react_1.useCallback)(function () {
        var _a, _b;
        if ((_a = textRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight) {
            var heightRow = Number(lineHeight.replace(/px$/, ''));
            var allRows = Math.ceil(((_b = textRef.current) === null || _b === void 0 ? void 0 : _b.offsetHeight) / heightRow);
            if (allRows > row && !opened) {
                textRef.current.style.height = "".concat(heightRow * row, "px");
            }
            else {
                textRef.current.style.height = 'auto';
            }
            if (!opened) {
                setShowExpander(row < allRows);
            }
        }
    }, [children, opened, row]);
    var makeHandleExpand = function () { return function () { return setOpened(function (prevOpened) { return !prevOpened; }); }; };
    (0, react_1.useEffect)(function () {
        handleHeightText();
    }, [handleHeightText]);
    return ((0, jsx_runtime_1.jsxs)("div", { ref: contentRef, className: (0, classnames_1.classnames)('rf-text-collapse'), children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-text-collapse__text', ref: textRef, children: children }), showExpander &&
                (0, jsx_runtime_1.jsx)(__1.Button, { buttonType: 'text', onClick: makeHandleExpand(), children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-text-collapse__btn', children: [(0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, { className: (0, classnames_1.classnames)('rf-text-collapse__icon', opened && 'rf-text-collapse__icon--rotate'), size: 'xxs' }), (0, jsx_runtime_1.jsx)("span", { className: 'rf-text-collapse__btn-text', children: opened ? 'Скрыть' : 'Раскрыть' })] }) })] }));
};
exports.default = TextCollapse;
