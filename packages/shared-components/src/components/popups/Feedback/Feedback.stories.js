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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playground = exports.Demo = void 0;
var react_1 = require("react");
var StoryRow_1 = require("../../storybook/StoryRow");
var Feedback_1 = require("./Feedback");
var Story_1 = require("../../storybook/Story");
var react_router_dom_1 = require("react-router-dom");
var __1 = require("../../..");
var axios_1 = require("axios");
var createPostFeedback_1 = require("./createPostFeedback");
exports.default = {
    title: 'popovers/withTest/Feedback',
    component: Feedback_1.default,
};
var request = axios_1.default.create({ baseURL: 'https://sapd-fes-ap01.vtb24.ru:44310/' });
var postFeedback = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var mockuser, mockProjectId, resData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                mockuser = {
                    email: 'MMBEZRUKOVA@VTB.RU',
                    userId: '000000000147985',
                    userName: 'Вершинин Александр',
                    photo: '/sap/opu/odata4/sap/zhrbc/default/sap/zhrbc_0720_react_utils/0001/IUserPhoto(\'00147985\')/content',
                    userPosition: 'Начальник департамента',
                    userDepartment: 'Отдел развития персонала'
                };
                mockProjectId = 2;
                resData = __assign(__assign(__assign({}, data), mockuser), { projectId: mockProjectId });
                return [4 /*yield*/, (0, createPostFeedback_1.default)(request)(resData)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
var Demo = function () {
    var _a = (0, react_1.useState)(false), visible = _a[0], setVisible = _a[1];
    return (<react_router_dom_1.BrowserRouter>
      <Story_1.default name='Feedback'>
        <__1.Button onClick={function () { return setVisible(true); }}>Открыть</__1.Button>

        {visible &&
            <Feedback_1.default postFeedback={postFeedback} onClose={function () { return setVisible(false); }}/>}
      </Story_1.default>
    </react_router_dom_1.BrowserRouter>);
};
exports.Demo = Demo;
var Playground = function (args) {
    return (<react_router_dom_1.BrowserRouter>
      <Story_1.default>
        <StoryRow_1.default>
          <Feedback_1.default postFeedback={postFeedback} {...args}/>
        </StoryRow_1.default>
      </Story_1.default>
    </react_router_dom_1.BrowserRouter>);
};
exports.Playground = Playground;
exports.Playground.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/Tl0AmqQJK4qaCl4pLRio7A/Design-System-for-Story-Book?node-id=2948%3A40979',
    },
};
