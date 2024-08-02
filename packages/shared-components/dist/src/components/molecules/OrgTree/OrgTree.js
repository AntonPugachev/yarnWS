"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Tree_1 = __importDefault(require("./Tree"));
// FIXME: Elements must have sufficient color contrast
var OrgTree = function (_a) {
    var _b = _a.id, id = _b === void 0 ? 'rf-org-tree' : _b, list = _a.list, open = _a.open, onChange = _a.onChange, onCheck = _a.onCheck, activeOption = _a.activeOption;
    return ((0, jsx_runtime_1.jsx)("div", { id: id, children: (0, jsx_runtime_1.jsx)(Tree_1.default, { id: id, list: list, onChange: onChange, open: open, activeItem: activeOption, onCheck: onCheck }) }));
};
exports.default = OrgTree;
