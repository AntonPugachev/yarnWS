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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Avatar_1 = __importDefault(require("../../atoms/Avatar/Avatar"));
var Status_1 = __importDefault(require("../../atoms/Status/Status"));
var helpers_1 = require("../../../utils/helpers");
var helper_1 = require("./helper");
require("./AvatarStatus.scss");
var AvatarStatus = function (_a) {
    var variant = _a.variant, _b = _a.isShowBrowserTooltip, isShowBrowserTooltip = _b === void 0 ? true : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c, type = _a.type, props = __rest(_a, ["variant", "isShowBrowserTooltip", "size", "type"]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-avatar-status ".concat(helpers_1.sizeClass[size]), title: isShowBrowserTooltip ? props.fullName : '', children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, __assign({}, props, { size: size })), variant && (0, jsx_runtime_1.jsx)("div", { className: "rf-avatar-status__border ".concat(helpers_1.sizeClass[size], " ").concat(variant) }), type && (size !== 'xxxs' && size !== 'xxs' && size !== 'xs') && variant !== 'default' && ((0, jsx_runtime_1.jsx)("div", { className: size === 's' ? 'rf-avatar-status__sticker--size-s' : 'rf-avatar-status__sticker', children: (0, jsx_runtime_1.jsx)(Status_1.default, { size: helper_1.statusSize[size], type: type }) }))] }));
};
exports.default = AvatarStatus;
