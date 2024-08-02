import { FC } from 'react';
import './EntityCard.scss';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';
export interface IUserPositions {
    /** ФИО */
    fullName: string;
    /** Ссылка на фото */
    photo?: string;
    /** Роль пользователя */
    role?: string;
    /** Первый лейбл */
    firstLabel?: string;
    /** Значение первого лейбла */
    valueByFirstLabel?: string;
    /** Можно скопировать первый лейбл */
    canCopy?: boolean;
    /** Второй лейбл */
    secondLabel?: string;
    /** Значение второго лейбла */
    valueBySecondLabel?: string;
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
}
declare const EntityCard: FC<IUserPositions>;
export default EntityCard;
