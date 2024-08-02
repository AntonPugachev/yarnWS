import { ReactNode } from 'react';
import { FieldValues, FormState } from 'react-hook-form';
import { IFormGroup } from '../../atoms/FormGroup/FormGroup';
export interface IFormErrorControlProps extends Omit<IFormGroup, 'invalid' | 'errorMessage'> {
    name: string;
    children: ReactNode;
    formState?: FormState<FieldValues>;
}
declare const FormControl: ({ name, children, formState, ...props }: IFormErrorControlProps) => import("react/jsx-runtime").JSX.Element;
export default FormControl;
