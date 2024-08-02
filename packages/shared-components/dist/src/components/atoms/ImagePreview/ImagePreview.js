"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var indexIcon_1 = require("../../../indexIcon");
var classnames_1 = require("../../../utils/classnames");
require("./ImagePreview.scss");
var ImagePreview = function (_a) {
    var images = _a.images, onClose = _a.onClose;
    var initMatrix = 'matrix(1,0,0,1,0,0)';
    var _b = (0, react_1.useState)(images[0]), currentImage = _b[0], setCurrentImage = _b[1];
    var zoomRef = (0, react_1.useRef)(null);
    var deltaRef = (0, react_1.useRef)(1);
    var deltaXRef = (0, react_1.useRef)(0);
    var deltaYRef = (0, react_1.useRef)(0);
    var screenRef = (0, react_1.useRef)(null);
    var _c = (0, react_1.useState)(0), previewIndex = _c[0], setPreviewIndex = _c[1];
    var _d = (0, react_1.useState)(true), isDisabled = _d[0], setIsDisabled = _d[1];
    var unFlatArray = function (arr, sliceNumber) {
        var result = [];
        for (var s = 0, e = sliceNumber; s < arr.length; s += sliceNumber, e += sliceNumber) {
            result.push(arr.slice(s, e));
        }
        return result;
    };
    var previewArray = (0, react_1.useMemo)(function () { return unFlatArray(images, 10); }, [images]);
    var visibleValues = (0, react_1.useRef)({
        minIndex: 0,
        maxIndex: 9
    });
    var zoomInHandler = function () {
        deltaRef.current += 0.5;
        setIsDisabled(false);
        zoomRef.current.classList.remove('move');
        zoomRef.current.style.transform = "matrix(".concat(deltaRef.current, ",0,0,").concat(deltaRef.current, ",").concat(deltaXRef.current, ",").concat(deltaYRef.current, ")");
    };
    var zoomOutHandler = function () {
        if (deltaRef.current !== 1) {
            deltaRef.current -= 0.5;
        }
        if (deltaRef.current === 1) {
            setIsDisabled(true);
            setInit();
        }
        zoomRef.current.classList.remove('move');
        zoomRef.current.style.transform = "matrix(".concat(deltaRef.current, ",0,0,").concat(deltaRef.current, ",").concat(deltaXRef.current, ",").concat(deltaYRef.current, ")");
    };
    var zoomInitHandler = function () {
        setIsDisabled(true);
        setInit();
    };
    var closeHandler = function () {
        zoomRef.current.style.transform = initMatrix;
        onClose();
    };
    var onMoveHandler = function (e) {
        if (deltaRef.current > 1) {
            zoomRef.current.classList.add('move');
        }
    };
    var onMouseMoveHandler = function (e) {
        if (zoomRef.current.classList[0] === 'move') {
            zoomRef.current.style.transform =
                "matrix(".concat(deltaRef.current, ",0,0,").concat(deltaRef.current, ",").concat(deltaXRef.current += e.movementX, ",").concat(deltaYRef.current += e.movementY, ")");
        }
    };
    var onMoveEndHandler = function () {
        zoomRef.current.classList.remove('move');
    };
    var topNavigation = (0, react_1.useMemo)(function () { return (0, jsx_runtime_1.jsxs)("div", { className: 'rf-image-preview__top-navigation', children: [(0, jsx_runtime_1.jsxs)("div", { className: 'top-navigation__zoom', children: [(0, jsx_runtime_1.jsx)("div", { "aria-label": '\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C', onClick: zoomInitHandler, className: (0, classnames_1.classnames)('top-navigation__button', isDisabled ? 'top-navigation__button--disabled' : ''), children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsRenew, {}) }), (0, jsx_runtime_1.jsx)("div", { "aria-label": '\u041E\u0442\u0434\u0430\u043B\u0438\u0442\u044C', onClick: zoomOutHandler, className: (0, classnames_1.classnames)('top-navigation__button', isDisabled ? 'top-navigation__button--disabled' : ''), children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllReduce, {}) }), (0, jsx_runtime_1.jsx)("div", { "aria-label": '\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u0438\u0442\u044C', onClick: zoomInHandler, className: 'top-navigation__button', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllAdd, {}) })] }), (0, jsx_runtime_1.jsx)("div", { "aria-label": '\u0417\u0430\u043A\u0440\u044B\u0442\u044C', onClick: closeHandler, className: 'top-navigation__button', children: (0, jsx_runtime_1.jsx)(indexIcon_1.AllClose, {}) })] }); }, [isDisabled]);
    var imageHandler = function (src) { return function () {
        setInit();
        setCurrentImage(src);
    }; };
    var currentIndex = (0, react_1.useMemo)(function () { return images.findIndex(function (image) { return image === currentImage; }); }, [currentImage]);
    var setInit = function () {
        deltaRef.current = 1;
        deltaYRef.current = 0;
        deltaXRef.current = 0;
        zoomRef.current.style.transform = initMatrix;
        zoomRef.current.classList.remove('move');
    };
    var prevImageHandler = function () {
        setInit();
        setIsDisabled(true);
        setCurrentImage(images[currentIndex - 1]);
        setPreviewIndex(Math.floor(currentIndex / 10));
        if ((currentIndex) % 10 === 0) {
            setPreviewIndex(previewIndex - 1);
        }
        else {
            if (visibleValues.current.minIndex > previewIndex) {
                visibleValues.current = {
                    minIndex: visibleValues.current.minIndex - 1,
                    maxIndex: visibleValues.current.maxIndex - 1,
                };
            }
        }
    };
    var nextImageHandler = function () {
        setIsDisabled(true);
        setInit();
        setCurrentImage(images[currentIndex + 1]);
        setPreviewIndex(Math.floor(currentIndex / 10));
        if ((currentIndex + 1) % 10 === 0) {
            setPreviewIndex(previewIndex + 1);
        }
        else {
            if (visibleValues.current.maxIndex <= previewIndex) {
                visibleValues.current = {
                    minIndex: visibleValues.current.minIndex + 1,
                    maxIndex: visibleValues.current.maxIndex + 1,
                };
            }
        }
    };
    var bottomPrevHandler = function () {
        setPreviewIndex(previewIndex - 1);
    };
    var bottomNextHandler = function () {
        setPreviewIndex(previewIndex + 1);
    };
    var noop = (0, react_1.useMemo)(function () { return function () { }; }, []);
    var bottomNavigationMenu = (0, react_1.useMemo)(function () { return images.length > 1 ? (0, jsx_runtime_1.jsxs)("div", { "data-testid": 'bottom-chevron-left', className: (0, classnames_1.classnames)('rf-image-preview__bottom-navigation', images.length > 10 ?
            'rf-image-preview__bottom-navigation--big' : '', isDisabled ? '' : 'bottom-navigation--disabled'), children: [images.length > 10 ? (0, jsx_runtime_1.jsx)("div", { "aria-label": '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430', onClick: previewIndex > 0 ? bottomPrevHandler : noop, className: (0, classnames_1.classnames)('bottom-navigation__left', previewIndex > 0 ?
                    '' : 'button__disabled'), children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }) : null, previewArray[previewIndex].map(function (image, index) {
                var realIndex = index + (10 * previewIndex);
                if (visibleValues.current.minIndex <= index && visibleValues.current.maxIndex >= index) {
                    return (0, jsx_runtime_1.jsx)("div", { role: "presentation-image--".concat(index), "data-testid": "bottom__image--".concat(index), onClick: imageHandler(image), className: (0, classnames_1.classnames)('bottom-navigation__item', currentIndex === realIndex ? 'item__active' : ''), children: (0, jsx_runtime_1.jsx)("img", { src: image, alt: image }) }, image);
                }
                return null;
            }), images.length > 10 ? (0, jsx_runtime_1.jsx)("div", { "data-testid": 'bottom-chevron-right', "aria-label": '\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430', onClick: previewArray.length - 1 > previewIndex ? bottomNextHandler : noop, className: (0, classnames_1.classnames)('bottom-navigation__right', previewArray.length - 1 > previewIndex ?
                    '' : 'button__disabled'), children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronRight, {}) }) : null] }) : null; }, [currentIndex, previewIndex, isDisabled]);
    var labelCountComponent = (0, react_1.useMemo)(function () { return images.length > 10 ? isDisabled ? (0, jsx_runtime_1.jsx)("div", { className: 'rf-label-count__component', children: (0, jsx_runtime_1.jsxs)("label", { "data-testid": 'label-count-test', children: [" ", currentIndex + 1 + ' / ' + images.length] }) }) : null : null; }, [currentIndex, images.length, isDisabled]);
    var navigationControl = (0, react_1.useMemo)(function () { return images.length > 1 ? (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", { "aria-label": '\u041F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430', onClick: currentIndex ? prevImageHandler : noop, className: (0, classnames_1.classnames)('navigation-control__left', !currentIndex ?
                    'button__disabled' : ''), children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronLeft, {}) }), (0, jsx_runtime_1.jsx)("div", { "aria-label": '\u0421\u043B\u0443\u0434\u0443\u044E\u0449\u0430\u044F \u043A\u0430\u0440\u0442\u0438\u043D\u043A\u0430', onClick: currentIndex + 1 !== images.length ? nextImageHandler : noop, className: (0, classnames_1.classnames)('navigation-control__right', currentIndex + 1 === images.length ?
                    'button__disabled' : ''), children: (0, jsx_runtime_1.jsx)(indexIcon_1.ArrowsChevronRight, {}) })] }) : null; }, [images, currentIndex]);
    var imageContent = (0, react_1.useMemo)(function () { return (0, jsx_runtime_1.jsx)("div", { className: "rf-image-preview__full-image ".concat(images.length < 10 ? 'single__full-image' : ''), children: (0, jsx_runtime_1.jsx)("img", { role: 'presentation-image', draggable: false, onMouseUp: onMoveEndHandler, onMouseDown: onMoveHandler, onMouseMove: onMouseMoveHandler, onMouseOut: onMoveEndHandler, ref: zoomRef, src: currentImage, alt: currentImage }) }); }, [currentImage]);
    var preview = (0, jsx_runtime_1.jsxs)("div", { ref: screenRef, className: 'rf-image-preview', children: [topNavigation, imageContent, images.length > 1 ? (0, jsx_runtime_1.jsxs)("div", { className: 'rf-naviation-bottom__container', children: [labelCountComponent, bottomNavigationMenu] }) : null, navigationControl] });
    return ((0, react_dom_1.createPortal)(preview, document.body));
};
exports.default = ImagePreview;
