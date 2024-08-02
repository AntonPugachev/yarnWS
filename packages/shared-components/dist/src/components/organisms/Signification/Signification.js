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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Signification.scss");
var Button_1 = __importDefault(require("../../atoms/Button"));
var CertReader_1 = __importDefault(require("../../molecules/CertReader"));
var Confirm_1 = __importDefault(require("../../popups/Confirm"));
var download_1 = require("../../../utils/download");
var Hint_1 = __importDefault(require("../../atoms/Hint"));
var InputFile_1 = __importDefault(require("../../atoms/InputFile"));
var Modal_1 = __importDefault(require("../../atoms/Modal"));
var PDFViewer_1 = __importDefault(require("../../molecules/PDFViewer"));
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var Attachment_1 = __importDefault(require("../../molecules/Attachment"));
var legacyIcons_1 = require("../../../assets/legacyIcons");
var Documents_1 = __importDefault(require("./Documents"));
var ContentExpander_1 = __importDefault(require("../../molecules/ContentExpander"));
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
var buttonNamesDefault = {
    manual: 'Подписать вручную',
    reject: 'Отклонить ЭДО',
    sign: 'Подписать электронной подписью',
    rejectManual: 'Отклонить'
};
// FIXME: Elements must have sufficient color contrast
var Signification = function (_a) {
    var data = _a.data, pdfUrl = _a.pdfUrl, _b = _a.onSignify, onSignify = _b === void 0 ? function () { } : _b, _c = _a.onSignCancel, onSignCancel = _c === void 0 ? undefined : _c, _d = _a.title, title = _d === void 0 ? '' : _d, _e = _a.isSpoiler, isSpoiler = _e === void 0 ? true : _e, _f = _a.isOpenSpoiler, isOpenSpoiler = _f === void 0 ? false : _f, documentInfo = _a.documentInfo, _g = _a.variant, variant = _g === void 0 ? 'default' : _g, _h = _a.hideButtons, hideButtons = _h === void 0 ? [] : _h, _j = _a.buttonCustomTexts, buttonCustomTexts = _j === void 0 ? {} : _j, _k = _a.filter, filter = _k === void 0 ? function (cert) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, !!~cert.issuerName.toLowerCase().indexOf('vtb')];
    }); }); } : _k, confirmContent = _a.confirmContent;
    /** тексты для кнопок*/
    var _l = (0, react_1.useState)(__assign(__assign({}, buttonNamesDefault), buttonCustomTexts)), textButtons = _l[0], _ = _l[1];
    /** текущий статус файла*/
    var _m = (0, react_1.useState)(data), value = _m[0], setValue = _m[1];
    /** хранит текущий выбранный сертификат*/
    var _o = (0, react_1.useState)(undefined), currentCert = _o[0], setCurrentCert = _o[1];
    /** True если ошибка сертификатов*/
    var _p = (0, react_1.useState)(false), certError = _p[0], setCertError = _p[1];
    /** хранит приложеннный руками фойл*/
    var _q = (0, react_1.useState)(undefined), manualFile = _q[0], setManualFile = _q[1];
    /** изначальный файл*/
    var initialFile = (0, react_1.useRef)(data);
    /** статус подписания*/
    var _r = (0, react_1.useState)(undefined), finalStage = _r[0], setFinalStage = _r[1];
    /** открывает попап ручного подписания*/
    var _s = (0, react_1.useState)(false), manualPopup = _s[0], setManualPopup = _s[1];
    /** открывает попап в случае отказа подписания*/
    var _t = (0, react_1.useState)(undefined), refusePopup = _t[0], setRefusePopup = _t[1];
    /** открыт или закрыт спойлер*/
    var _u = (0, react_1.useState)(isOpenSpoiler), isOpenContent = _u[0], setOpenContent = _u[1];
    /** комментарий при отклонении*/
    var _v = (0, react_1.useState)(''), comment = _v[0], setComment = _v[1];
    var status = ['auto', 'manual'].includes(finalStage || '') ? 'success' : 'danger';
    var onlyView = (hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('sign')) && (hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('manual'));
    // ===========
    (0, react_1.useEffect)(function () {
        data && setValue(data);
    }, [data]);
    // ===================================================================================================================
    var successHandle = function (result) {
        onSignify({
            file: result.data,
            success: 'sign',
            comment: comment,
            currentCert: result.cert
        });
        setValue(result.data);
        setCurrentCert(result.cert);
        setFinalStage('auto');
        setOpenContent(false);
    };
    //* ************************************************
    var refuseHandle = function (result) {
        setCurrentCert(result.cert);
        setRefusePopup(result);
    };
    //* ************************************************
    var refuseHandlePopupSuccess = function (comment) {
        if (comment === void 0) { comment = ''; }
        setComment(comment);
        setFinalStage('reject');
        setOpenContent(false);
        setRefusePopup(undefined);
        onSignify({
            file: refusePopup ? refusePopup.data : initialFile.current,
            success: 'reject',
            comment: comment,
            currentCert: currentCert
        });
    };
    //* ************************************************
    var refuseHandlePopupFail = function () {
        setCurrentCert(undefined);
        setRefusePopup(undefined);
    };
    //* ************************************************
    var errorHandle = function (e) {
        !~e.message.toLowerCase().indexOf('отменена пользователем') &&
            setCertError(true);
    };
    //* ************************************************
    var cancelSign = function () {
        setComment('');
        setFinalStage(undefined);
        setValue(initialFile.current);
        setCurrentCert(undefined);
        onSignify({ file: initialFile.current });
        onSignCancel && onSignCancel();
    };
    //* ************************************************
    var manualSignHandler = function () {
        setFinalStage('manual');
        var file = __assign(__assign({}, value), manualFile);
        setValue(file);
        onSignify({
            file: file,
            success: 'manual',
            comment: comment,
            currentCert: currentCert
        });
        setManualPopup(false);
        setOpenContent(false);
    };
    //* ************************************************
    var setFileHandler = function (file) {
        setManualFile({
            fileName: file[0].file.name,
            base64: file[0].base64
        });
    };
    var finalText = finalStage === 'auto' ?
        'Документ будет подписан сертификатом' :
        finalStage === 'manual' ?
            'Документ будет подписан ручной подписью' :
            'Документ будет отклонен';
    // =======================================================================================================================================
    var hasButtons = !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('sign')) ||
        !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('manual')) ||
        !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('reject')) ||
        !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('rejectManual'));
    var buttonsTSX = !finalStage && hasButtons &&
        (0, jsx_runtime_1.jsxs)("div", { className: 'buttons__wrapper', children: [!(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('sign')) &&
                    (0, jsx_runtime_1.jsx)("div", { className: 'button__item', children: (0, jsx_runtime_1.jsx)(CertReader_1.default, { buttonTitle: textButtons.sign, filter: filter, file: data, onSuccess: successHandle, onError: errorHandle, confirmContent: confirmContent }) }), !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('manual')) &&
                    (0, jsx_runtime_1.jsx)("div", { className: 'button__item', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'light', onClick: function () { return setManualPopup(true); }, children: textButtons.manual }) }), !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('reject')) &&
                    (0, jsx_runtime_1.jsx)("div", { className: 'button__item', children: (0, jsx_runtime_1.jsx)(CertReader_1.default, { buttonTitle: textButtons.reject, btnProps: { buttonType: 'danger' }, filter: filter, file: data, onSuccess: refuseHandle, onError: errorHandle, confirmContent: confirmContent }) }), !(hideButtons === null || hideButtons === void 0 ? void 0 : hideButtons.includes('rejectManual')) &&
                    (0, jsx_runtime_1.jsx)("div", { className: 'button__item', children: (0, jsx_runtime_1.jsx)(Button_1.default, { buttonType: 'danger', onClick: function () { return setRefusePopup(null); }, children: textButtons.rejectManual }) })] });
    // =======================================================================================================================================
    var finalCardTSX = finalStage &&
        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)("div", { style: { alignItems: status === 'success' ? 'center' : 'start' }, className: "info-block__wrapper info-block__wrapper--".concat(status), children: [(0, jsx_runtime_1.jsx)("div", { className: 'info-block__icon', children: finalStage === 'reject' ?
                                (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleReject, { width: '40px', height: '40px', color1: '#DA0B20', color2: '#FFFFFF' }) :
                                (0, jsx_runtime_1.jsx)(legacyIcons_1.CircleConfirm, { width: '40px', height: '40px', color1: '#2ABB5B', color2: '#FFFFFF' }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'info-block__text-wrapper', children: [(0, jsx_runtime_1.jsx)("div", { className: "info-block__main-text info-block__main-text--".concat(status), children: finalText }), ['auto', 'reject'].includes(finalStage) &&
                                    (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [currentCert &&
                                                (0, jsx_runtime_1.jsx)("div", { className: 'info-block__text ', children: "".concat(currentCert === null || currentCert === void 0 ? void 0 : currentCert.name, " ").concat(currentCert === null || currentCert === void 0 ? void 0 : currentCert.issuerName).slice(0, 100) }), comment &&
                                                (0, jsx_runtime_1.jsx)("div", { className: 'info-block__comment', children: comment })] })] }), (0, jsx_runtime_1.jsx)("div", { style: { paddingTop: finalStage !== 'reject' ? 0 : '12px' }, className: 'info-block__button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: cancelSign, buttonType: 'text', children: (0, jsx_runtime_1.jsx)("div", { className: 'info-block__button-inner', children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" }) }) })] }), finalStage === 'manual' &&
                    (0, jsx_runtime_1.jsx)(Attachment_1.default, { attachment: manualFile && {
                            id: manualFile.id,
                            file: new File([manualFile.base64], manualFile.fileName),
                            base64: manualFile.base64
                        }, maxLength: 100, onRemove: cancelSign })] });
    // =======================================================================================================================================
    var refuseConfirmTSX = refusePopup !== undefined &&
        (0, jsx_runtime_1.jsx)(Modal_1.default, { size: 'l', children: (0, jsx_runtime_1.jsx)(Confirm_1.default, { textAccept: '\u041E\u0442\u043A\u043B\u043E\u043D\u0438\u0442\u044C \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442', text: '\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0439 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D. \u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C \u043E\u0442\u043A\u043B\u043E\u043D\u0435\u043D\u0438\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430?', onClose: refuseHandlePopupFail, onAction: refuseHandlePopupSuccess, comment: '', showComment: true }) });
    // =======================================================================================================================================
    var manualPopupTSX = manualPopup &&
        (0, jsx_runtime_1.jsx)(Modal_1.default, { size: 'xl', children: (0, jsx_runtime_1.jsxs)("div", { className: 'manual__wrapper', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'manual__header', children: [(0, jsx_runtime_1.jsx)("div", { children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0440\u0443\u0447\u043D\u0443\u044E" }), (0, jsx_runtime_1.jsx)("div", { className: 'manual__close', onClick: function () { return setManualPopup(false); }, children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) })] }), (0, jsx_runtime_1.jsx)("div", { className: 'manual__hint-wrapper', children: (0, jsx_runtime_1.jsx)(Hint_1.default, { button: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: function () { return (0, download_1.download)(value); }, buttonType: 'text', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllDownload, {}), children: "\u0421\u043A\u0430\u0447\u0430\u0442\u044C" }), icon: 'info', maxWidth: '648px', variant: 'blue', children: "\u0421\u043A\u0430\u0447\u0430\u0439\u0442\u0435 \u0438 \u043F\u043E\u0434\u043F\u0438\u0448\u0438\u0442\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442. \u041F\u043E\u0441\u043B\u0435 \u043F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u0435 \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u043D\u044B\u0439 \u0444\u0430\u0439\u043B" }) }), (0, jsx_runtime_1.jsx)(Attachment_1.default, { attachment: manualFile && {
                            id: manualFile.id,
                            file: new File([manualFile.base64], manualFile.fileName),
                            base64: manualFile.base64
                        }, maxLength: 100, onRemove: function () { return setManualFile(undefined); }, className: 'signification__attachment' }), (0, jsx_runtime_1.jsxs)("div", { className: 'modal_buttons', children: [(0, jsx_runtime_1.jsx)("div", { className: 'modal_button', children: (0, jsx_runtime_1.jsx)(InputFile_1.default, { showChips: false, multiple: false, setFile: setFileHandler, buttonType: 'light', placeholder: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'modal_button', children: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: manualSignHandler, disabled: !manualFile, children: "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C" }) })] })] }) });
    // =======================================================================================================================================
    var certErrorTSX = certError && !finalStage &&
        (0, jsx_runtime_1.jsx)("div", { "data-testid": 'error', className: 'cert-error__wrapper', children: (0, jsx_runtime_1.jsx)(Hint_1.default, { button: (0, jsx_runtime_1.jsx)(Button_1.default, { onClick: function () { return window.open('https://intranet.vtb.com/podrazdeleniya/pik/dppsis/support/Pages/default.aspx'); }, buttonType: 'text', textColor: 'red', startAdornment: (0, jsx_runtime_1.jsx)(indexIcon_1.AllDownload, {}), children: "\u0418\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044F" }), icon: 'info', maxWidth: '648px', title: '\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442 \u043F\u043E\u0434\u043F\u0438\u0441\u044C', variant: 'red', children: "\u0414\u043B\u044F \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0441\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u0430 \u042D\u041F (\u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u044C) \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u044C\u0442\u0435\u0441\u044C, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441 \u0438\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u0435\u0439" }) });
    // =======================================================================================================================================
    var expanderContentTSX = (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [buttonsTSX, (!finalStage || isSpoiler) &&
                (0, jsx_runtime_1.jsx)(PDFViewer_1.default, { url: pdfUrl, file: data })] });
    return (0, jsx_runtime_1.jsxs)("div", { className: 'signification__wrapper', children: [(0, jsx_runtime_1.jsxs)(Tile_1.default, { variant: variant, children: [(0, jsx_runtime_1.jsxs)("div", { className: (0, classnames_1.classnames)('signification__title-row', onlyView && 'signification__title-row--onlyView'), children: [(0, jsx_runtime_1.jsx)(Documents_1.default, { color1: onlyView ? '#F1F2F4' : undefined, className: 'signification__title-icon' }), (0, jsx_runtime_1.jsx)("div", { className: 'signification__title-text', children: title })] }), documentInfo && (0, jsx_runtime_1.jsx)("div", { className: 'signification__doc-info', children: documentInfo }), finalCardTSX, certErrorTSX, !isSpoiler && expanderContentTSX, isSpoiler &&
                        (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)(ContentExpander_1.default, { onExpand: function () { return setOpenContent(!isOpenContent); }, expanded: isOpenContent, title: isOpenContent ? 'Скрыть' : "\u041F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C".concat(!finalStage && !onlyView ? ' и подписать документ' : '', " "), children: isOpenContent &&
                                    (0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)(hasButtons && 'signification__expander-content'), children: expanderContentTSX }) }) })] }), manualPopupTSX, refuseConfirmTSX] });
};
exports.default = Signification;
