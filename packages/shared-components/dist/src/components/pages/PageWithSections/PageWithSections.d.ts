import { ReactNode } from 'react';
import './PageWithSections.scss';
import { IPageSection } from '../../../types/projects.types';
import { IButtonGroup, ITab } from '../../../types';
export interface IPageWithSectionsProps {
    title?: ReactNode;
    backUrl?: string;
    onBackUrlClick?: () => void;
    sections?: IPageSection[];
    /** [DEPRECATED] Fixed action menu */
    actionMenu?: ReactNode;
    /** Всегда отображает панель с кнопками внизу страницы*/
    actionMenuAlwaysBottom?: boolean;
    /** Показать прелоадер
     * @default false */
    preloader?: boolean;
    /** Показать боковое меню заголовков секций
     * @default true */
    showNavigation?: boolean;
    /** Доп. отступ скролла при клике бокового меню (px)
     * @default 40 */
    additionalScrollOffset?: number;
    /** Отключает подсветку активного элемента меню
     * @default false */
    showNavigationPosition?: boolean;
    /** Navigation tabs */
    navigation?: ITab[];
    /** Показать заголовок
     * @default true */
    showHeader?: boolean;
    /** Кнопки действий внизу страницы
     * @default [] */
    buttonsGroup?: IButtonGroup[];
    /** Количество кнопок для меню
     * @default 2 */
    countOfButtonsGroup?: number;
    /** Элемент со скроллом
     * @default undefined */
    parentScroll?: HTMLElement;
}
declare const PageWithSections: React.FC<IPageWithSectionsProps>;
export default PageWithSections;
