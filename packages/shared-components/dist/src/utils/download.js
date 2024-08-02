"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadWithLoading = exports.download = void 0;
var Notifications_1 = require("../components/molecules/Notifications");
var defaultID = '00000000-0000-0000-0000-000000000000';
var download = function (file, name, host) {
    if (host === void 0) { host = window.location.origin; }
    if (file.base64) {
        /** При наличии base64 в файле скачиваем через blob */
        // @ts-ignore
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            var tmp = (file.base64).split(';base64,');
            var byteCharacters = atob(tmp[1]);
            var byteNumbers = new Array(byteCharacters.length);
            for (var i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            var byteArray = new Uint8Array(byteNumbers);
            var blob = new Blob([byteArray], { type: tmp[0].split(':')[1] });
            // @ts-ignore
            window.navigator.msSaveOrOpenBlob(blob, name || file.fileName);
        }
        else {
            var a = document.createElement('a');
            a.href = file.base64 || '';
            a.download = name || file.fileName;
            a.click();
        }
    }
    else if (file.id && file.id !== '' && file.id !== defaultID) {
        /** Если у файла нет base64, но есть ID, то скачиваем через файловый сервер */
        if (host.includes('127.0.0') || host.includes('6006')) {
            host = 'https://sapd-fes-ap01.vtb24.ru:44310';
        }
        var url = "".concat(host, "/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IAttachmentContent(").concat(file.id, ")/content");
        window.open(url, '_blank');
    }
    else {
        (0, Notifications_1.sendNotification)({
            message: 'Файл не обнаружен.',
            variant: 'red'
        });
    }
};
exports.download = download;
var downloadWithLoading = function (_a, setLoading) {
    var file = _a.file, base64 = _a.base64, id = _a.id;
    var url = id || base64;
    if (id && id !== '' && id !== defaultID) {
        var host = window.location.origin;
        if (host.includes('127.0.0') || host.includes('6006')) {
            host = 'https://sapd-fes-ap01.vtb24.ru:44310';
        }
        url = "".concat(host, "/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IAttachmentContent(").concat(id, ")/content");
    }
    setLoading(true);
    fetch(url)
        .then(function (res) { return res.blob(); })
        .then(function (blob) {
        var ext = file.name.split('.');
        var fileUrl;
        if (ext[1] === 'pdf') {
            blob = blob.slice(0, blob.size, "application/".concat(ext[1]));
            fileUrl = window.URL.createObjectURL(blob);
            window.open(fileUrl, '_blank');
        }
        else {
            var a = document.createElement('a');
            a.href = window.URL.createObjectURL(blob);
            a.download = file.name;
            a.target = '_blank';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        }
    })
        .catch(function (e) {
        (0, Notifications_1.sendNotification)({
            message: 'Файл не обнаружен.',
            variant: 'red'
        });
    })
        .finally(function () {
        setLoading(false);
    });
};
exports.downloadWithLoading = downloadWithLoading;
