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
    return ((0, jsx_runtime_1.jsxs)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [(0, jsx_runtime_1.jsx)("path", { d: 'M19.7652 5.08008L19.1382 4.90094C18.8217 5.91871 17.8724 6.65771 16.7505 6.65771C15.3698 6.65771 14.2505 5.53842 14.2505 4.15771C14.2505 3.80702 14.3227 3.4732 14.453 3.17029L15.0696 1.62889C15.2718 1.12332 15.8413 0.872455 16.3508 1.06454L18.6027 1.91348C18.9924 2.06041 19.2502 2.43353 19.2499 2.85004L19.2495 3.27391C19.2493 3.50309 19.3959 3.70665 19.6133 3.77912L20.1158 3.94661C20.4529 4.05898 20.6163 4.44039 20.4652 4.76196C20.3414 5.02529 20.045 5.16002 19.7652 5.08008Z', fill: 'currentColor' }), (0, jsx_runtime_1.jsx)("path", { d: 'M8.90198 16.1839L10.0501 14.1747L6.31554 13.3443C6.01779 13.2781 5.84819 12.9631 5.95688 12.6781L7.21608 9.37648C7.29696 9.16442 7.51052 9.03343 7.73621 9.05746L9.25068 9.21875L10.0002 7.29474C10.1498 6.91065 10.5197 6.65771 10.932 6.65771H14.0121C14.1694 6.65771 14.3264 6.66888 14.4821 6.69111C16.161 6.93096 17.189 8.66043 16.5975 10.2499L16.4565 10.6288L18.518 12.2321C19.0629 12.656 19.1611 13.4413 18.7372 13.9862C18.3134 14.5312 17.5281 14.6293 16.9831 14.2055L15.5424 13.0849L14.8707 14.8899L16.518 16.1711C16.9087 16.475 17.0833 16.9808 16.9632 17.4609L15.9632 21.4609C15.7958 22.1307 15.1171 22.5379 14.4474 22.3704C13.7776 22.203 13.3704 21.5243 13.5379 20.8546L14.3404 17.6446L11.9909 15.8172L10.8356 17.8389C10.6831 18.1059 10.4374 18.3073 10.1456 18.4046L5.64562 19.9046C4.99069 20.1229 4.28279 19.7689 4.06449 19.114C3.84618 18.4591 4.20013 17.7512 4.85505 17.5329L8.90198 16.1839Z', fill: 'currentColor' })] })));
});