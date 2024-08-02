"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Badge.scss");
var Badge = function (_a) {
    var badgeContent = _a.badgeContent, children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'info' : _c, _d = _a.max, max = _d === void 0 ? 99 : _d, _e = _a.display, display = _e === void 0 ? true : _e, _f = _a.placeNear, placeNear = _f === void 0 ? false : _f, _g = _a.size, size = _g === void 0 ? 'm' : _g, contentStyle = _a.contentStyle;
    var wrapper = (0, react_1.useRef)(null);
    var isDot = badgeContent ? '' : "rf-badge--dot--".concat(size);
    // -------------------------------------------------------------------------------------------------------------------
    var textClass = typeof children === 'string' ? 'rf-badge--text' : '';
    var placeNearClass = placeNear ? 'rf-badge--near' : '';
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-badge__wrapper ".concat(className, " ").concat(placeNearClass), ref: wrapper, children: [children, display &&
                (0, jsx_runtime_1.jsx)("div", { className: "rf-badge badge-size--".concat(size, " rf-badge--").concat(variant, " ").concat(isDot, " ").concat(textClass), style: contentStyle, children: badgeContent ? !isNaN(+badgeContent) && +badgeContent > max ? "".concat(max, "+") : badgeContent : null })] }));
};
exports.default = Badge;
