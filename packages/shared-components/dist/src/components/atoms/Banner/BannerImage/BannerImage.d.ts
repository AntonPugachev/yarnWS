import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';
import './BannerImage.scss';
export type BannerImageVariant = 'broken-magnifier' | 'close-entrance' | 'default' | 'donut' | 'donut-2' | 'empty' | 'ghost' | 'magnifier-folder' | 'magnifier-not-available' | 'magnifier-zero' | 'not-available' | 'notifications' | 'settings' | 'work';
export interface BannerImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
    /** Использовать встроеное изображение */
    variant?: BannerImageVariant;
}
export declare const BannerImageMap: {
    [key in BannerImageVariant]: string;
};
export declare const BannerImage: ({ variant, src, ...props }: BannerImageProps) => import("react/jsx-runtime").JSX.Element;
