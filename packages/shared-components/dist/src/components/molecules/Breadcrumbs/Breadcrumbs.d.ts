import { IBreadcrumb } from './Breadcrumb/Breadcrumb';
import './Breadcrumbs.scss';
export interface IBreadcrumbsProps {
    /**
     * Список хлебных крошек
     */
    list: IBreadcrumb[];
}
declare const Breadcrumbs: ({ list }: IBreadcrumbsProps) => import("react/jsx-runtime").JSX.Element | null;
export default Breadcrumbs;
