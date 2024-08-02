import { IIconProps } from '../../../types';
import { IToastProps } from '../Toast/Toast';
import { ITooltipProps } from '../Tooltip/Tooltip';
import './Copy.scss';
export interface ICopyProps extends IIconProps, Pick<IToastProps, 'containerRef'> {
    /** Текст при наведении */
    tooltipLabel: string;
    /** Скопированный текст */
    copyMessage: string;
    /** Сообщение после копирования */
    successCopyMessage: string;
    /** Заблокировано копирование
     * @default faslse
     */
    disabled?: boolean;
    /** Пропсы компонента Tooltip */
    tooltipProps?: Omit<ITooltipProps, 'children'>;
}
declare const Copy: ({ tooltipLabel, copyMessage, successCopyMessage, disabled, tooltipProps, containerRef, ...props }: ICopyProps) => import("react/jsx-runtime").JSX.Element;
export default Copy;
