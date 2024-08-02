import { FC } from 'react';
import { ITextareaProps } from '../../atoms/Textarea';
import { IDebounceCommentResult } from '../../../types/projects.types';
import './CommentTile.scss';
import { IFileData } from '../../../types';
export interface ICommentTileProps extends Omit<ITextareaProps, 'onDebounce' | 'autoResize'> {
    /** Начальный комментарий */
    comment?: string;
    /** Заголовок */
    title?: string;
    /** Автоматическое изменение высоты
     * @default false
     */
    autoResize?: boolean;
    /** Возможность прикрепить файл
     * @default true
     */
    showFieldForFiles?: boolean;
    /** Прикрепленные файлы */
    initialFiles?: IFileData[];
    /** Максимальная длина комментария
     * @default 255
     */
    maxLength?: number;
    /** Срабатывает при изменении значения*/
    onDebounce?: (result: IDebounceCommentResult) => void;
    /** Ограничение по типам файлов*/
    accept?: string;
    /** Максимальный размер файлов*/
    maxSize?: number;
}
declare const CommentTile: FC<ICommentTileProps>;
export default CommentTile;
