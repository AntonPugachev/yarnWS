import './ButtonGroup.scss';
import { IButtonGroup } from '../../../types';
export interface IButtonGroupProps {
    /** Список кнопок */
    list: IButtonGroup[];
    /** Максимальное количество показываемых кнопок */
    max?: number;
    /** Закрывать меню после клика
     * @default false
     */
    closeAfterClick?: boolean;
}
declare const ButtonGroup: React.FC<IButtonGroupProps>;
export default ButtonGroup;
