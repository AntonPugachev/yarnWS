"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_popper_1 = require("react-popper");
require("./Dropdown.scss");
var useClickOutside_1 = __importDefault(require("../../../hooks/useClickOutside"));
var react_dom_1 = require("react-dom");
var Dropdown = function (_a) {
    var children = _a.children, show = _a.show, toggleRef = _a.toggleRef, position = _a.position, style = _a.style, offset = _a.offset, containerRef = _a.containerRef, onClose = _a.onClose;
    var contentRef = (0, react_1.useRef)(null);
    var _b = (0, react_1.useState)((containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) || document.body), container = _b[0], setContainer = _b[1];
    (0, react_1.useEffect)(function () {
        if (containerRef === null || containerRef === void 0 ? void 0 : containerRef.current) {
            setContainer(containerRef.current);
        }
    }, [containerRef === null || containerRef === void 0 ? void 0 : containerRef.current]);
    /** Функция для отслеживания клика вне элемента */
    var handleClickOutside = (0, react_1.useCallback)(function (event) {
        if (event.target && toggleRef.current && toggleRef.current.contains(event.target)) {
            return;
        }
        onClose();
    }, [onClose, toggleRef]);
    (0, useClickOutside_1.default)(contentRef, handleClickOutside);
    if (!show) {
        return null;
    }
    var content = (0, jsx_runtime_1.jsx)(react_popper_1.Popper, { placement: position, modifiers: [
            {
                name: 'offset',
                options: { offset: offset || [0, 8] },
            },
            {
                name: 'flip',
                options: {
                    allowedAutoPlacements: [
                        'right',
                        'left',
                        'top',
                        'bottom'
                    ],
                    rootBoundary: 'viewport',
                },
            },
        ], innerRef: contentRef, children: function (_a) {
            var ref = _a.ref, dropdownStyle = _a.style;
            return ((0, jsx_runtime_1.jsx)("div", { ref: ref, style: __assign(__assign({}, dropdownStyle), style), className: 'rf-dropdown__content', "data-testid": 'rf-dropdown', children: children }));
        } });
    return (0, react_dom_1.createPortal)(content, container);
};
exports.default = Dropdown;
