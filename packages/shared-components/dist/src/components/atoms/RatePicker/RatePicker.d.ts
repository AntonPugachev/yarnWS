import { FC, InputHTMLAttributes } from 'react';
import './RatePicker.scss';
export type IRateSize = 'xs' | 's' | 'm';
export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {
    /**
     *  Величина диапазона
     * */
    sizePicker?: number;
    /** Заданное значение выбранного диапазона*/
    defaultPickedValue?: number;
    /**
     *  Включить диапазон
     * @default true
     * */
    isActive?: boolean;
    /** Текст контента диапазона*/
    textContent?: string;
    /**
     * Реверсировать поярдок диапазона
     * @default false
     * */
    isReverse?: boolean;
    /**
     *  Вид зведочки
     * @default false
     * */
    isStarPicker?: boolean;
    /** Размер звезды*/
    variant?: IRateSize;
    /** Получить значение оценки*/
    getRate?: (value: string) => number | void;
}
declare const RatePicker: FC<IPickerProps> & {
    id: number;
};
export default RatePicker;
