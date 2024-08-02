import { IStepProps } from './Step/Step';

export const stepper: IStepProps[] = [
  {
    index: 0,
    children: 'Выбор товаров',
    status: 'default'
  },
  {
    index: 1,
    children: 'Корзина',
    status: 'error'
  },
  {
    index: 2,
    children: 'Оформление заказа (warning)',
    status: 'warning'
  },
  {
    index: 3,
    children: 'inactive',
    status: 'inactive'
  },
  {
    index: 4,
    children: 'Disabled',
    status: 'default',
    disabled: true
  }
];
