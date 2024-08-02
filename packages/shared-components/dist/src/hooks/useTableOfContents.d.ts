export interface IHeadingData {
    id: string;
    htmlNode: HTMLElement;
}
export interface IUseTableOfContentsProps {
    /** Селектор для отслеживаемых заголовков/элементов */
    selector: string;
    /** Доп. зависимости для запуска парсинга тайтлов */
    deps?: any[];
    /** Блок со скроллом - по-умочанию window */
    parent?: HTMLElement;
}
export interface IActiveTitle {
    activeTitleId?: string;
    activeIndex: number;
}
export interface ITableOfContents {
    activeTitle: IActiveTitle;
    onClick: (title: IActiveTitle) => void;
}
declare const useTableOfContents: ({ selector, deps, parent }: IUseTableOfContentsProps) => ITableOfContents;
export default useTableOfContents;
