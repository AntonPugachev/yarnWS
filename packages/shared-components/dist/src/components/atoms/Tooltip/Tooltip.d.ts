import { FC, ReactNode } from 'react';
import './Tooltip.scss';
import { ITooltipContentProps } from './TooltipContent';
export interface ITooltipProps extends Omit<ITooltipContentProps, 'children'> {
    /** [1] Элемент, на который наводим, [2] Элемент с подсказкой */
    children: [ReactNode, ReactNode];
    /** Отключить показ самого тултипа
     * @default true
     */
    isVisible?: boolean;
    /** Задержка перед открытием тултипа
     * @default 0
     */
    closeDelay?: number;
    /** Класс */
    className?: string;
}
declare const Tooltip: FC<ITooltipProps>;
export default Tooltip;
