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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var helpers_1 = require("../../../utils/helpers");
/* eslint-disable max-len */
exports.default = (function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'xs' : _b, props = __rest(_a, ["size"]);
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M2.34255 6.43039C2 7.10268 2 7.98276 2 9.74293V13.9715C2 15.7317 2 16.6117 2.34255 17.284C2.64387 17.8754 3.12466 18.3562 3.71603 18.6575C4.38832 19.0001 5.26841 19.0001 7.02857 19.0001H16.9714C18.7316 19.0001 19.6117 19.0001 20.284 18.6575C20.8753 18.3562 21.3561 17.8754 21.6574 17.284C22 16.6117 22 15.7317 22 13.9715V9.74293C22 7.98276 22 7.10268 21.6574 6.43039C21.3561 5.83902 20.8753 5.35822 20.284 5.05691C19.6117 4.71436 18.7316 4.71436 16.9714 4.71436H7.02857C5.26841 4.71436 4.38832 4.71436 3.71603 5.05691C3.12466 5.35822 2.64387 5.83902 2.34255 6.43039ZM11.5751 8.22606C11.618 7.79424 12.0028 7.47894 12.4346 7.52182C14.6373 7.74051 16.357 9.59768 16.357 11.8575C16.357 14.2639 14.4063 16.2146 11.9999 16.2146C9.59349 16.2146 7.64273 14.2639 7.64273 11.8575C7.64273 11.5672 7.67123 11.283 7.72571 11.0077C7.44171 10.9309 7.29319 10.8845 7.2204 10.7946C7.15033 10.7081 7.12027 10.5959 7.13769 10.486C7.15766 10.3599 7.28397 10.2336 7.53661 9.98093L8.62138 8.89616C8.87401 8.64353 9.00033 8.51721 9.1264 8.49724C9.23637 8.47982 9.34857 8.50989 9.43509 8.57995C9.53429 8.66029 9.58053 8.83284 9.673 9.17794L10.0701 10.6598C10.1625 11.0049 10.2088 11.1774 10.163 11.2966C10.1231 11.4005 10.041 11.4827 9.93704 11.5226C9.81787 11.5683 9.64532 11.5221 9.30022 11.4296L9.24885 11.4158C9.22604 11.5594 9.21416 11.7068 9.21416 11.8575C9.21416 13.396 10.4614 14.6432 11.9999 14.6432C13.5384 14.6432 14.7856 13.396 14.7856 11.8575C14.7856 10.4135 13.6863 9.22524 12.2794 9.08556C11.8476 9.04268 11.5323 8.65787 11.5751 8.22606Z', fill: 'currentColor' }) })));
});
