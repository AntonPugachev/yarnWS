"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Segment.scss");
var classnames_1 = require("../../../utils/classnames");
var Segment = function (_a) {
    var list = _a.list, _b = _a.fullWidth, fullWidth = _b === void 0 ? false : _b, value = _a.value, onChange = _a.onChange;
    var slider = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(0), activeIndex = _c[0], setActiveIndex = _c[1];
    var setBoundary = function (i) {
        if (slider.current) {
            slider.current.style.transform = "translateX(".concat(100 * i, "%)");
        }
    };
    (0, react_1.useEffect)(function () {
        if (!value) {
            return;
        }
        var index = list.findIndex(function (o) { return o.value === value.value; });
        setActiveIndex(index < 0 ? 0 : index);
    }, [value]);
    (0, react_1.useEffect)(function () {
        setBoundary(activeIndex);
    }, [activeIndex]);
    // -------------------------------------------------------------------------------------------------------------------
    var handleChange = function (i) {
        if (list[i].disabled) {
            return;
        }
        setActiveIndex(i);
        onChange(list[i]);
    };
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-segment', children: (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-segment__list', fullWidth && 'rf-segment__list--full'), children: list.map(function (o, i) {
                return (0, jsx_runtime_1.jsxs)("button", { className: (0, classnames_1.classnames)('rf-segment__item', activeIndex === i && 'rf-segment__item--active'), disabled: o.disabled, onClick: function () { return handleChange(i); }, children: [!!o.icon && (0, jsx_runtime_1.jsx)("div", { className: 'rf-segment__icon', children: o.icon }), o.label] }, o.value);
            }) }) }));
};
exports.default = Segment;
