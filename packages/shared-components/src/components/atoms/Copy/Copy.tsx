import  { useMemo, useState } from 'react';
import { AllCopy } from '../../../indexIcon';
import { IIconProps } from '../../../types';
import { classnames } from '../../../utils/classnames';
import Toast from '../Toast';
import { IToastProps } from '../Toast/Toast';
import Tooltip, { ITooltipProps } from '../Tooltip/Tooltip';

import './Copy.scss';

export interface ICopyProps extends IIconProps, Pick<IToastProps, 'containerRef'> {
  /** Текст при наведении */
  tooltipLabel: string;
  /** Скопированный текст */
  copyMessage: string;
  /** Сообщение после копирования */
  successCopyMessage: string;
  /** Заблокировано копирование
   * @default faslse
   */
  disabled?: boolean;
  /** Пропсы компонента Tooltip */
  tooltipProps?: Omit<ITooltipProps, 'children'>;
}

// TODO: заменить в других компонентах
const Copy = ({ tooltipLabel, copyMessage, successCopyMessage, disabled, tooltipProps, containerRef, ...props }: ICopyProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsCopied(true);
    navigator.clipboard.writeText(copyMessage);
  };

  const toastStyle = useMemo(() => containerRef ? { top: '-50px' } : {}, [containerRef]);

  return (
    <button
      type='button'
      disabled={disabled}
      className={classnames('rf-copy', disabled && 'rf-copy--disabled')}
      /** При типе 'button' у кнопки необходимо навесить собственный обработчик,
      иначе событие focus с enter не срабатывает при переходе по tab */
      onClick={onCopy}
    >
      <Tooltip {...tooltipProps}>
        <AllCopy onClick={onCopy} className='rf-copy__icon' aria-label='Копировать' {...props} />
        <div>{tooltipLabel}</div>
      </Tooltip>

      <Toast isVisible={isCopied} setVisibility={setIsCopied} containerRef={containerRef} style={toastStyle}>
        <p className='rf-copy__toast-message'>{successCopyMessage}</p>
      </Toast>
    </button>
  );
};

export default Copy;
