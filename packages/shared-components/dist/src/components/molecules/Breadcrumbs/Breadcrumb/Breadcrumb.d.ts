import { ReactNode } from 'react';
import { ILinkProps } from '../../../atoms/Link/Link';
import './Breadcrumb.scss';
export interface IBreadcrumb extends Omit<ILinkProps<any>, 'children'> {
    /** Заголовок */
    children: ReactNode | string;
    /** Ссылка */
    href: string;
    /** Заблокирован выбор или нет
     * @default false
     */
    disabled?: boolean;
    /** Указывает последний элемент */
    isLast?: boolean;
    /** Указывает нужно ли скрыть элемент */
    isHidden?: boolean;
}
declare const Breadcrumb: import("react").ForwardRefExoticComponent<Omit<IBreadcrumb, "ref"> & import("react").RefAttributes<HTMLDivElement>>;
export default Breadcrumb;
