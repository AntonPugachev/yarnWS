import  {
  Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useRef, useState
} from 'react';
import './DatepickerCalendar.scss';

import {
  DateFormat,
  IDatepickerActivePeriod, IDatepickerDay, IDatepickerPeriodType, IDatepickerStack
} from './datepicker.types';
import { ArrowsChevronLeft } from '../../../../indexIcon';
import Tooltip from '../../Tooltip';
import {
  compareMonths,
  formatDate,
  getDaysForMonth,
  isCurrentDay,
  isCurrentMonth, months,
  stringToDate, weekDays
} from '../../../../utils/helpersDatePicker';
import { ITooltipProps } from '../../Tooltip/Tooltip';


interface IDatepickerCalendarProps {
  /** Значение */
  value: string;
  /** Функция измекнения значения */
  setInputValue: (value: string) => void;
  /** Функция скрытия календаря */
  toggleCalendar: Dispatch<SetStateAction<boolean>>;
  /** Минимальное значение */
  minDate?: Date;
  /** Максимальное значение */
  maxDate?: Date;
  /** Диапазон
   * @default false
  */
  range?: boolean;
  /** Локализация
   * @default ru
   */
  locale?: 'ru' | 'en';
  /** Формат даты
   * @default dd.mm.yyyy
   */
  format?: DateFormat;
  /** Разделяющий элемент */
  separator?: string;
  /** Массив неактиыных дней */
  disableWeekDays?: number[];
  /** Цвет тултипа */
  tooltipBackground?: ITooltipProps['background'];
}

const DatepickerCalendar: React.FC<IDatepickerCalendarProps> = ({
  value,
  setInputValue,
  toggleCalendar,
  minDate,
  maxDate,
  range,
  locale = 'ru',
  format = 'dd.mm.yyyy',
  separator = '-',
  disableWeekDays = [],
  tooltipBackground = 'white'
}: IDatepickerCalendarProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // -------------------------------------------------------------------------------------------------------------------

  const setCurrent = useCallback((): Date => {
    if (value && !range) {
      return stringToDate(value, format);
    }

    return new Date();
  }, [value, range]);

  const setRange = (): IDatepickerStack => {
    if (value && range) {
      const values = value.split(' - ');
      const from = values[0]?.includes('_') ? undefined : values[0];
      const to = values[1]?.includes('_') ? undefined : values[1];
      return [from ? stringToDate(from, format) : undefined, to ? stringToDate(to, format) : undefined];
    }

    return [undefined, undefined];
  };

  const [currentDate, setCurrentDate] = useState<Date>(setCurrent());
  const [rangeDates, setRangeDates] = useState<IDatepickerStack>([undefined, undefined]);

  useEffect(() => {
    if (range) {
      setRangeDates(setRange());
    } else {
      setCurrentDate(setCurrent());
    }
  }, [value, range]);

  // -------------------------------------------------------------------------------------------------------------------

  const onDateChange = (date: Date) => {
    if (range) {
      let dates: IDatepickerStack = [...rangeDates];

      if (dates[0] !== undefined && dates[1] !== undefined) {
        dates = [undefined, undefined];
      }

      if (dates[0] === undefined) {
        dates[0] = date;
        setInputValue(formatDate(date.getTime(), format).date + ` - __${separator}__${separator}____`);
      } else {
        dates[1] = date;

        if (dates[1].getTime() < dates[0]?.getTime()) {
          dates = [dates[1], dates[0]];
        }

        const newValue = `${formatDate(dates[0]?.getTime(), format).date} - ${formatDate(dates[1]?.getTime(), format).date}`;
        setInputValue(newValue);
        toggleCalendar(false);
      }
    } else {
      setInputValue(formatDate(date.getTime(), format).date);
      setCurrentDate(date);
      toggleCalendar(false);
    }

    setPeriodType('day');
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [activePeriod, setActivePeriod] = useState<IDatepickerActivePeriod>(getDaysForMonth(currentDate));

  useEffect(() => {
    if (!range) {
      setActivePeriod(getDaysForMonth(currentDate));

      if (minDate && currentDate.getTime() < minDate.getTime()) {
        setActivePeriod(getDaysForMonth(minDate));
      }

      if (maxDate && currentDate.getTime() > maxDate.getTime()) {
        setActivePeriod(getDaysForMonth(maxDate));
      }
    } else {
      if (minDate && rangeDates[0] && rangeDates[0].getTime() < minDate.getTime()) {
        setActivePeriod(getDaysForMonth(minDate));
      }

      if (maxDate && rangeDates[1] && rangeDates[1].getTime() > maxDate.getTime()) {
        setActivePeriod(getDaysForMonth(maxDate));
      }
    }
  }, [
    currentDate,
    range,
    minDate,
    maxDate
  ]);

  useEffect(() => {
    if (range) {
      if (rangeDates[1] !== undefined) {
        setActivePeriod(getDaysForMonth(rangeDates[1]));
      } else if (rangeDates[0] !== undefined) {
        setActivePeriod(getDaysForMonth(rangeDates[0]));
      } else {
        setActivePeriod(getDaysForMonth(new Date()));
      }
    }
  }, [rangeDates, range]);

  // -------------------------------------------------------------------------------------------------------------------

  const onBlur = (lastButton: boolean) => {
    if (lastButton) {
      toggleCalendar(false);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  const onDayClick = (date: Date) => {
    onDateChange(date);
  };

  const daysJSX = activePeriod.days.map(({
    period,
    date
  }: IDatepickerDay, i: number, array: IDatepickerDay[]) => {
    const periodClass = `rf-datepicker__calendar-day--${period}`;
    const isToday = new Date().toDateString() === date.toDateString();
    const rangeDayCondition = (rangeDates[0] && isCurrentDay(date, rangeDates[0])) || (rangeDates[1] && isCurrentDay(date, rangeDates[1]));
    const activeCondition = range ? rangeDayCondition : isCurrentDay(date, currentDate);
    const currentDayClass = activeCondition ? 'rf-datepicker__calendar-date--active' : isToday ? 'rf-datepicker__today-day' : '';

    const fromDateClass = rangeDates[0] && rangeDates[0]?.getTime() === date.getTime() ? 'rf-datepicker__calendar-date--from' : '';
    const toDateClass = rangeDates[1] && rangeDates[1]?.getTime() === date.getTime() ? 'rf-datepicker__calendar-date--to' : '';
    const inRangeClass = range && rangeDates[0] && rangeDates[1] &&
      (date.getTime() >= rangeDates[0].getTime() && date.getTime() <= rangeDates[1].getTime()) ?
      'rf-datepicker__calendar-tile--range rf-datepicker__calendar-date--range  ' : '';

    const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const disabledWeekDay = disableWeekDays.includes(d.getDay());
    const disabledMin = minDate && minDate.getTime() > d.getTime();
    const disabledMax = maxDate && maxDate.getTime() < d.getTime();
    const disabledClass = disabledWeekDay || disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';

    return (
      <button
        key={date.getTime()}
        type='button'
        className={`rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-day
          ${periodClass}
          ${currentDayClass}
          ${disabledClass} 
          ${fromDateClass}
          ${toDateClass} 
          ${inRangeClass}
        `}
        onClick={() => onDayClick(date)}
        onBlur={() => onBlur(i === array.length - 1)}
      >
        {date.getDate()}
      </button>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const onMonthClick = (e: React.MouseEvent, monthIndex: number) => {
    e.stopPropagation();
    setActivePeriod(getDaysForMonth(new Date(activePeriod.year, monthIndex)));
    setTimeout(() => {
      setPeriodType('day');
    });
  };

  const monthsJSX = months[locale].map((m: string, i: number, array: string[]) => {
    const d = new Date(activePeriod.year, i);
    const rangeMonthCondition = (rangeDates[0] && isCurrentMonth(d, rangeDates[0])) || (rangeDates[1] && isCurrentMonth(d, rangeDates[1]));
    const activeCondition = range ? rangeMonthCondition : isCurrentMonth(d, currentDate);
    const currentMonthClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';

    const fromMonthCondition = rangeDates[0] && isCurrentMonth(d, rangeDates[0]);
    const fromMonthClass = fromMonthCondition ? 'rf-datepicker__calendar-month-wrapper--from' : '';

    const toMonthClass = rangeDates[1] && isCurrentMonth(d, rangeDates[1]) ? 'rf-datepicker__calendar-month-wrapper--to' : '';
    const inRangeCondition = range && rangeDates[0] && rangeDates[1] &&
      (compareMonths(d, rangeDates[0]) >= 0 && compareMonths(d, rangeDates[1]) <= 0);
    const inRangeClass = inRangeCondition ?
      'rf-datepicker__calendar-tile--range rf-datepicker__calendar-month-wrapper--range' : '';

    const monthMs = 1000 * 3600 * 24 * 31;
    const disabledMin = minDate && ((minDate.getTime() - monthMs) > d.getTime());
    const disabledMax = maxDate && ((maxDate.getTime()) < d.getTime());
    const disabledClass = disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';

    return (
      <div key={m}
        className={`rf-datepicker__calendar-month-wrapper ${inRangeClass} ${fromMonthClass} ${toMonthClass}`}>
        <button
          type='button'
          className={`rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-month
        ${currentMonthClass} ${disabledClass}`}
          onClick={(e: React.MouseEvent) => onMonthClick(e, i)}
          onBlur={() => onBlur(i === array.length - 1)}>
          {m}
        </button>
      </div>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const stringYear = activePeriod.year.toString();
  const [decadeStart, setDecadeStart] = useState<number>(activePeriod.year - +stringYear[stringYear.length - 1]);
  useEffect(() => {
    setDecadeStart(activePeriod.year - +stringYear[stringYear.length - 1]);
  }, [activePeriod]);
  const years = [];

  for (let i = 0; i < 10; i++) {
    years.push(decadeStart + i);
  }

  const onYearClick = (e: React.MouseEvent, year: number) => {
    e.stopPropagation();
    setActivePeriod(getDaysForMonth(new Date(year, activePeriod.month)));
    setTimeout(() => {
      setPeriodType('month');
    });
  };

  const yearsJSX = years.map((y: number, i: number, array: number[]) => {
    const rangeMonthCondition = (rangeDates[0] && y === rangeDates[0].getFullYear()) ||
      (rangeDates[1] && y === rangeDates[1]?.getFullYear());
    const activeCondition = range ? rangeMonthCondition : activePeriod.year === y;
    const currentMonthClass = activeCondition ? 'rf-datepicker__calendar-date--active' : '';

    const fromYearClass = rangeDates[0] && rangeDates[0]?.getFullYear() === y ? 'rf-datepicker__calendar-year--from' : '';
    const toYearClass = rangeDates[1] && rangeDates[1]?.getFullYear() === y ? 'rf-datepicker__calendar-year--to' : '';
    const inRangeClass = range && rangeDates[0] && rangeDates[1] &&
      (y >= rangeDates[0]?.getFullYear() && y <= rangeDates[1]?.getFullYear()) ?
      'rf-datepicker__calendar-tile--range rf-datepicker__calendar-year--range' : '';

    const disabledMin = minDate && minDate.getFullYear() > y;
    const disabledMax = maxDate && maxDate.getFullYear() < y;
    const disabledClass = disabledMin || disabledMax ? 'rf-datepicker__calendar-date--disabled' : '';

    return (
      <div key={y}
        className={`rf-datepicker__calendar-year-wrapper ${inRangeClass} ${fromYearClass} ${toYearClass}`}>
        <button
          type='button'
          className={`rf-datepicker__calendar-tile rf-datepicker__calendar-date rf-datepicker__calendar-year
        ${currentMonthClass} ${disabledClass}`}
          onClick={(e: React.MouseEvent) => onYearClick(e, y)}
          onBlur={() => onBlur(i === array.length - 1)}>
          {y}
        </button>
      </div>
    );
  });


  // -------------------------------------------------------------------------------------------------------------------

  const onPeriodChange = (n: number) => {
    if (periodType === 'day') {
      let nextMonth = activePeriod.month + n;
      let nextYear = activePeriod.year;

      if (nextMonth > 11) {
        nextMonth = 0;
        nextYear++;
      }

      if (nextMonth < 0) {
        nextMonth = 11;
        nextYear--;
      }

      setActivePeriod(getDaysForMonth(new Date(nextYear, nextMonth)));
    }

    if (periodType === 'month') {
      setActivePeriod(getDaysForMonth(new Date(activePeriod.year + n, activePeriod.month)));
    }

    if (periodType === 'year') {
      setDecadeStart((decade: number) => decade + n * 10);
    }
  };

  // -------------------------------------------------------------------------------------------------------------------

  const [periodType, setPeriodType] = useState<IDatepickerPeriodType>('day');

  const periodTypeLabel: Record<IDatepickerPeriodType, ReactNode> = {
    day: <> {months[locale][activePeriod.month]} </>,
    month: <> {activePeriod.year} </>,
    year: <> {decadeStart} - {decadeStart + 9} </>
  };

  const onPeriodTypeChange = (periodType: IDatepickerPeriodType) => () => {
    setPeriodType(periodType);
  };

  // -------------------------------------------------------------------------------------------------------------------

  const prevYearDisabled = !!minDate && minDate.getFullYear() > activePeriod.year - 1;
  const nextYearDisabled = !!maxDate && maxDate.getFullYear() < activePeriod.year + 1;

  const arrowsDisabled = {
    prevArrowDisabled: {
      day: prevYearDisabled && !!minDate && minDate.getMonth() > activePeriod.month - 1,
      month: prevYearDisabled,
      year: !!minDate && minDate.getFullYear() > decadeStart
    },
    nextArrowDisabled: {
      day: nextYearDisabled && !!maxDate && maxDate.getMonth() < activePeriod.month + 1,
      month: nextYearDisabled,
      year: !!maxDate && maxDate.getFullYear() < decadeStart + 10
    }
  };

  const prevArrowDisabled: boolean = arrowsDisabled.prevArrowDisabled[periodType];
  const nextArrowDisabled: boolean = arrowsDisabled.nextArrowDisabled[periodType];

  const d = new Date();
  const today = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const disabledMin = !!minDate && minDate.getTime() > today.getTime();
  const disabledMax = !!maxDate && maxDate.getTime() < today.getTime();

  // -------------------------------------------------------------------------------------------------------------------

  const getButtonWithTooltip = (period: IDatepickerPeriodType, tipText: string) => (
    <Tooltip
      background={tooltipBackground}
      className='rf-datepicker-calendar__tooltip'
    >
      <button type='button' className='rf-datepicker-calendar__button rf-datepicker-calendar__label-button'
        onClick={onPeriodTypeChange(period)}>
        <span className='rf-datepicker__calendar-label'>
          {periodTypeLabel[period === 'month' ? 'day' : 'month']}
        </span>
      </button>
      <div>{tipText}</div>
    </Tooltip>
  );


  return (
    <div className='rf-datepicker__calendar' ref={contentRef}>
      <header className='rf-datepicker__calendar-header'>
        <div className='rf-datepicker-calendar__control'>
          <button
            type='button'
            className='rf-datepicker-calendar__button rf-datepicker-calendar__button--arrow rf-datepicker-calendar__button-prev'
            disabled={prevArrowDisabled}
            onClick={() => onPeriodChange(-1)}
          >
            <span className='rf-datepicker__calendar-left'>
              <ArrowsChevronLeft />
            </span>
          </button>

          <div className='rf-datepicker-calendar__control__button-section'>
            {getButtonWithTooltip('month', 'Выбор месяца')}
            {getButtonWithTooltip('year', 'Выбор года')}
          </div>

          <button
            type='button'
            className='rf-datepicker-calendar__button rf-datepicker-calendar__button--arrow rf-datepicker-calendar__button-next'
            disabled={nextArrowDisabled}
            onClick={() => onPeriodChange(1)}
          >
            <span className='rf-datepicker__calendar-right'>
              <ArrowsChevronLeft />
            </span>
          </button>
        </div>
      </header>

      <div>
        {periodType === 'day' && (
          <div className='rf-datepicker__calendar-week'>
            {weekDays[locale].map((d: string) =>
              <div className='rf-datepicker__calendar-tile rf-datepicker__calendar-week-day' key={d}>{d}</div>)
            }
          </div>
        )}

        <div className='rf-datepicker__calendar-periods'>
          {periodType === 'day' && daysJSX}
          <div className='rf-datepicker__calendar-periods-month'>
            {periodType === 'month' && monthsJSX}
          </div>
          <div className='rf-datepicker__calendar-periods-year'>
            {periodType === 'year' && yearsJSX}
          </div>
        </div>
      </div>
    </div >
  );
};

export default DatepickerCalendar;
