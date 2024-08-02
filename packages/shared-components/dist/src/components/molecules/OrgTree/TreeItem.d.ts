import { ITreeOption } from '../../../types';
import './TreeItem.scss';
interface IFolderItemProps {
    id: string;
    item: ITreeOption;
    depth: number;
    open: boolean;
    parent?: ITreeOption;
    onChange?: (o: ITreeOption) => void;
    activeItem: ITreeOption | undefined;
    last?: boolean;
    /** Изменение состояния чекбокса. */
    onCheck?: (option: ITreeOption) => void;
}
declare const FolderItem: React.FC<IFolderItemProps>;
export default FolderItem;
