"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebounce = void 0;
var react_1 = require("react");
var useLatest_1 = require("./useLatest");
/**
 * @param value Значение для дебаунса
 * @param delay Задержка
 * @param callback Функция которую нужно выполнить после задержки
 */
var useDebounce = function (value, delay, callback) {
    var latestCallback = (0, useLatest_1.useLatest)(callback);
    var isMounted = (0, react_1.useRef)(false);
    (0, react_1.useEffect)(function () {
        // Не запускаем дебаунс при первом рендере - повторяет старое поведение с keyup.
        if (!isMounted.current) {
            isMounted.current = true;
            return;
        }
        var timeout = setTimeout(function () {
            latestCallback.current(value);
        }, delay);
        return function () {
            clearTimeout(timeout);
        };
    }, [value, delay]);
};
exports.useDebounce = useDebounce;
exports.default = exports.useDebounce;
