import React, { ReactNode } from 'react';
import './Menu.scss';
import { IListElement, IMenuContext } from '../../../types';
import { IDropdownProps } from '../Dropdown/Dropdown';
export interface IListProps extends Pick<IDropdownProps, 'position' | 'style' | 'offset' | 'containerRef'> {
    /** Кнопка открытия меню */
    children: ReactNode;
    /** Элементы меню */
    list?: IListElement[];
    /** Компонент вместо списка */
    content?: ReactNode;
    /** Класс */
    className?: string;
    /** При клике на элемент (children) переключать открытие/скрытие меню
     * Если false то при клике на элемент меню только показывать
     * @default true
      */
    toggleTagret?: boolean;
    /** Не активно при клике
     * @default false
     */
    disabled?: boolean;
}
/** Контекст для передачи функций работы с меню. */
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<IListProps>;
export default Menu;
