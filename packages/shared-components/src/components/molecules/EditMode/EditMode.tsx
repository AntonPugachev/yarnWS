import  {
  useCallback, useEffect, useMemo, useRef, useState
} from 'react';
import Button from '../../atoms/Button';
import FormGroup from '../../atoms/FormGroup';
import Input, { IInputProps } from '../../atoms/Input';
import {
  AllClose, AllEdit, AllSuccess
} from '../../../indexIcon';
import { classnames } from '../../../utils/classnames';
import { IFormGroup } from '../../atoms/FormGroup/FormGroup';

import './EditMode.scss';

export interface IEditModeProps extends Omit<IInputProps, 'onChange'> {
  /** Значене по умолчанию  */
  defaultValue: string;
  /** Открыт ли компонент для редактирования
   * @default false
   */
  defaultEdited?: boolean;
  /** Функция обратного вызова при изменении инпута */
  onChange?: (value: string) => void;
  /** Функция на сохранение значения */
  onSave?: (value: string) => void;
  /** Пропсы для компонента FormGroup (Передача лейбла, валидации и др.) */
  fromGroupProps?: Omit<IFormGroup, 'children'>;
}

const EditMode = ({ defaultValue, onSave, onChange, fromGroupProps = {}, defaultEdited = false, ...props }: IEditModeProps) => {
  const initialValue = useRef<string>(defaultValue);
  const inputRef = useRef<HTMLDivElement>(null);
  const [value, setValue] = useState(defaultValue);
  const [isEdit, setIsEdit] = useState(defaultEdited);

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.getElementsByTagName('input').item(0)?.focus();
    }

  }, [isEdit]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange?.(e.target.value);
  }, []);

  const handleSave = useCallback(() => {
    onSave?.(value);
    setIsEdit(false);
    initialValue.current = value;
  }, [value]);

  const handleCancel = useCallback(() => {
    setIsEdit(false);
    setValue(initialValue.current);
    onChange?.(initialValue.current);
  }, []);

  const memoEditView = useMemo(() => {
    return (
      <FormGroup {...fromGroupProps}>
        <div className={'rf-edit-mode__edit'}>
          <Input
            ref={inputRef}
            {...props}
            value={value}
            onChange={handleChange}
          />

          <div className='rf-edit-mode__actions'>
            <Button
              buttonType='secondary'
              startAdornment={<AllSuccess />}
              onClick={handleSave}
              className={classnames('rf-edit-mode__btn', props.invalid && 'rf-edit-mode__btn--disabled')}
              disabled={props.invalid}
              title='Сохранить'
            />
            <Button
              buttonType='secondary'
              startAdornment={<AllClose />}
              onClick={handleCancel}
              className='rf-edit-mode__btn'
              title='Отменить'
            />
          </div>
        </div>
      </FormGroup>
    );
  }, [
    isEdit,
    props,
    handleChange,
    handleCancel,
    handleSave
  ]);

  return (
    <div className={classnames('rf-edit-mode', isEdit && 'rf-edit-mode--edit', props.disabled && 'rf-edit-mode--disabled')}>
      {
        isEdit ? <>{memoEditView}</> :
          <div className='rf-edit-mode__content'>
            <FormGroup {...fromGroupProps}>
              <span className='rf-edit-mode__text'>{defaultValue}</span>
            </FormGroup>

            <div className='rf-edit-mode__actions'>
              <Button
                buttonType='text'
                startAdornment={<AllEdit />}
                onClick={() => setIsEdit(true)}
                className='rf-edit-mode__btn rf-edit-mode__btn-edit'
                disabled={props.disabled}
                title='Редактировать'
              />
            </div>
          </div>
      }
    </div>
  );
};

export default EditMode;
