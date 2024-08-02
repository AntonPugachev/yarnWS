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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.2734 10.4178C20.6528 10.8191 21.2857 10.8368 21.687 10.4574C22.0883 10.078 22.1061 9.44507 21.7267 9.04376L17.7266 4.81299C17.5378 4.6132 17.2749 4.5 17 4.5C16.7251 4.5 16.4622 4.6132 16.2734 4.81299L12.2734 9.04376C11.8939 9.44507 11.9117 10.078 12.313 10.4574C12.7143 10.8368 13.3472 10.8191 13.7266 10.4178L16 8.01327V18.5C16 19.0523 16.4477 19.5 17 19.5C17.5523 19.5 18 19.0523 18 18.5L18 8.01327L20.2734 10.4178ZM10.2734 13.5822C10.6528 13.1809 11.2857 13.1632 11.687 13.5426C12.0883 13.922 12.1061 14.5549 11.7266 14.9562L7.72665 19.187C7.53776 19.3868 7.27495 19.5 7 19.5C6.72506 19.5 6.46225 19.3868 6.27336 19.187L2.27335 14.9562C1.89393 14.5549 1.91168 13.922 2.31299 13.5426C2.71431 13.1632 3.34722 13.1809 3.72665 13.5822L6 15.9867L6 5.5C6 4.94771 6.44772 4.5 7 4.5C7.55229 4.5 8 4.94771 8 5.5L8 15.9867L10.2734 13.5822Z', fill: 'currentColor' }) })));
});
