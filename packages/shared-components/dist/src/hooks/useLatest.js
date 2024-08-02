"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLatest = void 0;
var react_1 = require("react");
/**
 * Сохранение значения в `ref`. Удобно для прокидывания функции в эффект без его перезапуска.
 * @param value Значение для сохранения
 */
var useLatest = function (value) {
    var ref = (0, react_1.useRef)(value);
    ref.current = value;
    return ref;
};
exports.useLatest = useLatest;
