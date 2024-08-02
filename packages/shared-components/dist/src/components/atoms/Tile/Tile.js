"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Tile.scss");
var classnames_1 = require("../../../utils/classnames");
var Tile = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.type, type = _c === void 0 ? 'default' : _c, _d = _a.hideBackground, hideBackground = _d === void 0 ? false : _d, _e = _a.padding, padding = _e === void 0 ? '20px' : _e, _f = _a.borderRadius, borderRadius = _f === void 0 ? '20px' : _f, _g = _a.variant, variant = _g === void 0 ? 'default' : _g;
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            padding: padding,
            borderRadius: borderRadius,
        }, className: (0, classnames_1.classnames)('rf-tile', className, !hideBackground && 'rf-tile__background', type === 'stretch' && 'rf-tile--stretch', "rf-tile--".concat(variant)), children: children }));
};
exports.default = Tile;
