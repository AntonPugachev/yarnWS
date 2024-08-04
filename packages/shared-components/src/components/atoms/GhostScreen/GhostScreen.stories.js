"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ghostScreen = void 0;
var GhostScreen_1 = require("./GhostScreen");
var Story_1 = require("../../storybook/Story");
var StoryItem_1 = require("../../storybook/StoryItem");
/* eslint-disable max-len */
exports.default = {
    title: 'icons,illustrations/withTest/Экран заглушки с приведением',
    component: GhostScreen_1.default,
};
var ghostScreen = function () {
    return (<Story_1.default name='Экран заглушки с приведением' description='GhostScreen'>
      <StoryItem_1.default>
        <GhostScreen_1.default text={'Не все приведения страшные? Не так ли?'}/>
      </StoryItem_1.default>
    </Story_1.default>);
};
exports.ghostScreen = ghostScreen;
exports.ghostScreen.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Y86V3oIhkZQ4u27iBuhN0l/%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D1%8B-%D0%92%D0%A2%D0%91-%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9?node-id=19060%3A302735'
    },
};
