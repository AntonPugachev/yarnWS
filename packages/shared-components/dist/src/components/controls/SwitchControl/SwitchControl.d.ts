import { IControlProps, IPartialFormGroup } from '../types';
import { ISwitchProps } from '../../atoms/Switch/Switch';
export type ISwitchControlProps = ISwitchProps & IControlProps & {
    formGroupProps?: IPartialFormGroup;
};
declare const SwitchControl: ({ name, rules, defaultValue, control, formState, shouldUnregister, formGroupProps, ...props }: ISwitchControlProps) => import("react/jsx-runtime").JSX.Element;
export default SwitchControl;
