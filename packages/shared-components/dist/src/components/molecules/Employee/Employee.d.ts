import './Employee.scss';
import { IUser, TooltipPosition } from '../../../types/projects.types';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';
export interface IEmployeeProps {
    /** Пользователь */
    user: IUser;
    /** Позиция тултипа подсказки */
    position?: TooltipPosition;
    /** Заголовок карточки */
    title?: string;
    /** Коллбек клика по кнопке. */
    onClick?: () => void;
    /** Показывать кнопку */
    showActionButton?: boolean;
    /** Показывать тень */
    showBoxShadow?: boolean;
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
}
declare const Employee: React.FC<IEmployeeProps>;
export default Employee;
