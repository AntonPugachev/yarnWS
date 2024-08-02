import { ReactNode, RefObject } from 'react';
import './Datepicker.scss';
import { DateFormat, IDateVariants } from './DatepickerCalendar/datepicker.types';
import { DropdownPosition } from '../../../types';
import { ITooltipProps } from '../Tooltip/Tooltip';
export interface IDatePickerRefActions {
    reset: () => void;
}
export interface IDatepickerProps<T extends HTMLElement = HTMLDivElement> {
    /** Имя поля */
    name?: string;
    /** Текст Placeholder */
    placeholder?: string;
    /** Значение по умолчанию */
    defaultValue?: Date | string | number;
    /** Скрыть поле */
    disabled?: boolean;
    /** Только для просмотра */
    readOnly?: boolean;
    /** Минимальное значения даты */
    min?: Date | string | number;
    /** Максимальное значения даты */
    max?: Date | string | number;
    /** Функция измекнения значения даты */
    onChange?: (value: IDateVariants, name?: string) => void;
    /** Диапазон
     * @default false
    */
    range?: boolean;
    /** Показывать день недели в инпуте
     * @default false
    */
    showDayOfWeek?: boolean;
    /** Локализация
     * @default ru
     */
    locale?: 'ru' | 'en';
    /** Положение выпадающего меню */
    position?: DropdownPosition;
    /** Формат даты */
    format?: DateFormat;
    /** Ограничения на дни недели 0 - 6 */
    disableWeekDays?: number[];
    /** Кастомная кнопка */
    children?: ReactNode | ReactNode[];
    /** Переводит инпут в невалидный статус */
    invalid?: boolean;
    /**
     * Добавляет инпуту белый фон
     * @default true
     */
    filled?: boolean;
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
    /** Сыылка на контейнер портала */
    containerRef?: RefObject<T>;
    /** Реф для пробрасывания действий по кастомным кнопкам */
    controlRef?: RefObject<IDatePickerRefActions | null>;
    /**
     *  Добавлять фокус при выборе дат
     * @default false
     *  */
    isFocusBorder?: boolean;
}
declare const Datepicker: React.FC<IDatepickerProps>;
export default Datepicker;
