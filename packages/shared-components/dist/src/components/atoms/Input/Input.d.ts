import { HTMLProps, ReactNode, Ref } from 'react';
import './Input.scss';
import { IDebounceResult } from '../../../types/projects.types';
export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size' | 'ref'> {
    /** Возможность очистки поля по клику */
    onClear?: () => void;
    /** Дебаунс */
    debounce?: number;
    /** Иконка */
    icon?: ReactNode;
    variant?: 'base' | 'inline';
    /** Переводит инпут в невалидный статус */
    invalid?: boolean;
    /**
     * Добавляет инпуту белый фон
     * @default true
     */
    filled?: boolean;
    /** Контент для вставки в начало инпута */
    startAdornment?: ReactNode;
    /** Контент для вставки в конец инпута */
    endAdornment?: ReactNode;
    /** обработка нажатий с эффектом debounce */
    onDebounce?: (result: IDebounceResult) => void;
    /** ref контейнера инпута */
    ref?: Ref<HTMLDivElement>;
    /**
     * Добавить рамку
     * @default true
     *  */
    isBorder?: boolean;
    /**
    * Проверять ввод в соответствии с регулярным выражением
    * @example Для проверки на отсутствие спецсимволов в строке можно использовать `'^[\da-zA-Zа-яА-Я]*$'`
    */
    pattern?: string;
}
declare const Input: import("react").ForwardRefExoticComponent<Omit<IInputProps, "ref"> & import("react").RefAttributes<HTMLDivElement | null>>;
export default Input;
