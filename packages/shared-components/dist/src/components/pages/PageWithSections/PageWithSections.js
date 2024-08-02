"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./PageWithSections.scss");
var ButtonGroup_1 = __importDefault(require("../../molecules/ButtonGroup"));
var Preloader_1 = __importDefault(require("../../atoms/Preloader"));
var Tabs_1 = __importDefault(require("../../atoms/Tabs"));
var indexIcon_1 = require("../../../indexIcon");
var react_router_dom_1 = require("react-router-dom");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var useTableOfContents_1 = __importDefault(require("../../../hooks/useTableOfContents"));
// FIXME: Elements must have sufficient color contrast
var PageWithSections = function (_a) {
    var title = _a.title, backUrl = _a.backUrl, onBackUrlClick = _a.onBackUrlClick, sections = _a.sections, actionMenu = _a.actionMenu, _b = _a.preloader, preloader = _b === void 0 ? false : _b, _c = _a.showNavigation, showNavigation = _c === void 0 ? true : _c, navigation = _a.navigation, _d = _a.showHeader, showHeader = _d === void 0 ? true : _d, _e = _a.actionMenuAlwaysBottom, actionMenuAlwaysBottom = _e === void 0 ? false : _e, _f = _a.showNavigationPosition, showNavigationPosition = _f === void 0 ? false : _f, _g = _a.additionalScrollOffset, additionalScrollOffset = _g === void 0 ? 0 : _g, _h = _a.countOfButtonsGroup, countOfButtonsGroup = _h === void 0 ? 2 : _h, _j = _a.buttonsGroup, buttonsGroup = _j === void 0 ? [] : _j, parentScroll = _a.parentScroll;
    /** Ссылка на навигацию */
    // const asideRef = useRef<HTMLDivElement>(null);
    /** Ссылка на секции */
    // const sectionsRef = useRef<HTMLDivElement>(null);
    /** Ссылка на страницу */
    // const pageRef = useRef<HTMLDivElement>(null);
    /** Ссылка на шапку страницы */
    var pageHeaderRef = (0, react_1.useRef)(null);
    // -------------------------------------------------------------------------------------------------------------------
    /** Отображение секций */
    var sectionsJSX = sections === null || sections === void 0 ? void 0 : sections.map(function (section) {
        return ((0, jsx_runtime_1.jsx)("section", { id: section.id, className: 'rf-page__section-block', children: section.withoutTileWrapper ?
                (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [" ", section.component] }) :
                (0, jsx_runtime_1.jsxs)(Tile_1.default, { hideBackground: section.hideBackground, children: [section.title && (0, jsx_runtime_1.jsx)("h2", { className: 'rf-page__section-title', children: section.title }), section.component] }) }, section.id));
    });
    // -------------------------------------------------------------------------------------------------------------------
    /** Активная секция при скролле */
    var _k = (0, useTableOfContents_1.default)({
        selector: '.rf-page__section-block',
        parent: parentScroll,
        deps: [preloader]
    }), activeTitle = _k.activeTitle, onClick = _k.onClick;
    /** Боковая навигация для секций */
    var asideJSX = sections === null || sections === void 0 ? void 0 : sections.filter(function (section) { return !!section.title; }).map(function (section, idx) {
        var onNavClick = function () {
            var block = document.getElementById(section.id);
            if (block && pageHeaderRef.current) {
                var top_1 = block.getBoundingClientRect().top + (parentScroll ? parentScroll.scrollTop : window.scrollY) - additionalScrollOffset;
                (parentScroll ? parentScroll : window).scrollTo(0, top_1);
            }
            onClick({
                activeIndex: idx,
                activeTitleId: section.id
            });
        };
        var activeClass = showNavigationPosition && activeTitle.activeTitleId === section.id ? 'rf-page__aside-link--active' : '';
        return ((0, jsx_runtime_1.jsx)("div", { className: "rf-page__aside-link ".concat(activeClass), onClick: onNavClick, children: section.title }, section.id));
    });
    // -------------------------------------------------------------------------------------------------------------------
    var showAside = !!sections && sections.some(function (s) { return !!s.title; });
    var styleAsideBlock = (0, react_1.useMemo)(function () { return ({ marginTop: (navigation === null || navigation === void 0 ? void 0 : navigation.length) ? '70px' : 0 }); }, [navigation === null || navigation === void 0 ? void 0 : navigation.length]);
    var asideBlock = showNavigation && showAside && ((0, jsx_runtime_1.jsx)("aside", { className: 'rf-page__content-aside', style: styleAsideBlock, children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-page__aside-inner', children: (0, jsx_runtime_1.jsx)("nav", { className: 'rf-page__aside-nav', "aria-label": '\u0421\u0435\u043A\u0446\u0438\u0438', children: asideJSX }) }) }));
    // -------------------------------------------------------------------------------------------------------------------
    var onBackClick = function (e) {
        if (onBackUrlClick) {
            e.preventDefault();
            onBackUrlClick();
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-sections-page', children: [(0, jsx_runtime_1.jsxs)("header", { className: "rf-page__sections-header ".concat(showHeader ? '' : 'rf-page__sections-header--hidden'), ref: pageHeaderRef, children: [backUrl && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: backUrl, onClick: onBackClick, className: 'rf-page__sections-header-back', "aria-label": '\u041D\u0430\u0437\u0430\u0434', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) })), (0, jsx_runtime_1.jsx)("h2", { className: 'rf-page__sections-title', children: title })] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-page__content--sections', children: preloader ? (0, jsx_runtime_1.jsx)(Preloader_1.default, {}) : ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-page__content-sections', children: [!!(navigation === null || navigation === void 0 ? void 0 : navigation.length) && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-page__tabs', children: (0, jsx_runtime_1.jsx)(Tabs_1.default, { list: navigation }) })), sectionsJSX] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-page__aside', children: asideBlock })] })) }), !preloader && actionMenu ? actionMenu : (buttonsGroup !== undefined && buttonsGroup.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-page__buttons-group', children: (0, jsx_runtime_1.jsx)(ButtonGroup_1.default, { max: countOfButtonsGroup, list: buttonsGroup }) })))] }));
};
exports.default = PageWithSections;
