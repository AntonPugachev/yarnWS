import './Confirm.scss';
import { ITextareaProps } from '../../atoms/Textarea';
export interface IConfirmProps extends Omit<ITextareaProps, 'defaultValue' | 'onDebounce' | 'onClear'> {
    /** Текст сабмита */
    textAccept: string;
    /** Действие */
    onAction: (comment?: string) => void;
    /** Текст подтверждения */
    text?: string;
    /** Событие закрытия */
    onClose?: () => void;
    /** Вернуться назад */
    onBack?: () => void;
    /** Комментарий */
    comment?: string;
    /** Показать комментарий */
    showComment?: boolean;
    /** Язык */
    lang?: string;
    /** Прелоудер */
    preloader?: boolean;
}
declare const Confirm: React.FC<IConfirmProps>;
export default Confirm;
