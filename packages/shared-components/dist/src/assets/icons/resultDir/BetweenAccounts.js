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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M22.7241 13.0002C21.8958 12.9882 21.2145 13.6499 21.2025 14.4783C21.1905 15.3066 21.8523 15.9878 22.6807 15.9998L25.4648 16.0402L20.5204 20.8434C19.9261 21.4206 19.9124 22.3703 20.4896 22.9645C21.0669 23.5587 22.0165 23.5724 22.6107 22.9952L27.534 18.2125L27.4943 20.955C27.4823 21.7833 28.1441 22.4646 28.9724 22.4766C29.8007 22.4886 30.482 21.8268 30.494 20.9984L30.5865 14.6142C30.5984 13.7859 29.9367 13.1046 29.1083 13.0926L22.7241 13.0002Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M19.0662 18.7241C19.6604 18.1468 19.6741 17.1972 19.0969 16.603C18.5196 16.0088 17.57 15.995 16.9758 16.5723L12.0526 21.3548L12.0923 18.6125C12.1043 17.7842 11.4426 17.1029 10.6142 17.0909C9.78588 17.0789 9.10465 17.7407 9.09265 18.569L9.00016 24.9533C8.98816 25.7816 9.64994 26.4628 10.4783 26.4748L16.8625 26.5673C17.6908 26.5793 18.3721 25.9175 18.3841 25.0892C18.3961 24.2609 17.7343 23.5796 16.906 23.5676L14.1217 23.5273L19.0662 18.7241Z', fill: 'currentColor' })] })));
});
