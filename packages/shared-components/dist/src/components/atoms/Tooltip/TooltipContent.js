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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_popper_1 = require("react-popper");
require("./Tooltip.scss");
var react_dom_1 = require("react-dom");
var getOffsetPadding = function (offset, placement) {
    var offsetPadding = {
        'top': { paddingBottom: "".concat(offset, "px"), },
        'bottom': { paddingTop: "".concat(offset, "px"), },
        'bottom-start': { paddingTop: "".concat(offset, "px"), },
        'left': { paddingRight: "".concat(offset, "px"), },
        'right': { paddingLeft: "".concat(offset, "px"), },
    };
    return offsetPadding[placement];
};
var TooltipContent = function (_a) {
    var children = _a.children, _b = _a.position, position = _b === void 0 ? 'top' : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.background, background = _d === void 0 ? 'white' : _d, _e = _a.offset, offset = _e === void 0 ? 8 : _e, hidePadding = _a.hidePadding;
    return (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(react_popper_1.Popper, { placement: position, modifiers: [
            {
                name: 'flip',
                options: {
                    allowedAutoPlacements: [
                        'right',
                        'left',
                        'top',
                        'bottom'
                    ],
                },
            },
            {
                name: 'arrow',
                options: { padding: 9 }
            }
        ], children: function (_a) {
            var ref = _a.ref, dropdownStyle = _a.style, placement = _a.placement;
            return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: 'rf-tooltip__content-wrapper', style: __assign(__assign({}, dropdownStyle), getOffsetPadding(offset, placement)), children: (0, jsx_runtime_1.jsx)("div", { className: "rf-tooltip__content rf-tooltip__content--".concat(background, " ").concat(className), children: (0, jsx_runtime_1.jsx)("div", { className: "rf-tooltip__inner rf-tooltip__inner--".concat(placement, " \n            ").concat(hidePadding ? 'rf-tooltip__inner--no-pudding' : '', "\n            "), children: children }) }) }));
        } }), document.body);
};
exports.default = TooltipContent;
