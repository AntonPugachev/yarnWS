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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M23.1042 23.9591V16.988C23.1042 11.8323 26.3033 10 28.8333 10V31.981C28.8333 32.5611 28.3631 33.0314 27.783 33.0314H27.592C27.0119 33.0314 26.5417 32.5611 26.5417 31.981V25.5346C26.5417 25.2445 26.3065 25.0094 26.0165 25.0094L24.1545 25.0095C23.5744 25.0095 23.1042 24.5392 23.1042 23.9591ZM16.9167 18.1339C17.4229 18.1339 17.8333 17.7235 17.8333 17.2173V11.0298C17.8333 10.5235 18.2437 10.1131 18.75 10.1131C19.2563 10.1131 19.6667 10.5235 19.6667 11.0298V18.4777C19.6667 20.2857 18.6259 21.8116 17.1822 22.3613C16.6667 22.5576 16.2292 22.9995 16.2292 23.5512V31.9794C16.2292 32.5595 15.7589 33.0298 15.1788 33.0298H14.9878C14.4078 33.0298 13.9375 32.5595 13.9375 31.9794V23.5512C13.9375 22.9995 13.5 22.5576 12.9844 22.3613C11.5407 21.8116 10.5 20.2857 10.5 18.4777V11.0298C10.5 10.5235 10.9104 10.1131 11.4167 10.1131C11.9229 10.1131 12.3333 10.5235 12.3333 11.0298V17.2173C12.3333 17.7235 12.7437 18.1339 13.25 18.1339C13.7563 18.1339 14.1667 17.7235 14.1667 17.2173V11.0298C14.1667 10.5235 14.5771 10.1131 15.0833 10.1131C15.5896 10.1131 16 10.5235 16 11.0298V17.2173C16 17.7235 16.4104 18.1339 16.9167 18.1339Z', fill: 'currentColor' }) })));
});
