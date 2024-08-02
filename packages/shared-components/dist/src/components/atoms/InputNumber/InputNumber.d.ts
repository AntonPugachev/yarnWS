import './InputNumber.scss';
import { IInputProps } from '../Input/Input';
export interface IInputNumberProps extends IInputProps {
    defaultValue?: string | number;
    separator?: string;
    floatPoints?: number;
    groupBy?: number;
    max?: number;
    onInputChange?: (value: string) => void;
}
declare const InputNumber: import("react").ForwardRefExoticComponent<Omit<IInputNumberProps, "ref"> & import("react").RefAttributes<HTMLDivElement | null>>;
export default InputNumber;
