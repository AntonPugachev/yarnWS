"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stepper = void 0;
exports.stepper = [
    {
        index: 0,
        children: 'Выбор товаров',
        status: 'default'
    },
    {
        index: 1,
        children: 'Корзина',
        status: 'error'
    },
    {
        index: 2,
        children: 'Оформление заказа (warning)',
        status: 'warning'
    },
    {
        index: 3,
        children: 'inactive',
        status: 'inactive'
    },
    {
        index: 4,
        children: 'Disabled',
        status: 'default',
        disabled: true
    }
];
