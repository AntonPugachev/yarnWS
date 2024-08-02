"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
require("./Avatar.scss");
var helpers_1 = require("../../../utils/helpers");
var classnames_1 = require("../../../utils/classnames");
var Avatar = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'm' : _b, _c = _a.photo, photo = _c === void 0 ? '' : _c, _d = _a.fullName, fullName = _d === void 0 ? '' : _d, _e = _a.backgroundColor, backgroundColor = _e === void 0 ? 'default' : _e, Icon = _a.icon;
    var _f = (0, react_1.useState)(''), initials = _f[0], setInitials = _f[1];
    var isSapUrl = (photo === null || photo === void 0 ? void 0 : photo.slice(0, 4)) === '/sap';
    if (isSapUrl) {
        var host = ~window.location.hostname.indexOf('127.0.') ? 'https://sapd-fes-ap01.vtb24.ru:44310/' : '';
        photo = host + photo;
    }
    (0, react_1.useEffect)(function () {
        if (fullName) {
            if (!isNaN(+fullName)) {
                setInitials(fullName);
                return;
            }
            var _a = fullName.split(' '), f = _a[0], s = _a[1];
            var text = '';
            f && (text = f.charAt(0).toUpperCase());
            // при размере xxs и xs оставляем только одну букву инициалов
            if (size !== 'xxs' && size !== 'xs') {
                s && (text += s.charAt(0).toUpperCase());
            }
            setInitials(text);
        }
    }, [fullName]);
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, classnames_1.classnames)('rf-avatar', helpers_1.sizeClass[size], "rf-avatar__background_".concat(backgroundColor)), style: { backgroundImage: "url(\"".concat(photo, "\")"), }, children: Icon ?
            (0, jsx_runtime_1.jsx)("div", { className: 'rf-avatar__icon-wrapper', children: (0, jsx_runtime_1.jsx)(Icon, { className: (0, classnames_1.classnames)('rf-avatar__icon', helpers_1.sizeClass[size]) }) }) :
            !photo && initials }));
};
exports.default = Avatar;
