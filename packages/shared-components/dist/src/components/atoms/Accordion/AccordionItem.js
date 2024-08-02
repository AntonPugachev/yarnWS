"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var indexIcon_1 = require("../../../indexIcon");
require("./Accordion.scss");
var AccordionItem = function (_a) {
    var children = _a.children, opened = _a.opened, disabled = _a.disabled, onClick = _a.onClick;
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-accordion__item', onClick: !disabled ? onClick : function () { }, role: 'treeitem', "aria-expanded": opened, children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-accordion__item-inner', children: [children, (0, jsx_runtime_1.jsx)("div", { className: 'rf-accordion__item-icon', children: opened ? (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronUp, {}) : (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, {}) })] }) }));
};
exports.default = AccordionItem;
