"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ControlGroup.scss");
var ControlGroup = function (_a) {
    var className = _a.className, _b = _a.direction, direction = _b === void 0 ? 'vertical' : _b, inset = _a.inset, children = _a.children;
    return ((0, jsx_runtime_1.jsx)("div", { className: "rf-control-group rf-control-group--".concat(direction, " ").concat(inset ? 'rf-control-group--inset' : '', " ").concat(className || ''), children: children }));
};
exports.default = ControlGroup;
