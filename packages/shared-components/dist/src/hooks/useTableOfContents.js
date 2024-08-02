"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var operators_1 = require("rxjs/operators");
var rxjs_1 = require("rxjs");
var useTableOfContents = function (_a) {
    var selector = _a.selector, _b = _a.deps, deps = _b === void 0 ? [] : _b, parent = _a.parent;
    var _c = (0, react_1.useState)({
        activeIndex: 0,
        activeTitleId: undefined
    }), activeTitle = _c[0], setActiveTitle = _c[1];
    var _d = (0, react_1.useState)([]), titlesNodes = _d[0], setTitlesNodes = _d[1];
    var clicked = (0, react_1.useRef)(false);
    var onClick = function (title) {
        setActiveTitle(title);
        clicked.current = true;
    };
    var parseTitles = function () {
        var htmlNodes = Array.from(document.querySelectorAll(selector));
        return htmlNodes.map(function (node) { return ({
            id: node.id,
            htmlNode: node,
        }); });
    };
    var findActiveNode = (0, react_1.useCallback)(function () {
        if (titlesNodes.length) {
            if (clicked.current) {
                clicked.current = false;
                return;
            }
            var offsets = titlesNodes.map(function (node) { return node.htmlNode.getBoundingClientRect().top; });
            var activeIndex = offsets.findIndex(function (offset) {
                return offset > (Math.floor((parent ? parent.offsetHeight : window.innerHeight) / 2));
            });
            /** Активируем последний заголовок если вся страница проскролена */
            var globalScroll = window.innerHeight + document.documentElement.scrollTop >= document.documentElement.scrollHeight;
            if (parent ? parent.offsetHeight + parent.scrollTop >= parent.scrollHeight : globalScroll) {
                activeIndex = titlesNodes.length - 1;
                setActiveTitle({
                    activeTitleId: titlesNodes[activeIndex].id,
                    activeIndex: activeIndex
                });
                return;
            }
            if (activeIndex === -1) {
                activeIndex = titlesNodes.length - 1;
            }
            else if (activeIndex > 0) {
                activeIndex -= 1;
            }
            setActiveTitle({
                activeTitleId: titlesNodes[activeIndex].id,
                activeIndex: activeIndex
            });
        }
    }, [titlesNodes, parent]);
    (0, react_1.useEffect)(function () {
        setTimeout(function () {
            setTitlesNodes(parseTitles());
        });
    }, __spreadArray([selector], deps, true));
    (0, react_1.useEffect)(function () {
        if (!activeTitle.activeTitleId && titlesNodes.length) {
            setActiveTitle({
                activeTitleId: titlesNodes[0].id,
                activeIndex: 0
            });
        }
        var subscription = (0, rxjs_1.fromEvent)(parent ? parent : window, 'scroll').pipe((0, operators_1.throttleTime)(300, undefined, {
            leading: true,
            trailing: true
        }), (0, operators_1.map)(function () { return findActiveNode(); })).subscribe();
        return function () {
            subscription.unsubscribe();
        };
    }, [findActiveNode]);
    return {
        activeTitle: activeTitle,
        onClick: onClick
    };
};
exports.default = useTableOfContents;
