"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var useDynamicScript_1 = require("../../../hooks/useDynamicScript");
var Preloader_1 = __importDefault(require("../Preloader"));
var ErrorBoundary_1 = __importDefault(require("../ErrorBoundary"));
var DynamicComponent = function (_a) {
    var url = _a.url, scope = _a.scope, module = _a.module, _b = _a.basename, basename = _b === void 0 ? '' : _b, fallback = _a.fallback, _c = _a.error, error = _c === void 0 ? '' : _c;
    var _d = (0, useDynamicScript_1.useDynamicScript)({ url: url }), ready = _d.ready, failed = _d.failed;
    var Component = (0, react_1.useMemo)(function () { return React.lazy((0, useDynamicScript_1.loadComponent)(scope, module)); }, [scope, module]);
    if (!ready) {
        console.log('Loading dynamic script' + url);
    }
    if (failed) {
        console.log('Failed to load dynamic script:' + url);
    }
    return ((0, jsx_runtime_1.jsx)(ErrorBoundary_1.default, { error: error, children: failed ? error : ((0, jsx_runtime_1.jsx)(React.Suspense, { fallback: fallback || (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 'l' }), children: ready ? (0, jsx_runtime_1.jsx)(Component, { basename: basename }) : (0, jsx_runtime_1.jsx)(Preloader_1.default, { size: 'l' }) })) }));
};
exports.default = DynamicComponent;
