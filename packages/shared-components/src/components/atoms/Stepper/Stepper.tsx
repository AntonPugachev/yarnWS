import  {
  createContext, ReactNode, useContext, useEffect, useState
} from 'react';
import Step from './Step';
import { classnames } from '../../../utils/classnames';

import './Stepper.scss';
import useWindowSize from '../../../hooks/useWindowSize';
import useDebounce from '../../../hooks/useDebounce';

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
}

export type IStepperContext = IStepperProps & {
  lastCompletedStep?: number;
}

export const StepperContext = createContext<IStepperContext>({
  variant: 'horizontal',
  value: undefined,
  readonly: false,
  lastCompletedStep: undefined,
  onChange: () => {}
});

export const useStepper = () => useContext(StepperContext);

const MOBILE_WIDTH = 968;

const Stepper = ({ variant: defaultVaiant = 'horizontal', children, readonly = false, onChange, value }: IStepperProps) => {
  const [variant, setVariant] = useState(defaultVaiant);
  const [lastCompletedStep, setLastCompletedStep] = useState<number>();

  const { width } = useWindowSize();

  useEffect(() => {
    if (value) {
      setLastCompletedStep((prevStep = 0) => prevStep < value - 1 ? value - 1 : prevStep);
    }
  }, [value]);

  useDebounce(width, 300, () => {
    if (width) {
      const activeVariant: StepperVariant = width >= MOBILE_WIDTH ? defaultVaiant : 'vertical';

      if (activeVariant !== variant) {
        setVariant(activeVariant);
      }
    }
  });

  return (
    <div className={classnames('rf-stepper', `rf-stepper--${variant}`)}>
      <StepperContext.Provider value={{
        onChange,
        value,
        variant,
        readonly,
        lastCompletedStep
      }}>
        {children}
      </StepperContext.Provider>
    </div>
  );
};

Stepper.Step = Step;

export default Stepper;
