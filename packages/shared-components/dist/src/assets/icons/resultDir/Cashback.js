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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M21.4132 9.58649C20.632 8.8045 19.3646 8.8045 18.5834 9.58649L17.4659 10.7051C17.0476 11.1239 16.4653 11.3358 15.8757 11.2839L14.3005 11.1453C13.1994 11.0485 12.2285 11.8631 12.1327 12.9643L11.9957 14.5396C11.9444 15.1293 11.6346 15.6659 11.1496 16.0052L9.85383 16.9115C8.94807 17.545 8.72799 18.7932 9.36244 19.6983L10.27 20.9931C10.6098 21.4778 10.7174 22.0881 10.5639 22.6597L10.1539 24.1869C9.86728 25.2544 10.501 26.352 11.5688 26.6376L13.0964 27.0461C13.6682 27.199 14.1428 27.5973 14.3927 28.1338L15.0603 29.5673C15.5269 30.5693 16.7179 31.0027 17.7194 30.5351L19.1522 29.8661C19.6885 29.6157 20.3082 29.6157 20.8445 29.8661L22.2772 30.5351C23.2788 31.0027 24.4698 30.5693 24.9364 29.5673L25.6039 28.1338C25.8538 27.5973 26.3285 27.199 26.9003 27.0461L28.4279 26.6376C29.4957 26.352 30.1294 25.2544 29.8428 24.1869L29.4328 22.6597C29.2793 22.0881 29.3869 21.4778 29.7266 20.9931L30.6342 19.6983C31.2687 18.7932 31.0486 17.545 30.1428 16.9115L28.8471 16.0052C28.3621 15.6659 28.0523 15.1293 28.001 14.5396L27.8639 12.9643C27.7681 11.8631 26.7973 11.0485 25.6962 11.1453L24.121 11.2839C23.5314 11.3358 22.9491 11.1239 22.5308 10.7051L21.4132 9.58649ZM23.5 24.0001C24.3284 24.0001 25 23.3285 25 22.5001C25 21.6717 24.3284 21.0001 23.5 21.0001C22.6715 21.0001 22 21.6717 22 22.5001C22 23.3285 22.6715 24.0001 23.5 24.0001ZM18 17.5C18 18.3284 17.3284 19 16.5 19C15.6716 19 15 18.3284 15 17.5C15 16.6716 15.6716 16 16.5 16C17.3284 16 18 16.6716 18 17.5ZM23.7071 17.7072C24.0976 17.3167 24.0976 16.6835 23.7071 16.293C23.3166 15.9025 22.6834 15.9025 22.2929 16.293L16.2929 22.293C15.9023 22.6835 15.9023 23.3167 16.2929 23.7072C16.6834 24.0977 17.3166 24.0977 17.7071 23.7072L23.7071 17.7072Z', fill: 'currentColor' }) })));
});