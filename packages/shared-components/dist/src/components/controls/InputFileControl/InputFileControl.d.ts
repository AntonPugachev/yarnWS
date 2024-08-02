import { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import { IFileInputProps } from '../../atoms/InputFile/InputFile';
export type IInputFileControlProps = Omit<IFileInputProps, 'setFile'> & IControlProps & {
    formGroupProps?: IPartialFormGroup;
    label?: ReactNode;
};
declare const InputFileControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props }: IInputFileControlProps) => import("react/jsx-runtime").JSX.Element;
export default InputFileControl;
