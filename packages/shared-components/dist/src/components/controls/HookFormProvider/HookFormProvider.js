"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHookFormController = exports.HookFormContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
exports.HookFormContext = (0, react_1.createContext)({ controller: undefined });
var useHookFormController = function () {
    var controller = (0, react_1.useContext)(exports.HookFormContext).controller;
    if (!controller) {
        throw new Error('Context not found. Please use <HookFormProvider /> for your form.');
    }
    return controller;
};
exports.useHookFormController = useHookFormController;
var HookFormProvider = function (_a) {
    var children = _a.children, controller = _a.controller;
    return ((0, jsx_runtime_1.jsx)(exports.HookFormContext.Provider, { value: { controller: controller }, children: children }));
};
exports.default = HookFormProvider;
