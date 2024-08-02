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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M9 26.0476V18.9762C9 17.7446 9.50474 16.5669 10.3966 15.7176L17.7759 8.68966C18.7414 7.77011 20.2586 7.77012 21.2241 8.68966L28.6034 15.7176C29.4953 16.5669 30 17.7446 30 18.9762V26.0476C30 27.1522 29.1046 28.0476 28 28.0476H11C9.89543 28.0476 9 27.1522 9 26.0476ZM19.5001 17C19.8867 17 20.2001 17.3134 20.2001 17.7V19.8001H22.3C22.6866 19.8001 23 20.1135 23 20.5001C23 20.8867 22.6866 21.2001 22.3 21.2001H20.2001V23.3C20.2001 23.6866 19.8867 24 19.5001 24C19.1135 24 18.8001 23.6866 18.8001 23.3V21.2001H16.7C16.3134 21.2001 16 20.8867 16 20.5001C16 20.1135 16.3134 19.8001 16.7 19.8001H18.8001V17.7C18.8001 17.3134 19.1135 17 19.5001 17Z', fill: 'currentColor' }) })));
});
