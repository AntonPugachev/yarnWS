"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetUsers = void 0;
var axios_1 = __importDefault(require("axios"));
var LIMIT = 10;
/**
 * Создание функции для поиска по пользователям в SAP.
 * @param request Экземпляр axios'а для запросов.
 */
var createGetUsers = function (request) {
    /**
     * Поиск по пользователям в SAP.
     * @param search Поисковый запрос.
     * @param filter Активный фильтр (поиск по всем или по команде)
     * @param skip Отступ при подгрузке.
     */
    return function (search, filter, skip) {
        var query = '';
        for (var i = 0; i < search.length; i++) {
            if (!isNaN(+search[i]) || search[i].toLowerCase() !== search[i].toUpperCase()) {
                query += search[i];
            }
            else {
                query += ' ';
            }
        }
        var url = '';
        if (filter === 'all') {
            if (search.length < 3) {
                return [Promise.resolve([]), null];
            }
            // eslint-disable-next-line max-len
            url = "sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserSearch?".concat(search.length ? "$search=".concat(encodeURIComponent(query), "&") : '', "$expand=departmentsPath&$skip=").concat(skip, "&$top=").concat(LIMIT);
        }
        else {
            // eslint-disable-next-line max-len
            url = "sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/ITeamSearch?".concat(search.length ? "$search=".concat(encodeURIComponent(query), "&") : '', "$expand=departmentsPath");
        }
        var signal = axios_1.default.CancelToken.source();
        var promise = request.get(url, { cancelToken: signal.token }).then(function (response) { return response.data.value; });
        return [promise, signal.cancel];
    };
};
exports.createGetUsers = createGetUsers;
