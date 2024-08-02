"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var AvatarStatus_1 = __importDefault(require("../../molecules/AvatarStatus"));
var indexIcon_1 = require("../../../indexIcon");
var helpers_1 = require("../../molecules/History/helpers");
var helpers_2 = require("./helpers");
var helpers_3 = require("../../../utils/helpers");
var Avatar_1 = __importDefault(require("../Avatar"));
var Tooltip_1 = __importDefault(require("../Tooltip"));
var StatusWithText_1 = __importDefault(require("../StatusWithText"));
require("./HistoryPathList.scss");
var HistoryPathList = function (_a) {
    var path = _a.path, _b = _a.isUZADO, isUZADO = _b === void 0 ? false : _b, _c = _a.isMinimal, isMinimal = _c === void 0 ? false : _c;
    /** Массив пользователей для тултипа */
    var users = function (users) {
        return users === null || users === void 0 ? void 0 : users.map(function (item, i) { return ((0, jsx_runtime_1.jsx)(React.Fragment, { children: i < 5 ? ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-path-list__tooltip-users', children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: item.photo }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-path-list__tooltip-users-info', children: [(0, jsx_runtime_1.jsx)("p", { className: 'rf-history-path-list__tooltip-users-name', children: item.fullName }), (0, jsx_runtime_1.jsx)("p", { className: 'rf-history-path-list__tooltip-users-position', children: item.department })] })] })) : ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, {})) }, i)); });
    };
    var historyPathListJSX = path.map(function (pathItem, pathNumber) {
        /** Если есть дата, форматируем */
        var date = pathItem.date ? (0, helpers_3.formatDate)(pathItem.date + new Date().getTimezoneOffset() * 60 * 1000) : null;
        /** Определяем последний элемент - рисовать после него маршрутную черту или нет */
        var isLastElement = pathNumber !== path.length - 1;
        /** Определяем есть ли решение по шагу - рисовать сплошную или прерывистую черту */
        var isReconciled = path[pathNumber + 1] && path[pathNumber + 1].criticality === '0';
        return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-path-list__history-element', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-path-list__user-photo', children: [pathItem.user && pathItem.user.length === 1 ?
                            (0, jsx_runtime_1.jsx)(AvatarStatus_1.default, { fullName: pathItem.user[0].fullName, size: 'l', photo: pathItem.user[0].photo, variant: pathItem.user[0].fullName === 'Вы' ? helpers_1.statusValue['4'] : helpers_1.statusValue[pathItem.criticality], type: isMinimal ? helpers_2.statusType[pathItem.criticality] : undefined }) :
                            (0, jsx_runtime_1.jsx)(AvatarStatus_1.default, { size: 'l', icon: indexIcon_1.AllUser, variant: helpers_1.statusValue[pathItem.criticality], type: isMinimal ? helpers_2.statusType[pathItem.criticality] : undefined }), isLastElement && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-history-path-list__user-line-wrapper', children: (0, jsx_runtime_1.jsx)("div", { className: "rf-history-path-list__user-line ".concat(isReconciled ? 'incomplete' : 'done') }) }))] }), isMinimal ? (0, jsx_runtime_1.jsx)("div", { className: "rf-history-sidebar__details--minimal ".concat(!isLastElement && 'last') }) : ((0, jsx_runtime_1.jsxs)("div", { className: "rf-history-path-list__details ".concat(!isLastElement && 'rf-history-path-list__details--last'), children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-path-list__details-user-name', children: [(0, jsx_runtime_1.jsxs)("h4", { className: 'rf-history-path-list__fullName', children: [(pathItem.user && pathItem.user.length === 1 && pathItem.user[0].fullName) || pathItem.agentName, pathItem.delegate && pathItem.delegate.length === 1 && ((0, jsx_runtime_1.jsxs)("span", { className: 'rf-history-path-list__fullName--delegate', children: [" / \u043E\u0442 \u0438\u043C\u0435\u043D\u0438 ", pathItem.delegate[0].fullName] }))] }), !(pathItem.user && pathItem.user.length < 2) && !isUZADO && ((0, jsx_runtime_1.jsxs)(Tooltip_1.default, { background: 'white', children: [(0, jsx_runtime_1.jsx)("div", { className: 'rf-history-path-list__icon-wrapper', children: (0, jsx_runtime_1.jsx)(indexIcon_1.InformationAlert, {}) }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-path-list__tooltip-wrapper', children: users(pathItem.user) })] }))] }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-history-path-list__details-column', children: [pathItem.user.length === 1 ? ((0, jsx_runtime_1.jsx)("p", { className: 'rf-history-path-list__details-info', children: isUZADO ? pathItem.user[0].position : pathItem.activityText })) : ((0, jsx_runtime_1.jsx)("p", { className: 'rf-history-path-list__details-info', children: pathItem.activityText })), !!date && ((0, jsx_runtime_1.jsxs)("span", { className: 'rf-history-path-list__details-date', children: [date.dayOfMonth, " ", date.monthShort, " ", date.year, " \u0432 ", date.hour, ":", date.minutes] })), !!pathItem.date && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-history-path-list__status-wrapper', children: (0, jsx_runtime_1.jsx)(StatusWithText_1.default, { statusText: pathItem.statusText, criticality: pathItem.criticality }) }))] }), !!pathItem.comment && ((0, jsx_runtime_1.jsx)("div", { className: 'rf-history-path-list__details-comment-wrapper', children: (0, jsx_runtime_1.jsx)("div", { className: 'rf-history-path-list__details-comment', children: pathItem.comment }) }))] }))] }, pathItem.stepId));
    });
    return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: historyPathListJSX });
};
exports.default = HistoryPathList;
