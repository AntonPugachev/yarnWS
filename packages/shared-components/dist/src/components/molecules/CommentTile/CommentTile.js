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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var Tile_1 = __importDefault(require("../../atoms/Tile"));
var FormGroup_1 = __importDefault(require("../../atoms/FormGroup"));
var Textarea_1 = __importDefault(require("../../atoms/Textarea"));
require("./CommentTile.scss");
var InputFile_1 = __importDefault(require("../../atoms/InputFile"));
var classnames_1 = require("../../../utils/classnames");
// FIXME: Elements must have sufficient color contrast
var CommentTile = function (_a) {
    var _b = _a.comment, comment = _b === void 0 ? '' : _b, _c = _a.title, title = _c === void 0 ? 'Комментарии и файлы' : _c, _d = _a.maxLength, maxLength = _d === void 0 ? 255 : _d, _e = _a.initialFiles, initialFiles = _e === void 0 ? [] : _e, _f = _a.autoResize, autoResize = _f === void 0 ? false : _f, _g = _a.showFieldForFiles, showFieldForFiles = _g === void 0 ? true : _g, _h = _a.onDebounce, onDebounce = _h === void 0 ? function () { } : _h, _j = _a.accept, accept = _j === void 0 ? '*' : _j, _k = _a.maxSize, maxSize = _k === void 0 ? undefined : _k, props = __rest(_a, ["comment", "title", "maxLength", "initialFiles", "autoResize", "showFieldForFiles", "onDebounce", "accept", "maxSize"]);
    var _l = (0, react_1.useState)(comment), value = _l[0], setValue = _l[1];
    /** хранит приложенные файлы*/
    var _m = (0, react_1.useState)(function () { return (initialFiles.map(function (fileObject, index) { return ({
        fileName: fileObject.file.name,
        base64: fileObject.base64
    }); })); }), attachedFiles = _m[0], setAttachedFiles = _m[1];
    /** Отлов прикрепления файлов */
    (0, react_1.useEffect)(function () {
        onDebounce({
            debounceString: value,
            attachedFiles: attachedFiles,
        });
    }, [attachedFiles]);
    /** Изменение начального комментария*/
    (0, react_1.useEffect)(function () {
        setValue(comment);
    }, [comment]);
    /** Изменение состояния комментария */
    var onChange = function (event) {
        var value = event.target.value;
        if (value.length <= maxLength) {
            setValue(event.target.value);
        }
        else {
            setValue(event.target.value.slice(0, maxLength));
        }
    };
    /** Получение результата после ввода комментария */
    var getResultByComment = function (e) {
        onDebounce({
            debounceString: value,
            attachedFiles: attachedFiles,
        });
    };
    /** Прикрепление файла */
    var setFileHandler = function (files) {
        setAttachedFiles(files.map(function (file) { return ({
            fileName: file.file.name,
            base64: file.base64
        }); }));
    };
    // =======================================================================================================================================
    return (0, jsx_runtime_1.jsx)("div", { className: 'rf-comment-tile__wrapper', children: (0, jsx_runtime_1.jsxs)(Tile_1.default, { className: 'rf-comment-tile', children: [(0, jsx_runtime_1.jsx)("h3", { className: 'rf-comment-tile__title', children: title }), (0, jsx_runtime_1.jsx)(FormGroup_1.default, { className: (0, classnames_1.classnames)('rf-comment-tile__input-wrapper', !autoResize && 'rf-comment-tile__input-wrapper--scroll'), label: 'Комментарий', labelSecondary: "(".concat(value.length > maxLength ? maxLength : value.length, "/").concat(maxLength, ")"), children: (0, jsx_runtime_1.jsx)(Textarea_1.default, __assign({ autoResize: autoResize, onDebounce: getResultByComment, onChange: onChange, value: value, placeholder: '\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439' }, props)) }), !!showFieldForFiles &&
                    (0, jsx_runtime_1.jsx)(InputFile_1.default, { className: 'rf-comment-tile-button', showChips: true, setFile: setFileHandler, buttonType: 'light', placeholder: '\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B', accept: accept, maxSize: maxSize, files: initialFiles })] }) });
};
exports.default = CommentTile;
