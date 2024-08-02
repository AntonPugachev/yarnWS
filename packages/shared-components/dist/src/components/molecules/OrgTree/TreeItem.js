"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./TreeItem.scss");
var Tree_1 = __importDefault(require("./Tree"));
var resize_observer_polyfill_1 = __importDefault(require("resize-observer-polyfill"));
var hline_1 = __importDefault(require("./lines/hline"));
var index_1 = require("../../../index");
var indexIcon_1 = require("../../../indexIcon");
var Circle_1 = __importDefault(require("./Circle"));
var Checkbox_1 = __importDefault(require("../../atoms/Checkbox"));
var classnames_1 = require("../../../utils/classnames");
var FolderItem = function (_a) {
    var _b;
    var id = _a.id, item = _a.item, onChange = _a.onChange, onCheck = _a.onCheck, depth = _a.depth, open = _a.open, activeItem = _a.activeItem, _c = _a.last, last = _c === void 0 ? false : _c;
    var itemRef = (0, react_1.useRef)(null);
    var vLine = (0, react_1.useRef)(null);
    var folder = (0, react_1.useRef)(null);
    var _d = (0, react_1.useState)(open), showFolder = _d[0], toggleFolder = _d[1];
    (0, react_1.useEffect)(function () {
        toggleFolder(open);
    }, [open]);
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var openClass = showFolder && item.children && item.children.length > 0 ? 'rf-tree__item--open' : 'rf-tree__item--close';
    var showFolderClass = showFolder ? '' : 'rf-tree__item-folder--hidden';
    var rotateIconClass = (item.hasChildren === undefined ? item.children && item.children.length === 0 : item.hasChildren && !((_b = item.children) === null || _b === void 0 ? void 0 : _b.length)) || !showFolder ? 'rf-tree__item-label-icon--rotate' : '';
    var itemChildrenClass = item.children && item.children.length > 0 ? '' : 'rf-tree__item--no-children';
    var activeClass = (activeItem === null || activeItem === void 0 ? void 0 : activeItem.value) === item.value ? 'rf-tree__item--active' : '';
    var firstLevelClass = depth === 1 ? 'rf-tree__item--1' : '';
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var openFolder = (0, react_1.useCallback)(function (e) {
        var _a;
        e.stopPropagation();
        if (item.hasChildren === undefined ? (!item.children || item.children.length === 0) : item.hasChildren && !((_a = item.children) === null || _a === void 0 ? void 0 : _a.length)) {
            onChange && onChange(item);
            toggleFolder(true);
            return;
        }
        toggleFolder(function (f) { return !f; });
    }, [onChange, toggleFolder, item]);
    var handleChange = (0, react_1.useCallback)(function (e) {
        e.stopPropagation();
        onChange && onChange(item);
        if (item.hasChildren === undefined ? item.children : item.hasChildren) {
            toggleFolder(true);
        }
    }, [onChange, toggleFolder, item]);
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var calculateHeight = (0, react_1.useCallback)(function (vLine, folder) {
        var _a;
        var treeItem = folder.firstElementChild;
        if (!treeItem) {
            return;
        }
        var lastTreeItem = treeItem.children[treeItem.children.length - 1];
        if (!lastTreeItem) {
            return;
        }
        var firstLabelItem = lastTreeItem.children[1];
        var vLineParentNextItem = (_a = vLine.parentElement) === null || _a === void 0 ? void 0 : _a.nextElementSibling;
        var y = depth === 1 && vLineParentNextItem ?
            vLineParentNextItem.getBoundingClientRect().y : firstLabelItem.getBoundingClientRect().y;
        var height = y - vLine.getBoundingClientRect().y + 1;
        vLine.style.height = height + 'px';
    }, [depth]);
    (0, react_1.useEffect)(function () {
        var resizeObserver = new resize_observer_polyfill_1.default(function () {
            if (vLine.current && folder.current) {
                calculateHeight(vLine.current, folder.current);
            }
        });
        var container = document.getElementById(id);
        if (container) {
            resizeObserver.observe(container);
        }
    }, [calculateHeight, id]);
    var onCheckboxClick = function (event) {
        event.stopPropagation();
    };
    var onCheckboxChange = function () {
        if (onCheck) {
            onCheck(item);
        }
    };
    // ---------------------------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-tree__item ".concat(openClass, " ").concat(itemChildrenClass, " ").concat(activeClass, " ").concat(firstLevelClass), ref: itemRef, children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-tree__item--v', ref: vLine }), (0, jsx_runtime_1.jsxs)("div", { className: "rf-tree__item-label rf-tree__item-label--".concat(item.variant || 'default'), onClick: handleChange, children: [(0, jsx_runtime_1.jsx)(hline_1.default, { className: 'rf-tree__item--h', "data-id": "d-".concat(depth) }), (item.hasChildren === undefined ? (item.children && item.children.length > 0) : item.hasChildren) ?
                        (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsUp, { className: "rf-tree__item-label-icon ".concat(rotateIconClass), onClick: openFolder }) :
                        (0, jsx_runtime_1.jsx)(Circle_1.default, { className: 'rf-tree__item-label-icon' }), (0, jsx_runtime_1.jsxs)("label", { className: (0, classnames_1.classnames)('rf-tree__item-label-text', (onCheck || onChange) && 'rf-tree__item-label-text--clickable'), children: [!!onCheck && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-tree__checkbox', children: (0, jsx_runtime_1.jsx)(Checkbox_1.default, { checked: item.checked, onChange: onCheckboxChange, onClick: onCheckboxClick }) })), item.label] })] }), item.loading && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-tree__item-preloader', children: (0, jsx_runtime_1.jsx)(index_1.Preloader, { size: 's' }) })), item.children && item.children.length > 0 && ((0, jsx_runtime_1.jsx)("div", { className: "rf-tree__item-folder ".concat(showFolderClass), ref: folder, children: (0, jsx_runtime_1.jsx)(Tree_1.default, { id: id, list: item.children, onChange: onChange, parent: item, depth: depth, open: open, activeItem: activeItem, onCheck: onCheck }) }))] }));
};
exports.default = FolderItem;
