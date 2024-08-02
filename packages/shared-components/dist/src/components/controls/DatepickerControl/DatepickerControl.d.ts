import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { IDatepickerProps } from '../../atoms/Datepicker/Datepicker';
export type IInputControlProps = IDatepickerProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const DatepickerControl: ({ name, rules, defaultValue, control, shouldUnregister, formState, label, formGroupProps, ...props }: IInputControlProps) => import("react/jsx-runtime").JSX.Element;
export default DatepickerControl;
