"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Accordion.scss");
var react_1 = require("react");
var classnames_1 = require("../../../utils/classnames");
var AccordionItem_1 = __importDefault(require("./AccordionItem"));
// TODO: Проверить правильность использования role='treeitem'
var Accordion = function (_a) {
    var _b = _a.data, data = _b === void 0 ? [] : _b, _c = _a.expanded, expanded = _c === void 0 ? false : _c, _d = _a.hoverable, hoverable = _d === void 0 ? true : _d;
    var getDefaultOpenedIndexes = (0, react_1.useCallback)(function () { return data.reduce(function (acc, curr, index) {
        if (curr.defaultOpened) {
            if (expanded || !acc.length) {
                acc.push(index);
            }
            return acc;
        }
        return acc;
    }, []); }, [data.length, expanded]);
    var _e = (0, react_1.useState)(function () { return getDefaultOpenedIndexes(); }), openedIndexes = _e[0], setOpenedIndexes = _e[1];
    var isOpened = (0, react_1.useCallback)(function (index) { return openedIndexes.findIndex(function (i) { return i === index; }) !== -1; }, [openedIndexes]);
    var handleOpen = (0, react_1.useCallback)(function (index) { return function () {
        var oepend = isOpened(index);
        if (expanded) {
            if (oepend) {
                setOpenedIndexes(function (prevIndex) { return prevIndex.filter(function (i) { return i !== index; }); });
            }
            else {
                setOpenedIndexes(function (prevIndex) { return __spreadArray(__spreadArray([], prevIndex, true), [index], false); });
            }
        }
        else {
            setOpenedIndexes(oepend ? [] : [index]);
        }
    }; }, [isOpened, expanded]);
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-accordion', role: 'tree', children: data.map(function (item, index) {
            var opened = isOpened(index);
            return ((0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('rf-accordion__item-wrap', opened && 'rf-accordion__item-wrap--opened', hoverable && 'rf-accordion__item-wrap--hoverable', item.disabled && 'rf-accordion__item-wrap--disabled'), children: [(0, jsx_runtime_1.jsx)(AccordionItem_1.default, { opened: opened, disabled: item.disabled, onClick: handleOpen(index), children: item.title }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-accordion__panel', children: item.content })] }, index));
        }) }));
};
exports.default = Accordion;
