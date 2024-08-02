import { FC } from 'react';
import './Modal.scss';
export type ModalSize = 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export interface IModalProps {
    /** Контент модалки */
    children: React.ReactNode;
    /** Событие закрытия */
    onClose?: () => void;
    /** Контент для шапки в модальном окне */
    header?: React.ReactNode;
    /** Контент для футера в модальном окне */
    footer?: React.ReactNode;
    /** Кастомный компонент вместо
     * @default false
     */
    custom?: boolean;
    /** Вид модалки
     * @default modal
     */
    variant?: 'modal' | 'drawer';
    /** Ширина Модалки
     * @default s
     */
    size?: ModalSize;
    /** Показывать разделительную полоску в footer
     * @default true
     */
    showLine?: boolean;
}
declare const Modal: FC<IModalProps>;
export default Modal;
