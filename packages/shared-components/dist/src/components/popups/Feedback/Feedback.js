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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Feedback = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var __1 = require("../../..");
require("./Feedback.scss");
var Feedback = function (_a) {
    var _b = _a.title, title = _b === void 0 ? 'Обратная связь' : _b, description = _a.description, _c = _a.textareaPlaceholder, textareaPlaceholder = _c === void 0 ? 'Оставьте комментарий по сервису' : _c, postFeedback = _a.postFeedback, onClose = _a.onClose, props = __rest(_a, ["title", "description", "textareaPlaceholder", "postFeedback", "onClose"]);
    var maxLength = 255;
    var _d = (0, react_1.useState)(''), text = _d[0], setText = _d[1];
    var _e = (0, react_1.useState)(), rate = _e[0], setRate = _e[1];
    var _f = (0, react_1.useState)(false), isLoading = _f[0], setIsLoading = _f[1];
    /** хранит приложенные файлы */
    var _g = (0, react_1.useState)(), attachedFile = _g[0], setAttachedFile = _g[1];
    /** Изменение состояния комментария */
    var onChange = function (event) {
        var value = event.target.value;
        if (value.length <= maxLength) {
            setText(event.target.value);
        }
        else {
            setText(event.target.value.slice(0, maxLength));
        }
    };
    /** Прикрепление файла */
    var setFileHandler = (0, react_1.useCallback)(function (files) {
        var lastFile = files[files.length - 1];
        setAttachedFile(lastFile);
    }, []);
    var onSubmit = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    setIsLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, , 3, 4]);
                    return [4 /*yield*/, postFeedback({
                            zdate: Date.parse(new Date().toUTCString()).toString(),
                            rate: rate,
                            text: text,
                            browser: window.navigator.userAgent,
                            status: '0',
                            file64: attachedFile ? attachedFile.base64 : '',
                            screen: "".concat(window.innerWidth, "x").concat(window.innerHeight),
                            isAnswered: 0,
                        })];
                case 2:
                    res = _a.sent();
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                    return [2 /*return*/, res];
                case 3:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(__1.Modal, __assign({ custom: true, onClose: onClose }, props, { children: (0, jsx_runtime_1.jsxs)("div", { className: 'feedback-modal', children: [(0, jsx_runtime_1.jsx)("h3", { className: 'feedback-modal__title', children: title }), (0, jsx_runtime_1.jsx)("p", { className: 'feedback-modal__description', children: description ||
                        (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: ["\u041F\u043E\u043C\u043E\u0433\u0438\u0442\u0435 \u043D\u0430\u043C \u0441\u0442\u0430\u0442\u044C \u043B\u0443\u0447\u0448\u0435, \u043E\u0446\u0435\u043D\u0438\u0442\u0435 \u0440\u0430\u0431\u043E\u0442\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430. ", (0, jsx_runtime_1.jsx)("br", {}), "\u0414\u043B\u044F \u0437\u0430\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0438\u043D\u0446\u0438\u0434\u0435\u043D\u0442\u0430 \u0432\u043E\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435\u0441\u044C", ' ', (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: 'https://cspp.vtb.ru/webtier/ess.do?ctx=docEngine&file=hpctplincidents&query=tpl.id%3D%2265862778751%22', className: 'feedback-modal__link', children: "\u0426\u0421\u041F\u041F" })] }) }), (0, jsx_runtime_1.jsx)(__1.FormGroup, { label: '\u041E\u0446\u0435\u043D\u0438\u0442\u0435 \u0441\u0435\u0440\u0432\u0438\u0441', className: 'feedback-modal__group', children: (0, jsx_runtime_1.jsx)(__1.RatePicker, { isStarPicker: true, defaultPickedValue: rate, getRate: function (value) { return setRate(+value); } }) }), (0, jsx_runtime_1.jsxs)("form", { className: 'feedback-modal__form', onSubmit: onSubmit, children: [(0, jsx_runtime_1.jsx)(__1.FormGroup, { label: '\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439', labelSecondary: "(".concat(text.length > maxLength ? maxLength : text.length, "/").concat(maxLength, ")"), children: (0, jsx_runtime_1.jsx)(__1.Textarea, { onChange: onChange, value: text, placeholder: textareaPlaceholder }) }), (0, jsx_runtime_1.jsx)(__1.Attachment, { attachment: attachedFile, maxLength: 100, className: 'feedback-modal__attachment', onRemove: function () { return setAttachedFile(undefined); } }), (0, jsx_runtime_1.jsxs)("div", { className: 'feedback-modal__buttons', children: [(0, jsx_runtime_1.jsx)("div", { className: 'feedback-modal__btn-file', children: (0, jsx_runtime_1.jsx)(__1.InputFile, { className: 'rf-comment-tile-button', showChips: false, setFile: setFileHandler, buttonType: 'light', placeholder: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B', size: 'l' }) }), (0, jsx_runtime_1.jsx)("div", { className: 'feedback-modal__btn', children: (0, jsx_runtime_1.jsx)(__1.Button, { size: 'l', buttonType: 'light', onClick: onClose, children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" }) }), (0, jsx_runtime_1.jsx)("div", { className: 'feedback-modal__btn', children: (0, jsx_runtime_1.jsx)(__1.Button, { size: 'l', preloader: isLoading, type: 'submit', children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }) })] })] })] }) })));
};
exports.Feedback = Feedback;
exports.default = exports.Feedback;
