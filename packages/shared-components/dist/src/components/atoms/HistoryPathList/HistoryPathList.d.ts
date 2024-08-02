import { IRequestPath } from '../../../types/projects.types';
import './HistoryPathList.scss';
export interface IHistoryStepList {
    /** Элемент истории */
    path: IRequestPath[];
    /** Флаг на особую версию истории для проекта ЮЗЭДО
     * @default false
     */
    isUZADO?: boolean;
    /** Флаг на свёрнутое состояние элементов компонента
     * @default false
    */
    isMinimal?: boolean;
}
declare const HistoryPathList: ({ path, isUZADO, isMinimal }: IHistoryStepList) => JSX.Element;
export default HistoryPathList;
