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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./CertReader.scss");
var Menu_1 = __importDefault(require("../../atoms/Menu"));
var Button_1 = __importDefault(require("../../atoms/Button"));
var crypto_pro_1 = require("crypto-pro");
var CertReader_mock_1 = require("./CertReader.mock");
var Modal_1 = __importDefault(require("../../atoms/Modal"));
var CertReader = function (_a) {
    var file = _a.file, onSuccess = _a.onSuccess, _b = _a.useMock, useMock = _b === void 0 ? false : _b, onError = _a.onError, _c = _a.buttonTitle, buttonTitle = _c === void 0 ? 'Подписать ЭП (электронная подпись)' : _c, _d = _a.btnProps, btnProps = _d === void 0 ? {} : _d, _e = _a.menuPos, menuPos = _e === void 0 ? 'left' : _e, _f = _a.filter, filter = _f === void 0 ? function (_cert) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/, true];
    }); }); } : _f, confirmContent = _a.confirmContent;
    /** Все доступные сертификаты */
    var _g = (0, react_1.useState)(null), certs = _g[0], setCerts = _g[1];
    /** Выбранный сертификат */
    var _h = (0, react_1.useState)(null), selectedCert = _h[0], setSelectedCert = _h[1];
    var _j = (0, react_1.useState)(false), openConfirmPopup = _j[0], setOpenConfirmPopup = _j[1];
    var closePopup = (0, react_1.useCallback)(function () {
        setSelectedCert(null);
        setOpenConfirmPopup(false);
    }, []);
    // ===================================================================================================================
    /** асинхронное получение серификатов с ключа*/
    (0, react_1.useEffect)(function () {
        function getCertificates() {
            return __awaiter(this, void 0, void 0, function () {
                var certs_1, filteredAsync_1, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, (0, crypto_pro_1.getUserCertificates)()];
                        case 1:
                            certs_1 = _a.sent();
                            return [4 /*yield*/, Promise.all(certs_1.map(filter))];
                        case 2:
                            filteredAsync_1 = _a.sent();
                            certs_1 = certs_1.filter(function (_cert, i) { return filteredAsync_1[i]; });
                            if (certs_1.length) {
                                setCerts(certs_1);
                            }
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            setCerts(null);
                            onError(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        if (useMock) {
            // @ts-ignore
            setCerts(CertReader_mock_1.mockCerts);
        }
        else {
            getCertificates().then();
        }
    }, []);
    /**  Добавляем в список заголовок */
    var getCertsWithTitle = function (certs) { return __spreadArray([
        {
            isTitle: true,
            label: 'Выберите сертификат'
        }
    ], certs, true); };
    // ===================================================================================================================
    /** формирование меню*/
    var menuBuilder = function (certs) {
        return __spreadArray([], certs, true).map(function (item) {
            var label = "".concat(item.name, " (").concat(item.issuerName, ")");
            return {
                label: label,
                value: item.thumbprint,
                handler: function () {
                    setSelectedCert(item);
                    setOpenConfirmPopup(true);
                }
            };
        });
    };
    // ===================================================================================================================
    var signFile = function (cert) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, e_2;
        var _c, _d;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    _e.trys.push([0, 2, 3, 4]);
                    _a = onSuccess;
                    _c = {};
                    _b = [__assign({}, file)];
                    _d = {};
                    return [4 /*yield*/, (0, crypto_pro_1.createSignature)(cert.thumbprint, file.base64.split('base64,')[1])];
                case 1:
                    _a.apply(void 0, [(_c.data = __assign.apply(void 0, _b.concat([(_d.singBase64 = (_e.sent()).replace(/[\r\n]+/g, ''), _d.cert = cert.thumbprint, _d)])),
                            _c.cert = cert,
                            _c)]);
                    return [3 /*break*/, 4];
                case 2:
                    e_2 = _e.sent();
                    if (useMock) {
                        onSuccess({
                            data: __assign(__assign({}, file), { singBase64: 'подписанный файл', cert: cert.thumbprint }),
                            cert: cert
                        });
                    }
                    else {
                        onError(e_2);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    closePopup();
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var confirmSign = (0, react_1.useCallback)(function () {
        selectedCert && signFile(selectedCert);
    }, [selectedCert]);
    // ===================================================================================================================
    return (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Menu_1.default, { position: menuPos, list: certs ? getCertsWithTitle(menuBuilder(certs)) : undefined, children: (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, btnProps, { disabled: !certs, children: buttonTitle })) }), openConfirmPopup &&
                (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: confirmContent ? !!selectedCert && confirmContent(selectedCert, file, confirmSign, closePopup) :
                        (0, jsx_runtime_1.jsxs)(Modal_1.default, { size: 'l', header: (0, jsx_runtime_1.jsx)("h5", { children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435" }), onClose: closePopup, children: [(0, jsx_runtime_1.jsx)("p", { className: 'cert-reader__confirm-text', children: "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u043A \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043D\u0438\u044E \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430?" }), !!selectedCert && (0, jsx_runtime_1.jsxs)("p", { className: 'cert-reader__certificate', children: ["\u0421\u0435\u0440\u0442\u0438\u0444\u0438\u043A\u0430\u0442: ", "".concat(selectedCert.name, " (").concat(selectedCert.issuerName, ")")] }), (0, jsx_runtime_1.jsxs)("div", { className: 'cert-reader__confirm-actions', children: [(0, jsx_runtime_1.jsx)(Button_1.default, { size: 'l', buttonType: 'light', onClick: closePopup, children: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C" }), (0, jsx_runtime_1.jsx)(Button_1.default, { size: 'l', disabled: !selectedCert, onClick: function () { return selectedCert && signFile(selectedCert); }, children: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C" })] })] }) })] });
};
exports.default = CertReader;
