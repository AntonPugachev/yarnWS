import { FC, ReactNode } from 'react';
import './Tooltip.scss';
import { TooltipPosition } from '../../../types/projects.types';
export interface ITooltipContentProps {
    /** Содержимое tooltip */
    children: ReactNode | ReactNode[];
    /** Позиция tooltip */
    position?: TooltipPosition;
    /** Отключить показ самого тултипа
     * @default true
     */
    hidePadding?: boolean;
    /** Дополнительный класс */
    className?: string;
    /**
     * Цвет тултипа
     * @default default
     *
     */
    background?: 'black' | 'white';
    /** Расстояние от контента до тултипа
     * @default 8
     */
    offset?: number;
}
declare const TooltipContent: FC<ITooltipContentProps>;
export default TooltipContent;
