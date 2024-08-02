import { ReactNode } from 'react';
import './Stepper.scss';
type StepperVariant = 'vertical' | 'horizontal';
export type IStepperProps = {
    /** Вариант отображения вертикальный/горизонтальный
     * @default horizontal
     */
    variant?: StepperVariant;
    /** Активный шаг */
    value?: number;
    /** Возможность перемещаться по шагам
     * @default false
     */
    readonly?: boolean;
    /** Список шагов */
    children?: ReactNode;
    /** Изменение шага */
    onChange?: (index: number) => void;
};
export type IStepperContext = IStepperProps & {
    lastCompletedStep?: number;
};
export declare const StepperContext: import("react").Context<IStepperContext>;
export declare const useStepper: () => IStepperContext;
declare const Stepper: {
    ({ variant: defaultVaiant, children, readonly, onChange, value }: IStepperProps): import("react/jsx-runtime").JSX.Element;
    Step: ({ index, status, disabled, children, onClick }: import("./Step/Step").IStepProps) => import("react/jsx-runtime").JSX.Element;
};
export default Stepper;
