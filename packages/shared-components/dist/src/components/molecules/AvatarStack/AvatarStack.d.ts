import { Size } from '../../../types';
import { IUser, TooltipPosition } from '../../../types/projects.types';
import './AvatarStack.scss';
export interface IAvatarStackProps {
    /** Список людей */
    list: IUser[];
    /** Размер аватаров */
    size?: Size;
    /** Id авторизированного юзера */
    currentUserId?: string;
    /** Количество видимых аватаров */
    maxVisible?: number;
    /** Расположение выпадающего списка */
    position?: TooltipPosition;
    /** Обработка клика по аватару */
    onClick?: (user: IUser) => void;
    /** Показывать тултип */
    isVisibleTooltip?: boolean;
}
declare const AvatarStack: React.FC<IAvatarStackProps>;
export default AvatarStack;
