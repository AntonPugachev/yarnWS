import { FC } from 'react';
import './Notification.scss';
import { INotification } from '../Notifications/Notifications';
export interface INotificationProps {
    /** Данные уведомление */
    item: INotification;
    /** Закрыть уведомление */
    remove?: (id: number) => void;
}
declare const Notification: FC<INotificationProps>;
export default Notification;
