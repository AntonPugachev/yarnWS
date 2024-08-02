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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { d: 'M9 13.7014C9 12.5317 10.1538 11.7115 11.2585 12.0957L13.5991 12.9099C18.0214 14.4481 20.9854 18.6171 20.9854 23.2993V24.4336C20.9854 24.9562 21.409 25.3799 21.9317 25.3799C22.3818 25.3799 22.7637 25.0605 22.8966 24.6305C23.8827 21.4427 26.8536 19.1267 30.3654 19.1267H30.6731C31.3666 19.1267 31.9287 19.6888 31.9287 20.3823C31.9287 24.8692 28.2913 28.5065 23.8044 28.5065H23.5489C22.9966 28.5065 22.5489 28.9543 22.5489 29.5065V32.5074C22.5489 33.2269 21.9656 33.8102 21.2461 33.8102C20.5266 33.8102 19.9434 33.2269 19.9434 32.5074V28.9892C19.9434 27.624 19.0216 26.431 17.7007 26.0863L17.2234 25.9618C12.3797 24.6983 9 20.3238 9 15.3181V13.7014Z', fill: 'currentColor' }) })));
});
