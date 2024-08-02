import { Dispatch, SetStateAction } from 'react';
import './DatepickerCalendar.scss';
import { DateFormat } from './datepicker.types';
import { ITooltipProps } from '../../Tooltip/Tooltip';
interface IDatepickerCalendarProps {
    /** Значение */
    value: string;
    /** Функция измекнения значения */
    setInputValue: (value: string) => void;
    /** Функция скрытия календаря */
    toggleCalendar: Dispatch<SetStateAction<boolean>>;
    /** Минимальное значение */
    minDate?: Date;
    /** Максимальное значение */
    maxDate?: Date;
    /** Диапазон
     * @default false
    */
    range?: boolean;
    /** Локализация
     * @default ru
     */
    locale?: 'ru' | 'en';
    /** Формат даты
     * @default dd.mm.yyyy
     */
    format?: DateFormat;
    /** Разделяющий элемент */
    separator?: string;
    /** Массив неактиыных дней */
    disableWeekDays?: number[];
    /** Цвет тултипа */
    tooltipBackground?: ITooltipProps['background'];
}
declare const DatepickerCalendar: React.FC<IDatepickerCalendarProps>;
export default DatepickerCalendar;
