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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M16.9854 17.9605L23.2349 24.2489C23.9365 24.9549 24.6663 24.842 25.3211 24.183L29.9615 19.5326C30.6164 18.8736 30.7193 18.1394 30.0176 17.4333L29.0727 16.492C27.9594 17.4898 24.8347 19.7303 24.3482 19.2408C24.1891 19.0807 24.3201 18.9395 24.4137 18.8454C25.4334 17.7816 26.818 16.0872 26.9864 14.3833L22.0654 9.42222C21.4854 8.83856 20.6247 8.84798 20.1475 9.52577C19.2026 10.8719 19.2307 13.1218 16.9854 15.8142C16.3679 16.5673 16.265 17.2356 16.9854 17.9605ZM11.4656 30.0478C12.7006 31.2716 14.2536 31.3092 15.3575 30.1984C16.2182 29.3323 17.1351 27.0071 17.7619 25.9246L20.3721 28.551C21.1205 29.3041 21.9532 29.3229 22.6548 28.6169L23.2536 28.0144C23.9552 27.3084 23.9365 26.4706 23.1881 25.7175L15.7785 18.2523C15.0207 17.4898 14.2068 17.471 13.4864 18.1958L12.897 18.7889C12.186 19.5044 12.2047 20.3234 12.9532 21.0859L15.5633 23.7123C14.4968 24.343 12.1766 25.2656 11.3066 26.1317C10.1746 27.2613 10.24 28.8334 11.4656 30.0478Z', fill: 'currentColor' }) })));
});
