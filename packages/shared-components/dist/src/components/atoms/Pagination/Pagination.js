"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Pagination.scss");
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
var Input_1 = __importDefault(require("../Input"));
var Pagination = function (_a) {
    var count = _a.count, _b = _a.disabled, disabled = _b === void 0 ? false : _b, _c = _a.isSimple, isSimple = _c === void 0 ? false : _c, _d = _a.getCurrentPage, getCurrentPage = _d === void 0 ? function () { } : _d, _e = _a.disabledPages, disabledPages = _e === void 0 ? [] : _e;
    var FIRST_PAGE_LABEL = 1;
    var MIN_PAGE_NUMBER = 1;
    var STEP = 1;
    var STEP_BEFORE_SHOWING_DOTS = 4;
    var PAGES_WITHOUT_DOTS = 7;
    var PAGES_WITHOUT_NUMBER_SELECT = 20;
    var _f = (0, react_1.useState)(function () {
        var initialPage = FIRST_PAGE_LABEL;
        while (disabledPages.includes(initialPage) && initialPage <= count) {
            initialPage += STEP;
        }
        return initialPage;
    }), currentPage = _f[0], setCurrentPage = _f[1];
    var firstEllipsisCondition = currentPage > STEP_BEFORE_SHOWING_DOTS;
    var secondEllipsisCondition = currentPage <= count - STEP_BEFORE_SHOWING_DOTS;
    /** клик по номеру страницы */
    var handleClickByPage = function (newPage) { return function () {
        if (!disabledPages.includes(newPage) && !disabled) {
            setCurrentPage(newPage);
            getCurrentPage(newPage);
        }
    }; };
    /** клик по левому шеврону */
    var handleClickByLeftChevron = function () {
        var newPage = currentPage - STEP;
        while (disabledPages.includes(newPage) && newPage >= MIN_PAGE_NUMBER) {
            newPage -= STEP;
        }
        if (newPage >= MIN_PAGE_NUMBER && !disabled) {
            setCurrentPage(newPage);
            getCurrentPage(newPage);
        }
    };
    /** клик по правому шеврону */
    var handleClickByRightChevron = function () {
        var newPage = currentPage + STEP;
        while (disabledPages.includes(newPage) && newPage <= count) {
            newPage += STEP;
        }
        if (newPage <= count && !disabled) {
            setCurrentPage(newPage);
            getCurrentPage(newPage);
        }
    };
    /** ввод страницы вручную */
    var handleInsertPage = function (result) {
        var page = Number(result.debounceString);
        if (!page && !disabled) {
            setCurrentPage(MIN_PAGE_NUMBER);
            getCurrentPage(MIN_PAGE_NUMBER);
        }
        if (page >= MIN_PAGE_NUMBER && page <= count) {
            setCurrentPage(page);
            getCurrentPage(page);
        }
    };
    /** отрисовать номер странички */
    var getPageLabel = function (label) { return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)(isSimple ? 'rf-pagination__label-simple' : 'rf-pagination__label', label === currentPage && "rf-pagination__label".concat(isSimple ? '-simple' : '', "--selected"), disabledPages.includes(label) && 'rf-pagination__label--disabled'), onClick: handleClickByPage(label), children: isSimple ? null : (0, jsx_runtime_1.jsx)("span", { className: 'rf-pagination__label-text', children: label }) }, label)); };
    /** отрисовать троеточие */
    var getEllipsis = function () { return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-pagination__ellipsis', children: (0, jsx_runtime_1.jsx)("span", { children: " ... " }) })); };
    /** отрисовать три номера страничек */
    var getThreePageLabel = function (firstLabel, secondLabel, thirdLabel) { return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [getPageLabel(firstLabel), getPageLabel(secondLabel), getPageLabel(thirdLabel)] })); };
    /** отрисовать средние лейблы когда с двух сторон троеточие */
    var getMiddleNumbers = function () {
        if (firstEllipsisCondition && secondEllipsisCondition) {
            return getThreePageLabel(currentPage - STEP, currentPage, currentPage + STEP);
        }
        var doubleStep = STEP * 2;
        var tripleStep = STEP * 3;
        var quadrupleStep = STEP * 4;
        if (currentPage <= STEP_BEFORE_SHOWING_DOTS) {
            return getThreePageLabel(FIRST_PAGE_LABEL + doubleStep, FIRST_PAGE_LABEL + tripleStep, FIRST_PAGE_LABEL + quadrupleStep);
        }
        if (currentPage > (count - STEP_BEFORE_SHOWING_DOTS)) {
            return getThreePageLabel(count - quadrupleStep, count - tripleStep, count - doubleStep);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "rf-pagination".concat(disabled ? '--disabled' : '', " ").concat(isSimple && 'rf-pagination__simple'), children: [!isSimple && (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-pagination__chevron-wrapper', 'rf-pagination__chevron-left', currentPage === FIRST_PAGE_LABEL && 'rf-pagination__chevron-wrapper--disabled'), onClick: handleClickByLeftChevron, children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }), count <= PAGES_WITHOUT_DOTS ?
                Array.from({ length: count }, function (item, index) { return getPageLabel(index + 1); }) :
                ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [getPageLabel(FIRST_PAGE_LABEL), firstEllipsisCondition ? getEllipsis() : getPageLabel(FIRST_PAGE_LABEL + STEP), getMiddleNumbers(), secondEllipsisCondition ? getEllipsis() : getPageLabel(count - STEP), getPageLabel(count)] })), !isSimple && (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-pagination__chevron-wrapper', 'rf-pagination__chevron-right', currentPage === count && 'rf-pagination__chevron-wrapper--disabled'), onClick: handleClickByRightChevron, children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronRight, {}) }), count > PAGES_WITHOUT_NUMBER_SELECT &&
                (0, jsx_runtime_1.jsx)(Input_1.default, { className: 'rf-pagination__input', placeholder: '\u2116 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B', onDebounce: handleInsertPage })] }));
};
exports.default = Pagination;
