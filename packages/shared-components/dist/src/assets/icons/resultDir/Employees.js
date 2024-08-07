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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M22.4336 15.3388C22.4336 18.2469 20.0538 20.5774 17.0843 20.5774C14.1158 20.5774 11.7349 18.2469 11.7349 15.3388C11.7349 12.4306 14.1158 10.1001 17.0843 10.1001C20.0538 10.1001 22.4336 12.4306 22.4336 15.3388ZM9 26.5092C9 23.8171 12.7241 23.1436 17.0843 23.1436C21.4681 23.1436 25.1685 23.8403 25.1685 26.5345C25.1685 29.2265 21.4445 29.9001 17.0843 29.9001C12.7004 29.9001 9 29.2034 9 26.5092ZM24.5907 15.4337C24.5907 16.9147 24.1365 18.2965 23.3401 19.4444C23.2572 19.5625 23.3304 19.7216 23.4746 19.7469C23.6748 19.7796 23.8804 19.7996 24.0903 19.8038C26.1783 19.8576 28.0522 18.5411 28.5699 16.5584C29.3373 13.6165 27.0857 10.9751 24.2173 10.9751C23.9062 10.9751 23.6081 11.0067 23.3175 11.0647C23.2776 11.0731 23.2346 11.0921 23.213 11.1258C23.1851 11.169 23.2055 11.2249 23.2335 11.2618C24.0956 12.4455 24.5907 13.8864 24.5907 15.4337ZM28.049 21.8726C29.4525 22.1414 30.3749 22.6885 30.757 23.4864C31.081 24.1399 31.081 24.8988 30.757 25.5523C30.1726 26.7877 28.2869 27.1851 27.5539 27.2873C27.4021 27.3084 27.2805 27.1819 27.2966 27.0322C27.6712 23.6087 24.693 21.9854 23.9224 21.6123C23.8901 21.5944 23.8825 21.5691 23.8858 21.5522C23.8879 21.5417 23.9019 21.5248 23.9267 21.5216C25.5939 21.49 27.387 21.7145 28.049 21.8726Z', fill: 'currentColor' }) })));
});
