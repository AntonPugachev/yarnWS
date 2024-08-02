"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLayoutContext = exports.LayoutContext = void 0;
var react_1 = require("react");
exports.LayoutContext = (0, react_1.createContext)(null);
var useLayoutContext = function () {
    var value = (0, react_1.useContext)(exports.LayoutContext);
    if (!value) {
        throw new Error('No provider for LayoutContext.');
    }
    return value;
};
exports.useLayoutContext = useLayoutContext;
