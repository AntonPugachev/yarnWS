"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = exports.LazySelect = exports.Demo = void 0;
var react_1 = require("react");
var StoryRow_1 = require("../../storybook/StoryRow");
var StoryItem_1 = require("../../storybook/StoryItem");
var Story_1 = require("../../storybook/Story");
var Button_1 = require("../Button");
var FormGroup_1 = require("../FormGroup");
var indexIcon_1 = require("../../../indexIcon");
var _1 = require(".");
var Input_1 = require("../Input");
exports.default = {
    title: 'forms/withTest/Select',
    component: _1.default,
};
var list = [];
var list2 = [
    {
        value: '0',
        label: 'Москва'
    },
    {
        value: '1',
        label: 'Санкт-Петербург'
    },
    {
        value: '2',
        label: 'Новосибирск'
    },
    {
        value: '3',
        label: 'Екатеринбург'
    },
    {
        value: '4',
        label: 'Казань'
    },
    {
        value: '5',
        label: 'Нижний Новгород'
    },
    {
        value: '6',
        label: 'Челябинск'
    },
    {
        value: '7',
        label: 'Самара'
    },
    {
        value: '8',
        label: 'Омск'
    },
    {
        value: '9',
        label: 'Ростов-на-Дону'
    },
    {
        value: '10',
        label: 'Уфа'
    },
    {
        value: '11',
        label: 'Красноярск'
    },
    {
        value: '12',
        label: 'Воронеж'
    },
    {
        value: '13',
        label: 'Пермь'
    },
    {
        value: '14',
        label: 'Волгоград'
    },
];
for (var i = 1; i < 15; i++) {
    list.push({
        value: "".concat(i),
        label: "\u0412\u0430\u0440\u0438\u0430\u043D\u0442 ".concat(i, " \u0418\u0437\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u0432\u043D\u0435 \u0418\u0437\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u0432\u043D\u0435 \u0418\u0437\u043C\u0435\u043D\u044F\u0435\u043C\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0438\u0437\u0432\u043D\u0435"),
        disabled: i % 6 === 0,
    });
}
var Demo = function () {
    var _a = (0, react_1.useState)([]), values = _a[0], setValues = _a[1];
    var onChange = function (options) {
        console.log(options);
    };
    var onChangeMultiselect = function (options) {
        setCities(options);
    };
    var _b = (0, react_1.useState)(list), filteredOptions = _b[0], setFilteredOptions = _b[1];
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var timer = (0, react_1.useRef)(undefined);
    var filterWithDelay = function (query) {
        if (query === '') {
            setFilteredOptions(list2);
            return;
        }
        setLoading(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(function () {
            var filtered = list2.filter(function (o) { return o.label.toLowerCase().includes(query.toLowerCase()); });
            setFilteredOptions(filtered);
            setLoading(false);
        }, 1000);
    };
    var onSearch = function (query) {
        filterWithDelay(query);
    };
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            setValues([list[3]]);
        }, 1000);
    }, []);
    var _d = (0, react_1.useState)([]), state = _d[0], setState = _d[1];
    var _e = (0, react_1.useState)([]), state1 = _e[0], setState1 = _e[1];
    var _f = (0, react_1.useState)([]), cities = _f[0], setCities = _f[1];
    var onChange1 = function (options) {
        // @ts-ignore
        setState(options);
    };
    var onChange2 = function (options) {
        // @ts-ignore
        console.log(options);
        setState1(options);
    };
    var currencies = [
        {
            label: 'РOO',
            value: '1',
        },
    ];
    var _g = (0, react_1.useState)(true), disabled = _g[0], setDisabled = _g[1];
    return (<Story_1.default name='Select' description='виды Select' width={400}>
      <form action='' onSubmit={function () { return console.log('submit'); }}>
        <StoryItem_1.default description='Select default'>
          <FormGroup_1.default label={'Label'}>
            <_1.default placeholder='Placeholder' options={list} variant='base' values={state} onChange={onChange2}/>
          </FormGroup_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select invalid'>
          <FormGroup_1.default label='Label' invalid errorMessage='Error'>
            <_1.default placeholder='Выберите значение' options={list} values={state1} invalid onChange={onChange2} preloader={loading}/>
          </FormGroup_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select disabled'>
          <FormGroup_1.default label='Label'>
            <_1.default placeholder='Выберите значение' options={list} values={state1} disabled onChange={onChange2} preloader={loading}/>
          </FormGroup_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select start adornment'>
          <FormGroup_1.default label='Label'>
            <_1.default placeholder='Выберите значение' options={list} values={state1} onChange={onChange2} preloader={loading} startAdornment={<indexIcon_1.AllIconPlace size='s'/>}/>
          </FormGroup_1.default>
        </StoryItem_1.default>

        <StoryItem_1.default description='Multiselect'>
          <_1.default placeholder='Выберите город' options={filteredOptions} values={cities} onChange={onChangeMultiselect} onSearch={onSearch} multiselect maxOptions={2} preloader={loading}/>
        </StoryItem_1.default>

        <StoryItem_1.default description='Изменяемое значение извне'>
          <Button_1.default onClick={function () {
            // @ts-ignore
            setState([list[1]]);
        }}>
            Set State
          </Button_1.default>
          <div style={{ height: '20px' }}/>
          <_1.default placeholder='Выберите значение' options={list} values={state} onChange={onChange1} onSearch={onSearch} preloader={loading}/>
        </StoryItem_1.default>

        <StoryItem_1.default description='Readonly Select'>
          <_1.default placeholder='Выберите значение' readOnly options={list} values={state1} onChange={onChange2} preloader={loading}/>
        </StoryItem_1.default>

        <StoryItem_1.default description='Disabled'>
          <_1.default placeholder='Выберите значение' options={list} values={state} onChange={onChange2} preloader={loading} disabled={disabled}/>
          <br />
          <Button_1.default onClick={function () { return setDisabled(!disabled); }}>toggle disabled</Button_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Tag select'>
          <FormGroup_1.default label={'Tag select'}>
            <Input_1.default placeholder={'Это текстовый инпут'}/>

            <_1.default variant={'tag'} placeholder='$' options={list} values={state} onChange={onChange2} preloader={loading}/>
          </FormGroup_1.default>
          <br />
          <Button_1.default onClick={function () { return setDisabled(!disabled); }}>toggle disabled</Button_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select Menu Button'>
          <FormGroup_1.default label={'Default Menu Button'}>
            <div style={{ width: '168px', }}>
              <_1.default placeholder='Placeholder' options={list} variant='menu' values={state} onChange={onChange2} dropdownMaxWidth={'240px'}/>
            </div>
          </FormGroup_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select Menu Button'>
          <FormGroup_1.default label={'Feedback Menu Button'}>
            <div style={{ width: '168px', }}>
              <_1.default placeholder='Placeholder' options={list} variant='menu' values={state} onChange={onChange2} dropdownMaxWidth={'240px'} menuVariantSize='s'/>
            </div>
          </FormGroup_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select Menu Button'>
          <FormGroup_1.default label={'Select Menu Button disabled'}>
            <div style={{ width: '168px', }}>
              <_1.default placeholder='Placeholder' options={list} variant='menu' disabled values={state} onChange={onChange2} dropdownMaxWidth={'240px'} menuVariantSize='m'/>
            </div>
          </FormGroup_1.default>
        </StoryItem_1.default>
        <StoryItem_1.default description='Select Menu Button'>
          <FormGroup_1.default label={'Select Menu Button preloader'}>
            <div style={{ width: '168px', }}>
              <_1.default placeholder='Placeholder' options={[]} variant='menu' disabled values={state} onChange={onChange2} dropdownMaxWidth={'240px'} menuVariantSize='m'/>
            </div>
          </FormGroup_1.default>
        </StoryItem_1.default>
      </form>
    </Story_1.default>);
};
exports.Demo = Demo;
var LazySelect = function () {
    var _a = (0, react_1.useState)([]), list = _a[0], setList = _a[1];
    var _b = (0, react_1.useState)(false), isLoading = _b[0], setIsLoading = _b[1];
    var _c = (0, react_1.useState)(0), totalItems = _c[0], setTotalItems = _c[1];
    var limit = 10;
    var onSearch = function (query, isPagination) {
        if (!query) {
            return;
        }
        var offset = isPagination ? list.length : 0;
        setIsLoading(true);
        return fetch("https://jsonplaceholder.typicode.com/todos?_start=".concat(offset, "&_limit=").concat(limit))
            .then(function (response) { return response.json(); })
            .then(function (json) {
            var resList = json.map(function (item) { return ({
                value: item.id,
                label: item.title,
            }); });
            setList(function (prevList) { return (isPagination ? __spreadArray(__spreadArray([], prevList, true), resList, true) : resList); });
            setTotalItems(200);
        })
            .finally(function () {
            setIsLoading(false);
        });
    };
    var hasMore = !isLoading && list.length < totalItems;
    return (<Story_1.default>
      <StoryRow_1.default>
        <StoryItem_1.default subtitle='Асинхронный select с InfinityScroll' description='Для примера используется апи jsonplaceholder.typicode.com'>
          <form>
            <_1.default placeholder='Поиск' values={[]} options={list} onChange={function () { }} isAsync infinityScrollProps={{
            hasMore: hasMore,
            dataLength: list.length,
        }} onSearch={onSearch}/>
          </form>
        </StoryItem_1.default>
      </StoryRow_1.default>
    </Story_1.default>);
};
exports.LazySelect = LazySelect;
var Playground = function (args) {
    return (<Story_1.default>
      <StoryRow_1.default>
        <StoryItem_1.default description='Select'>
          <_1.default placeholder='Выберите значение' values={[]} options={list} onChange={function () { }} {...args}/>
        </StoryItem_1.default>
      </StoryRow_1.default>
    </Story_1.default>);
};
exports.Playground = Playground;
exports.Demo.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A15730',
    },
};
