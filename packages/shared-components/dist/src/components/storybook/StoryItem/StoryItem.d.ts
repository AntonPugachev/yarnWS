import { ReactNode } from 'react';
import './StoryItem.scss';
interface IProps {
    subtitle?: string;
    description?: ReactNode;
    children: ReactNode | ReactNode[];
}
declare const StoryItem: React.FC<IProps>;
export default StoryItem;
