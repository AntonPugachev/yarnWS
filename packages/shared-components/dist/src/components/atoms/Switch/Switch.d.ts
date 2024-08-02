import { FC, ReactNode } from 'react';
import './Switch.scss';
export interface ISwitchProps {
    /** Функция вызываемая при изменении значения*/
    onChange?: (f: boolean) => void;
    /** Основной текст*/
    label?: ReactNode;
    /** Второстепенный текст*/
    helperText?: ReactNode;
    /** Значение по умолчанию
     * @default false
    */
    value?: boolean;
    /** залочен или нет
     * @default false
    */
    disabled?: boolean;
    /** размер
     * @default m
    */
    size?: 's' | 'm';
    /** Перевернуть положение контента
     * @default false
     */
    reverse?: boolean;
    /** Устанавливает компонент во всю ширину и добавляет расстояние между текстом и иконкой
     * @default false
     */
    between?: boolean;
}
declare const Switch: FC<ISwitchProps>;
export default Switch;
