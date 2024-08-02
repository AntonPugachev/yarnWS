"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._segmentList3 = exports._segmentList2 = exports._segmentList = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var Badge_1 = __importDefault(require("../Badge"));
var indexIcon_1 = require("../../../indexIcon");
exports._segmentList = [
    {
        value: '1',
        label: 'Линейная',
    },
    {
        value: '2',
        label: 'Функциональная'
    }
];
exports._segmentList2 = [
    {
        value: '1',
        label: 'Enabled',
    },
    {
        value: '2',
        label: 'Disabled',
        disabled: true
    }
];
exports._segmentList3 = [
    {
        value: '1',
        label: (0, jsx_runtime_1.jsx)(Badge_1.default, { badgeContent: '2', placeNear: true, children: "\u041B\u0438\u043D\u0435\u0439\u043D\u0430\u044F" }),
    },
    {
        value: '2',
        label: 'Функциональная'
    },
    {
        value: '3',
        label: 'Все',
        icon: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, {})
    }
];
