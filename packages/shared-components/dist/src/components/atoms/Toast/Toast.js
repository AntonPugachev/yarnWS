"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./Toast.scss");
var Toast = function (_a) {
    var children = _a.children, _b = _a.isVisible, isVisible = _b === void 0 ? false : _b, containerRef = _a.containerRef, style = _a.style, setVisibility = _a.setVisibility;
    var _c = (0, react_1.useState)((containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) || document.body), container = _c[0], setContainer = _c[1];
    (0, react_1.useEffect)(function () {
        var id = setTimeout(function () {
            setVisibility(false);
        }, 2000);
        return function () {
            clearTimeout(id);
        };
    }, [isVisible]);
    (0, react_1.useEffect)(function () {
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            setContainer(containerRef.current);
        }
    }, [containerRef === null || containerRef === void 0 ? void 0 : containerRef.current]);
    if (!isVisible) {
        return null;
    }
    var toast = (0, jsx_runtime_1.jsx)("div", { "data-testid": 'rf-toast', className: 'rf-toast', style: style, children: children });
    return (0, react_dom_1.createPortal)(toast, container);
};
exports.default = Toast;
