import { FC, HTMLProps, ReactNode } from 'react';
import './Timepicker.scss';
export interface ITimepickerProps extends Omit<HTMLProps<HTMLInputElement>, 'ref'> {
    /** Css класс */
    className?: string;
    /** Заблокирован выбор или нет
     * @default false
     */
    disabled?: boolean;
    /** Переводит инпут в невалидный статус
     * @default false
     */
    invalid?: boolean;
    /** Начальное значение
     * @example 12:00
     */
    initialValue?: string;
    /** Функция при изменении значения */
    onChangeValue?: (value: string, id: string) => void;
    /** Минимальное значение
     * @default 00:00
     */
    min?: string;
    /** Максимальное значение
     * @default 24:00
     */
    max?: string;
    /**
     *  Безрамочный укороченый вариант
     * @default false
     */
    isMinified?: boolean;
    children?: ReactNode | ReactNode[];
}
declare const Timepicker: FC<ITimepickerProps>;
export default Timepicker;
