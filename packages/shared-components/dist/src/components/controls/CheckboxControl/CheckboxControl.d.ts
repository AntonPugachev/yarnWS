import { IControlProps, IPartialFormGroup } from '../types';
import { ICheckboxProps } from '../../atoms/Checkbox/Checkbox';
export type ICheckboxControlProps = ICheckboxProps & Omit<IControlProps, 'defaultValue'> & {
    formGroupProps?: IPartialFormGroup;
};
declare const CheckboxControl: ({ name, rules, defaultChecked, control, formState, shouldUnregister, formGroupProps, ...props }: ICheckboxControlProps) => import("react/jsx-runtime").JSX.Element;
export default CheckboxControl;
