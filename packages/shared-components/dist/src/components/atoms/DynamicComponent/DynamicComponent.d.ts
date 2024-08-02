import { ReactNode } from 'react';
interface IProps {
    url: string;
    scope: string;
    module: string;
    basename?: string;
    fallback?: ReactNode;
    error?: ReactNode;
}
declare const DynamicComponent: React.FC<IProps>;
export default DynamicComponent;
