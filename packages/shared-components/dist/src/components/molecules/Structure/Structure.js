"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Structure.scss");
var Structure = function (_a) {
    var _b = _a.departmentsPath, departmentsPath = _b === void 0 ? [] : _b, _c = _a.background, background = _c === void 0 ? 'white' : _c;
    var textColor = background !== 'white' ? 'light-text' : 'dark-text';
    var departmentsPathJSX = departmentsPath.map(function (item) { return ((0, jsx_runtime_1.jsxs)("div", { className: 'structure__item', children: [(0, jsx_runtime_1.jsx)("h4", { className: "structure__unit ".concat(textColor), children: item.unitTypeDesc }), (0, jsx_runtime_1.jsx)("p", { className: "structure__name ".concat(textColor), children: item.name })] }, item.id)); });
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsx)("div", { className: 'structure', children: departmentsPathJSX }));
};
exports.default = Structure;
