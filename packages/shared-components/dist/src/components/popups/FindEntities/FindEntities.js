"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
exports.FindEntities = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
require("./FindEntities.scss");
var react_1 = require("react");
var Button_1 = __importDefault(require("../../atoms/Button"));
var Modal_1 = __importDefault(require("../../atoms/Modal"));
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var Search_1 = __importDefault(require("../../atoms/Search"));
var Tabs_1 = __importDefault(require("../../atoms/Tabs"));
var react_infinite_scroll_component_1 = __importDefault(require("react-infinite-scroll-component"));
var classnames_1 = require("../../../utils/classnames");
var FindEntities = function (_a) {
    var onClose = _a.onClose, _b = _a.value, value = _b === void 0 ? [] : _b, onChange = _a.onChange, debounce = _a.debounce, getEntities = _a.getEntities, entityKey = _a.entityKey, children = _a.children, multiple = _a.multiple, filters = _a.filters, title = _a.title, subtitle = _a.subtitle, _c = _a.lazy, lazy = _c === void 0 ? false : _c, emptyStateIcon = _a.emptyStateIcon, _d = _a.emptyStateText, emptyStateText = _d === void 0 ? 'Измените поисковый запрос' : _d, emptyStateInitialText = _a.emptyStateInitialText, pattern = _a.pattern;
    var cancelRef = (0, react_1.useRef)(null);
    var inputRef = (0, react_1.useRef)(null);
    /** Список выбранных сущностей */
    var _e = (0, react_1.useState)(value), selected = _e[0], setSelected = _e[1];
    var selectedMap = selected.reduce(function (result, e) {
        result[e[entityKey]] = true;
        return result;
    }, {});
    /** Поиск */
    var _f = (0, react_1.useState)(''), search = _f[0], setSearch = _f[1];
    var _g = (0, react_1.useState)(filters ? filters[0].value : ''), filter = _g[0], setFilter = _g[1];
    var _h = (0, react_1.useState)([]), results = _h[0], setResults = _h[1];
    var _j = (0, react_1.useState)(false), isLoading = _j[0], setIsLoading = _j[1];
    /** Выведены все результаты */
    var _k = (0, react_1.useState)(false), isLazyAllLoaded = _k[0], setLazyAllLoaded = _k[1];
    var onSearchDebounce = function (data) {
        setSearch(data.debounceString);
    };
    var onSearchClear = function () {
        setSearch('');
    };
    var onFilterChange = function (value) { return function () {
        setFilter(value);
    }; };
    /** После изенения поиска или фильтра очищаем список */
    (0, react_1.useEffect)(function () {
        setResults([]);
        setLazyAllLoaded(false);
    }, [search, filter]);
    // -------------------------------------------------------------------------------------------------------------------
    var onSubmit = function () {
        onChange && onChange(selected);
        onClose && onClose();
    };
    var onSelectChange = function (entity) { return function (event) {
        if (event.target.checked) {
            if (multiple) {
                setSelected(__spreadArray(__spreadArray([], selected, true), [entity], false));
            }
            else {
                setSelected([entity]);
            }
        }
        else {
            setSelected(selected.filter(function (e) { return entity[entityKey] !== e[entityKey]; }));
        }
    }; };
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            if (inputRef.current) {
                var input = inputRef.current.querySelector('input');
                if (input) {
                    input.focus();
                }
            }
        });
    }, [filter]);
    var onFetch = (0, react_1.useCallback)(function (skip) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, request, cancel;
        return __generator(this, function (_b) {
            setIsLoading(true);
            if (cancelRef.current) {
                cancelRef.current();
                cancelRef.current = null;
            }
            _a = getEntities(search, filter, skip), request = _a[0], cancel = _a[1];
            cancelRef.current = cancel;
            return [2 /*return*/, request
                    .then(function (res) {
                    if (res.length) {
                        setResults(function (prevRes) { return __spreadArray(__spreadArray([], prevRes, true), res, true); });
                    }
                    else {
                        setLazyAllLoaded(true);
                    }
                })
                    .finally(function () {
                    setIsLoading(false);
                })];
        });
    }); }, [search, filter, results.length]);
    /** При изменении фильтра или поиска, загрузка начинается с 0 */
    (0, react_1.useEffect)(function () {
        onFetch(0);
        return function () {
            if (cancelRef.current) {
                cancelRef.current();
                cancelRef.current = null;
            }
        };
    }, [filter, search]);
    var tabs = filters ?
        filters.map(function (_a) {
            var label = _a.label, value = _a.value;
            return ({
                label: label,
                handler: onFilterChange(value),
            });
        }) :
        null;
    var hasMore = !isLoading && lazy && !isLazyAllLoaded;
    return ((0, jsx_runtime_1.jsx)(Modal_1.default, { size: 'xl', onClose: onClose, custom: true, children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities', children: [!!title && (0, jsx_runtime_1.jsx)("h4", { className: 'rf-find-entities__title', children: title }), !!subtitle && (0, jsx_runtime_1.jsx)("p", { className: 'rf-find-entities__subtitle', children: subtitle }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__search', ref: inputRef, children: (0, jsx_runtime_1.jsx)(Search_1.default, { onDebounce: onSearchDebounce, autoFocus: true, onClear: onSearchClear, debounce: debounce, pattern: pattern }) }), !!tabs && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__filters', children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { list: tabs }) })), (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__list', id: 'rf-find-entities-scroll', children: (0, jsx_runtime_1.jsxs)(react_infinite_scroll_component_1.default, { hasMore: hasMore, dataLength: results === null || results === void 0 ? void 0 : results.length, next: function () { return onFetch(results === null || results === void 0 ? void 0 : results.length); }, loader: (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__preloader', children: (0, jsx_runtime_1.jsx)(Preloader_1.default, {}) }), scrollableTarget: 'rf-find-entities-scroll', children: [results === null || results === void 0 ? void 0 : results.map(function (entity, index) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: children({
                                    entity: entity,
                                    isSelected: !!selectedMap[entity[entityKey]],
                                    onChange: onSelectChange(entity),
                                }) }, index)); }), isLoading && ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-find-entities__preloader', !results.length && 'rf-find-entities__preloader-wrap'), children: (0, jsx_runtime_1.jsx)(Preloader_1.default, {}) }))] }) }), !results.length && !isLoading && ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-find-entities__empty-state', children: [!!emptyStateIcon && (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__empty-state-icon', children: emptyStateIcon }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__empty-state-title', children: search === '' ? 'Начните поиск' : 'Нет результатов' }), search === '' && !!emptyStateInitialText && (0, jsx_runtime_1.jsx)("p", { className: 'rf-find-entities__empty-state-subtitle', children: emptyStateInitialText }), search !== '' && (0, jsx_runtime_1.jsx)("p", { className: 'rf-find-entities__empty-state-subtitle', children: emptyStateText })] })), (0, jsx_runtime_1.jsxs)("footer", { className: 'rf-find-entities__footer', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__footer-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onClose, buttonType: 'light', size: 'l', children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" }) }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-find-entities__footer-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: onSubmit, size: 'l', children: "\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C" }) })] })] }) }));
};
exports.FindEntities = FindEntities;
exports.default = exports.FindEntities;
