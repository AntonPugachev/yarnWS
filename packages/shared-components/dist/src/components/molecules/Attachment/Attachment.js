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
var react_1 = require("react");
var Chip_1 = __importDefault(require("../../atoms/Chip"));
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var classnames_1 = require("../../../utils/classnames");
var download_1 = require("../../../utils/download");
require("./Attachment.scss");
var Attachment = function (_a) {
    var attachment = _a.attachment, _b = _a.showRemoveIcon, showRemoveIcon = _b === void 0 ? true : _b, onRemove = _a.onRemove, className = _a.className, props = __rest(_a, ["attachment", "showRemoveIcon", "onRemove", "className"]);
    var _c = (0, react_1.useState)(false), isLoading = _c[0], setIsLoading = _c[1];
    if (!attachment) {
        return null;
    }
    return (0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-attachment', className), children: [isLoading && (0, jsx_runtime_1.jsx)("div", { className: 'rf-attachment__loader', children: (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 's' }) }), (0, jsx_runtime_1.jsx)(Chip_1.default, __assign({ onClick: function () { return (0, download_1.downloadWithLoading)(attachment, setIsLoading); }, size: 's', type: 'outline', maxLength: 30, tooltipBackground: 'white', onRemove: showRemoveIcon ? (function () { return onRemove === null || onRemove === void 0 ? void 0 : onRemove(attachment); }) : undefined, iconPosition: 'right' }, props, { children: attachment.file.name }))] });
};
exports.default = Attachment;
