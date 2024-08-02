import './Layout.scss';
export interface ILayoutProps {
    /** Максимальная ширина лейаута.*/
    maxWidth: 's' | 'm' | 'l';
    /** Ширина столбцов в двухколоночном лейауте. */
    columns?: [string, string];
}
export declare const Layout: React.FC<ILayoutProps>;
