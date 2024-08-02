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
exports._listMenuWithTile = exports._listMenu = void 0;
exports._listMenu = [
    {
        value: '1',
        label: 'Значение 1',
        url: '/test'
    },
    {
        value: '2',
        label: 'Значение 2'
    },
    {
        value: '3',
        label: 'Неактивное значение 3',
        disabled: true
    },
    {
        value: '4',
        label: 'Значение 4',
        separated: true
    },
    {
        value: '5',
        label: 'Значение 5'
    },
    {
        value: '6',
        label: 'Значение 6',
        separated: true
    },
];
exports._listMenuWithTile = __spreadArray(__spreadArray([
    {
        value: '0',
        label: 'Заголовок 2',
        isTitle: true
    }
], exports._listMenu, true), [
    {
        value: '10',
        label: 'Заголовок 2',
        isTitle: true,
    },
    {
        value: '11',
        label: 'Длинный текст очень длинный ооооочень',
    },
], false);
