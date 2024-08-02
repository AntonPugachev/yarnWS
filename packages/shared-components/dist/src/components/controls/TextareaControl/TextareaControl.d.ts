import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { ITextareaProps } from '../../atoms/Textarea';
export type ITextareaControlProps = ITextareaProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const TextareaControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: ITextareaControlProps) => import("react/jsx-runtime").JSX.Element;
export default TextareaControl;
