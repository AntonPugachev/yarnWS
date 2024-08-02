import './FindEntitiesUser.scss';
import { IUser } from '../../../types/projects.types';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';
interface IFindEntitiesUserProps {
    /** Пользователь */
    user: IUser;
    /** Выбран ли пользователь */
    isSelected: boolean;
    /** Изменение выбора пользователя */
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    /** Дизейбл чекбокса */
    disabled?: boolean;
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
}
export declare const FindEntitiesUser: React.FC<IFindEntitiesUserProps>;
export {};
