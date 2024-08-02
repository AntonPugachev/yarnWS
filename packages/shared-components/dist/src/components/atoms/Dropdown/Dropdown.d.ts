import { ReactNode, RefObject } from 'react';
import './Dropdown.scss';
import { DropdownPosition } from '../../../types';
import { Options } from '@popperjs/core/lib/modifiers/offset';
export interface IDropdownProps<T extends HTMLElement = HTMLDivElement> {
    /** Контент */
    children: ReactNode | ReactNode[];
    /** Флаг отображения */
    show: boolean;
    /** Ссылка на кнопку, которая открывает элемент */
    toggleRef: RefObject<HTMLElement>;
    /** Функция закрытия дропдауна */
    onClose: () => void;
    /** Положение выпадающего меню */
    position?: DropdownPosition;
    /** Стили */
    style?: React.CSSProperties;
    /** Расстояние по оси X и Y */
    offset?: Options['offset'];
    /** Сыылка на контейнер портала */
    containerRef?: RefObject<T>;
}
declare const Dropdown: React.FC<IDropdownProps>;
export default Dropdown;
