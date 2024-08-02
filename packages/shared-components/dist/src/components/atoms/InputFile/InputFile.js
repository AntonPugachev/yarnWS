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
require("./InputFile.scss");
var Button_1 = __importDefault(require("../Button"));
var file_utils_1 = require("./file-utils");
var Attachment_1 = __importDefault(require("../../molecules/Attachment"));
var InputFile = function (_a) {
    var _b = _a.name, name = _b === void 0 ? '' : _b, _c = _a.accept, accept = _c === void 0 ? '*' : _c, _d = _a.multiple, multiple = _d === void 0 ? true : _d, _e = _a.className, className = _e === void 0 ? '' : _e, _f = _a.disabled, disabled = _f === void 0 ? false : _f, _g = _a.placeholder, placeholder = _g === void 0 ? '' : _g, _h = _a.files, files = _h === void 0 ? [] : _h, setFile = _a.setFile, onError = _a.onError, maxSize = _a.maxSize, count = _a.count, _j = _a.showChips, showChips = _j === void 0 ? true : _j, customPlaceholder = _a.customPlaceholder, _k = _a.customDownloadMethod, customDownloadMethod = _k === void 0 ? false : _k, _l = _a.showRemoveIcon, showRemoveIcon = _l === void 0 ? true : _l, props = __rest(_a, ["name", "accept", "multiple", "className", "disabled", "placeholder", "files", "setFile", "onError", "maxSize", "count", "showChips", "customPlaceholder", "customDownloadMethod", "showRemoveIcon"]);
    /** Файл */
    var _m = (0, react_1.useState)(function () { return files; }), file = _m[0], uploadFile = _m[1];
    /** Ссылка на инпут */
    var ref = (0, react_1.useRef)(null);
    /** Получаем картинку */
    var onChange = function () {
        if (ref.current && ref.current.files) {
            var promises_1 = [];
            Array.from(ref.current.files).slice(0, count).forEach(function (fl) {
                var validationResult = (0, file_utils_1.validateFile)(fl, {
                    maxSize: maxSize,
                    accept: accept
                });
                if (validationResult.valid) {
                    promises_1.push((0, file_utils_1.getBase64)(fl));
                }
                else {
                    onError && onError(new Error(validationResult.error));
                }
            });
            Promise.all(promises_1)
                .then(function (data) {
                if (data && ref.current && ref.current.files) {
                    var newFiles_1 = [];
                    if (multiple) {
                        var keysMap_1 = {};
                        var next = __spreadArray(__spreadArray([], file, true), data, true).slice(0, count);
                        next.forEach(function (f) {
                            if (!keysMap_1[f.file.name + f.file.lastModified]) {
                                keysMap_1[f.file.name + f.file.lastModified] = true;
                                newFiles_1.push(f);
                            }
                        });
                    }
                    else {
                        newFiles_1.push.apply(newFiles_1, data);
                    }
                    setFile(newFiles_1);
                    uploadFile(newFiles_1);
                    ref.current.value = '';
                }
            })
                .catch(function (error) {
                console.log('%c [Ошибка] Не удалось загрузить файл(ы)', 'color: #FF5722');
                console.log(error);
                if (ref.current) {
                    ref.current.value = '';
                }
                onError && onError(new Error("\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C ".concat(multiple ? 'файлы' : 'файл')));
            });
        }
    };
    /** Программный клик по инпуту */
    var onClick = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (ref.current) {
            ref.current.click();
        }
    };
    // =======================================================================================================================================
    var onRemove = (0, react_1.useCallback)(function (index) {
        var newListFile = file;
        newListFile.splice(index, 1);
        if (!newListFile.length) {
            uploadFile([]);
            setFile([]);
        }
        else {
            uploadFile(__spreadArray([], newListFile, true));
            setFile(__spreadArray([], newListFile, true));
        }
    }, [file]);
    // =======================================================================================================================================
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'rf-file-input__wrapper', children: [(0, jsx_runtime_1.jsxs)("label", { className: "".concat(className || ''), children: [(0, jsx_runtime_1.jsx)("input", { ref: ref, type: 'file', name: name, className: 'rf-input__file-hidden', accept: accept, placeholder: placeholder || 'Выберите файл', disabled: disabled, onChange: onChange, multiple: multiple }), (0, jsx_runtime_1.jsx)(Button_1.default, __assign({}, props, { type: 'button', onClick: onClick, disabled: disabled, children: customPlaceholder || placeholder }))] }), showChips && file.length > 0 &&
                (0, jsx_runtime_1.jsx)("div", { className: 'rf-file-input__attachments', children: file.map(function (attachment, index) { return ((0, jsx_runtime_1.jsx)(Attachment_1.default, { attachment: attachment, showRemoveIcon: showRemoveIcon, onRemove: function () { return onRemove(index); } }, index)); }) })] }));
};
exports.default = InputFile;
