import { ReactNode } from 'react';
import './Step.scss';
export type StepType = 'default' | 'error' | 'warning' | 'inactive';
export interface IStepProps {
    /** Статус шага */
    status?: StepType;
    /**
     * Заблокирован выбор или нет
     * @default false
     */
    disabled?: boolean;
    /** Контент */
    children: ReactNode;
    /** Индекс шага */
    index: number;
    /** Коллбек клика на шаг */
    onClick?: (index: number) => void;
}
declare const Step: ({ index, status, disabled, children, onClick }: IStepProps) => import("react/jsx-runtime").JSX.Element;
export default Step;
