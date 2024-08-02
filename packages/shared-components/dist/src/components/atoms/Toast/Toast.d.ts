import { CSSProperties, FC, ReactNode, RefObject } from 'react';
import './Toast.scss';
export interface IToastProps<T extends HTMLElement = HTMLDivElement> {
    /** Контент */
    children: ReactNode;
    /** Показывать компонент
     * @default false
     */
    isVisible?: boolean;
    /** Сыылка на контейнер портала */
    containerRef?: RefObject<T>;
    /** Функция открытия/закрытия компонента */
    setVisibility: (mode: boolean) => void;
    /** Инлайн стили */
    style?: CSSProperties;
}
declare const Toast: FC<IToastProps>;
export default Toast;
