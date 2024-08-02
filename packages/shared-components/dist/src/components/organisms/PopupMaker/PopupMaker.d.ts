import { ReactElement, ReactNode } from 'react';
import './PopupMaker.scss';
import { BehaviorSubject } from 'rxjs';
import { IModalProps } from '../../atoms/Modal/Modal';
type ModalPropsType = Omit<IModalProps, 'children'>;
/** Стак попапов */
export declare let popups$$: BehaviorSubject<ReactNode[]>;
/** Основная функция добавления попапа в стек */
export declare const openPopup: (component: ReactElement, modalProps: ModalPropsType) => void;
declare const PopupMaker: () => import("react/jsx-runtime").JSX.Element;
export default PopupMaker;
