import  {
  FC, InputHTMLAttributes, useRef, useMemo
} from 'react';
import './StatusPicker.scss';


export interface IPickerProps extends InputHTMLAttributes<HTMLLabelElement> {
  /** Получить значение оценки*/
  getRate?: (value: number, arr: string[][], pos: number) => number | void
  /** Схема компонентов*/
  pickedValues: Array<Array<string>>
  /** Позиция комонента*/
  position: number
}

type StatusLabelType = {
  value: number,
  name: string
}

// FIXME: Добавить управление с клавиатуры
const StatusPicker: FC<IPickerProps> & { id: number } = ({ getRate = () => { }
  , pickedValues
  , position,
  ...props }:
  IPickerProps) => {
  const id = useMemo(() => {
    return StatusPicker.id++;
  }, []);

  const statusColors = ['low', 'medium', 'high'];
  const prevCurrentIndex = useRef(-1);

  const clickStatusHandler = (selectIndex: number /* row*/, currentIndex: number /* col*/) => (e: React.MouseEvent<HTMLLabelElement>) => {
    const target = e.target as HTMLLabelElement;
    const res = +target.dataset.value!;


    if (pickedValues[position][currentIndex] === '') {
      let newArr = [...pickedValues];


      if (pickedValues[position].find(i => i === '0')) {
        pickedValues.map((pv, index) => {

          if (index !== selectIndex) {
            pv[prevCurrentIndex.current] = '';
          }
        });
      }

      prevCurrentIndex.current = currentIndex;
      newArr = pickedValues.map((pv, index) => {
        if (index === selectIndex) {
          pv = pv.map((a, i) => res - 1 === i ? a = '0' : a !== 'X' ? '' : 'X');
          return pv;
        }

        return pv = pv.map((a, i) => res - 1 === i ? a = 'X' : a);
      });
      getRate(res, newArr, position);
    }

    if (pickedValues[position][currentIndex] === '0') {
      const newArr = pickedValues.map((pv, index) => {
        return pv.map((p, index) => {
          if (index === currentIndex) {
            return p = '';
          }

          return p;
        });


      });
      getRate(res, newArr, position);
    }

  };


  const status: StatusLabelType[] = [
    {
      value: 1,
      name: 'Низкий'
    },
    {
      value: 2,
      name: 'Средний'
    },
    {
      value: 3,
      name: 'Высокий'
    }
  ];

  const statusComponent = status.map((item: StatusLabelType, index: number) => {
    const statusComponentLabelClass = `status-picker__label--${pickedValues[position][index] !== '' ?
      pickedValues[position][index] === '0' ?
        statusColors[item.value - 1] :
        'disabled' :
      ''}`;

    return <div
      key={item.value}
      className='status-picker__items'
    >
      <input
        type='radio'
        id={`StatusPicker-${id}-${item.value.toString()}`}
        value={item.value} />
      <label
        data-testid={`${(position + 1).toString() + index}`}
        data-value={item.value.toString()}
        className={statusComponentLabelClass}
        onClick={clickStatusHandler(position, index)}
        htmlFor={`StatusPicker-${id}-${item.value.toString()}`}
        {...props}>
        {item.name}
      </label>
    </div >;
  });


  return (
    <div className={'status-picker'} >
      < div className='status-picker__container' >
        {statusComponent}
      </ div>
    </div >
  );
};

StatusPicker.id = 0;

export default StatusPicker;
