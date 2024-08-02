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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M14.0003 11.9999C13.2639 11.9999 12.667 12.5969 12.667 13.3333V14.6664H25.3338C26.8066 14.6664 28.0005 15.8604 28.0005 17.3331V23.3333H29.3337C30.07 23.3333 30.667 22.7363 30.667 21.9999V13.3333C30.667 12.5969 30.07 11.9999 29.3337 11.9999H14.0003ZM9.3335 17.3333C9.3335 16.5969 9.93045 16 10.6668 16H25.3335C26.0699 16 26.6668 16.5969 26.6668 17.3333V26.6666C26.6668 27.403 26.0699 28 25.3335 28H10.6668C9.93045 28 9.3335 27.403 9.3335 26.6666V17.3333ZM18.8616 18.862C19.122 18.6016 19.5441 18.6016 19.8044 18.862L22.4711 21.5286C22.7314 21.789 22.7314 22.2111 22.4711 22.4714L19.8045 25.1381C19.5442 25.3985 19.122 25.3985 18.8617 25.1381C18.6013 24.8778 18.6013 24.4557 18.8617 24.1953L20.3902 22.6668H13.3332C12.965 22.6668 12.6665 22.3683 12.6665 22.0001C12.6665 21.6319 12.965 21.3334 13.3332 21.3334H20.3903L18.8616 19.8048C18.6013 19.5444 18.6013 19.1223 18.8616 18.862Z', fill: 'currentColor' }) })));
});
