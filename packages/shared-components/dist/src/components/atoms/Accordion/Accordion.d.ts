import './Accordion.scss';
import { ReactNode } from 'react';
export type IAccordion = {
    /** Заголовок */
    title: ReactNode;
    /** Контент */
    content: ReactNode;
    /** Открыт по умолчанию
     * @default false
    */
    defaultOpened?: boolean;
    /** Заблокирован выбор или нет
     * @default false
     */
    disabled?: boolean;
};
export interface IAccordionProps {
    /** Массив данных */
    data: IAccordion[];
    /** Позволяет разворачивать сразу несколько элементов
     * @default false
     */
    expanded?: boolean;
    /** Эффект наведения на элемент
     * @default true
     */
    hoverable?: boolean;
}
declare const Accordion: React.FC<IAccordionProps>;
export default Accordion;
