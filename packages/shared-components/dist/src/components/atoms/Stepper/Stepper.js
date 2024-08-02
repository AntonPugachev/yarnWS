"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useStepper = exports.StepperContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Step_1 = __importDefault(require("./Step"));
var classnames_1 = require("../../../utils/classnames");
require("./Stepper.scss");
var useWindowSize_1 = __importDefault(require("../../../hooks/useWindowSize"));
var useDebounce_1 = __importDefault(require("../../../hooks/useDebounce"));
exports.StepperContext = (0, react_1.createContext)({
    variant: 'horizontal',
    value: undefined,
    readonly: false,
    lastCompletedStep: undefined,
    onChange: function () { }
});
var useStepper = function () { return (0, react_1.useContext)(exports.StepperContext); };
exports.useStepper = useStepper;
var MOBILE_WIDTH = 968;
var Stepper = function (_a) {
    var _b = _a.variant, defaultVaiant = _b === void 0 ? 'horizontal' : _b, children = _a.children, _c = _a.readonly, readonly = _c === void 0 ? false : _c, onChange = _a.onChange, value = _a.value;
    var _d = (0, react_1.useState)(defaultVaiant), variant = _d[0], setVariant = _d[1];
    var _e = (0, react_1.useState)(), lastCompletedStep = _e[0], setLastCompletedStep = _e[1];
    var width = (0, useWindowSize_1.default)().width;
    (0, react_1.useEffect)(function () {
        if (value) {
            setLastCompletedStep(function (prevStep) {
                if (prevStep === void 0) { prevStep = 0; }
                return prevStep < value - 1 ? value - 1 : prevStep;
            });
        }
    }, [value]);
    (0, useDebounce_1.default)(width, 300, function () {
        if (width) {
            var activeVariant = width >= MOBILE_WIDTH ? defaultVaiant : 'vertical';
            if (activeVariant !== variant) {
                setVariant(activeVariant);
            }
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-stepper', "rf-stepper--".concat(variant)), children: (0, jsx_runtime_1.jsx)(exports.StepperContext.Provider, { value: {
                onChange: onChange,
                value: value,
                variant: variant,
                readonly: readonly,
                lastCompletedStep: lastCompletedStep
            }, children: children }) }));
};
Stepper.Step = Step_1.default;
exports.default = Stepper;
