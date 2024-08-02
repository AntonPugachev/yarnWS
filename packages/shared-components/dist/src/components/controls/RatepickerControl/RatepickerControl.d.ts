import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { IPickerProps } from '../../atoms/RatePicker/RatePicker';
export type IInputControlProps = IPickerProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const RatepickerControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: IInputControlProps) => import("react/jsx-runtime").JSX.Element;
export default RatepickerControl;
