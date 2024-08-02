import './FindEntities.scss';
import { ReactNode } from 'react';
import { IOption } from '../../../types';
export interface IFindEntitiesProps<T extends Record<string, any>> {
    /** Закрытие модального окна. */
    onClose?: () => void;
    /** Список уже выбранных сущностей. */
    value?: T[];
    /** Вернуть выбранные сущности. */
    onChange?: (data: T[]) => void;
    /** Время дебаунса при поиске. */
    debounce?: number;
    /**
     * Функция поиска по сущностям.
     * @returns Кортеж с промисом сущностей и опциональной функцией отмены запроса.
     */
    getEntities: (search: string, filter: string, skip: number) => [Promise<T[]>, (() => void) | null];
    /**
     * Ключ для получения ID из сущности.
     */
    entityKey: keyof T;
    /** Функция рендера элемента списка. */
    children: (data: {
        entity: any;
        isSelected: boolean;
        onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }) => React.ReactNode;
    /** Дополнительные фильтры. */
    filters?: IOption[];
    /**
     * Множественный выбор.
     * @default false
     */
    multiple?: boolean;
    /** Заголовок. */
    title?: ReactNode;
    /** Подзаголовок. */
    subtitle?: ReactNode;
    /**
     * Иконка для эмпти стейта.
     */
    emptyStateIcon?: React.ReactNode;
    /**
     * Текст для эмпти стейта когда ничего не найдено.
     * @default 'Измените поисковый запрос'
     */
    emptyStateText?: string;
    /**
     * Текст для эмпти стейта когда поиск еще не начат.
     */
    emptyStateInitialText?: string;
    /**
     * Ленивая подгрузка результатов.
     * @default false
     */
    lazy?: boolean;
    /**
     * Проверять ввод в соответствии с регулярным выражением
     * @example Для проверки на отсутствие спецсимволов в строке можно использовать `'^[\da-zA-Zа-яА-Я]*$'`
     */
    pattern?: string;
}
export declare const FindEntities: <T>({ onClose, value, onChange, debounce, getEntities, entityKey, children, multiple, filters, title, subtitle, lazy, emptyStateIcon, emptyStateText, emptyStateInitialText, pattern }: IFindEntitiesProps<T>) => import("react/jsx-runtime").JSX.Element;
export default FindEntities;
