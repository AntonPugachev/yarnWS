import { InputHTMLAttributes } from 'react';
import './Checkbox.scss';
export interface ICheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    /** Лейбл */
    label?: React.ReactNode;
    /** Значение */
    value?: string;
    /**
     * Отображение иконки
     * @default true
     *  */
    icon?: boolean;
    /**
     * Вертикальное выравнивание
     * @default 'flex-start'
     *  */
    align?: 'flex-start' | 'center' | 'flex-end';
    /**
     * Если дочерние чекбоксы чекнуты, флаг равен true
     * @default false
     *  */
    halfChecked?: boolean;
    /**
     * Положение чекбокса
     *  @default 'left'
     * */
    position?: 'left' | 'right';
    /**
     * Круглый чекбокс
     * @default false
     */
    round?: boolean;
    /**
     *  100% ширины
     * @default false
     *  */
    fullWidth?: boolean;
    /**
     * Лейбл - текст
     * @default '''
     *  */
    titleAtt?: string;
}
declare const Checkbox: import("react").ForwardRefExoticComponent<ICheckboxProps & import("react").RefAttributes<HTMLLabelElement | null>>;
export default Checkbox;
