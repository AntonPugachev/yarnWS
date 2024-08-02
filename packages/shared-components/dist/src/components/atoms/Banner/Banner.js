"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Banner.scss");
var Button_1 = __importDefault(require("../Button"));
// FIXME: Elements must have sufficient color contrast
/**
 * @example
 * import illustration form 'juicyfront/assets/illustrations/default.png'
 * <Banner icon={<BannerImage src={illustration} />} heading="Заголовок" />
 */
var Banner = function (_a) {
    var icon = _a.icon, heading = _a.heading, subheading = _a.subheading, primaryText = _a.primaryText, onPrimaryClick = _a.onPrimaryClick, secondaryText = _a.secondaryText, onSecondaryClick = _a.onSecondaryClick;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'banner', children: [!!icon && ((0, jsx_runtime_1.jsx)("div", { className: 'banner__icon', children: icon })), !!heading && ((0, jsx_runtime_1.jsx)("div", { className: 'banner__heading', children: heading })), !!subheading && ((0, jsx_runtime_1.jsx)("div", { className: 'banner__subheading', children: subheading })), (!!primaryText || !!secondaryText) && ((0, jsx_runtime_1.jsxs)("div", { className: 'banner__actions', children: [!!secondaryText && ((0, jsx_runtime_1.jsx)("div", { className: 'banner__action', children: (0, jsx_runtime_1.jsx)(Button_1.default, { fullWidth: true, size: 'm', buttonType: 'light', onClick: onSecondaryClick, children: secondaryText }) })), !!primaryText && ((0, jsx_runtime_1.jsx)("div", { className: 'banner__action', children: (0, jsx_runtime_1.jsx)(Button_1.default, { fullWidth: true, size: 'm', onClick: onPrimaryClick, children: primaryText }) }))] }))] }));
};
exports.Banner = Banner;
