// eslint-disable-next-line object-curly-newline
import  { FC, ReactNode, RefObject, useCallback, useEffect, useRef, useState, useMemo } from 'react';
import InfiniteScroll, { Props as IInfiniteScrollProps } from 'react-infinite-scroll-component';
import { Manager, Reference } from 'react-popper';
import './Select.scss';

import { DropdownPosition, IOption } from '../../../types';
import Chip from '../Chip';

import { ArrowsChevronDown, AllClose } from '../../../indexIcon';
import Checkbox from '../Checkbox/Checkbox';
import { classnames } from '../../../utils/classnames';
import Dropdown from '../Dropdown';
import Preloader from '../Preloader';
import usePrevious from '../../../hooks/usePrevious';

export interface ISelectProps<T extends HTMLElement = HTMLDivElement> {
  /** Варианты выбора */
  options: IOption[];
  /** Изменение значения */
  onChange: (option: IOption[]) => void;
  /** Значение */
  values: IOption[];
  /** Поиск внутри селекта
   * @param query - строка поиска
   * @param isPagination - указывает что изменилась пагинация
   */
  onSearch?: (query: string, isPagination?: boolean) => void;
  /**
   * Множественный выбор
   * @default false
   *  */
  multiselect?: boolean;
  /** Плейсхолдер */
  placeholder?: string;
  /**
   *  Запрещает вводить текст
   *  @default false
   */
  readOnly?: boolean;
  /**
   * залочен или нет
   * @default false
   *  */
  disabled?: boolean;
  /** Максимальное количество выбранных вариантов при multiselect */
  maxOptions?: number | undefined;
  /**
   * Прелоудер при ленивой загрузке
   * @default false
   *  */
  preloader?: boolean;
  /**
   * Очистить селект при выборе значения
   * @default false
   * */
  clearOnSelect?: boolean;
  /** Любое изменяемое значение (зависимость). При изменении этого параметра очищается селект */
  clearHook?: any;
  /**
   * Вид селекта
   * @default 'base'
   *  */
  variant?: 'base' | 'tag' | 'menu';
  /**
   * Переводит селект в невалидный статус
   * @default false
   *  */
  invalid?: boolean;
  /** Указывает будет ли селект асинхронным
   * Если значение указано true, тогда нужно передавать infinityScrollProps
   * @default false
   */
  isAsync?: boolean;
  /** Пропсы для infinityScroll
   * @requires dataLength текущая длина массива
   * @requires hasMore стоит ли еще загружать данные
   */
  infinityScrollProps?: Omit<IInfiniteScrollProps, 'children' | 'next' | 'scrollableTarget' | 'loader'>;
  /**
   * Расположение
   * @default 'bottom'
   *  */
  position?: DropdownPosition;
  /** Событие скролла для выпадающего списка */
  onScroll?: (e: React.UIEvent) => void;
  startAdornment?: ReactNode | undefined;
  endAdornment?: ReactNode | undefined;
  /** Максимальная ширина выпадающего меню  */
  dropdownMaxWidth?: number | string;
  /** Сыылка на контейнер портала */
  containerRef?: RefObject<T>;
  /**
   * Цвет селекта
   * @default 'white'
   * */
  backgroundColor?: 'white' | 'gray'
  /**
   * Размер кнопки меню
   * @default 'm'
   * */
  menuVariantSize?: 's' | 'm';
}

const Select: FC<ISelectProps> & { id: number } = ({
  options,
  onChange,
  invalid = false,
  onSearch,
  values = [],
  multiselect = false,
  placeholder = '',
  variant = 'base',
  disabled = false,
  readOnly = variant === 'menu',
  maxOptions = undefined,
  preloader = false,
  clearOnSelect = false,
  clearHook,
  isAsync,
  infinityScrollProps,
  position = variant === 'menu' ? 'bottom-end' : 'bottom',
  endAdornment,
  startAdornment,
  onScroll,
  dropdownMaxWidth,
  containerRef,
  backgroundColor = 'white',
  menuVariantSize = 'm'
}: ISelectProps) => {
  const id = useMemo(() => {
    return Select.id++;
  }, []);

  const [showDropdown, setShowDropdown] = useState(false);
  const toggleRef = useRef<HTMLDivElement>(null);
  const [isOnMove, setIsonMove] = useState<boolean>(false);
  const [isOnActive, setIsonActive] = useState<boolean>(false);
  const firstElementPosition = useRef<number>(0);
  const prevShowDropDown = usePrevious(showDropdown) || false;

  const [inputValue, setInputValue] = useState<string>(() => (values.length > 0 && !multiselect ? values[0].label : ''));
  const [selectValues, setSelectValues] = useState<IOption[]>(() => values);
  /** Очистка селекта */
  const onClear = () => {
    setInputValue('');

    if (!multiselect) {
      setSelectValues([]);
    }

    onSearch && onSearch('');
  };

  const onClearSelectedValues = () => {
    onChange([
      {
        label: '',
        value: ''
      }
    ]);
  };

  const onClose = useCallback(() => {
    setShowDropdown(false);
  }, []);

  const onOpen = useCallback(() => {
    if (!disabled) {
      setShowDropdown(true);
    }
  }, [disabled]);

  const onReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClear();
    onClearSelectedValues();
    onOpen();
  };


  // -------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    setInputValue(values.length > 0 && !multiselect ? values[0].label : '');
  }, [values]);

  /*   useEffect(() => {
    const onClick = (e: React.MouseEvent) => clickRef.current!.contains(e.target as Node) || console.log('клик вне компонента');
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []); */

  /** Очистка при изменении извне через clearHook */
  useEffect(() => {
    if (!multiselect) {
      setSelectValues([]);
    }

    if (clearHook === undefined) {
      return;
    }

    setInputValue('');
    onSearch && onSearch('');
  }, [clearHook]);

  // -------------------------------------------------------------------------------------------------------------------

  /** Поиск в селекте */
  const onSelectSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (readOnly) {
      return;
    }

    if (onSearch) {
      onSearch(inputValue);
      return;
    }

    const filtered = options.filter((o: IOption) => o.label.toLowerCase().includes(inputValue.toLowerCase()));
    setFilteredOptions(filtered);
  }, [inputValue]);

  // -------------------------------------------------------------------------------------------------------------------


  useEffect(() => {

    setSelectValues(values);

  }, [values]);


  const [selectedMap, setSelectedMap] = useState<Record<string, boolean>>({});

  useEffect(() => {


    const map: Record<string, boolean> = selectValues.reduce((acc: Record<string, boolean>, o: IOption) => {
      acc[o.value] = true;
      return acc;
    }, {});
    setSelectedMap(map);

    if (clearOnSelect) {
      setInputValue('');
    }


    if (multiselect && selectValues.length === 1) {
      toggleRef.current!.getBoundingClientRect().y = firstElementPosition.current;
    }
  }, [selectValues]);

  const onValueChange = (option: IOption) => {
    let result = undefined;

    if (multiselect) {


      const index = selectValues.findIndex((o: IOption) => option.value === o.value);

      if (index >= 0) {
        result = selectValues.filter((_: IOption, i: number) => i !== index);
      } else {
        if (typeof maxOptions === 'number' ? selectValues.length < maxOptions : true) {
          result = [...selectValues, option];
        }
      }
    } else {
      result = [option];
    }

    if (result) {
      setSelectValues(result);
      onChange(result);

    }
  };

  const hasInfinityScroll = typeof onSearch === 'function';

  // -------------------------------------------------------------------------------------------------------------------

  const [filteredOptions, setFilteredOptions] = useState<IOption[]>([]);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  // -------------------------------------------------------------------------------------------------------------------


  const listJSX = filteredOptions.map((o: IOption) => {
    const optionDisabled = o.disabled || false;
    const active = selectedMap[o.value] || false;


    const handleChange = (e: React.MouseEvent | React.ChangeEvent) => {


      e.stopPropagation();
      onValueChange(o);

      if (!multiselect) {
        setInputValue(clearOnSelect ? '' : o.label);
        onClose();
      } else {
        setInputValue('');
      }
    };

    const disabledClass = optionDisabled ? 'rf-select__list-element--disabled' : '';
    const activeClass = active ? 'rf-select__list-element--active' : '';

    let label: ReactNode = o.label;

    // TODO: думаю это можно вынести в отдельный компонент (Highlighter)
    if (inputValue) {
      const indexStart = o.label.toLowerCase().indexOf(inputValue.toLowerCase());

      if (indexStart >= 0) {
        const indexEnd = indexStart + inputValue.length - 1;
        let left = '';
        let query = '';
        let right = '';

        for (let i = 0; i < o.label.length; i++) {
          if (i < indexStart) {
            left += o.label[i];
            continue;
          }

          if (i >= indexStart && i <= indexEnd) {
            query += o.label[i];
            continue;
          }

          right += o.label[i];
        }

        label = (
          <>
            {left}
            <span title={query} className='rf-select__list-element--query'>
              {query}
            </span>
            {right}
          </>
        );
      }
    }

    return (
      <div data-testid={`rf-select__list-element-${o.value}`} className={`rf-select__list-element ${disabledClass} ${activeClass}`} key={o.value}>
        {multiselect ? (
          <Checkbox titleAtt={o.label} label={label} checked={active} onChange={handleChange} fullWidth />
        ) : (
          <div title={o.label} className='rf-select__list-element-single' onClick={handleChange}>
            {label}
          </div>
        )}
      </div>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const noop = () => { };

  const inputElement = <input
    autoSave='false'
    autoComplete='off'
    data-testid='rf-select__input'
    className={`rf-select__input ${multiselect && selectValues.length ? 'rf-select__input--multiselect' : ''}
     ${variant === 'menu' ? `rf-select__menu${disabled ? '--disabled' : ''} rf-select__menu--${menuVariantSize}` : ''} ${isOnMove && variant === 'menu' ? 'rf-button__hover' : ''}`}
    onChange={onSelectSearch}
    value={inputValue}
    disabled={disabled}
    readOnly={readOnly}
    placeholder={
      multiselect && selectValues.length ? '' : options.length ? placeholder : ''
    }
  />;

  const tagsRef = useRef<HTMLDivElement>(null);

  const tagsJSX = multiselect && selectValues.length > 0 && (


    <div className='rf-select__tags' onClick={() => !disabled && onOpen()}>
      {selectValues.map((t: IOption) => (
        <div ref={tagsRef} className={classnames('rf-select__tag')} key={t.value}>
          <Chip type='secondary' size='xs' onRemove={() => onValueChange(t)} onClick={noop} disabled={disabled}>
            {t.label}
          </Chip>
        </div>
      ))}
      <div className={classnames('rf-select__input--multiselect')}>
        {inputElement}
      </div>
    </div>
  );


  // -------------------------------------------------------------------------------------------------------------------

  const closeButton = !disabled && !readOnly && inputValue.length > 0 && (
    <button
      type='button'
      className={`rf-select__button${multiselect && selectValues.length ? '--multiselect' : ''}`}
      onClick={onReset}
      aria-label='Сбросить'
    >
      <AllClose />
    </button>
  );

  const onChevronClick = (e: React.MouseEvent) => {
    console.log(selectValues);

    e.stopPropagation();
    setShowDropdown((state: boolean) => !state);
  };

  const onMouseMoveHandler = (e: React.MouseEvent) => {
    setIsonMove(true);
  };

  const onMouseLeaveHandler = (e: React.MouseEvent) => {
    setIsonMove(false);
  };


  useEffect(() => {

    if (!showDropdown && showDropdown !== prevShowDropDown) {
      if (!listJSX.length || !options.find(opt => opt.label === inputValue)) {
        onClear();
      }
    }
  }, [prevShowDropDown, listJSX, options]);

  const chevronButton = (multiselect ? readOnly || inputValue.length === 0 || inputValue.length > 0 : readOnly || inputValue.length === 0) &&
    (
      <button
        type='button'
        data-testid='rf-select__chevron'
        className={classnames(
          (multiselect && selectValues.length) ? 'rf-select__button-multiselect-chevron' : 'rf-select__button',
          showDropdown && 'rf-select__button--rotate', variant === 'menu' ? 'rf-select__button--menu' : '', isOnMove && variant === 'menu' ? 'rf-button__hover' : ''
        )}
        onClick={onChevronClick}
        onMouseMove={onMouseMoveHandler}
        aria-label={showDropdown ? 'Скрыть меню' : 'Раскрыть меню'}
      >
        {options.length ? <ArrowsChevronDown color={variant === 'menu' ? '#fff' : ''} /> : null}
      </button>
    );

  const startAdornmentIcon = startAdornment && variant !== 'tag' ? <div className='rf-select__button__icon'>{startAdornment}</div> : null;
  const endAdornmentIcon = endAdornment && variant !== 'tag' ? <div className='rf-select__button__icon--end'>{endAdornment}</div> : null;

  // -------------------------------------------------------------------------------------------------------------------

  const isTagVariant = variant === 'tag';
  const openClass = showDropdown ? 'rf-select__wrapper--open' : '';
  const tagClass = isTagVariant ? 'rf-select__wrapper--tag' : '';

  const loader = (
    <div className='rf-select__preloader'>
      <Preloader size='m' />
    </div>
  );

  const makeLazyFetch = useCallback(() => {
    if (onSearch && isAsync) {
      return () => onSearch(inputValue, isAsync);
    }

    return noop;
  }, [onSearch, isAsync, inputValue]);

  const getWidthDropdown = useCallback(() => {
    return dropdownMaxWidth || toggleRef.current?.getBoundingClientRect().width;
  }, [dropdownMaxWidth]);


  return (
    <Manager >
      <div className={classnames('rf-select', tagClass, backgroundColor === 'gray' && 'rf-select__background-gray')} ref={toggleRef}>
        <Reference>
          {(referenceProps) => (
            <div
              onMouseLeave={onMouseLeaveHandler}
              /* onBlur={onBlurHandler} */
              {...referenceProps}
              data-testid='rf-select'
              className={classnames(
                'rf-select__wrapper',
                invalid && 'rf-select__wrapper--invalid',
                openClass,
                disabled && 'rf-select__wrapper--disabled',
                variant === 'menu' ? 'rf-select__wrapper--menu' : '',

              )}
              onClick={() => onOpen()}
            >

              {startAdornmentIcon}
              <div className={classnames(
                multiselect && selectValues.length ?
                  'rf-select__wrapper--input' : 'rf-select-input__container',
                !showDropdown && multiselect && selectValues.length ? 'rf-select--multiselect--fixed' : ''
              )}>
                {tagsJSX}
                {multiselect ? selectValues.length < 1 ? inputElement : null : inputElement}
              </div>
              {endAdornmentIcon}
              {closeButton}
              {chevronButton}

            </div>
          )}
        </Reference>

        <Dropdown
          show={showDropdown && (!!listJSX.length || preloader)}
          toggleRef={toggleRef}
          containerRef={containerRef}
          onClose={onClose}
          position={position}
          style={{
            maxWidth: isTagVariant ? 'auto' : getWidthDropdown(),
            width: isTagVariant ? 'auto' : '100%'
          }}
        >
          <div
            data-testid='rf-select-list-scroll'
            className={classnames('rf-select__list', `rf-select__list--${menuVariantSize}`)}
            id={`Select-${id}-list-scroll`}
            onScroll={onScroll}
          >
            {hasInfinityScroll ? (
              <InfiniteScroll
                dataLength={0}
                hasMore={false}
                {...infinityScrollProps}
                next={makeLazyFetch()}
                loader={loader}
                scrollableTarget={`Select-${id}-list-scroll`}
                className='rf-select__infinity-list'
              >
                {listJSX}
              </InfiniteScroll>
            ) : (
              <>{preloader ? loader : listJSX}</>
            )}
          </div>
        </Dropdown>

        {/* filteredOptions.length > 0*/}

      </div>
    </Manager>
  );
};

Select.id = 0;

export default Select;
