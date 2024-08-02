import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { ISelectProps } from '../../atoms/Select/Select';
export type ISelectControlProps = Omit<ISelectProps, 'onChange' | 'values'> & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const SelectControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: ISelectControlProps) => import("react/jsx-runtime").JSX.Element;
export default SelectControl;
