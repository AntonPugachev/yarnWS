import { Dispatch, SetStateAction } from 'react';
export interface ILayoutContextValue {
    isColumnVisible: boolean;
    setColumnVisible: Dispatch<SetStateAction<boolean>>;
}
export declare const LayoutContext: import("react").Context<ILayoutContextValue | null>;
export declare const useLayoutContext: () => ILayoutContextValue;
