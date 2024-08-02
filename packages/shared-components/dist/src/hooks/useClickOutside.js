"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useClickOutside = function (ref, handler) {
    (0, react_1.useEffect)(function () {
        /** Функция для отслеживания клика вне элемента */
        var listener = function (event) {
            /** При клике на элемент или на элементы внутри него - ничего не делаем */
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
};
exports.default = useClickOutside;
