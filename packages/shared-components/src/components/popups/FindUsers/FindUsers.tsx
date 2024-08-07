import  {
  FC, ReactNode, useEffect, useRef, useState
} from 'react';
import './FindUsers.scss';
// import '../../../styles/vendor/Swiper.scss';
import Icon from './large-search-icon';

// import { SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';

import Axios, {
  AxiosResponse, AxiosStatic, Canceler
} from 'axios';
import { IUser } from '../../../types/projects.types';
import Button from '../../atoms/Button';
import Avatar from '../../atoms/Avatar';
import Preloader from '../../atoms/Preloader';
import Search from '../../atoms/Search';
import Tabs from '../../atoms/Tabs';
import Tooltip from '../../atoms/Tooltip';
import { StatusInfoFill } from '../../../indexIcon';
import Structure from '../../molecules/Structure';
import { ITab } from '../../../types';
import Checkbox from '../../atoms/Checkbox/Checkbox';
import { debounce } from '../../../utils/helpers';
import { ITooltipProps } from '../../atoms/Tooltip/Tooltip';

// SwiperCore.use([Navigation]);

export interface IProps {
  onClose?: () => void;
  /** Список уже выбранных пользователей */
  users?: IUser[];
  /** Вернуть выбранных пользователей в компонент */
  getUsers?: (data: IUser[]) => void;
  /** Подзаголовок */
  subtitle?: ReactNode;
  /** Деактивировать выбранных пользователей */
  disableSelected?: boolean;
  /** Множественный выбор */
  multiSelect?: boolean;
  /** Хост запроса */
  host?: string;
  /** Хедерсы запроса */
  headers?: Record<string, string>;
  /** DI Axios */
  AxiosInstance?: AxiosStatic;
  /** Вкладка ВСЕ */
  showAll?: boolean;
  /** Исключить из поиска */
  searchOption?: number[];
  /** Фон тултипа */
  tooltipBackground?: ITooltipProps['background'];
}

/**
 * @deprecated На замену пришел универсальный `FindEntities`
 */
const FindUsers: FC<IProps> = ({
  onClose,
  users = [],
  disableSelected,
  getUsers,
  multiSelect = true,
  subtitle,
  host = '',
  headers = {},
  AxiosInstance,
  showAll = true,
  searchOption = [],
  tooltipBackground = 'white'
}: IProps) => {

  const inputRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  type ActiveFilter = 'all' | 'team';
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>(showAll ? 'all' : 'team');

  useEffect(() => {
    setActiveFilter(showAll ? 'all' : 'team');
  }, [showAll]);


  /** Список выбранных людей */
  const [selectedPeople, setSelectedPeople] = useState<IUser[]>(users);
  const selectedPeopleMap: Record<string, boolean> = selectedPeople.reduce((a: Record<string, boolean>, u: IUser) => {
    a[u.id] = true;
    return a;
  }, {});

  const [newPeople, setNewPeople] = useState<IUser[]>([]);
  const newPeopleMap: Record<string, boolean> = newPeople.reduce((a: Record<string, boolean>, u: IUser) => {
    a[u.id] = true;
    return a;
  }, {});

  const disablePeopleMap = useRef<Record<string, boolean>>(selectedPeopleMap);

  /** Строка поиска */
  const [searchString, setSearchString] = useState<string>('');

  // -------------------------------------------------------------------------------------------------------------------

  const [lazyPreloader, setLazyPreloader] = useState<boolean>(false);

  const [loaded, setLoaded] = useState<boolean>(true);
  const [searchResults, setSearchResults] = useState<IUser[]>([]);

  const cancel = useRef<Canceler | undefined>(undefined);

  const LIMIT = 10;
  const skip = useRef<number>(0);

  const cancelRequest = () => {
    if (cancel.current !== undefined) {
      cancel.current();
    }
  };

  const onSearch = (query: string, lazy = false) => {
    if (activeFilter === 'all' && query.length < 3) {
      return;
    }

    if (lazy && lazyPreloader) {
      return;
    }

    if (!lazy) {
      setLoaded(false);
    }

    let teamUri = 'sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/ITeamSearch?$expand=departmentsPath';
    let queryWithOutSpecSymbols = '';

    for (let i = 0; i < query.length; i++) {
      if (!isNaN(+query[i]) || query[i].toLowerCase() !== query[i].toUpperCase()) {
        queryWithOutSpecSymbols += query[i];
      } else {
        queryWithOutSpecSymbols += ' ';
      }
    }

    if (query) {
      teamUri += `&$search=${encodeURIComponent(queryWithOutSpecSymbols)}`;
    }

    let searchOptionStr = '';

    if (searchOption && searchOption.length > 0) {
      searchOptionStr = '$filter=';
    }

    searchOption?.forEach((n: number, i: number) => {
      searchOptionStr += i === 0 ? `searchOption eq '${n}'` : `and searchOption eq '${n}'`;
    });

    const uri = 'sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserSearch?' +
      `$search=${encodeURIComponent(queryWithOutSpecSymbols)}&$expand=departmentsPath` +
      `&$skip=${skip.current}&$top=${LIMIT}&${searchOptionStr}`;
    const url = `${host}${activeFilter === 'all' ? uri : teamUri}`;

    const axios = AxiosInstance || Axios;

    cancelRequest();
    axios.get(url, {
      cancelToken: new axios.CancelToken((c: Canceler) => {
        cancel.current = c;
      }),
      headers
    })
      .then(({ data }: AxiosResponse<{ value: IUser[] }>) => {
        skip.current += LIMIT;

        if (lazy) {
          setSearchResults((list: IUser[]) => [...list, ...data.value]);
          setLazyPreloader(false);
        } else {
          setSearchResults(data.value);
          setLoaded(true);
        }
      })
      .catch((_error: any) => {
        setLazyPreloader(false);
        setLoaded(true);
      });
  };

  const onLazyScroll = () => {
    if (!dropdownRef.current || searchString.length < 3) {
      return;
    }

    const scrollInPercent = Math.round((100 * dropdownRef.current.scrollTop) /
      (dropdownRef.current.scrollHeight - dropdownRef.current.offsetHeight));

    if (scrollInPercent > 90) {
      setLazyPreloader(true);
      onSearch(searchString, true);
    }
  };

  useEffect(() => {
    return () => {
      cancelRequest();
    };
  }, []);


  const onClear = () => {
    setSearchString('');
    cancelRequest();
  };

  useEffect(() => {
    skip.current = 0;

    onSearch(searchString);
  }, [searchString]);


  // -------------------------------------------------------------------------------------------------------------------

  const onSubmit = () => {
    getUsers && getUsers(selectedPeople);
    onClose && onClose();
  };

  const inputHandle = (data: React.KeyboardEvent<HTMLInputElement>) => {
    const value = (data.target as HTMLInputElement).value;
    setSearchString(value);
  };

  const addHandle = (item: IUser) => {
    if (multiSelect) {
      setSelectedPeople([...selectedPeople, item]);

      if (!newPeopleMap[item.id]) {
        setNewPeople([...newPeople, item]);
      }
    } else {
      setSelectedPeople([item]);
    }
  };

  const removeHandle = (item: IUser) => {
    if (multiSelect) {

      setSelectedPeople(selectedPeople.filter((data) => item.id !== data.id));
      setNewPeople(newPeople.filter((data) => item.id !== data.id));

    } else {
      setSelectedPeople([]);
    }
  };

  // --------------------------------------------------------------------------------------------------------------------

  const onChange = (e: React.ChangeEvent<HTMLInputElement>, item: IUser) => {
    if (e.target.checked) {
      addHandle(item);
    } else {
      removeHandle(item);
    }
  };

  // --------------------------------------------------------------------------------------------------------------------

  /** Список найденных сотрудников */
  const listUsers: ReactNode[] = searchResults.map((item: IUser) => {

    const shortPosition = item.department.slice(0, 100);
    const isShorter = item.department.length > shortPosition.length;

    const label = (
      <div className='list-users__user'>
        <Avatar photo={item.photo} size='m' fullName={`${item.firstName} ${item.lastName}`} />
        <div className='list-users__texts-wrapper'>
          <h3 className='list-users__user-name'>
            {`${item.lastName} ${item.firstName} ${item.middleName}`}
            {item.id && <span className='list-users__user-id'>({item.id})</span>}
            {item.departmentsPath && (
              <Tooltip background={tooltipBackground}>
                <StatusInfoFill className='list-users__user-info' />
                <Structure departmentsPath={item.departmentsPath} background={tooltipBackground} />
              </Tooltip>
            )}
          </h3>
          <h5 className='list-users__user-position'
            title={isShorter ? item.department : undefined}>{isShorter ? `${shortPosition}...` : shortPosition}</h5>
        </div>
      </div>
    );

    return (
      <div className='list-users__wrapper' key={item.id}>
        <Checkbox
          label={label}
          align='center'
          value={item.id}
          disabled={disableSelected && disablePeopleMap.current[item.id]}
          checked={selectedPeopleMap[item.id] || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e, item)}
        />
      </div>
    );
  });

  // -------------------------------------------------------------------------------------------------------------------

  const placeholder = (placeholder: string) => (
    <div className='search-results__message'>
      <Icon className='search-results__message-icon' />
      <p className='search-results__message-text'>{placeholder}</p>
    </div>
  );

  // -------------------------------------------------------------------------------------------------------------------

  // /** Выбранные из списка пользователи */
  // const listSelectedUsers: ReactNode = selectedPeople.map((item) => (
  //   <SwiperSlide className='selected_swiper-slide' key={ item.id }>
  //     <Avatar photo={ item.photo } size='m' fullName={ `${item.firstName} ${item.lastName}` }/>
  //     <h5 className='selected__text'>{ `${item.lastName}` }</h5>
  //     <h5 className='selected__text'>{ `${item.firstName}` }</h5>
  //     { !(disableSelected && disablePeopleMap.current[item.id]) && (
  //       <Button className='selected__button' onClick={ () => removeHandle(item) } buttonType='icon'>
  //         <Close/>
  //       </Button>
  //     ) }
  //   </SwiperSlide>
  // ));

  // -------------------------------------------------------------------------------------------------------------------

  /** Автофокус */
  useEffect(() => {
    setTimeout(() => {
      if (inputRef.current) {
        const input: HTMLInputElement | null = inputRef.current.querySelector('.rf-input__field');

        if (input) {
          input.focus();
        }
      }
    });
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const disabled = multiSelect ? newPeople.length === 0 : selectedPeople.length === 0;

  // -------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    skip.current = 0;
    cancelRequest();
    onSearch(searchString);
  }, [activeFilter]);

  const tabs: ITab[] = [];
  showAll &&
    tabs.push({
      label: 'Все',
      handler: () => {
        setActiveFilter('all');
      }
    });
  tabs.push({
    label: 'Моя команда',
    handler: () => {
      setActiveFilter('team');
    }
  });


  return (
    <div className='find-users__wrapper'>
      <h4 className='find-users__title'>Поиск сотрудников</h4>
      <p className='find-users__notice'>{subtitle}</p>
      <div className='find-users__input-wrapper' ref={inputRef}>
        <Search onKeyUp={debounce(inputHandle, 500)} autoFocus onClear={onClear} />
      </div>
      <div className='find-users__filters'>
        <Tabs list={tabs} />
      </div>

      {/* { !!selectedPeople.length && multiSelect && (*/}
      {/*  <div className='swiper__container'>*/}
      {/*    <div className='swiper__wrapper'>*/}
      {/*      <Swiper*/}
      {/*        spaceBetween={ 0 }*/}
      {/*        slidesPerView={ 'auto' }*/}
      {/*        navigation={ {*/}
      {/*          nextEl: '.swiper-button-next',*/}
      {/*          prevEl: '.swiper-button-prev'*/}
      {/*        } }>*/}
      {/*        { listSelectedUsers }*/}
      {/*      </Swiper>*/}
      {/*    </div>*/}
      {/*    <Button buttonType='icon' round className='swiper-button-next'>*/}
      {/*      <ChevronLeft/>*/}
      {/*    </Button>*/}
      {/*    <Button buttonType='icon' round className='swiper-button-prev'>*/}
      {/*      <ChevronLeft/>*/}
      {/*    </Button>*/}
      {/*  </div>*/}
      {/* ) }*/}
      <div className='find-users__list-wrapper' ref={dropdownRef} onScroll={onLazyScroll}>
        {loaded ? (
          listUsers.length > 0 ? (
            listUsers
          ) : (
            searchString === '' ? placeholder('Начните поиск') : placeholder('Нет результатов для отображения. Измените запрос.')
          )
        ) : <Preloader />}
        {
          lazyPreloader && (
            <div className='find-users__list-lazy-preloader'>
              <Preloader size='s' />
            </div>
          )
        }
      </div>

      <footer className='find-users__footer'>
        <div className='find-users__footer-button'>
          <Button disabled={disabled} onClick={onSubmit} size='l'>Добавить</Button>
        </div>
        <div className='find-users__footer-button'>
          <Button onClick={onClose} buttonType='light' size='l'>Отмена</Button>
        </div>
      </footer>
    </div>
  );
};

export default FindUsers;
