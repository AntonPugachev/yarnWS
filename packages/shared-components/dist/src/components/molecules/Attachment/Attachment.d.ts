import { IFileData } from '../../../types';
import { IChipProps } from '../../atoms/Chip/Chip';
import './Attachment.scss';
export interface IAttachmentProps extends Omit<IChipProps, 'children' | 'onRemove'> {
    /** Список вложенных файлов */
    attachment?: IFileData;
    /** Показывать иконку удаления
     * @default true
     */
    showRemoveIcon?: boolean;
    /** Функция удаления файла */
    onRemove?: (file: IFileData) => void;
    /** Ксласс */
    className?: string;
}
declare const Attachment: ({ attachment, showRemoveIcon, onRemove, className, ...props }: IAttachmentProps) => import("react/jsx-runtime").JSX.Element | null;
export default Attachment;
