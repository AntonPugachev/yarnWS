"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function useWindowSize() {
    var _a = (0, react_1.useState)({
        width: undefined,
        height: undefined,
    }), windowSize = _a[0], setWindowSize = _a[1];
    (0, react_1.useEffect)(function () {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return function () { return window.removeEventListener('resize', handleResize); };
    }, []);
    return windowSize;
}
exports.default = useWindowSize;
