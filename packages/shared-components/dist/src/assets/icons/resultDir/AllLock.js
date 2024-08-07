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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M11.75 3C9.34756 3 7.40002 4.94754 7.40002 7.34995V10.5039C6.78432 10.5157 6.40319 10.5589 6.09202 10.7175C5.71569 10.9092 5.40973 11.2152 5.21799 11.5915C5 12.0194 5 12.5794 5 13.6995V17.7994C5 18.9195 5 19.4795 5.21799 19.9074C5.40973 20.2837 5.71569 20.5897 6.09202 20.7814C6.51984 20.9994 7.0799 20.9994 8.2 20.9994H15.4498C16.5699 20.9994 17.13 20.9994 17.5578 20.7814C17.9341 20.5897 18.2401 20.2837 18.4319 19.9074C18.6498 19.4795 18.6498 18.9195 18.6498 17.7994V13.6995C18.6498 12.5794 18.6498 12.0194 18.4319 11.5915C18.2401 11.2152 17.9341 10.9092 17.5578 10.7175C17.2221 10.5465 16.8051 10.5096 16.0999 10.5017V7.34995C16.0999 4.94754 14.1524 3 11.75 3ZM13.7 10.4995V7.34995C13.7 6.27301 12.8269 5.39997 11.75 5.39997C10.673 5.39997 9.8 6.27301 9.8 7.34995V10.4995H13.7ZM10.775 15.2226C10.775 14.6427 11.2451 14.1726 11.825 14.1726C12.4048 14.1726 12.8749 14.6427 12.8749 15.2226V16.2726C12.8749 16.8525 12.4048 17.3226 11.825 17.3226C11.2451 17.3226 10.775 16.8525 10.775 16.2726V15.2226Z', fill: 'currentColor' }) })));
});
