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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M8 18.753C8 13.9109 13.1214 10 19.4534 10C25.7854 10 30.9069 13.9109 31 18.8462C31 23.6883 25.8785 27.5992 19.5465 27.5992C18.8947 27.5992 18.2429 27.5992 17.5911 27.5061C15.8218 29.0891 13.7733 29.9271 12.2834 30.2996C11.166 30.5789 10.2348 29.4615 10.6073 28.4372L11.7247 25.2713C9.39676 23.5951 8 21.3603 8 18.753ZM15.5425 18.5668C15.5425 19.3382 14.9171 19.9635 14.1457 19.9635C13.3743 19.9635 12.749 19.3382 12.749 18.5668C12.749 17.7953 13.3743 17.17 14.1457 17.17C14.9171 17.17 15.5425 17.7953 15.5425 18.5668ZM19.4534 19.9635C20.2248 19.9635 20.8501 19.3382 20.8501 18.5668C20.8501 17.7953 20.2248 17.17 19.4534 17.17C18.682 17.17 18.0566 17.7953 18.0566 18.5668C18.0566 19.3382 18.682 19.9635 19.4534 19.9635ZM26.1579 18.5668C26.1579 19.3382 25.5325 19.9635 24.7611 19.9635C23.9897 19.9635 23.3644 19.3382 23.3644 18.5668C23.3644 17.7953 23.9897 17.17 24.7611 17.17C25.5325 17.17 26.1579 17.7953 26.1579 18.5668Z', fill: 'currentColor' }) })));
});
