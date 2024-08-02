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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 41 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M30.6474 21.7579L30.6486 21.7588C31.1289 22.2079 31.2385 22.9203 30.9167 23.4912L29.308 26.2531C28.9899 26.8156 28.2923 27.0857 27.6552 26.8877L25.7691 26.2972C25.1301 26.7921 24.441 27.1888 23.7159 27.4813L23.2808 29.4031C23.1382 30.0379 22.5596 30.5 21.9045 30.5H18.6951C18.0398 30.5 17.4613 30.0379 17.3187 29.4012L16.8835 27.4813C16.1586 27.1888 15.4694 26.7913 14.8304 26.2972L12.9462 26.8877C12.3062 27.0846 11.6096 26.8156 11.2886 26.2474L9.68668 23.4969C9.36104 22.9203 9.47045 22.2079 9.95096 21.7588L11.4067 20.4303C11.3576 20.0309 11.332 19.6354 11.332 19.25C11.332 18.8646 11.3576 18.4691 11.4075 18.0697L9.9558 16.7449C9.47045 16.2921 9.36104 15.5797 9.68391 15.0077L11.2924 12.2459C11.6096 11.6835 12.3091 11.4162 12.9443 11.6123L14.8304 12.2028C15.4694 11.7087 16.1586 11.3112 16.8835 11.0187L17.3187 9.09692C17.4613 8.46211 18.0398 8 18.6951 8H21.9045C22.5596 8 23.1382 8.46211 23.2808 9.09777L23.7159 11.0187C24.441 11.3112 25.1301 11.7087 25.7691 12.2028L27.6533 11.6123C28.2923 11.4143 28.9899 11.6844 29.3109 12.2515L30.9129 15.0022C31.2385 15.5797 31.1289 16.2921 30.6486 16.7412L29.1929 18.0697C29.2419 18.4691 29.2675 18.8646 29.2675 19.25C29.2675 19.6354 29.2419 20.0309 29.1929 20.4303L30.6448 21.7551L30.6474 21.7579ZM16.7 19.2535C16.7 21.2249 18.315 22.8288 20.3 22.8288C22.285 22.8288 23.9 21.2249 23.9 19.2535C23.9 17.282 22.285 15.6781 20.3 15.6781C18.315 15.6781 16.7 17.282 16.7 19.2535Z', fill: 'currentColor' }) })));
});
