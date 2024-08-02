import  { ReactNode } from 'react';
import './Unread.scss';

export interface IUnreadProps {
  /** Контент внутри бейджа*/
  children?: ReactNode;
  /** Иконка как бейдж в компоненте Menu */
  isBadgeOfMenu?: boolean;
}

export const Unread: React.FC<IUnreadProps> = ({ children = '', isBadgeOfMenu = false }: IUnreadProps) => {
  return (
    <div className='unread'>
      {children}
      <div className={`unread__badge ${isBadgeOfMenu ? 'unread__badge-menu' : ''}`} />
    </div>
  );
};
