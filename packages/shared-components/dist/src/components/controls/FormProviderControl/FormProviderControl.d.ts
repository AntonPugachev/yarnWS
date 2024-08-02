import { ReactNode } from 'react';
import { SubmitHandler, UseFormReturn } from 'react-hook-form';
export interface IFormProviderControlProps<T> {
    children: ReactNode;
    className?: string;
    formMethods: UseFormReturn<T>;
    onSubmit: SubmitHandler<any>;
}
declare const FormProviderControl: ({ children, className, formMethods, onSubmit, }: IFormProviderControlProps<any>) => import("react/jsx-runtime").JSX.Element;
export default FormProviderControl;
