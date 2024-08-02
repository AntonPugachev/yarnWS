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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.6206 14.004L20.6238 14.0071C21.0241 14.3663 21.1154 14.9362 20.8472 15.393L19.5066 17.6025C19.2416 18.0525 18.6603 18.2685 18.1294 18.1102L16.5576 17.6378C16.0251 18.0337 15.4508 18.3511 14.8466 18.5851L14.484 20.1225C14.3652 20.6303 13.883 21 13.3371 21H10.6626C10.1165 21 9.63441 20.6303 9.51558 20.121L9.15289 18.5851C8.54879 18.3511 7.97451 18.033 7.442 17.6378L5.87184 18.1102C5.33847 18.2677 4.75799 18.0525 4.49051 17.5979L3.15557 15.3975C2.8842 14.9362 2.97538 14.3663 3.3758 14.0071L4.58889 12.9443C4.54798 12.6247 4.52667 12.3083 4.52667 12C4.52667 11.6917 4.54798 11.3753 4.58961 11.0557L3.37983 9.99596C2.97538 9.63368 2.8842 9.06377 3.15326 8.60619L4.49368 6.3967C4.75799 5.94681 5.34092 5.73299 5.87026 5.88982L7.442 6.36223C7.97451 5.967 8.54879 5.64894 9.15289 5.41493L9.51558 3.87753C9.63441 3.36969 10.1165 3 10.6626 3H13.3371C13.883 3 14.3652 3.36969 14.484 3.87822L14.8466 5.41493C15.4508 5.64894 16.0251 5.967 16.5576 6.36223L18.1278 5.88982C18.6603 5.73148 19.2416 5.94749 19.5091 6.40123L20.844 8.60179C21.1154 9.06377 21.0241 9.63368 20.6238 9.99294L19.4107 11.0557C19.4516 11.3753 19.4729 11.6917 19.4729 12C19.4729 12.3083 19.4516 12.6247 19.4107 12.9443L20.6206 14.004ZM9.00001 12.0033C9.00001 13.5805 10.3458 14.8636 12 14.8636C13.6542 14.8636 15 13.5805 15 12.0033C15 10.4262 13.6542 9.14307 12 9.14307C10.3458 9.14307 9.00001 10.4262 9.00001 12.0033Z', fill: 'currentColor' }) })));
});
