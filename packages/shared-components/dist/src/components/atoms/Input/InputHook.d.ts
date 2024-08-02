import { HTMLProps, ReactNode } from 'react';
import './Input.scss';
export interface IInputProps extends Omit<HTMLProps<HTMLInputElement>, 'size'> {
    /** Возможность очистки поля по клику */
    onClear?: () => void;
    /** Дебаунс */
    debounce?: number;
    /** Иконка */
    icon?: ReactNode;
}
declare const Input: import("react").ForwardRefExoticComponent<Omit<IInputProps, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export { Input as InputHook };
