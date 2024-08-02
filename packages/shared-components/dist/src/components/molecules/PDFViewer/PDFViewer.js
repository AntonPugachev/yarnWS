"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./PDFViewer.scss");
var indexIcon_1 = require("../../../indexIcon");
var download_1 = require("../../../utils/download");
var ButtonPages_1 = __importDefault(require("../../atoms/ButtonPages/ButtonPages"));
var Button_1 = __importDefault(require("../../atoms/Button"));
var react_pdf_1 = require("react-pdf");
var PDFViewer = function (_a) {
    var file = _a.file, _b = _a.url, url = _b === void 0 ? '' : _b;
    /** Всего страниц в документе */
    var _c = (0, react_1.useState)(1), numPages = _c[0], setNumPages = _c[1];
    /** Текущая страница */
    var _d = (0, react_1.useState)(1), currentPage = _d[0], setCurrentPage = _d[1];
    var _e = (0, react_1.useState)(0), pageWidth = _e[0], setPageWidth = _e[1];
    var pdfWrapper = (0, react_1.useRef)(null);
    // useEffect(() => {
    //   pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;
    // }, []);
    (0, react_1.useEffect)(function () {
        setNumPages(1);
        setCurrentPage(1);
    }, [file]);
    var onDocumentLoadSuccess = (0, react_1.useCallback)(function (_a) {
        var numPages = _a.numPages;
        setNumPages(numPages);
    }, []);
    // -------------------------------------------------------------------------------------------------------------------
    /** Переключение страницы */
    var onPageChange = (0, react_1.useCallback)(function (page) {
        setCurrentPage(page);
    }, []);
    /** Определение ширины страницы */
    var calculatePageWidth = function (page) {
        var _a;
        if (pdfWrapper.current) {
            var blockWidth = (_a = pdfWrapper.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
            var pageWidth_1 = page.getViewport({ scale: 1 }).width;
            setPageWidth(Math.min(pageWidth_1, blockWidth - 16));
        }
    };
    var onClickDownload = function () {
        (0, download_1.download)(file);
    };
    var onClickOpen = function () {
        window.open(url, '_blank');
    };
    // -------------------------------------------------------------------------------------------------------------------
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: file &&
            (0, jsx_runtime_1.jsxs)("div", { ref: pdfWrapper, className: 'pdf-document', children: [(0, jsx_runtime_1.jsx)(react_pdf_1.Document, { file: file.base64, onLoadSuccess: onDocumentLoadSuccess, children: (0, jsx_runtime_1.jsx)(react_pdf_1.Page, { width: pageWidth, pageNumber: currentPage, onLoadSuccess: calculatePageWidth }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'pdf-document__download', children: [!!url &&
                                (0, jsx_runtime_1.jsx)("div", { className: 'pdf-document__open', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'white', size: 's', onClick: onClickOpen, endAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllSend, { className: 'pdf-document__icon' }), children: "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C" }) }), (0, jsx_runtime_1.jsx)(Button_1.default, { "data-testid": 'pdf-download-btn', buttonType: 'white', size: 's', onClick: onClickDownload, endAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllDownload, { className: 'pdf-document__icon' }), "aria-label": '\u0421\u043A\u0430\u0447\u0430\u0442\u044C', children: url ? '' : 'Скачать' })] }), (0, jsx_runtime_1.jsx)("div", { className: 'pdf-document__pager', children: (0, jsx_runtime_1.jsx)(ButtonPages_1.default, { max: numPages, onChange: onPageChange }) })] }) }));
};
exports.default = PDFViewer;
