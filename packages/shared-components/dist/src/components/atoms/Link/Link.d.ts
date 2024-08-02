import './Link.scss';
import { ReactNode, ElementType } from 'react';
interface IProps<C extends ElementType> {
    /**
     * Компонент или тег для корневого элемента.
     * @default 'a'
     */
    component?: C;
    /** Текст ссылки. */
    children?: ReactNode;
    /**
     * Цвет ссылки.
     * @default 'primary'
     */
    color?: 'primary' | 'secondary';
    /**
     * Размер ссылки.
     * @default 'md'
     */
    size?: 'md' | 'sm';
    /**
     * Иконка перед текстом.
     */
    startAdornment?: ReactNode;
    /**
     * Иконка после текста.
     */
    endAdornment?: ReactNode;
    /**
     * Класс
     */
    className?: string;
}
export type ILinkProps<C extends React.ElementType> = IProps<C> & Omit<React.ComponentPropsWithoutRef<C>, keyof IProps<C>>;
export declare const Link: <C extends React.ElementType = "a">({ component, children, color, size, startAdornment, endAdornment, className, ...props }: ILinkProps<C>) => import("react/jsx-runtime").JSX.Element;
export {};
