"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = exports.Demo = void 0;
var Button_1 = require("./Button");
var storybook_1 = require("../../storybook");
var Story_1 = require("../../storybook/Story");
var StoryRow_1 = require("../../storybook/StoryRow");
var types_1 = require("../../../types");
var indexIcon_1 = require("../../../indexIcon");
var buttonTypes = [
    'primary',
    'light',
    'secondary',
    'outline',
    'ghost',
    'danger',
    'icon',
    'iconFill',
    'text',
    'white',
];
exports.default = {
    title: 'controls/withTest/Button',
    component: Button_1.default,
    argTypes: {
        buttonType: {
            options: buttonTypes,
            control: { type: 'select' },
            defaultValue: 'primary',
        },
        size: {
            options: ['s', 'm', 'l', 'xl'],
            control: { type: 'select' },
            defaultValue: 'm',
        },
        disabled: { type: 'boolean' },
        textColor: {
            options: types_1.variantsClassic,
            control: { type: 'select' },
            defaultValue: 'default',
        },
        type: { control: null },
        pressedCondition: { control: null },
        startAdornment: { control: null },
        endAdornment: { control: null },
    },
};
var Demo = function () {
    var getButtons = function (props) {
        return (<>
        <Button_1.default {...props} size='xl' aria-label={props.preloader ? 'Button 56' : undefined}>
          Button 56
        </Button_1.default>
        <Button_1.default {...props} size='l' aria-label={props.preloader ? 'Button 48' : undefined}>
          Button 48
        </Button_1.default>
        <Button_1.default {...props} size='m' aria-label={props.preloader ? 'Button 40' : undefined}>
          Button 40
        </Button_1.default>
        <Button_1.default {...props} size='s' aria-label={props.preloader ? 'Button 32' : undefined}>
          Button 32
        </Button_1.default>
      </>);
    };
    var getIconButtons = function (props) {
        return (<>
        <Button_1.default {...props} size='xl' aria-label='Button 56'>
          <indexIcon_1.AllIconPlace />
        </Button_1.default>
        <Button_1.default {...props} size='l' aria-label='Button 48'>
          <indexIcon_1.AllIconPlace />
        </Button_1.default>
        <Button_1.default {...props} size='m' aria-label='Button 40'>
          <indexIcon_1.AllIconPlace />
        </Button_1.default>
        <Button_1.default {...props} size='s' aria-label='Button 32'>
          <indexIcon_1.AllIconPlace size='xxs'/>
        </Button_1.default>
      </>);
    };
    return (<storybook_1.StoryDocs>
      <storybook_1.StoryDocsH1>Кнопки</storybook_1.StoryDocsH1>

      <storybook_1.StoryDocsH2>Размеры</storybook_1.StoryDocsH2>
      <storybook_1.StoryDocsDescription>
        Кнопки представлены в четырех размерностях XL, L, M и S. Такое количество кнопок обусловлено большим количеством
        проектов разной степени плотности — от простых интерфейсов низкой плотности до сложных высоконагруженных систем.
      </storybook_1.StoryDocsDescription>

      <div style={{
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(4, auto)',
            justifyItems: 'flex-start',
            width: 'max-content',
        }}>
        <Button_1.default size='xl'>Button XL</Button_1.default>
        <Button_1.default size='l'>Button L</Button_1.default>
        <Button_1.default size='m'>Button M</Button_1.default>
        <Button_1.default size='s'>Button S</Button_1.default>
      </div>

      <storybook_1.StoryDocsH2>Иконки в кнопках</storybook_1.StoryDocsH2>
      <storybook_1.StoryDocsDescription>
        Иконки в кнопках могут выводиться слева, справа и по центру (без текста). Иконка перенаследует цвет взависимости
        от состояния кнопки.
      </storybook_1.StoryDocsDescription>

      <div style={{
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(4, auto)',
            justifyItems: 'flex-start',
            width: 'max-content',
        }}>
        <Button_1.default size='xl' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Button 56
        </Button_1.default>
        <Button_1.default size='l' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Button 48
        </Button_1.default>
        <Button_1.default size='m' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Button 40
        </Button_1.default>
        <Button_1.default size='s' startAdornment={<indexIcon_1.AllIconPlace size='xxs'/>}>
          Button 32
        </Button_1.default>
        <Button_1.default size='xl' endAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Button 56
        </Button_1.default>
        <Button_1.default size='l' endAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Button 48
        </Button_1.default>
        <Button_1.default size='m' endAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Button 40
        </Button_1.default>
        <Button_1.default size='s' endAdornment={<indexIcon_1.AllIconPlace size='xxs'/>}>
          Button 32
        </Button_1.default>
        <Button_1.default size='xl' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>} aria-label='Button 56'/>
        <Button_1.default size='l' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>} aria-label='Button 48'/>
        <Button_1.default size='m' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>} aria-label='Button 40'/>
        <Button_1.default size='s' startAdornment={<indexIcon_1.AllIconPlace size='xxs'/>} aria-label='Button 32'/>
        <Button_1.default size='xl' buttonType='text' startAdornment={<indexIcon_1.AllIconPlace size='xs'/>}>
          Text button 56
        </Button_1.default>
        <div /> <div />
        <Button_1.default size='s' buttonType='text' startAdornment={<indexIcon_1.AllIconPlace size='xxs'/>}>
          Text button 32
        </Button_1.default>
      </div>

      <storybook_1.StoryDocsH2>Основные состояния</storybook_1.StoryDocsH2>

      <div style={{
            display: 'grid',
            gap: '20px',
            gridTemplateColumns: 'repeat(5, auto)',
            justifyItems: 'center',
            width: 'max-content',
        }}>
        <storybook_1.StoryDocsLabel>Размеры</storybook_1.StoryDocsLabel>
        <storybook_1.StoryDocsLabel>
          <b>XL Button</b> <br /> Height: 56px
        </storybook_1.StoryDocsLabel>
        <storybook_1.StoryDocsLabel>
          <b>L Button</b> <br /> Height: 48px
        </storybook_1.StoryDocsLabel>
        <storybook_1.StoryDocsLabel>
          <b>M Button</b> <br /> Height: 40px
        </storybook_1.StoryDocsLabel>
        <storybook_1.StoryDocsLabel>
          <b>S Button</b> <br /> Height: 32px
        </storybook_1.StoryDocsLabel>

        <storybook_1.StoryDocsH3>Primary</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'primary' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'primary',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'primary',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Primary Light</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'light' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'light',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'light',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Danger</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'danger' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'danger',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'danger',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Success</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'success' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'success',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'success',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Secondary</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'secondary' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'secondary',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'secondary',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Outline</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'outline' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'outline',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'outline',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Ghost</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'ghost' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'ghost',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'ghost',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Icon Buttons</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getIconButtons({ buttonType: 'icon' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getIconButtons({
            buttonType: 'icon',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getIconButtons({
            buttonType: 'icon',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Buttons Round</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'round' })}
        <storybook_1.StoryDocsLabel>Active</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'round-active' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'round',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'round',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>Icon Buttons Round</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getIconButtons({ buttonType: 'icon-round' })}
        <storybook_1.StoryDocsLabel>Active</storybook_1.StoryDocsLabel>
        {getIconButtons({ buttonType: 'icon-round-active' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getIconButtons({
            buttonType: 'icon-round',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getIconButtons({
            buttonType: 'icon-round',
            preloader: true,
        })}

        <storybook_1.StoryDocsH3>White Button</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        {getButtons({ buttonType: 'white' })}
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'white',
            disabled: true,
        })}
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        {getButtons({
            buttonType: 'white',
            preloader: true,
        })}
      </div>
      <div style={{
            display: 'grid',
            gap: '40px',
            gridTemplateColumns: 'repeat(3, auto)',
            justifyItems: 'center',
            width: 'max-content',
        }}>
        <storybook_1.StoryDocsH3>Text Button</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        <Button_1.default buttonType={'text'} size='xl'>
          Button 56
        </Button_1.default>
        <Button_1.default buttonType={'text'} size='s'>
          Button 32
        </Button_1.default>
        <storybook_1.StoryDocsLabel>Disabled</storybook_1.StoryDocsLabel>
        <Button_1.default buttonType={'text'} disabled size='xl'>
          Button 56
        </Button_1.default>
        <Button_1.default buttonType={'text'} disabled size='s'>
          Button 32
        </Button_1.default>
        <storybook_1.StoryDocsLabel>Loading</storybook_1.StoryDocsLabel>
        <Button_1.default buttonType={'text'} preloader size='xl' aria-label='Button 56'>
          Button 56
        </Button_1.default>
        <Button_1.default buttonType={'text'} preloader size='s' aria-label='Button 32'>
          Button 32
        </Button_1.default>

        <storybook_1.StoryDocsH3>Text Icon Button</storybook_1.StoryDocsH3>

        <storybook_1.StoryDocsLabel>Default</storybook_1.StoryDocsLabel>
        <Button_1.default size='xl' buttonType='text' startAdornment={<indexIcon_1.AllAdd size='xs'/>}>
          Text button 56
        </Button_1.default>
        <Button_1.default size='s' buttonType='text' startAdornment={<indexIcon_1.AllAdd size='xxs'/>}>
          Text button 32
        </Button_1.default>
      </div>
    </storybook_1.StoryDocs>);
};
exports.Demo = Demo;
exports.Demo.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=4%3A4233',
    },
    actions: { disabled: true },
    controls: { disabled: true },
};
var Playground = function (args) {
    var buttonType = args.buttonType === 'icon' || args.buttonType === 'iconFill' ? 'primary' : args.buttonType;
    var adornment = args.size === 's' ? <indexIcon_1.AllIconPlace size='xxs'/> : <indexIcon_1.AllIconPlace size='xs'/>;
    return (<Story_1.default>
      <StoryRow_1.default>
        <Button_1.default {...args}>{args.buttonType === 'icon' || args.buttonType === 'iconFill' ? 'i' : 'Button'}</Button_1.default>
      </StoryRow_1.default>
      <StoryRow_1.default>
        <Button_1.default {...args} buttonType={buttonType} startAdornment={adornment}>
          Button
        </Button_1.default>
      </StoryRow_1.default>
      <StoryRow_1.default>
        <Button_1.default {...args} buttonType={buttonType} endAdornment={adornment}>
          Button
        </Button_1.default>
      </StoryRow_1.default>
      <StoryRow_1.default>
        <Button_1.default {...args} buttonType={buttonType} startAdornment={adornment} endAdornment={adornment}>
          Button
        </Button_1.default>
      </StoryRow_1.default>
      <StoryRow_1.default>
        <Button_1.default {...args} buttonType={buttonType} startAdornment={adornment} aria-label='Button'/>
      </StoryRow_1.default>
    </Story_1.default>);
};
exports.Playground = Playground;
