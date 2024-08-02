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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M21.3647 9.79146C20.831 8.6216 19.1691 8.6216 18.6354 9.79146L16.6259 14.196C16.2784 14.9576 15.5592 15.4832 14.728 15.5828L9.94048 16.1567C8.6743 16.3085 8.16306 17.8708 9.09458 18.7417L12.6626 22.0777C13.2676 22.6434 13.5382 23.481 13.3785 24.2937L12.4342 29.0983C12.187 30.3561 13.5293 31.3244 14.6448 30.693L18.818 28.3313C19.5514 27.9163 20.4487 27.9163 21.1821 28.3313L25.3553 30.693C26.4709 31.3244 27.8131 30.3561 27.5659 29.0983L26.6216 24.2937C26.4619 23.481 26.7325 22.6434 27.3375 22.0777L30.9055 18.7417C31.8371 17.8708 31.3258 16.3085 30.0596 16.1567L25.2721 15.5828C24.4409 15.4832 23.7217 14.9576 23.3742 14.196L21.3647 9.79146Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z', fill: 'currentColor' })] })));
});
