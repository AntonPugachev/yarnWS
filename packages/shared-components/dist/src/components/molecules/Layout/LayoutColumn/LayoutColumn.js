"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayoutColumn = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./LayoutColumn.scss");
var react_1 = require("react");
var classnames_1 = require("../../../../utils/classnames");
var indexIcon_1 = require("../../../../indexIcon");
var Layout_context_1 = require("../Layout.context");
var LayoutColumn = function (_a) {
    var children = _a.children, maxWidth = _a.maxWidth;
    var _b = (0, Layout_context_1.useLayoutContext)(), isColumnVisible = _b.isColumnVisible, setColumnVisible = _b.setColumnVisible;
    var ref = (0, react_1.useRef)(null);
    (0, react_1.useLayoutEffect)(function () {
        if (ref.current) {
            ref.current.style.setProperty('--column-max-width', maxWidth || '100%');
        }
    }, [maxWidth]);
    var onClose = function () {
        setColumnVisible(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('layout-column', isColumnVisible && 'layout-column--visible'), ref: ref, children: [(0, jsx_runtime_1.jsx)("div", { className: 'layout-column__backdrop', onClick: onClose }), (0, jsx_runtime_1.jsx)("button", { className: 'layout-column__close', type: 'button', onClick: onClose, "aria-label": '\u0417\u0430\u043A\u0440\u044B\u0442\u044C', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'layout-column__content', children: children })] }));
};
exports.LayoutColumn = LayoutColumn;
