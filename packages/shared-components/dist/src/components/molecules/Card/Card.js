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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var Tag_1 = __importDefault(require("../../atoms/Tag"));
var Button_1 = __importDefault(require("../../atoms/Button"));
require("./Card.scss");
var EntityCard_1 = __importDefault(require("../EntityCard/EntityCard"));
var Card = function (_a) {
    var _b = _a.title, title = _b === void 0 ? '' : _b, _c = _a.id, id = _c === void 0 ? '' : _c, _d = _a.subTitle, subTitle = _d === void 0 ? '' : _d, _e = _a.requestNumber, requestNumber = _e === void 0 ? '' : _e, _f = _a.date, date = _f === void 0 ? '' : _f, _g = _a.statusText, statusText = _g === void 0 ? '' : _g, _h = _a.statusColor, statusColor = _h === void 0 ? 'default' : _h, _j = _a.users, users = _j === void 0 ? [] : _j, _k = _a.showActionButton, showActionButton = _k === void 0 ? false : _k, _l = _a.tooltipBackground, tooltipBackground = _l === void 0 ? 'white' : _l, _m = _a.onClick, onClick = _m === void 0 ? function () { } : _m;
    var listUsers = users.map(function (user) { return (0, react_1.createElement)(EntityCard_1.default, __assign({}, user, { key: user.id, canCopy: true, tooltipBackground: tooltipBackground, firstLabel: 'Табельный номер', valueByFirstLabel: user.id, secondLabel: user.position ? 'Должность' : user.period ? 'Период' : '', valueBySecondLabel: user.position || user.period || undefined })); });
    var handleClick = function (e) {
        onClick(e, id);
    };
    return (0, jsx_runtime_1.jsx)("div", { className: 'rf-card__wrapper', onClick: handleClick, children: (0, jsx_runtime_1.jsxs)(Tile_1.default, { className: 'rf-card__tile', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-card__row rf-card__row_first-row', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-card__title-wrapper', children: [(0, jsx_runtime_1.jsx)("h1", { className: 'rf-card__title', children: "".concat(title, " \u2116").concat(requestNumber, " \u043E\u0442 ").concat(date) }), subTitle && (0, jsx_runtime_1.jsx)("p", { className: 'rf-card__subtitle', children: subTitle })] }), (0, jsx_runtime_1.jsx)(Tag_1.default, { variant: statusColor, children: statusText })] }), listUsers, showActionButton && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-card__button-wrapper', children: (0, jsx_runtime_1.jsx)(Button_1.default, { className: 'rf-card__button', children: "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u0442\u044C" }) }))] }) });
};
exports.default = Card;
