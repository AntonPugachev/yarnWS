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
    return ((0, jsx_runtime_1.jsx)("svg", __assign({}, props, { width: helpers_1.iconSize[size], height: helpers_1.iconSize[size], viewBox: '0 0 25 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M12.3082 17.6396H13.3288C13.5006 17.6152 13.6617 17.5413 13.7923 17.427C13.8863 17.2893 13.9353 17.1259 13.9326 16.9592C13.9326 16.9592 13.9122 15.539 14.5458 15.3348C15.1793 15.1307 15.9711 16.7041 16.8207 17.3079C17.1355 17.5715 17.5418 17.6999 17.951 17.6651L20.2225 17.6396C20.2225 17.6396 21.4131 17.563 20.8476 16.585C20.401 15.8187 19.8302 15.1318 19.1586 14.5524C17.7341 13.1747 17.9246 13.4043 19.6408 11.0231C20.6852 9.56879 21.1027 8.68432 20.9726 8.31013C20.7422 8.07079 20.4043 7.96782 20.0796 8.03798L17.5223 8.05499C17.4086 8.04175 17.2935 8.06246 17.1915 8.11452C17.0952 8.19232 17.0181 8.29126 16.9661 8.40368C16.7021 9.11746 16.3863 9.81101 16.0213 10.4788C14.8825 12.4943 14.4275 12.5964 14.2413 12.4773C13.8084 12.1797 13.9164 11.3037 13.9164 10.6829C13.9164 8.72685 14.2005 7.91892 13.3628 7.70631C12.9739 7.60809 12.573 7.56515 12.1721 7.57874C11.4552 7.51163 10.7321 7.58973 10.046 7.80836C9.75517 7.95294 9.53065 8.28461 9.66757 8.30162C9.96131 8.33209 10.2318 8.47539 10.4219 8.70133C10.6 9.07544 10.6874 9.48626 10.6771 9.90047C10.6771 9.90047 10.8276 12.1967 10.325 12.4858C9.98479 12.6814 9.50768 12.2817 8.49225 10.4533C8.14735 9.81798 7.8423 9.16187 7.57886 8.48872C7.53315 8.3744 7.4612 8.27244 7.3688 8.19106C7.25098 8.10784 7.1172 8.04993 6.97589 8.02097L4.54531 8.03798C4.36401 8.0422 4.18892 8.10484 4.04609 8.21658C3.98154 8.35924 3.97816 8.5221 4.03674 8.66732C4.03674 8.66732 5.9392 13.3023 8.09424 15.6325C9.15115 16.8706 10.685 17.6005 12.3125 17.6396H12.3082Z', fill: 'currentColor' }) })));
});
