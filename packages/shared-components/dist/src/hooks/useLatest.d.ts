/**
 * Сохранение значения в `ref`. Удобно для прокидывания функции в эффект без его перезапуска.
 * @param value Значение для сохранения
 */
export declare const useLatest: <T>(value: T) => {
    readonly current: T;
};
