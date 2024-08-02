import './Structure.scss';
import { IStructure } from '../../../types/projects.types';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';
interface IProps extends Pick<ITooltipProps, 'background'> {
    departmentsPath: IStructure[];
}
declare const Structure: React.FC<IProps>;
export default Structure;
