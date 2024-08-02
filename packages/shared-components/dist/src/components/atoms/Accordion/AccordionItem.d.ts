import { ReactNode } from 'react';
import './Accordion.scss';
export interface IAccordionItemProps {
    /** Контент */
    children: ReactNode;
    /** Функция клика */
    onClick: () => void;
    /** Открыт/закрыт */
    opened: boolean;
    /** Заблокирован выбор или нет
     * @default false
     */
    disabled?: boolean;
}
declare const AccordionItem: React.FC<IAccordionItemProps>;
export default AccordionItem;
