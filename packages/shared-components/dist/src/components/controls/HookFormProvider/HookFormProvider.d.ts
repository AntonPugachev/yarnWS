import { ReactElement, ReactNode } from 'react';
import { ControllerProps } from 'react-hook-form';
type ControllerType = (props: ControllerProps) => ReactElement;
export interface IHookFormProviderProps {
    children: ReactNode;
    controller: ControllerType;
}
export declare const HookFormContext: import("react").Context<{
    controller?: ControllerType;
}>;
export declare const useHookFormController: () => ControllerType;
declare const HookFormProvider: ({ children, controller }: IHookFormProviderProps) => import("react/jsx-runtime").JSX.Element;
export default HookFormProvider;
