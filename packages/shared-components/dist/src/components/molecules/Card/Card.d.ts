import { FC } from 'react';
import { Variant } from '../../../types';
import { IUser } from '../../../types/projects.types';
import './Card.scss';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';
export interface ICard {
    /** id заявки */
    id?: string;
    /** Дата заявки */
    date?: string;
    /** Обработка заявки */
    onClick?: (event: React.MouseEvent, requestId?: string) => void;
    /** Номер заявки */
    requestNumber?: string;
    /** Цвет статуса заявки */
    statusColor?: Variant;
    /** Статус заявки */
    statusText?: string;
    /** Вид заявки */
    subTitle?: string;
    /** Название заявки */
    title?: string;
    /** Кнопка обработки заявки */
    showActionButton?: boolean;
    /** Пользователи */
    users?: IUser[];
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
}
declare const Card: FC<ICard>;
export default Card;
