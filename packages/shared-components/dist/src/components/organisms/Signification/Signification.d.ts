import { FC, ReactNode } from 'react';
import './Signification.scss';
import { IRequestAttachment } from '../../../types/projects.types';
import { IBrowserCert } from '../../molecules/CertReader/CertReader';
import { Certificate } from 'crypto-pro';
import { ITileProps } from '../../atoms/Tile/Tile';
export type TButtons = 'sign' | 'manual' | 'reject' | 'rejectManual';
export type ICustomTexts = {
    [key in TButtons]?: string;
};
export interface ISignifyCallback {
    file: IRequestAttachment;
    success?: TButtons;
    comment?: string;
    currentCert?: IBrowserCert;
}
export interface IProps extends Pick<ITileProps, 'variant'> {
    /** Изначальный файл*/
    data: IRequestAttachment;
    /** Дополнительные данные о документе*/
    documentInfo?: ReactNode;
    /** заголовок*/
    title?: string;
    /** функция- результат подписания */
    onSignify?: (result: ISignifyCallback) => void;
    /** функция- обработка удаления подписанного файла */
    onSignCancel?: () => void;
    /** массив в котором название кнопок для скрытия */
    hideButtons?: TButtons[];
    /** показывать ли спойлер для документа
     * @default true
     */
    isSpoiler?: boolean;
    /** открыт или закрыт спойлер для документа
     * @default false
     */
    isOpenSpoiler?: boolean;
    /** фильтр сертификатов */
    filter?: (cert: Certificate) => Promise<boolean>;
    /** кастомные названия кнопок */
    buttonCustomTexts?: ICustomTexts;
    /** ссылка на pdf если надо открыть в отдельном окне */
    pdfUrl?: string;
    /** Render-prop для контента попапа начала подписи */
    confirmContent?: (cert: IBrowserCert, file: IRequestAttachment, onConfirm: () => void, onCancel: () => void) => React.ReactNode;
}
declare const Signification: FC<IProps>;
export default Signification;
