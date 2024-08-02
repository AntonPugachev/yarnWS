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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 31.2499C26.2132 31.2499 31.2499 26.2132 31.2499 20C31.2499 13.7868 26.2132 8.75 20 8.75C13.7868 8.75 8.75 13.7868 8.75 20C8.75 26.2132 13.7868 31.2499 20 31.2499ZM18.349 16.8733L19.013 16.9939C19.2828 17.0429 19.5701 17.023 19.7456 16.8122C19.8539 16.6822 19.9733 16.498 20.0936 16.2462C20.5696 15.2495 21.5408 14.4935 22.6276 14.6908L23.1665 14.7887C23.1954 14.7939 23.225 14.7981 23.2553 14.8012C23.8297 14.8596 24.4531 14.6843 25.054 14.5153C26.0114 14.246 26.912 13.9927 27.4674 14.7259C28.6219 16.2498 29.5438 18.3755 29.1254 20.6797C28.8768 22.0489 28.4747 23.2702 27.6902 24.3401C27.0736 25.1809 25.8351 25.0853 24.9468 24.5393C24.2778 24.1281 23.0973 23.3193 23.2376 22.5467L23.4286 21.4949C23.5153 21.0174 23.4022 20.0104 22.2562 19.8023L17.9586 19.022C17.3653 18.9142 16.9718 18.3459 17.0796 17.7526C17.1873 17.1593 17.7556 16.7656 18.349 16.8733ZM16.2367 24.5441L14.6709 23.5267C13.3017 22.6372 11.5848 23.7145 12.3348 25.1648C13.831 28.0579 16.7574 29.0808 18.8773 29.2647C19.4107 29.311 19.7948 28.8103 19.6782 28.2878C19.5852 27.8707 19.1931 27.6077 18.7746 27.5214C18.0138 27.3646 17.5959 26.8533 17.3859 26.3075C17.1291 25.64 16.8364 24.9337 16.2367 24.5441ZM13.3323 15.0632C13.0645 15.165 12.8197 15.361 12.6845 15.7065C12.59 15.9481 12.3925 16.1557 12.1335 16.1686C11.8089 16.1848 11.5487 15.9037 11.631 15.5894C11.9079 14.5323 12.6032 13.1913 13.9518 12.4409C15.1366 11.7817 15.8059 13.3239 14.886 14.3198C14.5865 14.644 14.1504 14.7875 13.7206 14.9289C13.5892 14.9722 13.4584 15.0152 13.3323 15.0632Z', fill: 'currentColor' }) })));
});
