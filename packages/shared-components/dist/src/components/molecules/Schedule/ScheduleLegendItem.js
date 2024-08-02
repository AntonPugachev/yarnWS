"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ScheduleLegendItem.scss");
var classnames_1 = require("../../../utils/classnames");
var ScheduleLegendItem = function (_a) {
    var children = _a.children, variant = _a.variant;
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-schedule-legend-item', "rf-schedule-legend-item_".concat(variant)), children: children }));
};
exports.default = ScheduleLegendItem;
