"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./Story.scss");
var Story = function (_a) {
    var name = _a.name, description = _a.description, width = _a.width, height = _a.height, children = _a.children;
    var style = {
        width: width ? "".concat(width, "px") : '100%',
        height: height ? "".concat(height, "px") : '100%'
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'story', style: style, children: [!!name && (0, jsx_runtime_1.jsx)("h2", { className: 'story__name', children: name }), description && (0, jsx_runtime_1.jsx)("p", { className: 'story__description', children: description }), (0, jsx_runtime_1.jsx)("div", { className: 'story__wrapper', children: children })] }));
};
exports.default = Story;
