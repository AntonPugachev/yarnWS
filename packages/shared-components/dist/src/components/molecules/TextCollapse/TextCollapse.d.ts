import './TextCollapse.scss';
export interface ITextCollapseProps {
    /** Текст */
    children: string;
    /** Высота строки
     * @default 21px
     */
    lineHeight?: string;
    /**
     * Кол-во отображаемых строк
     * @default 3
     */
    row?: number;
}
declare const TextCollapse: ({ children, lineHeight, row }: ITextCollapseProps) => import("react/jsx-runtime").JSX.Element;
export default TextCollapse;
