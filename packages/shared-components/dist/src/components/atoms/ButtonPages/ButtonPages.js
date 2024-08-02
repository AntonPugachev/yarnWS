"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./ButtonPages.scss");
var indexIcon_1 = require("../../../indexIcon");
// FIXME: Добавить кнопкам состояния фокуса
var ButtonPages = function (_a) {
    var _b = _a.page, page = _b === void 0 ? 1 : _b, max = _a.max, onChange = _a.onChange;
    var _c = (0, react_1.useState)(1), p = _c[0], setP = _c[1];
    (0, react_1.useEffect)(function () {
        if (page) {
            setP(page);
        }
    }, [page]);
    var onPageChange = (0, react_1.useCallback)(function (n) {
        var nextPage = p + n;
        setP(nextPage);
        onChange(nextPage);
    }, [p]);
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-button-pages', children: [(0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-button-pages__button', disabled: p === 1, onClick: function () { return onPageChange(-1); }, "aria-label": '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, { size: 'xxs' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rf-button-pages__value', children: [p, " / ", max] }), (0, jsx_runtime_1.jsx)("button", { type: 'button', className: 'rf-button-pages__button', disabled: p === max, onClick: function () { return onPageChange(1); }, "aria-label": '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430', children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronRight, { size: 'xxs' }) })] }));
};
exports.default = ButtonPages;
