import { ReactNode } from 'react';
import './Hint.scss';
import { VariantClassic } from '../../../types';
export interface IHintProps {
    /** Основное сообщение */
    children?: ReactNode | string;
    /** Заголовок */
    title?: ReactNode | string;
    /** Текст кнопки */
    button?: ReactNode;
    /** Цвет сообщения */
    variant?: Exclude<VariantClassic, 'white'>;
    /** Сопоставление цвета с иконкой по умолчанию. */
    iconMapping?: Record<Exclude<VariantClassic, 'white'>, ReactNode>;
    /** Использовать собственную иконку. Если передать `false` то иконка скроется.
     * Тип string оставлен для совместимости. Тип string - deprecated
     * */
    icon?: ReactNode | string;
    /** Максимальная ширина */
    maxWidth?: string;
    onClose?: () => void;
}
declare const Hint: React.FC<IHintProps>;
export default Hint;
