import { ReactElement, ReactNode, useEffect, useState } from 'react';
import './PopupMaker.scss';
import { BehaviorSubject } from 'rxjs';
import Modal from '../../atoms/Modal';
import { IModalProps } from '../../atoms/Modal/Modal';

type ModalPropsType = Omit<IModalProps, 'children'>;

/** Стак попапов */
export let popups$$ = new BehaviorSubject<ReactNode[]>([]);

/** Закрываем последний открытый попап */
const onClose = (): void => {
  popups$$.next(popups$$.getValue().slice(0, -1));
};

/** Основная функция добавления попапа в стек */
export const openPopup = (component: ReactElement, modalProps: ModalPropsType) => {
  const componentModal: ReactNode = (
    <Modal key={popups$$.getValue().length} onClose={onClose} {...modalProps}>
      {React.cloneElement(component, { onClose }, [])}
    </Modal>
  );
  popups$$.next(popups$$.getValue().concat([componentModal]));
};

const PopupMaker = () => {
  const [modalComponent, setModalComponent] = useState<ReactNode[]>([]);

  /** Подписываемся на стек попапов*/
  useEffect(() => {
    if (popups$$.closed) {
      popups$$ = new BehaviorSubject<ReactNode[]>([]);
    }

    popups$$.subscribe((data: ReactNode[]) => {
      setModalComponent(data);
    });
    return () => popups$$.unsubscribe();
  }, []);
  return <>{modalComponent}</>;
};

export default PopupMaker;
