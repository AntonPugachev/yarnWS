import { ReactNode } from 'react';
import './ActionMenu.scss';
import { IActionMenuListConfig } from '../../../types/projects.types';
interface IActionMenuProps {
    type?: 'default' | 'list' | 'action';
    listConfig?: IActionMenuListConfig;
    component?: ReactNode | ReactNode[];
    children?: ReactNode | ReactNode[];
}
declare const ActionMenu: React.FC<IActionMenuProps>;
export default ActionMenu;
