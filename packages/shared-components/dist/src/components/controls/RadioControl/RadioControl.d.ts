import { IControlProps, IPartialFormGroup } from '../types';
import { IRadioProps } from '../../atoms/Radio/Radio';
export type IRadioControlProps = IRadioProps & Omit<IControlProps, 'defaultValue'> & {
    formGroupProps?: IPartialFormGroup;
};
declare const RadioControl: ({ name, rules, defaultChecked, control, formState, shouldUnregister, formGroupProps, ...props }: IRadioControlProps) => import("react/jsx-runtime").JSX.Element;
export default RadioControl;
