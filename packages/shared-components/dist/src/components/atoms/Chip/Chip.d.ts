import { ReactNode } from 'react';
import './Chip.scss';
import { ITooltipProps } from '../Tooltip/Tooltip';
export interface IChipProps {
    /** Текст */
    children: ReactNode | ReactNode[];
    /** Функция вызываемая при изменении значения */
    onClick?: () => void;
    /** Функция вызываемая при нажатии на крестик */
    onRemove?: () => void;
    /** Дизейбл. */
    disabled?: boolean;
    /**
     * Размер.
     * @default s
     */
    size?: 'xs' | 's';
    /** Вариант отображения.
     * @default primary
     */
    type?: 'primary' | 'secondary' | 'outline' | 'fill';
    /** Иконка. */
    icon?: ReactNode;
    /**
     * Позиция отображения иконки.
     * @default 'left'
     */
    iconPosition?: 'right' | 'left';
    /** Бейдж. */
    badge?: string;
    /** Максимальная длина строки. */
    maxLength?: number;
    /**
     * Цвет tooltip.
     * @default 'white'
     */
    tooltipBackground?: ITooltipProps['background'];
    /**
     * Всплытие события нажатия.
     * @default false
     */
    isBubble?: boolean;
}
declare const Chip: React.FC<IChipProps>;
export default Chip;
