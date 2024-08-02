"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Employee.scss");
var Avatar_1 = __importDefault(require("../../atoms/Avatar"));
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var Tooltip_1 = __importDefault(require("../../atoms/Tooltip"));
var indexIcon_1 = require("../../../indexIcon");
var Structure_1 = __importDefault(require("../Structure"));
var Button_1 = __importDefault(require("../../atoms/Button"));
// FIXME: Elements must have sufficient color contrast
var Employee = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var user = _a.user, _b = _a.position, position = _b === void 0 ? 'right' : _b, _c = _a.title, title = _c === void 0 ? '' : _c, _d = _a.showBoxShadow, showBoxShadow = _d === void 0 ? true : _d, _e = _a.onClick, onClick = _e === void 0 ? function () { } : _e, _f = _a.showActionButton, showActionButton = _f === void 0 ? false : _f, tooltipBackground = _a.tooltipBackground;
    var shortDepartment = user.department.slice(0, 60);
    var department = shortDepartment.length < user.department.length ? shortDepartment + '...' : shortDepartment;
    var getButton = function () { return (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'xl', className: 'rf-employee__button', buttonType: 'text', onClick: onClick, startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllRefresh, {}), children: "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0434\u0440\u0443\u0433\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430" }); };
    var getTooltip = function (departmentsPath) { return (0, jsx_runtime_1.jsxs)(Tooltip_1.default, { position: position, background: tooltipBackground, children: [(0, jsx_runtime_1.jsx)(indexIcon_1.StatusInfoFill, { "data-testid": 'icon', className: 'rf-employee__department-icon' }), (0, jsx_runtime_1.jsx)(Structure_1.default, { departmentsPath: departmentsPath, background: tooltipBackground })] }); };
    var employeeComponent = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [title && (0, jsx_runtime_1.jsxs)("h6", { className: 'rf-employee__title', children: [" ", title, " "] }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-employee__details-wrapper', children: [(0, jsx_runtime_1.jsx)(Avatar_1.default, { photo: user.photo, fullName: user.fullName, size: 'xxxl' }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-employee__details', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'rf-employee__name-container', children: [(0, jsx_runtime_1.jsx)("h3", { className: 'rf-employee__name', children: user.fullName }), user.departmentsPath && getTooltip(user.departmentsPath)] }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-employee__info', children: [" ", user.position, " "] }), (0, jsx_runtime_1.jsx)("div", { className: 'rf-employee__info rf-employee__info-department', children: department }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-employee__info rf-employee__info-id', children: ["TH: ", user.id] })] })] }), showActionButton && getButton()] });
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-employee', children: showBoxShadow ?
            (0, jsx_runtime_1.jsx)(Tile_1.default, { className: 'rf-employee__tile', children: employeeComponent }) : (0, jsx_runtime_1.jsx)("div", { className: 'rf-employee__tile--disabledShadow', children: employeeComponent }) }));
};
exports.default = Employee;
