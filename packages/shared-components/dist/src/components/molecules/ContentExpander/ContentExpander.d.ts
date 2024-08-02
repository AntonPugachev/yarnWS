import { ReactNode } from 'react';
import './ContentExpander.scss';
export interface IContentExpanderProps {
    /** Заголовок */
    title: ReactNode;
    /** Заголовок при открытом контенте */
    titleOpen?: ReactNode;
    /** Показывать заголовок
     * @default true
     */
    showTitle?: boolean;
    /** Контент */
    children: ReactNode | ReactNode[];
    /** Недоступный
    * @default false
    */
    disabled?: boolean;
    /** Значение по умолчанию (открыт/закрыт)
     * @default false
     */
    defaultValue?: boolean;
    /** Функиця открытия/закрытия контента */
    onExpand?: () => void;
    /** Значение открыт/закрыт конент
     * Контролируемое состояние. Используется вместе с onExpand
    */
    expanded?: boolean;
    /**
     * Прижать заголовок к левому краю
     * @default false
     */
    stickArrow?: boolean;
    /** Класс */
    className?: string;
}
declare const ContentExpander: React.FC<IContentExpanderProps>;
export default ContentExpander;
