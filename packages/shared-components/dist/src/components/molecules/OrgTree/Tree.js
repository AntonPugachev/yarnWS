"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var TreeItem_1 = __importDefault(require("./TreeItem"));
var Folder = function (_a) {
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var id = _a.id, list = _a.list, onChange = _a.onChange, onCheck = _a.onCheck, _b = _a.depth, depth = _b === void 0 ? 0 : _b, _c = _a.open, open = _c === void 0 ? true : _c, activeItem = _a.activeItem;
    /** Базовый размер отступа слева */
    var PADDING_LEFT_BASE = 22;
    var style = { paddingLeft: depth === 0 ? 0 : PADDING_LEFT_BASE };
    // ---------------------------------------------------------------------------------------------------------------------------------------
    var listJSX = list.map(function (item, i) {
        return ((0, jsx_runtime_1.jsx)(TreeItem_1.default, { id: id, item: item, onChange: onChange, onCheck: onCheck, depth: depth + 1, open: open, activeItem: activeItem, last: i === list.length - 1 }, item.value + '_' + depth + '_' + i));
    });
    // ---------------------------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-tree', style: style, children: listJSX }));
};
exports.default = Folder;
