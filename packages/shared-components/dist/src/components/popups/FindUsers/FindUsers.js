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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./FindUsers.scss");
// import '../../../styles/vendor/Swiper.scss';
var large_search_icon_1 = __importDefault(require("./large-search-icon"));
// import { SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation } from 'swiper';
var axios_1 = __importDefault(require("axios"));
var Button_1 = __importDefault(require("../../atoms/Button"));
var Avatar_1 = __importDefault(require("../../atoms/Avatar"));
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var Search_1 = __importDefault(require("../../atoms/Search"));
var Tabs_1 = __importDefault(require("../../atoms/Tabs"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
var indexIcon_1 = require("../../../indexIcon");
var Structure_1 = __importDefault(require("../../molecules/Structure"));
var Checkbox_1 = __importDefault(require("../../atoms/Checkbox/Checkbox"));
var helpers_1 = require("../../../utils/helpers");
/**
 * @deprecated На замену пришел универсальный `FindEntities`
 */
var FindUsers = function (_a) {
    var onClose = _a.onClose, _b = _a.users, users = _b === void 0 ? [] : _b, disableSelected = _a.disableSelected, getUsers = _a.getUsers, _c = _a.multiSelect, multiSelect = _c === void 0 ? true : _c, subtitle = _a.subtitle, _d = _a.host, host = _d === void 0 ? '' : _d, _e = _a.headers, headers = _e === void 0 ? {} : _e, AxiosInstance = _a.AxiosInstance, _f = _a.showAll, showAll = _f === void 0 ? true : _f, _g = _a.searchOption, searchOption = _g === void 0 ? [] : _g, _h = _a.tooltipBackground, tooltipBackground = _h === void 0 ? 'white' : _h;
    var inputRef = (0, react_1.useRef)(null);
    var dropdownRef = (0, react_1.useRef)(null);
    var _j = (0, react_1.useState)(showAll ? 'all' : 'team'), activeFilter = _j[0], setActiveFilter = _j[1];
    (0, react_1.useEffect)(function () {
        setActiveFilter(showAll ? 'all' : 'team');
    }, [showAll]);
    /** Список выбранных людей */
    var _k = (0, react_1.useState)(users), selectedPeople = _k[0], setSelectedPeople = _k[1];
    var selectedPeopleMap = selectedPeople.reduce(function (a, u) {
        a[u.id] = true;
        return a;
    }, {});
    var _l = (0, react_1.useState)([]), newPeople = _l[0], setNewPeople = _l[1];
    var newPeopleMap = newPeople.reduce(function (a, u) {
        a[u.id] = true;
        return a;
    }, {});
    var disablePeopleMap = (0, react_1.useRef)(selectedPeopleMap);
    /** Строка поиска */
    var _m = (0, react_1.useState)(''), searchString = _m[0], setSearchString = _m[1];
    // -------------------------------------------------------------------------------------------------------------------
    var _o = (0, react_1.useState)(false), lazyPreloader = _o[0], setLazyPreloader = _o[1];
    var _p = (0, react_1.useState)(true), loaded = _p[0], setLoaded = _p[1];
    var _q = (0, react_1.useState)([]), searchResults = _q[0], setSearchResults = _q[1];
    var cancel = (0, react_1.useRef)(undefined);
    var LIMIT = 10;
    var skip = (0, react_1.useRef)(0);
    var cancelRequest = function () {
        if (cancel.current !== undefined) {
            cancel.current();
        }
    };
    var onSearch = function (query, lazy) {
        if (lazy === void 0) { lazy = false; }
        if (activeFilter === 'all' && query.length < 3) {
            return;
        }
        if (lazy && lazyPreloader) {
            return;
        }
        if (!lazy) {
            setLoaded(false);
        }
        var teamUri = 'sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/ITeamSearch?$expand=departmentsPath';
        var queryWithOutSpecSymbols = '';
        for (var i = 0; i < query.length; i++) {
            if (!isNaN(+query[i]) || query[i].toLowerCase() !== query[i].toUpperCase()) {
                queryWithOutSpecSymbols += query[i];
            }
            else {
                queryWithOutSpecSymbols += ' ';
            }
        }
        if (query) {
            teamUri += "&$search=".concat(encodeURIComponent(queryWithOutSpecSymbols));
        }
        var searchOptionStr = '';
        if (searchOption && searchOption.length > 0) {
            searchOptionStr = '$filter=';
        }
        searchOption === null || searchOption === void 0 ? void 0 : searchOption.forEach(function (n, i) {
            searchOptionStr += i === 0 ? "searchOption eq '".concat(n, "'") : "and searchOption eq '".concat(n, "'");
        });
        var uri = 'sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserSearch?' +
            "$search=".concat(encodeURIComponent(queryWithOutSpecSymbols), "&$expand=departmentsPath") +
            "&$skip=".concat(skip.current, "&$top=").concat(LIMIT, "&").concat(searchOptionStr);
        var url = "".concat(host).concat(activeFilter === 'all' ? uri : teamUri);
        var axios = AxiosInstance || axios_1.default;
        cancelRequest();
        axios.get(url, {
            cancelToken: new axios.CancelToken(function (c) {
                cancel.current = c;
            }),
            headers: headers
        })
            .then(function (_a) {
            var data = _a.data;
            skip.current += LIMIT;
            if (lazy) {
                setSearchResults(function (list) { return __spreadArray(__spreadArray([], list, true), data.value, true); });
                setLazyPreloader(false);
            }
            else {
                setSearchResults(data.value);
                setLoaded(true);
            }
        })
            .catch(function (_error) {
            setLazyPreloader(false);
            setLoaded(true);
        });
    };
    var onLazyScroll = function () {
        if (!dropdownRef.current || searchString.length < 3) {
            return;
        }
        var scrollInPercent = Math.round((100 * dropdownRef.current.scrollTop) /
            (dropdownRef.current.scrollHeight - dropdownRef.current.offsetHeight));
        if (scrollInPercent > 90) {
            setLazyPreloader(true);
            onSearch(searchString, true);
        }
    };
    (0, react_1.useEffect)(function () {
        return function () {
            cancelRequest();
        };
    }, []);
    var onClear = function () {
        setSearchString('');
        cancelRequest();
    };
    (0, react_1.useEffect)(function () {
        skip.current = 0;
        onSearch(searchString);
    }, [searchString]);
    // -------------------------------------------------------------------------------------------------------------------
    var onSubmit = function () {
        getUsers && getUsers(selectedPeople);
        onClose && onClose();
    };
    var inputHandle = function (data) {
        var value = data.target.value;
        setSearchString(value);
    };
    var addHandle = function (item) {
        if (multiSelect) {
            setSelectedPeople(__spreadArray(__spreadArray([], selectedPeople, true), [item], false));
            if (!newPeopleMap[item.id]) {
                setNewPeople(__spreadArray(__spreadArray([], newPeople, true), [item], false));
            }
        }
        else {
            setSelectedPeople([item]);
        }
    };
    var removeHandle = function (item) {
        if (multiSelect) {
            setSelectedPeople(selectedPeople.filter(function (data) { return item.id !== data.id; }));
            setNewPeople(newPeople.filter(function (data) { return item.id !== data.id; }));
        }
        else {
            setSelectedPeople([]);
        }
    };
    // --------------------------------------------------------------------------------------------------------------------
    var onChange = function (e, item) {
        if (e.target.checked) {
            addHandle(item);
        }
        else {
            removeHandle(item);
        }
    };
    // --------------------------------------------------------------------------------------------------------------------
    /** Список найденных сотрудников */
    var listUsers = searchResults.map(function (item) {
        var shortPosition = item.department.slice(0, 100);
        var isShorter = item.department.length > shortPosition.length;
        var label = ((0, jsx_runtime_1.jsxs)("div", { className: 'list-users__user', children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: item.photo, size: 'm', fullName: "".concat(item.firstName, " ").concat(item.lastName) }), (0, jsx_runtime_1.jsxs)("div", { className: 'list-users__texts-wrapper', children: [(0, jsx_runtime_1.jsxs)("h3", { className: 'list-users__user-name', children: ["".concat(item.lastName, " ").concat(item.firstName, " ").concat(item.middleName), item.id && (0, jsx_runtime_1.jsxs)("span", { className: 'list-users__user-id', children: ["(", item.id, ")"] }), item.departmentsPath && ((0, jsx_runtime_1.jsxs)(Tooltip_1.default, { background: tooltipBackground, children: [(0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, { className: 'list-users__user-info' }), (0, jsx_runtime_1.jsx)(Structure_1.default, { departmentsPath: item.departmentsPath, background: tooltipBackground })] }))] }), (0, jsx_runtime_1.jsx)("h5", { className: 'list-users__user-position', title: isShorter ? item.department : undefined, children: isShorter ? "".concat(shortPosition, "...") : shortPosition })] })] }));
        return ((0, jsx_runtime_1.jsx)("div", { className: 'list-users__wrapper', children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { label: label, align: 'center', value: item.id, disabled: disableSelected && disablePeopleMap.current[item.id], checked: selectedPeopleMap[item.id] || false, onChange: function (e) { return onChange(e, item); } }) }, item.id));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var placeholder = function (placeholder) { return ((0, jsx_runtime_1.jsxs)("div", { className: 'search-results__message', children: [(0, jsx_runtime_1.jsx)(large_search_icon_1.default, { className: 'search-results__message-icon' }), (0, jsx_runtime_1.jsx)("p", { className: 'search-results__message-text', children: placeholder })] })); };
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
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (inputRef.current) {
                var input = inputRef.current.querySelector('.rf-input__field');
                if (input) {
                    input.focus();
                }
            }
        });
    }, []);
    // -------------------------------------------------------------------------------------------------------------------
    var disabled = multiSelect ? newPeople.length === 0 : selectedPeople.length === 0;
    // -------------------------------------------------------------------------------------------------------------------
    (0, react_1.useEffect)(function () {
        skip.current = 0;
        cancelRequest();
        onSearch(searchString);
    }, [activeFilter]);
    var tabs = [];
    showAll &&
        tabs.push({
            label: 'Все',
            handler: function () {
                setActiveFilter('all');
            }
        });
    tabs.push({
        label: 'Моя команда',
        handler: function () {
            setActiveFilter('team');
        }
    });
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'find-users__wrapper', children: [(0, jsx_runtime_1.jsx)("h4", { className: 'find-users__title', children: "\u041F\u043E\u0438\u0441\u043A \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432" }), (0, jsx_runtime_1.jsx)("p", { className: 'find-users__notice', children: subtitle }), (0, jsx_runtime_1.jsx)("div", { className: 'find-users__input-wrapper', ref: inputRef, children: (0, jsx_runtime_1.jsx)(Search_1.default, { onKeyUp: (0, helpers_1.debounce)(inputHandle, 500), autoFocus: true, onClear: onClear }) }), (0, jsx_runtime_1.jsx)("div", { className: 'find-users__filters', children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { list: tabs }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'find-users__list-wrapper', ref: dropdownRef, onScroll: onLazyScroll, children: [loaded ? (listUsers.length > 0 ? (listUsers) : (searchString === '' ? placeholder('Начните поиск') : placeholder('Нет результатов для отображения. Измените запрос.'))) : (0, jsx_runtime_1.jsx)(Preloader_1.default, {}), lazyPreloader && ((0, jsx_runtime_1.jsx)("div", { className: 'find-users__list-lazy-preloader', children: (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 's' }) }))] }), (0, jsx_runtime_1.jsxs)("footer", { className: 'find-users__footer', children: [(0, jsx_runtime_1.jsx)("div", { className: 'find-users__footer-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { disabled: disabled, onClick: onSubmit, size: 'l', children: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C" }) }), (0, jsx_runtime_1.jsx)("div", { className: 'find-users__footer-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onClose, buttonType: 'light', size: 'l', children: "\u041E\u0442\u043C\u0435\u043D\u0430" }) })] })] }));
};
exports.default = FindUsers;
