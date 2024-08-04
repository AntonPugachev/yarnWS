"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@testing-library/react");
var Tabs_1 = require("./Tabs");
var react_router_dom_1 = require("react-router-dom");
var mock_1 = require("./mock");
var ResizeObserver = window.ResizeObserver;
beforeEach(function () {
    //@ts-ignore
    delete window.ResizeObserver;
    window.ResizeObserver = jest.fn().mockImplementation(function () { return ({
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
    }); });
    window.matchMedia = jest.fn().mockReturnValue({
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn(),
    });
});
afterEach(function () {
    window.ResizeObserver = ResizeObserver;
    jest.restoreAllMocks();
});
describe('Test <Tabs/> component', function () {
    it('should have 4 Tabs', function () {
        var container = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Tabs_1.default list={mock_1._simpleTabs}/>
      </react_router_dom_1.BrowserRouter>).container;
        expect(container.getElementsByClassName('rf-tabs__navigation__line')).toHaveLength(1);
        expect(container.getElementsByClassName('rf-tabs__link')).toHaveLength(4);
    });
    it('should hidden line', function () {
        var container = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Tabs_1.default list={mock_1._simpleTabs} showLine={false}/>
      </react_router_dom_1.BrowserRouter>).container;
        expect(container.getElementsByClassName('rf-tabs__navigation__line')).toHaveLength(0);
    });
    it('should be without menu', function () {
        var container = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Tabs_1.default list={mock_1._simpleTabs} showMenu={false}/>
      </react_router_dom_1.BrowserRouter>).container;
        expect(container.getElementsByClassName('rf-tabs__navigation-list--without-menu')).toHaveLength(1);
    });
    it('should have active tab at index 1', function () {
        var container = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Tabs_1.default list={mock_1._simpleTabs}/>
      </react_router_dom_1.BrowserRouter>).container;
        var content = container.getElementsByClassName('rf-tabs__content').item(0);
        var button = container.getElementsByClassName('rf-tabs__button').item(1);
        if (!content) {
            fail('Контент не найден');
        }
        if (!button) {
            fail('Кнопка не найдена');
        }
        var activeTab = content.getElementsByClassName('active-tab').item(0);
        if (!activeTab) {
            fail('Нет активной вкладки');
        }
        expect(button.classList.contains('rf-tabs__button--active')).toBeTruthy();
        expect(activeTab.textContent).toBe('Tab2');
    });
    it('should have last tab disabled', function () {
        var container = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Tabs_1.default list={mock_1._simpleTabs}/>
      </react_router_dom_1.BrowserRouter>).container;
        var button = container.getElementsByClassName('rf-tabs__button').item(3);
        if (!button) {
            fail('Кнопка не найдена');
        }
        expect(button).toBeDisabled();
    });
    it('should change active tab to 1st on click', function () {
        var container = (0, react_1.render)(<react_router_dom_1.BrowserRouter>
        <Tabs_1.default list={mock_1._simpleTabs}/>
      </react_router_dom_1.BrowserRouter>).container;
        var button = container.getElementsByTagName('button').item(0);
        if (!button) {
            fail('Кнопка не найдена');
        }
        expect(button.classList.contains('rf-tabs__button--active')).toBeFalsy();
        react_1.fireEvent.click(button);
        expect(button.classList.contains('rf-tabs__button--active')).toBeTruthy();
        var tab = react_1.screen.getByText('Tab1');
        expect(tab).toBeInTheDocument();
    });
});
