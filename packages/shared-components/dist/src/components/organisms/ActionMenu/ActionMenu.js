"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./ActionMenu.scss");
var indexIcon_1 = require("../../../indexIcon");
var Button_1 = __importDefault(require("../../atoms/Button"));
var Input_1 = __importDefault(require("../../atoms/Input"));
var Menu_1 = __importDefault(require("../../atoms/Menu"));
var Select_1 = __importDefault(require("../../atoms/Select"));
var ActionMenu = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var _b = _a.type, type = _b === void 0 ? 'default' : _b, listConfig = _a.listConfig, component = _a.component, children = _a.children;
    var getSortValue = function (o) {
        listConfig === null || listConfig === void 0 ? void 0 : listConfig.onSort(o[0].value);
    };
    var handleSearch = function (e) {
        listConfig === null || listConfig === void 0 ? void 0 : listConfig.onSearch(e.target.value);
    };
    var listJSX = listConfig && ((0, jsx_runtime_1.jsxs)("div", { className: 'jf-action-menu__header', children: [(0, jsx_runtime_1.jsx)("div", { className: 'jf-action-menu__sorting', children: component ? component :
                    listConfig.sortList.length > 0 && listConfig &&
                        (0, jsx_runtime_1.jsx)(Select_1.default, { readOnly: true, options: listConfig.sortList, values: listConfig.defaultSortValue ? [listConfig.defaultSortValue] : [listConfig.sortList[0]], onChange: getSortValue }) }), (0, jsx_runtime_1.jsx)("div", { className: 'jf-action-menu__search', children: (0, jsx_runtime_1.jsx)(Input_1.default, { onKeyUp: handleSearch, placeholder: '\u041F\u043E\u0438\u0441\u043A', onClear: listConfig.onClear }) }), listConfig.singleAction && ((0, jsx_runtime_1.jsx)("div", { className: 'jf-action-menu__list-button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: listConfig.singleAction, children: listConfig.actionLabel || 'Создать' }) })), !listConfig.singleAction && listConfig.actionList.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: 'jf-action-menu__list-button', children: (0, jsx_runtime_1.jsx)(Menu_1.default, { list: listConfig.actionList, position: 'top-end', children: (0, jsx_runtime_1.jsx)(Button_1.default, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'jf-action-menu__button-inner', children: [listConfig.actionLabel || 'Создать', " ", (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, { className: 'jf-action-menu__list-button-icon' })] }) }) }) }))] }));
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsx)("div", { className: "jf-action-menu jf-action-menu--".concat(type), children: type === 'list' ? listJSX : children }));
};
exports.default = ActionMenu;
