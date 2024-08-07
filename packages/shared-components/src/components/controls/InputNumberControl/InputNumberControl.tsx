
import  { ReactNode } from 'react';
import { IControlProps, IPartialFormGroup } from '../types';
import FormControl from '../FormControl';
import InputNumber, { IInputNumberProps } from '../../atoms/InputNumber/InputNumber';
import { useHookFormController } from '..';

export type IInputNumberControlProps = IInputNumberProps & IControlProps & {
  formGroupProps?: IPartialFormGroup;
  label?: ReactNode;
};

const InputNumberControl = ({
  name, rules, defaultValue, control, formState, shouldUnregister, label, formGroupProps, ...props
}: IInputNumberControlProps) => {
  const Controller = useHookFormController();

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      shouldUnregister={shouldUnregister}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, ...fieldProps } }) => (
        <FormControl name={name} label={label} formState={formState} {...formGroupProps}>
          <InputNumber {...props} {...fieldProps} defaultValue={value} onInputChange={value => onChange(+value.replace(/\s/g, ''))} />
        </FormControl>
      )}
    />
  );
};

export default InputNumberControl;
