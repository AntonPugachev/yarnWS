import './Banner.scss';
export interface IBannerProps {
    /** Иконка/иллюстрация */
    icon?: React.ReactNode;
    /** Текст заголовка */
    heading?: React.ReactNode;
    /** Текст подзаголовка */
    subheading?: React.ReactNode;
    /** Текст основной кнопки */
    primaryText?: string;
    /** Клик по основной кнопке */
    onPrimaryClick?: () => void;
    /** Текст второстепенной кнопки */
    secondaryText?: string;
    /** Клик по второстепенной кнопке */
    onSecondaryClick?: () => void;
}
/**
 * @example
 * import illustration form 'juicyfront/assets/illustrations/default.png'
 * <Banner icon={<BannerImage src={illustration} />} heading="Заголовок" />
 */
export declare const Banner: ({ icon, heading, subheading, primaryText, onPrimaryClick, secondaryText, onSecondaryClick }: IBannerProps) => import("react/jsx-runtime").JSX.Element;
