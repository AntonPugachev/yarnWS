import { CSSProperties } from 'react';
import './Shimmer.scss';
export interface IShimmerProps {
    /** Вариант компонента (аватар/заголовок/картинка)
     * @default title
     */
    variant?: 'title' | 'avatar-title' | 'text' | 'avatar' | 'image';
    /** Тема
     * @default light
     */
    theme?: 'light' | 'dark';
    /** Ширина */
    width?: string | number;
    /** Высота */
    height?: string | number;
    /** Стили */
    style?: CSSProperties;
}
declare const Shimmer: ({ variant, theme, width, height, style }: IShimmerProps) => import("react/jsx-runtime").JSX.Element;
export default Shimmer;
