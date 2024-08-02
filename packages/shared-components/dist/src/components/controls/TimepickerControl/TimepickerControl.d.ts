import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { ITimepickerProps } from '../../atoms/Timepicker/Timepicker';
export type ITimepcikerControlProps = ITimepickerProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const TimepickerControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: ITimepcikerControlProps) => import("react/jsx-runtime").JSX.Element;
export default TimepickerControl;
