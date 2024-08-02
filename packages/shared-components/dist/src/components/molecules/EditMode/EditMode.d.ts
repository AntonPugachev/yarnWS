import { IInputProps } from '../../atoms/Input';
import { IFormGroup } from '../../atoms/FormGroup/FormGroup';
import './EditMode.scss';
export interface IEditModeProps extends Omit<IInputProps, 'onChange'> {
    /** Значене по умолчанию  */
    defaultValue: string;
    /** Открыт ли компонент для редактирования
     * @default false
     */
    defaultEdited?: boolean;
    /** Функция обратного вызова при изменении инпута */
    onChange?: (value: string) => void;
    /** Функция на сохранение значения */
    onSave?: (value: string) => void;
    /** Пропсы для компонента FormGroup (Передача лейбла, валидации и др.) */
    fromGroupProps?: Omit<IFormGroup, 'children'>;
}
declare const EditMode: ({ defaultValue, onSave, onChange, fromGroupProps, defaultEdited, ...props }: IEditModeProps) => import("react/jsx-runtime").JSX.Element;
export default EditMode;
