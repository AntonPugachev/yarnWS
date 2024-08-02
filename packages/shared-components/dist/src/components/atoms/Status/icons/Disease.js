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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var helpers_1 = require("./helpers");
/* eslint-disable max-len */
exports.default = (function (props) {
    var size = props.size ? helpers_1.statusIconSize[props.size] : '20';
    return ((0, jsx_runtime_1.jsx)("svg", __assign({ width: size, height: size, viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, props, { children: (0, jsx_runtime_1.jsx)("path", { fillRule: 'evenodd', clipRule: 'evenodd', d: 'M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20ZM14.5462 9.57421L9.48956 14.4025C8.41761 15.4261 6.7354 15.3987 5.72563 14.3411C4.71585 13.2836 4.7661 11.6019 5.83805 10.5784L10.8946 5.75006C11.9666 4.7265 13.6488 4.75394 14.6586 5.81146C15.6684 6.86897 15.6181 8.55065 14.5462 9.57421ZM9.26323 10.4491C9.48599 10.2364 9.49414 9.88336 9.28144 9.6606C9.06874 9.43784 8.71572 9.42969 8.49296 9.6424C8.2702 9.8551 8.26205 10.2081 8.47475 10.4309C8.68746 10.6536 9.04047 10.6618 9.26323 10.4491ZM10.6077 9.16539C10.8305 8.95269 10.8386 8.59968 10.6259 8.37691C10.4132 8.15416 10.0602 8.146 9.83744 8.35871C9.61469 8.57141 9.60653 8.92442 9.81924 9.14718C10.0319 9.36994 10.385 9.37809 10.6077 9.16539ZM10.5651 11.0053C10.7778 11.2281 10.7697 11.5811 10.5469 11.7938C10.3242 12.0065 9.97115 11.9984 9.75845 11.7756C9.54574 11.5528 9.55389 11.1998 9.77666 10.9871C9.99941 10.7744 10.3524 10.7826 10.5651 11.0053ZM11.8915 10.5101C12.1143 10.2974 12.1224 9.9444 11.9097 9.72164C11.697 9.49888 11.344 9.49073 11.1213 9.70343C10.8985 9.91613 10.8903 10.2691 11.1031 10.4919C11.3158 10.7147 11.6688 10.7228 11.8915 10.5101Z', fill: 'currentColor' }) })));
});
