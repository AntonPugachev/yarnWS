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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M32 19C32 21.8803 30.4215 24.4445 27.9656 26.0919L27.1083 28.3778C26.7424 29.3536 25.8096 30 24.7675 30H23.75C23.3358 30 23 29.6642 23 29.25V28.75C23 28.3358 22.6642 28 22.25 28H20.75C20.3358 28 20 28.3358 20 28.75V29.25C20 29.6642 19.6642 30 19.25 30H18.2325C17.1904 30 16.2576 29.3536 15.8917 28.3778L15.4888 27.3035C14.3639 27.0609 12.7656 26.5185 11.2407 25.3061C9.20273 23.6856 8.40734 22.3659 8.13077 21.7867C8.03233 21.5805 8 21.3534 8 21.125L8.00001 18.1379C8.00001 17.8325 8.18421 17.5564 8.45908 17.4234C8.77929 17.2686 9.25565 17.0234 9.85185 16.6736C10.352 16.3802 11.0137 15.8351 11.6014 15.3133L10.7892 12.1326C10.654 11.603 11.1124 11.1113 11.6501 11.2091L15.2744 11.8681C16.95 10.6871 19.0524 10 21.5 10C28.22 10 32 14.0294 32 19ZM19.0299 13.1426C18.8959 12.6068 19.2217 12.0639 19.7575 11.9299C19.8893 11.9002 20.0089 11.8792 20.2505 11.855C20.5392 11.8261 20.9729 11.8 21.6 11.8C22.2271 11.8 22.6608 11.8261 22.9495 11.855C23.1911 11.8792 23.3107 11.9002 23.4425 11.9299C23.9783 12.0639 24.3041 12.6068 24.1701 13.1426C24.0378 13.6721 23.5059 13.9965 22.9763 13.8747C22.9728 13.874 22.9656 13.8727 22.9543 13.8708C22.9217 13.8654 22.8559 13.8556 22.7505 13.8451C22.5392 13.824 22.1729 13.8 21.6 13.8C21.0271 13.8 20.6608 13.824 20.4495 13.8451C20.3441 13.8556 20.2783 13.8654 20.2456 13.8708C20.2391 13.8719 20.234 13.8728 20.2301 13.8735C20.2273 13.874 20.2237 13.8747 20.2237 13.8747C19.694 13.9965 19.1622 13.6721 19.0299 13.1426Z', fill: 'currentColor' }) })));
});