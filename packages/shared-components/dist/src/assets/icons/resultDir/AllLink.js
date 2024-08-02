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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M11.5531 5.90306C11.1527 5.50262 11.1527 4.85337 11.5531 4.45293C13.4904 2.51569 16.6313 2.51569 18.5685 4.45293L19.4524 5.33682C21.5162 7.40062 21.5162 10.7467 19.4524 12.8105L17.4063 14.8565C15.3425 16.9203 11.9965 16.9203 9.93268 14.8565L9.60531 14.5292C9.20487 14.1287 9.20487 13.4795 9.60531 13.079C10.0058 12.6786 10.655 12.6786 11.0554 13.079L11.3828 13.4064C12.6457 14.6693 14.6933 14.6693 15.9562 13.4064L18.0023 11.3604C19.2652 10.0974 19.2652 8.04986 18.0023 6.78695L17.1184 5.90306C15.982 4.76671 14.1396 4.76671 13.0033 5.90306C12.6028 6.3035 11.9536 6.3035 11.5531 5.90306Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M12.4471 18.366C12.8475 18.7664 12.8475 19.4157 12.4471 19.8161C10.5099 21.7533 7.36898 21.7533 5.43174 19.8161L4.54785 18.9322C2.48405 16.8684 2.48405 13.5223 4.54785 11.4585L6.59389 9.41251C8.65768 7.34871 12.0038 7.34871 14.0676 9.4125L14.3949 9.73987C14.7954 10.1403 14.7954 10.7896 14.3949 11.19C13.9945 11.5904 13.3452 11.5904 12.9448 11.19L12.6174 10.8626C11.3545 9.59973 9.30693 9.59973 8.04402 10.8626L5.99798 12.9087C4.73507 14.1716 4.73507 16.2192 5.99798 17.4821L6.88187 18.366C8.01822 19.5023 9.86061 19.5023 10.997 18.366C11.3974 17.9655 12.0467 17.9655 12.4471 18.366Z', fill: 'currentColor' })] })));
});
