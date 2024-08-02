import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { IInputPhoneProps } from '../../atoms/InputPhone';
export type IInputNumberControlProps = IInputPhoneProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const InputPhoneControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: IInputNumberControlProps) => import("react/jsx-runtime").JSX.Element;
export default InputPhoneControl;
