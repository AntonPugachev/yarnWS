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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 40 40', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.8636 11.9688C12.8636 11.9688 12.6889 11.9679 14.2424 11.9685C14.2431 9.04033 16.617 6.66675 19.5454 6.66675C22.4738 6.66675 24.8477 9.04032 24.8484 11.9685C25.648 11.9683 26.2272 11.9688 26.2272 11.9688C27.2772 11.9688 28.1363 12.9234 28.1363 14.0901L29.0908 27.8788C29.0908 29.0455 28.2317 30.0001 27.1817 30.0001H11.9091C10.8591 30.0001 10 29.0455 10 27.8788L10.9641 14.0901C10.9641 12.9234 11.8136 11.9688 12.8636 11.9688ZM19.5454 11.9696C19.5454 11.9696 21.2886 11.9696 22.7272 11.9693C22.727 10.2123 21.3025 8.78795 19.5454 8.78795C17.7883 8.78795 16.3638 10.2123 16.3636 11.9694C18.0237 11.9698 19.5454 11.9696 19.5454 11.9696ZM23.1164 24.719C23.9399 24.719 24.6075 24.0514 24.6075 23.2278C24.6075 22.4043 23.9399 21.7367 23.1164 21.7367C22.2928 21.7367 21.6252 22.4043 21.6252 23.2278C21.6252 24.0514 22.2928 24.719 23.1164 24.719ZM17.6486 18.2568C17.6486 19.0803 16.981 19.7479 16.1575 19.7479C15.3339 19.7479 14.6663 19.0803 14.6663 18.2568C14.6663 17.4333 15.3339 16.7657 16.1575 16.7657C16.981 16.7657 17.6486 17.4333 17.6486 18.2568ZM23.3219 18.5591C23.7102 18.1708 23.7102 17.5414 23.3219 17.1532C22.9337 16.765 22.3043 16.765 21.9161 17.1532L15.9516 23.1177C15.5634 23.5059 15.5634 24.1353 15.9516 24.5235C16.3399 24.9117 16.9693 24.9117 17.3575 24.5235L23.3219 18.5591Z', fill: 'currentColor' }) })));
});
