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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M18.5748 10.6709C17.8374 10.6709 17.2101 11.1833 17.034 11.8739H22.955C22.7789 11.1833 22.1516 10.6709 21.4142 10.6709H18.5748ZM24.6278 11.8739H26.8069C29.1181 11.8739 31 13.7787 31 16.1179C31 16.1179 30.934 17.1082 30.912 18.4872C30.9098 18.5964 30.8569 18.7033 30.77 18.768C30.2406 19.1589 29.7564 19.482 29.7124 19.5043C27.8854 20.7296 25.7625 21.5917 23.5009 22.0206C23.3534 22.0496 23.2081 21.9727 23.1333 21.8413C22.4993 20.7429 21.3152 20.0278 19.9945 20.0278C18.6826 20.0278 17.4874 20.7351 16.8348 21.8346C16.7589 21.9638 16.6158 22.0384 16.4694 22.0106C14.2265 21.5806 12.1036 20.7195 10.2876 19.5154L9.23112 18.7802C9.14307 18.7245 9.08804 18.6243 9.08804 18.5129C9.05503 17.9448 9 16.1179 9 16.1179C9 13.7787 10.8819 11.8739 13.1931 11.8739H15.3612C15.5703 10.2587 16.924 9 18.5748 9H21.4142C23.065 9 24.4187 10.2587 24.6278 11.8739ZM30.6258 20.8968L30.5818 20.919C28.3587 22.4117 25.6843 23.4031 22.8779 23.8152C22.4817 23.8709 22.0855 23.6147 21.9755 23.2137C21.7334 22.3003 20.952 21.6988 20.0165 21.6988H20.0055H19.9835C19.048 21.6988 18.2666 22.3003 18.0245 23.2137C17.9145 23.6147 17.5183 23.8709 17.1221 23.8152C14.3157 23.4031 11.6413 22.4117 9.41821 20.919C9.4072 20.9079 9.29715 20.8411 9.2091 20.8968C9.11005 20.9525 9.11005 21.0861 9.11005 21.0861L9.18709 26.7671C9.18709 29.1063 11.058 31 13.3692 31H26.6198C28.931 31 30.8019 29.1063 30.8019 26.7671L30.8899 21.0861C30.8899 21.0861 30.8899 20.9525 30.7909 20.8968C30.7359 20.8633 30.6698 20.8745 30.6258 20.8968ZM20.8199 25.5641C20.8199 26.0319 20.4567 26.3995 19.9945 26.3995C19.5432 26.3995 19.1691 26.0319 19.1691 25.5641V24.1271C19.1691 23.6704 19.5432 23.2917 19.9945 23.2917C20.4567 23.2917 20.8199 23.6704 20.8199 24.1271V25.5641Z', fill: 'currentColor' }) })));
});
