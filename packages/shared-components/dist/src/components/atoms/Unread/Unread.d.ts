import { ReactNode } from 'react';
import './Unread.scss';
export interface IUnreadProps {
    /** Контент внутри бейджа*/
    children?: ReactNode;
    /** Иконка как бейдж в компоненте Menu */
    isBadgeOfMenu?: boolean;
}
export declare const Unread: React.FC<IUnreadProps>;
