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
exports.history = void 0;
var getUser = function (user) {
    if (user === void 0) { user = {}; }
    return (__assign({ id: '3', firstName: 'Иван', lastName: 'Иванов', middleName: 'Иванович', fullName: 'Иванов Иван Иванович', photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuIbv-7JSgC23hcGq8qDRBpFzdMBEw8urHdQ&usqp=CAU', phone: '+7(495)999-99-99', mobilePhone: '+79999999999', internalPhone: '9999', email: 'user@domail.com', manager: true, position: '', department: '' }, user));
};
var _item = {
    approvers: [getUser({ id: '0' })],
    approverName: 'Линейный руководитель Name',
    approveDateTime: '2022-02-15T09:03:37.612Z',
    name: 'Согласование линейным руководителем',
    comment: "\u041F\u0440\u043E\u0448\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C, \u042D\u041F\u041F\u0440\u043E\u0448\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C, \n    \u042D\u041F\u041F\u0440\u043E\u0448\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C,\n    \u042D\u041F\u041F\u0440\u043E\u0448\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C, \n    \u042D\u041F\u041F\u0440\u043E\u0448\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C, \n    \u042D\u041F\u041F\u0440\u043E\u0448\u0443 \u0432\u044B\u0434\u0430\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u043D\u0438\u043A\u0430\u043C, \u042D\u041F",
    status: 'Согласовано',
    statusType: 'POSITIVE'
};
exports.history = [
    _item,
    __assign(__assign({}, _item), { approverName: 'Бусыгина Александра Анатольевна Name', approveDateTime: '2022-02-15T09:03:37.612Z', name: 'Согласование заявки', comment: undefined, status: 'Подписано ЭП', statusType: 'NEUTRAL' }),
    __assign(__assign({}, _item), { approvers: [getUser({ id: '1' }), getUser({ id: '2' })], approverName: 'Бусыгина Александра Name', approveDateTime: '2022-02-15T09:03:37.612Z', name: 'Согласование заявки', comment: undefined, status: 'Отклонено', statusType: 'NEGATIVE' }),
    __assign(__assign({}, _item), { approvers: [getUser({ id: '4' })], approverName: 'Петров Александр Палович Name', approveDateTime: undefined, name: 'Согласование заявки', comment: undefined, status: undefined, statusType: undefined }),
    __assign(__assign({}, _item), { approvers: [getUser({ id: '5' }), getUser({ id: '6' }), getUser({ id: '7' })], approverName: 'Никита Другой Name', approveDateTime: undefined, name: 'Согласование заявки', comment: undefined, status: undefined, statusType: undefined }),
    __assign(__assign({}, _item), { approvers: [
            getUser({
                id: '8',
                fullName: 'Аня петровна'
            })
        ], approverName: 'Аня петровна Name', approveDateTime: undefined, name: 'Согласование заявки 2', comment: undefined, status: undefined, statusType: undefined }),
];
