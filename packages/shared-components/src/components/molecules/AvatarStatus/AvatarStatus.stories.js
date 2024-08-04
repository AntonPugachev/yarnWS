"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = exports.Demo = void 0;
var storybook_1 = require("../../storybook");
var Story_1 = require("../../storybook/Story");
var StoryRow_1 = require("../../storybook/StoryRow");
var AvatarStatus_1 = require("./AvatarStatus");
var users_mocks_1 = require("../../popups/FindUsers/users.mocks");
var indexIcon_1 = require("../../../indexIcon");
exports.default = {
    title: 'components/withTest/AvatarStatus',
    component: AvatarStatus_1.default,
    argTypes: {
        variant: {
            options: [
                'blue',
                'green',
                'default',
                'yellow',
                'red',
                'white'
            ],
            control: { type: 'select' }
        },
        size: {
            options: [
                'xxs',
                'xs',
                's',
                'm',
                'l',
                'xl',
                'xxl',
                'xxxl',
                'xxxxl'
            ],
            control: { type: 'select' },
            defaultValue: 'm'
        },
        photo: { type: 'string' },
        fullName: { type: 'string' },
        backgroundColor: {
            options: [
                'default',
                'white',
                'grey',
                'black'
            ],
            control: { type: 'select' },
            defaultValue: 'default'
        },
        icon: { control: false },
        type: {
            options: [
                'online',
                'icon',
                'decline',
                'load',
                'in',
                'out',
                'vacation',
                'birthday',
                'disease',
                'businessTrip',
                'remoteWork',
                'decree',
                'boss'
            ],
            control: { type: 'select' },
            defaultValue: 'online'
        },
        stickerSize: ['s', 'm', 'l'],
    }
};
var sizes = [
    'xxs',
    'xs',
    's',
    'm',
    'l',
    'xl',
    'xxl',
    'xxxl',
    'xxxxl'
];
var variants = [
    {
        variant: 'green',
        status: 'icon',
        title: 'Done'
    },
    {
        variant: 'blue',
        status: 'icon',
        title: 'You'
    },
    {
        variant: 'default',
        status: 'icon',
        title: 'Next'
    },
    {
        variant: 'yellow',
        status: 'load',
        title: 'On completion'
    },
    {
        variant: 'red',
        status: 'decline',
        title: 'Decline'
    }
];
var scale = sizes.map(function (size) {
    return <div style={{
            display: 'flex',
            flexDirection: 'column',
            marginRight: 32
        }}>
    <div style={{
            fontSize: 12,
            marginBottom: 32,
            fontFamily: 'VTB Group UI',
            lineHeight: '16px',
            textAlign: 'center',
            color: '#626F84'
        }}>{size}</div>
    <div><AvatarStatus_1.default type='online' size={size} icon={indexIcon_1.AllUser}/></div>
  </div>;
});
var getStatusesWithSticker = function (hasSticker) {
    if (hasSticker === void 0) { hasSticker = true; }
    var statusesWithSticker = variants.map(function (variant) {
        return <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginRight: 32
            }}>
      <div style={{
                fontSize: 12,
                marginBottom: 32,
                fontFamily: 'VTB Group UI',
                lineHeight: '16px',
                textAlign: 'center',
                color: '#626F84'
            }}>{variant.title}</div>
      <div style={{ marginBottom: 40 }}>
        <AvatarStatus_1.default variant={variant.variant} size='l' type={variant.status} photo={users_mocks_1.usersMocks[0].photo}/>
      </div>
      <AvatarStatus_1.default variant={variant.variant} size='l' photo={users_mocks_1.usersMocks[0].photo}/>

    </div>;
    });
    return statusesWithSticker;
};
var Demo = function () {
    return (<storybook_1.StoryDocs>
      <storybook_1.StoryDocsH1>Avatar Status</storybook_1.StoryDocsH1>
      <storybook_1.StoryDocsDescription>Дополнительный компонент который исполюзуется в истории виджет</storybook_1.StoryDocsDescription>
      <div style={{ display: 'flex' }}>
        {getStatusesWithSticker()}
      </div>
      <storybook_1.StoryDocsH2>Scale sticker</storybook_1.StoryDocsH2>
      <storybook_1.StoryDocsDescription>Используется с компонентом статус</storybook_1.StoryDocsDescription>
      <div style={{
            display: 'flex',
            position: 'relative'
        }}>
        <div style={{
            position: 'absolute',
            top: 30,
            left: -15,
            width: 725,
            height: 115,
            border: '1px dashed #8A96A8',
            borderRadius: 5
        }}/>
        {scale}
      </div>
    </storybook_1.StoryDocs>);
};
exports.Demo = Demo;
exports.Demo.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A1347',
    },
    actions: { disabled: true },
    controls: { disabled: true }
};
var Playground = function (args) {
    return (<Story_1.default>
      <StoryRow_1.default>
        <AvatarStatus_1.default {...args}/>
      </StoryRow_1.default>
    </Story_1.default>);
};
exports.Playground = Playground;
