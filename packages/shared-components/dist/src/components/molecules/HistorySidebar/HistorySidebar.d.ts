import { CSSProperties } from 'react';
import { IUser, IRequestAttachment } from '../../../types/projects.types';
import './HistorySidebar.scss';
export declare enum Statuses {
    POSITIVE = "POSITIVE",
    NEGATIVE = "NEGATIVE",
    NEUTRAL = "NEUTRAL"
}
export type TypeStatus = `${Statuses}`;
export interface IHistory {
    approvers: IUser[];
    approverName: string;
    approveDateTime?: string | null;
    name: string;
    comment?: string;
    status?: string;
    statusType?: TypeStatus;
}
export interface IHistorySidebar {
    /** Список шагов */
    history: IHistory[];
    /** Список прикрепленных файлов */
    attachments?: IRequestAttachment[];
    /** Открыт ли по умолчанию сайдбар
     * @default false
     */
    defaultOpened?: boolean;
    /** Id текущего пользователя */
    userId?: string;
    /** Стили для открытого сайдбара */
    activeStyle?: CSSProperties;
    /** Стили сайдбара */
    style?: CSSProperties;
    /** Устанавливает высоту от верхней границы
     * @default false
     */
    useHeightOffsetTop?: boolean;
}
declare const HistorySidebar: ({ history, attachments, defaultOpened, useHeightOffsetTop, userId: currentUserId, activeStyle, style, }: IHistorySidebar) => import("react/jsx-runtime").JSX.Element;
export default HistorySidebar;
