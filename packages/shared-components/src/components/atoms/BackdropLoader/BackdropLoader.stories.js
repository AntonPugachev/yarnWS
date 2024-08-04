"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backdropLoader = void 0;
var react_1 = require("react");
var BackdropLoader_1 = require("./BackdropLoader");
var Story_1 = require("../../storybook/Story");
var StoryItem_1 = require("../../storybook/StoryItem");
var Button_1 = require("../Button");
exports.default = {
    title: 'components/не проверено/BackdropLoader',
    component: BackdropLoader_1.default
};
var backdropLoader = function () {
    var _a = (0, react_1.useState)(false), show = _a[0], toggle = _a[1];
    var onClick = function () {
        toggle(true);
    };
    return (<Story_1.default name='BackdropLoader (Загрузка с блокированием страницы)'>
      <StoryItem_1.default description='Когда нужно загрузить данные и не дать пользователю совершить действия на странице.'>
        <Button_1.default onClick={onClick}> Push me </Button_1.default>
        {show && <BackdropLoader_1.default />}
      </StoryItem_1.default>
    </Story_1.default>);
};
exports.backdropLoader = backdropLoader;
