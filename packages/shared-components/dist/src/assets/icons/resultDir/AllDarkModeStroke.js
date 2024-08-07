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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.4874 4.12951C12.6747 4.46464 12.6535 4.87734 12.433 5.19157C11.8635 6.0032 11.5294 6.99077 11.5294 8.05937C11.5294 10.8207 13.7679 13.0592 16.5293 13.0592C17.3724 13.0592 18.1641 12.8513 18.8586 12.4848C19.1981 12.3057 19.6102 12.3367 19.919 12.5646C20.2279 12.7925 20.3791 13.1771 20.308 13.5543C19.5759 17.4417 16.1643 20.3826 12.0637 20.3826C7.43039 20.3826 3.67432 16.6265 3.67432 11.9932C3.67432 7.53077 7.15783 3.8827 11.5546 3.61899C11.9377 3.59601 12.3002 3.79439 12.4874 4.12951ZM9.83681 6.0024C7.40626 6.90629 5.67432 9.24772 5.67432 11.9932C5.67432 15.522 8.53496 18.3826 12.0637 18.3826C14.5222 18.3826 16.6576 16.9935 17.7259 14.9572C17.3368 15.0243 16.9369 15.0592 16.5293 15.0592C12.6634 15.0592 9.52943 11.9253 9.52943 8.05937C9.52943 7.34404 9.63699 6.65315 9.83681 6.0024Z', fill: 'currentColor' }) })));
});
