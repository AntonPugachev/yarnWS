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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M20 31C26.0751 31 31 26.0751 31 20C31 13.9249 26.0751 9 20 9C13.9249 9 9 13.9249 9 20C9 26.0751 13.9249 31 20 31ZM19 23.874V26.9291C17.4518 26.7077 16.067 25.9796 15.019 24.9183L17.5238 23.1417C17.9534 23.4807 18.4542 23.7335 19 23.874ZM16.3113 21.5497L13.8302 23.3095C13.3005 22.3241 13 21.1971 13 20C13 18.8394 13.2825 17.7447 13.7824 16.781L16.2721 18.5469C16.0964 18.9973 16 19.4874 16 20C16 20.5495 16.1108 21.0731 16.3113 21.5497ZM17.442 16.9247L14.9474 15.1553C16.0036 14.0541 17.4163 13.2974 19 13.0709V16.126C18.4191 16.2755 17.8893 16.5522 17.442 16.9247ZM21 26.9291C22.6036 26.6997 24.032 25.9268 25.0923 24.803L22.603 23.0373C22.1464 23.429 21.6005 23.7194 21 23.874V26.9291ZM27 20C27 21.1401 26.7274 22.2166 26.2439 23.1678L23.7489 21.3981C23.9112 20.9629 24 20.4918 24 20C24 19.5453 23.9241 19.1084 23.7844 18.7011L26.2898 16.9241C26.7446 17.8525 27 18.8964 27 20ZM22.6812 17.0316L25.162 15.272C24.095 14.1076 22.6391 13.3053 21 13.0709V16.126C21.6352 16.2895 22.2093 16.6051 22.6812 17.0316ZM20 18C21.1046 18 22 18.8954 22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 18.8954 18 20 18Z', fill: 'currentColor' }) })));
});
