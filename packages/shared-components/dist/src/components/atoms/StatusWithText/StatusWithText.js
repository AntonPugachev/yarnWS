"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./StatusWithText.scss");
var indexIcon_1 = require("../../../indexIcon");
var statusColors = {
    '0': {
        symbol: 'rf-status-with-text__title--default',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusReleaseSecondary, {})
    },
    '1': {
        symbol: 'rf-status-with-text__title--error',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusError, {})
    },
    '2': {
        symbol: 'rf-status-with-text__title--warning',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusReturn, {})
    },
    '3': {
        symbol: 'rf-status-with-text__title--success',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusRelease, {})
    }
};
// FIXME: Elements must have sufficient color contrast
var StatusWithText = function (_a) {
    var _b = _a.statusText, statusText = _b === void 0 ? '' : _b, _c = _a.criticality, criticality = _c === void 0 ? '0' : _c;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-status-with-text', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-status-with-text__icon-wrapper', children: statusColors[criticality].icon }), (0, jsx_runtime_1.jsx)("p", { className: "rf-status-with-text__title ".concat(statusColors[criticality].symbol), children: statusText })] }));
};
exports.default = StatusWithText;
