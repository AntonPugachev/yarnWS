/**
 * @param value Значение для дебаунса
 * @param delay Задержка
 * @param callback Функция которую нужно выполнить после задержки
 */
export declare const useDebounce: <T>(value: T, delay: number, callback: (value: T) => void) => void;
export default useDebounce;
