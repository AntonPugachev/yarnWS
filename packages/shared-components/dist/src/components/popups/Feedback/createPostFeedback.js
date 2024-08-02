"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPostFeedback = void 0;
/**
 * Создание функции для отправки запроса на обратную связь
 * @param request Экземпляр axios'а для запросов.
 */
var createPostFeedback = function (request) {
    /**
     * Создание заявки на обратную связь
     * @param data данные для обратной связи
     */
    return function (data) {
        var url = 'sap/opu/odata/sap/ZHRXSS_FDBK_SERV_NEW_SRV/messagesSet';
        return request.post(url, __assign({}, data)).then(function (response) { return response.data.value; });
    };
};
exports.createPostFeedback = createPostFeedback;
exports.default = exports.createPostFeedback;
