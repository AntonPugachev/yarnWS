import { HTMLProps, ReactNode } from 'react';
import './Search.scss';
import { IDebounceResult } from '../../../types/projects.types';
export interface ISearchProps extends HTMLProps<HTMLInputElement> {
    /** Возможность очистки поля по клику */
    onClear?: () => void;
    /** Показать иконку очистки */
    showClear?: boolean;
    /** Дебаунс */
    debounce?: number;
    /** Иконка в конце поля */
    endAdornment?: ReactNode;
    /** Обработка нажатий с эффектом debounce */
    onDebounce?: (result: IDebounceResult) => void;
    /**
     * Проверять ввод в соответствии с регулярным выражением
     * @example Для проверки на отсутствие спецсимволов в строке можно использовать `'^[\da-zA-Zа-яА-Я]*$'`
     */
    pattern?: string;
    /**
     * Является ли Search компонентом HistoryCardFilter
     * @default false
     */
    isCardFilter?: boolean;
}
declare const Search: React.FC<ISearchProps>;
export default Search;
