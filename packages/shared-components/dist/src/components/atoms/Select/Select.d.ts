import { FC, ReactNode, RefObject } from 'react';
import { Props as IInfiniteScrollProps } from 'react-infinite-scroll-component';
import './Select.scss';
import { DropdownPosition, IOption } from '../../../types';
export interface ISelectProps<T extends HTMLElement = HTMLDivElement> {
    /** Варианты выбора */
    options: IOption[];
    /** Изменение значения */
    onChange: (option: IOption[]) => void;
    /** Значение */
    values: IOption[];
    /** Поиск внутри селекта
     * @param query - строка поиска
     * @param isPagination - указывает что изменилась пагинация
     */
    onSearch?: (query: string, isPagination?: boolean) => void;
    /**
     * Множественный выбор
     * @default false
     *  */
    multiselect?: boolean;
    /** Плейсхолдер */
    placeholder?: string;
    /**
     *  Запрещает вводить текст
     *  @default false
     */
    readOnly?: boolean;
    /**
     * залочен или нет
     * @default false
     *  */
    disabled?: boolean;
    /** Максимальное количество выбранных вариантов при multiselect */
    maxOptions?: number | undefined;
    /**
     * Прелоудер при ленивой загрузке
     * @default false
     *  */
    preloader?: boolean;
    /**
     * Очистить селект при выборе значения
     * @default false
     * */
    clearOnSelect?: boolean;
    /** Любое изменяемое значение (зависимость). При изменении этого параметра очищается селект */
    clearHook?: any;
    /**
     * Вид селекта
     * @default 'base'
     *  */
    variant?: 'base' | 'tag' | 'menu';
    /**
     * Переводит селект в невалидный статус
     * @default false
     *  */
    invalid?: boolean;
    /** Указывает будет ли селект асинхронным
     * Если значение указано true, тогда нужно передавать infinityScrollProps
     * @default false
     */
    isAsync?: boolean;
    /** Пропсы для infinityScroll
     * @requires dataLength текущая длина массива
     * @requires hasMore стоит ли еще загружать данные
     */
    infinityScrollProps?: Omit<IInfiniteScrollProps, 'children' | 'next' | 'scrollableTarget' | 'loader'>;
    /**
     * Расположение
     * @default 'bottom'
     *  */
    position?: DropdownPosition;
    /** Событие скролла для выпадающего списка */
    onScroll?: (e: React.UIEvent) => void;
    startAdornment?: ReactNode | undefined;
    endAdornment?: ReactNode | undefined;
    /** Максимальная ширина выпадающего меню  */
    dropdownMaxWidth?: number | string;
    /** Сыылка на контейнер портала */
    containerRef?: RefObject<T>;
    /**
     * Цвет селекта
     * @default 'white'
     * */
    backgroundColor?: 'white' | 'gray';
    /**
     * Размер кнопки меню
     * @default 'm'
     * */
    menuVariantSize?: 's' | 'm';
}
declare const Select: FC<ISelectProps> & {
    id: number;
};
export default Select;
