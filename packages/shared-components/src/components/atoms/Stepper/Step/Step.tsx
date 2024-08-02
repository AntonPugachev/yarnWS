import  { ReactNode, useMemo } from 'react';
import {
  StatusInformation, StatusReleaseSecondary, StatusWarning
} from '../../../../indexIcon';
import { classnames } from '../../../../utils/classnames';
import { useStepper } from '../Stepper';

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

const icons: Record<StepType, ReactNode> = {
  'default': <></>,
  'warning': <StatusWarning size='xs' />,
  'error': <StatusInformation className='rf-step__icon-status--danger' size='xs' />,
  'inactive': <></>,
};

const Step = ({ index = 0, status = 'default', disabled, children, onClick }: IStepProps) => {
  const { value = 0, variant, readonly = false, lastCompletedStep, onChange } = useStepper();

  const handleClick = () => {
    if (!disabled && !readonly) {
      onClick?.(index);
      onChange?.(index);
    }
  };

  const isCurrent = useMemo(() => value === index, [value, index]);
  const isCompleted = useMemo(() => lastCompletedStep !== undefined ? lastCompletedStep >= index : false, [lastCompletedStep, index]);

  return (
    <div
      role='button'
      onClick={handleClick}
      className={classnames(
        'rf-step',
        `rf-step--${status}`,
        `rf-step__variant--${variant}`,
        disabled && 'rf-step--disabled',
        isCurrent && 'rf-step--current',
        isCompleted && 'rf-step--completed',
        readonly && 'rf-step--readonly',
      )}
    >
      <div className='rf-step__header'>
        <div className='rf-step__icon'>
          <div className='rf-step__icon-status'>
            {isCompleted ?
              <StatusReleaseSecondary className='rf-step__icon-status--active' size='xs' /> :
              icons[status]
            }
          </div>
        </div>
        <div className='rf-step__line'></div>
      </div>

      <div className='rf-step__content'>
        {children}
      </div>
    </div>
  );
};

export default Step;
