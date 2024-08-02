import { FC } from 'react';
import './TimeElement.scss';
export interface ITimepickerProps {
    /** Выбрать часы/время */
    updateTime: (newTime: string) => void;
    /** Минимальное значение 00:00 */
    min: string;
    /** Максимальное значение 00:00 */
    max: string;
    /** Значение */
    value?: string;
}
export declare const getTime: (time?: string | null) => string[];
declare const TimeElement: FC<ITimepickerProps>;
export default TimeElement;
