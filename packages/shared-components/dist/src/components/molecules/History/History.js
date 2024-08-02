"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Button_1 = __importDefault(require("../../atoms/Button"));
var Attachment_1 = __importDefault(require("../Attachment"));
var HistoryPathList_1 = __importDefault(require("../../atoms/HistoryPathList"));
var helpers_1 = require("./helpers");
var indexIcon_1 = require("../../../indexIcon");
require("./History.scss");
// FIXME: Elements must have sufficient color contrast
var History = function (_a) {
    var history = _a.history, isUZADO = _a.isUZADO, _b = _a.attachments, attachments = _b === void 0 ? [] : _b, _c = _a.host, host = _c === void 0 ? window.location.origin : _c;
    // -------------------------------------------------------------------------------------------------------------------
    /** Локальное состояние компонента */
    /** Показать / скрыть историю */
    var _d = (0, react_1.useState)(false), expanded = _d[0], setExpanded = _d[1];
    /** Формируем массив истории на основании фильтрации и состояния отображения (открыто / закрыто) */
    var _e = (0, react_1.useState)((0, helpers_1.onPathFilter)(history, expanded)), path = _e[0], setPath = _e[1];
    /** Эффект - отслеживает состояние отображения */
    (0, react_1.useEffect)(function () {
        setPath((0, helpers_1.onPathFilter)(history, expanded));
    }, [expanded]);
    /** Обработчик события нажатия на кнопку "Смотреть всё / Свернуть" */
    var handleExpansion = function () { return setExpanded(!expanded); };
    // -------------------------------------------------------------------------------------------------------------------
    /** Секция приложенных документов */
    var attachmentsJSX = ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-history__attachments', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-history__attachments-line' }), (0, jsx_runtime_1.jsx)("p", { className: 'rf-history__attachments-title', children: "\u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B" }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-history__attachments-container', children: attachments === null || attachments === void 0 ? void 0 : attachments.map(function (attachment, index) { return ((0, jsx_runtime_1.jsx)(Attachment_1.default, { attachment: {
                        id: attachment.id,
                        file: new File([attachment.base64], attachment.fileName),
                        base64: attachment.base64
                    }, type: 'secondary', showRemoveIcon: false, tooltipBackground: 'white' }, index)); }) })] }));
    // -------------------------------------------------------------------------------------------------------------------
    /** Компонент истории */
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-history', children: [(0, jsx_runtime_1.jsx)(HistoryPathList_1.default, { path: path, isUZADO: isUZADO }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-history__button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'light', onClick: handleExpansion, startAdornment: expanded ? (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronUp, {}) : (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronDown, {}), children: expanded ? 'Свернуть' : 'Смотреть всё' }) }), attachments && attachmentsJSX] }));
};
exports.default = History;
