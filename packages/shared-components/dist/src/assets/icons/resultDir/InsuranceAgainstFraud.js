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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20.5 9C15.8056 9 12 12.8056 12 17.5V28.7045C12 29.7714 12.8649 30.6363 13.9318 30.6363H27.0682C28.1351 30.6363 29 29.7714 29 28.7045V17.5C29 12.8056 25.1944 9 20.5 9ZM19.3312 20.3111L14.8547 17.5507C14.6186 17.4051 14.3165 17.5498 14.3182 17.8271C14.3242 18.7831 14.6288 20.0902 15.5843 20.7776C16.8243 21.6697 18.2207 21.361 19.2405 21.0448C19.5631 20.9448 19.6188 20.4884 19.3312 20.3111ZM26.1452 17.5502L21.6687 20.3106C21.3812 20.4879 21.4368 20.9443 21.7595 21.0443C22.7792 21.3605 24.1757 21.6692 25.4156 20.7771C26.3712 20.0897 26.6758 18.7826 26.6817 17.8267C26.6834 17.5493 26.3813 17.4046 26.1452 17.5502ZM19.1579 25.1055C18.6637 25.1055 18.2632 25.5061 18.2632 26.0002C18.2632 26.4944 18.6637 26.8949 19.1579 26.8949H21.8421C22.3362 26.8949 22.7368 26.4944 22.7368 26.0002C22.7368 25.5061 22.3362 25.1055 21.8421 25.1055H19.1579Z', fill: 'currentColor' }) })));
});
