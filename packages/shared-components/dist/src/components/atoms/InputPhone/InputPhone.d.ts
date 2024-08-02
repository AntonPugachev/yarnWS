import './InputPhone.scss';
import { IInputProps } from '../Input';
export interface IInputPhoneCountry {
    /** Компонент для иконки флага страны */
    flag: React.ComponentType<{
        className?: string;
    }>;
    /** Название страны */
    text: string;
    /** Код страны */
    code: number;
}
export interface IInputPhoneProps extends IInputProps {
    defaultValue?: string;
    /** Список стран для выбора */
    countries?: IInputPhoneCountry[];
    /** Выбранная страна по умолчанию */
    defaultCountry?: IInputPhoneCountry;
    /** Идентификатор инпута */
    name?: string;
    /** Отключен или нет
     * @default false
     */
    disabled?: boolean;
    /** Переводит селект в невалидный статус
     * @default false
     */
    invalid?: boolean;
    /** Вызывается при изменении значения */
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const InputPhone: React.FC<IInputPhoneProps>;
export default InputPhone;
