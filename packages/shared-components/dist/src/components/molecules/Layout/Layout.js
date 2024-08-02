"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Layout.scss");
var react_1 = require("react");
var classnames_1 = require("../../../utils/classnames");
var Layout_context_1 = require("./Layout.context");
var Layout = function (_a) {
    var children = _a.children, maxWidth = _a.maxWidth, columns = _a.columns;
    var _b = (0, react_1.useState)(false), isColumnVisible = _b[0], setColumnVisible = _b[1];
    var value = (0, react_1.useMemo)(function () {
        return {
            isColumnVisible: isColumnVisible,
            setColumnVisible: setColumnVisible
        };
    }, [isColumnVisible]);
    return ((0, jsx_runtime_1.jsx)(Layout_context_1.LayoutContext.Provider, { value: value, children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('layout', "layout--size-".concat(maxWidth)), style: { gridTemplateColumns: columns && columns.join(' ') }, children: children }) }));
};
exports.Layout = Layout;
