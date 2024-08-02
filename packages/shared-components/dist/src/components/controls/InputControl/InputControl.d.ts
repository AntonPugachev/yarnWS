import { ReactNode } from 'react';
import { IInputProps } from '../../atoms/Input';
import { IControlProps, IPartialFormGroup } from '../types';
export type IInputControlProps = IInputProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const InputControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: IInputControlProps) => import("react/jsx-runtime").JSX.Element;
export default InputControl;
