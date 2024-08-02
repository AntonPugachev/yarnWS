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
exports.BannerImage = exports.BannerImageMap = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./BannerImage.scss");
var broken_magnifier_png_1 = __importDefault(require("../../../../assets/illustrations/broken-magnifier.png"));
var close_entrance_png_1 = __importDefault(require("../../../../assets/illustrations/close-entrance.png"));
var default_png_1 = __importDefault(require("../../../../assets/illustrations/default.png"));
var donut_png_1 = __importDefault(require("../../../../assets/illustrations/donut.png"));
var donut_2_png_1 = __importDefault(require("../../../../assets/illustrations/donut-2.png"));
var empty_png_1 = __importDefault(require("../../../../assets/illustrations/empty.png"));
var ghost_png_1 = __importDefault(require("../../../../assets/illustrations/ghost.png"));
var magnifier_folder_png_1 = __importDefault(require("../../../../assets/illustrations/magnifier-folder.png"));
var magnifier_not_available_png_1 = __importDefault(require("../../../../assets/illustrations/magnifier-not-available.png"));
var magnifier_zero_png_1 = __importDefault(require("../../../../assets/illustrations/magnifier-zero.png"));
var not_available_png_1 = __importDefault(require("../../../../assets/illustrations/not-available.png"));
var notifications_png_1 = __importDefault(require("../../../../assets/illustrations/notifications.png"));
var settings_png_1 = __importDefault(require("../../../../assets/illustrations/settings.png"));
var work_png_1 = __importDefault(require("../../../../assets/illustrations/work.png"));
exports.BannerImageMap = {
    'broken-magnifier': broken_magnifier_png_1.default,
    'close-entrance': close_entrance_png_1.default,
    'default': default_png_1.default,
    'donut': donut_png_1.default,
    'donut-2': donut_2_png_1.default,
    'empty': empty_png_1.default,
    'ghost': ghost_png_1.default,
    'magnifier-folder': magnifier_folder_png_1.default,
    'magnifier-not-available': magnifier_not_available_png_1.default,
    'magnifier-zero': magnifier_zero_png_1.default,
    'not-available': not_available_png_1.default,
    'notifications': notifications_png_1.default,
    'settings': settings_png_1.default,
    'work': work_png_1.default
};
var BannerImage = function (_a) {
    var variant = _a.variant, src = _a.src, props = __rest(_a, ["variant", "src"]);
    var source = variant ? exports.BannerImageMap[variant] : src;
    return ((0, jsx_runtime_1.jsx)("img", __assign({ className: 'banner-image', src: source, role: 'presentation' }, props)));
};
exports.BannerImage = BannerImage;
