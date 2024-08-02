import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { IInputNumberProps } from '../../atoms/InputNumber/InputNumber';
export type IInputNumberControlProps = IInputNumberProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const InputNumberControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: IInputNumberControlProps) => import("react/jsx-runtime").JSX.Element;
export default InputNumberControl;
