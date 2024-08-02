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
var jsx_runtime_1 = require("react/jsx-runtime");
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
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 'xl', "aria-label": props.preloader ? 'Button 56' : undefined, children: "Button 56" })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 'l', "aria-label": props.preloader ? 'Button 48' : undefined, children: "Button 48" })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 'm', "aria-label": props.preloader ? 'Button 40' : undefined, children: "Button 40" })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 's', "aria-label": props.preloader ? 'Button 32' : undefined, children: "Button 32" }))] }));
    };
    var getIconButtons = function (props) {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 'xl', "aria-label": 'Button 56', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, {}) })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 'l', "aria-label": 'Button 48', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, {}) })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 'm', "aria-label": 'Button 40', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, {}) })), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { size: 's', "aria-label": 'Button 32', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xxs' }) }))] }));
    };
    return ((0, jsx_runtime_1.jsxs)(storybook_1.StoryDocs, { children: [(0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH1, { children: "\u041A\u043D\u043E\u043F\u043A\u0438" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH2, { children: "\u0420\u0430\u0437\u043C\u0435\u0440\u044B" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsDescription, { children: "\u041A\u043D\u043E\u043F\u043A\u0438 \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u044B \u0432 \u0447\u0435\u0442\u044B\u0440\u0435\u0445 \u0440\u0430\u0437\u043C\u0435\u0440\u043D\u043E\u0441\u0442\u044F\u0445 XL, L, M \u0438 S. \u0422\u0430\u043A\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043D\u043E\u043F\u043E\u043A \u043E\u0431\u0443\u0441\u043B\u043E\u0432\u043B\u0435\u043D\u043E \u0431\u043E\u043B\u044C\u0448\u0438\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E\u043C \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432 \u0440\u0430\u0437\u043D\u043E\u0439 \u0441\u0442\u0435\u043F\u0435\u043D\u0438 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438 \u2014 \u043E\u0442 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0438\u043D\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u043E\u0432 \u043D\u0438\u0437\u043A\u043E\u0439 \u043F\u043B\u043E\u0442\u043D\u043E\u0441\u0442\u0438 \u0434\u043E \u0441\u043B\u043E\u0436\u043D\u044B\u0445 \u0432\u044B\u0441\u043E\u043A\u043E\u043D\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0445 \u0441\u0438\u0441\u0442\u0435\u043C." }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(4, auto)',
                    justifyItems: 'flex-start',
                    width: 'max-content',
                }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', children: "Button XL" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'l', children: "Button L" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'm', children: "Button M" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 's', children: "Button S" })] }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH2, { children: "\u0418\u043A\u043E\u043D\u043A\u0438 \u0432 \u043A\u043D\u043E\u043F\u043A\u0430\u0445" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsDescription, { children: "\u0418\u043A\u043E\u043D\u043A\u0438 \u0432 \u043A\u043D\u043E\u043F\u043A\u0430\u0445 \u043C\u043E\u0433\u0443\u0442 \u0432\u044B\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0441\u043B\u0435\u0432\u0430, \u0441\u043F\u0440\u0430\u0432\u0430 \u0438 \u043F\u043E \u0446\u0435\u043D\u0442\u0440\u0443 (\u0431\u0435\u0437 \u0442\u0435\u043A\u0441\u0442\u0430). \u0418\u043A\u043E\u043D\u043A\u0430 \u043F\u0435\u0440\u0435\u043D\u0430\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u0446\u0432\u0435\u0442 \u0432\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u043E\u0441\u0442\u0438 \u043E\u0442 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F \u043A\u043D\u043E\u043F\u043A\u0438." }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(4, auto)',
                    justifyItems: 'flex-start',
                    width: 'max-content',
                }, children: [(0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Button 56" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'l', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Button 48" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'm', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Button 40" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 's', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xxs' }), children: "Button 32" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', endAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Button 56" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'l', endAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Button 48" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'm', endAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Button 40" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 's', endAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xxs' }), children: "Button 32" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), "aria-label": 'Button 56' }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'l', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), "aria-label": 'Button 48' }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'm', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), "aria-label": 'Button 40' }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 's', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xxs' }), "aria-label": 'Button 32' }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' }), children: "Text button 56" }), (0, jsx_runtime_1.jsx)("div", {}), " ", (0, jsx_runtime_1.jsx)("div", {}), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 's', buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xxs' }), children: "Text button 32" })] }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH2, { children: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u044F" }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(5, auto)',
                    justifyItems: 'center',
                    width: 'max-content',
                }, children: [(0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "\u0420\u0430\u0437\u043C\u0435\u0440\u044B" }), (0, jsx_runtime_1.jsxs)(storybook_1.StoryDocsLabel, { children: [(0, jsx_runtime_1.jsx)("b", { children: "XL Button" }), " ", (0, jsx_runtime_1.jsx)("br", {}), " Height: 56px"] }), (0, jsx_runtime_1.jsxs)(storybook_1.StoryDocsLabel, { children: [(0, jsx_runtime_1.jsx)("b", { children: "L Button" }), " ", (0, jsx_runtime_1.jsx)("br", {}), " Height: 48px"] }), (0, jsx_runtime_1.jsxs)(storybook_1.StoryDocsLabel, { children: [(0, jsx_runtime_1.jsx)("b", { children: "M Button" }), " ", (0, jsx_runtime_1.jsx)("br", {}), " Height: 40px"] }), (0, jsx_runtime_1.jsxs)(storybook_1.StoryDocsLabel, { children: [(0, jsx_runtime_1.jsx)("b", { children: "S Button" }), " ", (0, jsx_runtime_1.jsx)("br", {}), " Height: 32px"] }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Primary" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'primary' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'primary',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'primary',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Primary Light" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'light' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'light',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'light',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Danger" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'danger' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'danger',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'danger',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Success" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'success' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'success',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'success',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Secondary" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'secondary' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'secondary',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'secondary',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Outline" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'outline' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'outline',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'outline',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Ghost" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'ghost' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'ghost',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'ghost',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Icon Buttons" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getIconButtons({ buttonType: 'icon' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getIconButtons({
                        buttonType: 'icon',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getIconButtons({
                        buttonType: 'icon',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Buttons Round" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'round' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Active" }), getButtons({ buttonType: 'round-active' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'round',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'round',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Icon Buttons Round" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getIconButtons({ buttonType: 'icon-round' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Active" }), getIconButtons({ buttonType: 'icon-round-active' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getIconButtons({
                        buttonType: 'icon-round',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getIconButtons({
                        buttonType: 'icon-round',
                        preloader: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "White Button" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), getButtons({ buttonType: 'white' }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), getButtons({
                        buttonType: 'white',
                        disabled: true,
                    }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), getButtons({
                        buttonType: 'white',
                        preloader: true,
                    })] }), (0, jsx_runtime_1.jsxs)("div", { style: {
                    display: 'grid',
                    gap: '40px',
                    gridTemplateColumns: 'repeat(3, auto)',
                    justifyItems: 'center',
                    width: 'max-content',
                }, children: [(0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Text Button" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', size: 'xl', children: "Button 56" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', size: 's', children: "Button 32" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Disabled" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', disabled: true, size: 'xl', children: "Button 56" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', disabled: true, size: 's', children: "Button 32" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Loading" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', preloader: true, size: 'xl', "aria-label": 'Button 56', children: "Button 56" }), (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'text', preloader: true, size: 's', "aria-label": 'Button 32', children: "Button 32" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsH3, { children: "Text Icon Button" }), (0, jsx_runtime_1.jsx)(storybook_1.StoryDocsLabel, { children: "Default" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllAdd, { size: 'xs' }), children: "Text button 56" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 's', buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllAdd, { size: 'xxs' }), children: "Text button 32" })] })] }));
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
    var adornment = args.size === 's' ? (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xxs' }) : (0, jsx_runtime_1.jsx)(indexIcon_1.AllIconPlace, { size: 'xs' });
    return ((0, jsx_runtime_1.jsxs)(Story_1.default, { children: [(0, jsx_runtime_1.jsx)(StoryRow_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, args, { children: args.buttonType === 'icon' || args.buttonType === 'iconFill' ? 'i' : 'Button' })) }), (0, jsx_runtime_1.jsx)(StoryRow_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, args, { buttonType: buttonType, startAdornment: adornment, children: "Button" })) }), (0, jsx_runtime_1.jsx)(StoryRow_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, args, { buttonType: buttonType, endAdornment: adornment, children: "Button" })) }), (0, jsx_runtime_1.jsx)(StoryRow_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, args, { buttonType: buttonType, startAdornment: adornment, endAdornment: adornment, children: "Button" })) }), (0, jsx_runtime_1.jsx)(StoryRow_1.default, { children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, args, { buttonType: buttonType, startAdornment: adornment, "aria-label": 'Button' })) })] }));
};
exports.Playground = Playground;
