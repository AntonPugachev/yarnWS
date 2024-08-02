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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M28 24H12C10.8954 24 10 24.8954 10 26V28C10 29.1046 10.8954 30 12 30H28C29.1046 30 30 29.1046 30 28V26C30 24.8954 29.1046 24 28 24Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12 15.4061V28H27.9816V15.4061C27.9816 11.3276 24.4097 8 19.9908 8C15.5719 8 12 11.3276 12 15.4061ZM19.9934 13C20.5457 13 20.9934 13.4477 20.9934 14V15.5508H22.2311C22.7834 15.5508 23.2311 15.9985 23.2311 16.5508C23.2311 17.1031 22.7834 17.5508 22.2311 17.5508H20.9934V21.4787C20.9934 22.031 20.5457 22.4787 19.9934 22.4787C19.4411 22.4787 18.9934 22.031 18.9934 21.4787V17.5508H17.7688C17.2165 17.5508 16.7688 17.1031 16.7688 16.5508C16.7688 15.9985 17.2165 15.5508 17.7688 15.5508H18.9934V14C18.9934 13.4477 19.4411 13 19.9934 13Z', fill: 'currentColor' })] })));
});
