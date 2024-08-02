"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonIconGroupMock = exports.buttonGroupMock = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var index_1 = require("../../../index");
var indexIcon_1 = require("../../../indexIcon");
exports.buttonGroupMock = [
    { component: (0, jsx_runtime_1.jsx)(index_1.Button, { size: 'l', children: " \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C " }) },
    { component: (0, jsx_runtime_1.jsx)(index_1.Button, { buttonType: 'light', size: 'l', onClick: function () { return console.log('отменить'); }, children: " \u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C " }) },
    {
        component: (0, jsx_runtime_1.jsx)(index_1.Button, { size: 'l', buttonType: 'light', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusPending, {}), "aria-label": '\u041F\u043E\u0434\u0431\u043E\u0440' }),
        label: 'Подбор',
        tooltip: 'Описание',
        description: 'Начать подбор сотрудника на позицию',
        onClick: function () {
            console.log('Подбор');
        }
    },
    {
        label: 'Перевод',
        description: 'Оформить перевод сотрудника',
        url: '/transfer',
    }
];
exports.buttonIconGroupMock = [
    {
        component: (0, jsx_runtime_1.jsx)(index_1.Button, { size: 'l', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusPending, {}), "aria-label": '\u041A\u0430\u043A\u043E\u0435-\u0442\u043E \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435' }),
        tooltip: 'Какое-то описание'
    },
    {
        component: (0, jsx_runtime_1.jsx)(index_1.Button, { size: 'l', buttonType: 'light', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllCopy, {}), "aria-label": '\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C' }),
        tooltip: 'Копировать'
    },
    {
        component: (0, jsx_runtime_1.jsx)(index_1.Button, { size: 'l', buttonType: 'light', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.StatusQuestion, {}), "aria-label": '\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435...' }),
        tooltip: 'Описание...',
        label: 'Подбор',
        description: 'Начать подбор сотрудника на позицию',
        onClick: function () {
            /*     console.log('Подбор'); */
        }
    },
];
