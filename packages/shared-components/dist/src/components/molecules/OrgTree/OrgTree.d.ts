import { ITreeOption } from '../../../types';
interface IOrgTreeProps {
    /** Уникальный ID дерева */
    id?: string;
    /** Список */
    list: ITreeOption[];
    /** Состояние открыт/закрыт */
    open?: boolean;
    /** Изменение состояние */
    onChange?: (option: ITreeOption) => void;
    /** Изменение состояния чекбокса. */
    onCheck?: (option: ITreeOption) => void;
    /** Активная опция в случае единичного выбора */
    activeOption?: ITreeOption;
}
declare const OrgTree: React.FC<IOrgTreeProps>;
export default OrgTree;
