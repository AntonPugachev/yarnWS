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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M20.0281 17.6027H17.7594V15.1175H20.0281C20.751 15.1175 21.3283 15.6964 21.3283 16.3601C21.3283 17.0239 20.751 17.6027 20.0281 17.6027Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M28.4485 21.4277C28.1031 22.8379 28.1928 24.3871 29.0935 25.5257L30.198 26.9219C30.9172 27.831 30.2697 29.1687 29.1105 29.1687H18.5717C12.9558 29.1687 8.40332 24.6162 8.40332 19.0004C8.40332 13.3845 12.9558 8.83203 18.5717 8.83203C24.1875 8.83203 28.74 13.3845 28.74 19.0004C28.74 19.8369 28.639 20.6499 28.4485 21.4277ZM16.9275 13.4531C16.937 13.4531 16.9465 13.4533 16.9559 13.4536H20.0281C21.6102 13.4536 22.9922 14.7188 22.9922 16.3601C22.9922 18.0014 21.6102 19.2666 20.0281 19.2666H17.7594V20.7815H19.7399C20.1994 20.7815 20.5719 21.154 20.5719 21.6135C20.5719 22.0729 20.1994 22.4454 19.7399 22.4454H17.7594V24.0557C17.7594 24.5152 17.3869 24.8876 16.9275 24.8876C16.468 24.8876 16.0955 24.5152 16.0955 24.0557L16.0955 22.4454H15.7061C15.2466 22.4454 14.8741 22.0729 14.8741 21.6135C14.8741 21.154 15.2466 20.7815 15.7061 20.7815H16.0955V19.2666H15.7061C15.2466 19.2666 14.8741 18.8941 14.8741 18.4347C14.8741 17.9752 15.2466 17.6027 15.7061 17.6027H16.0955V14.2955L16.0955 14.2856C16.0955 14.2505 16.0976 14.2159 16.1018 14.182C16.1526 13.7712 16.5029 13.4531 16.9275 13.4531Z', fill: 'currentColor' })] })));
});
