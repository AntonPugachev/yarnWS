import './List.scss';
import { IListElement } from '../../../../types';
import { ITooltipProps } from '../../Tooltip/Tooltip';
interface IListProps {
    /** Элементы меню */
    list: IListElement[];
    /** Цвет tooltip */
    tooltipBackground?: ITooltipProps['background'];
}
declare const List: React.FC<IListProps>;
export default List;
