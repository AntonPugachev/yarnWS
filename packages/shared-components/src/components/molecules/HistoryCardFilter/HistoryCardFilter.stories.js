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
exports.Playground = exports.Demo = void 0;
var StoryItem_1 = require("../../storybook/StoryItem");
var Story_1 = require("../../storybook/Story");
var HistoryCardFilter_1 = require("./HistoryCardFilter");
var storybook_1 = require("../../storybook");
var opt = [
    {
        value: 'END',
        label: 'Завершено'
    },
    {
        value: 'DRAFT',
        label: 'Черновик'
    },
    {
        value: 'IN_PROGRESS',
        label: 'На согласовании'
    }
];
var data = {
    statusOptions: opt,
    initialValues: {},
    onChange: function (values) {
        console.warn(values);
    }
};
exports.default = {
    title: 'components/withTest/HistoryCardFilter',
    component: HistoryCardFilter_1.default,
    typeArgs: {
        isShowDatePicker: { type: 'boolean' },
        isShowStatusFilter: { type: 'boolean' },
        isShowSearch: { type: 'boolean' }
    },
};
var Demo = function () {
    return (<Story_1.default name='Fatal Error' description='Стандартный фильтр для истории'>
      <storybook_1.StoryDocsH1>History Card Filter</storybook_1.StoryDocsH1>
      <storybook_1.StoryDocsH2>Компонент фильтров</storybook_1.StoryDocsH2>
      <storybook_1.StoryDocsDescription>Отображение комопнента фильров для сортировки и фильтрации</storybook_1.StoryDocsDescription>
      <StoryItem_1.default>
        <HistoryCardFilter_1.default onChange={function (result) {
            console.warn('Значении изменились: ', result);
        }}/>
      </StoryItem_1.default>
    </Story_1.default>);
};
exports.Demo = Demo;
exports.Demo.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=18%3A18191'
    },
    actions: { disabled: true },
    controls: { disabled: true }
};
var Playground = function (props) {
    var values = __assign(__assign({}, data), props);
    return (<Story_1.default name='HistoryCardFilter' description='Стандартный фильтр для истории'>
      <storybook_1.StoryDocs>
        <HistoryCardFilter_1.default {...values} onChange={function (result) {
            console.warn('Значени изменились: ', result);
        }}/>
      </storybook_1.StoryDocs>
    </Story_1.default>);
};
exports.Playground = Playground;
