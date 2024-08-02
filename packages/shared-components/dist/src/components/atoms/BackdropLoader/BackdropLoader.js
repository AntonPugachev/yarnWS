"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./BackdropLoader.scss");
var Preloader_1 = __importDefault(require("../Preloader"));
var react_dom_1 = require("react-dom");
var BackdropLoader = function (_a) {
    var _b = _a.className, className = _b === void 0 ? '' : _b, variant = _a.variant;
    var div = (0, react_1.useState)(document.createElement('div'))[0];
    (0, react_1.useEffect)(function () {
        document.body.appendChild(div);
        document.body.style.overflowY = 'hidden';
        return function () {
            document.body.style.overflowY = 'auto';
            document.body.removeChild(div);
        };
    });
    var loader = ((0, jsx_runtime_1.jsx)("div", { className: "jf-backdrop-loader ".concat(className), children: (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 'xl' }) }));
    // -------------------------------------------------------------------------------------------------------------------
    return (0, react_dom_1.createPortal)(loader, div);
};
exports.default = BackdropLoader;
