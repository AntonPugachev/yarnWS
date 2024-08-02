"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./StoryItem.scss");
var StoryItem = function (_a) {
    var subtitle = _a.subtitle, description = _a.description, children = _a.children;
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'story__item', children: [subtitle && (0, jsx_runtime_1.jsx)("h4", { className: 'story__subtitle', children: subtitle }), description && (0, jsx_runtime_1.jsx)("p", { className: 'story__description', children: description }), (0, jsx_runtime_1.jsx)("div", { className: 'story__content', children: children })] }));
};
exports.default = StoryItem;
