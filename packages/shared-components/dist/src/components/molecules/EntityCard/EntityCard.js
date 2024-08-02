"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var UserPhoto_1 = __importDefault(require("../../atoms/UserPhoto"));
require("./EntityCard.scss");
var __1 = require("../../..");
var EntityCard = function (_a) {
    var fullName = _a.fullName, _b = _a.photo, photo = _b === void 0 ? '' : _b, _c = _a.role, role = _c === void 0 ? '' : _c, _d = _a.firstLabel, firstLabel = _d === void 0 ? '' : _d, _e = _a.valueByFirstLabel, valueByFirstLabel = _e === void 0 ? '' : _e, _f = _a.secondLabel, secondLabel = _f === void 0 ? '' : _f, _g = _a.valueBySecondLabel, valueBySecondLabel = _g === void 0 ? '' : _g, _h = _a.canCopy, canCopy = _h === void 0 ? false : _h, _j = _a.tooltipBackground, tooltipBackground = _j === void 0 ? 'white' : _j;
    return (0, jsx_runtime_1.jsx)("div", { className: 'rf-entity-card', children: (0, jsx_runtime_1.jsxs)("div", { className: 'rf-entity-card__wrapper', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-entity-card__photo-wrapper', children: (0, jsx_runtime_1.jsx)(UserPhoto_1.default, { url: photo, radius: '48' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-entity-card__info-wrapper', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-entity-card__row', children: [(0, jsx_runtime_1.jsx)("p", { className: 'rf-entity-card__full-name', children: fullName }), !!role && (0, jsx_runtime_1.jsx)("p", { className: 'rf-entity-card__role', children: "  / ".concat(role) })] }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-entity-card__row', children: [(0, jsx_runtime_1.jsx)("p", { className: 'rf-entity-card__additional', children: firstLabel }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-entity-card__row', children: [(0, jsx_runtime_1.jsx)("p", { className: 'rf-entity-card__accent rf-entity-card__accent_number', children: valueByFirstLabel }), !!canCopy &&
                                            (0, jsx_runtime_1.jsx)("div", { className: 'rf-entity-card__icon-wrapper', children: (0, jsx_runtime_1.jsx)(__1.Copy, { tooltipLabel: '\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0422\u041D', copyMessage: valueByFirstLabel, successCopyMessage: '\u0422\u041D \u0441\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D', tooltipProps: {
                                                        background: tooltipBackground,
                                                        position: 'bottom'
                                                    } }) }), secondLabel && valueBySecondLabel &&
                                            (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: 'rf-entity-card__additional', children: secondLabel }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-entity-card__row', children: (0, jsx_runtime_1.jsx)("p", { className: 'rf-entity-card__accent', children: valueBySecondLabel }) })] })] })] })] })] }) });
};
exports.default = EntityCard;
