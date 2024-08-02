import { IFileData, IOption } from '../../../types';
import { IFormProviderControlProps } from './FormProviderControl';
export declare const RATE_OPTIONS: IOption[];
export type IFormExampleData = {
    'email': string;
    'firstName': string;
    'lastName': string;
    'year': number | string;
    'date-birth': Date | string | number;
    'rate': IOption[];
    'password': string;
    'password-confirm': string;
    'comment': {
        debounceString: string;
        attachedFiles: IFileData[];
    };
    'text': string;
    'vertical-group': string;
    'vertical-name': string;
    'privacy': boolean;
    'phone': string;
    'rates': number;
    'switch': boolean;
    'time': number | string;
};
export interface IFormExampleProps<T> extends Omit<IFormProviderControlProps<T>, 'children'> {
    withReset?: boolean;
}
declare const FormExample: ({ withReset, ...props }: IFormExampleProps<any>) => import("react/jsx-runtime").JSX.Element;
export default FormExample;
