"use strict";
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
var react_1 = require("@testing-library/react");
var Tooltip_1 = require("./Tooltip");
describe('Test <Tooltip/> component', function () {
    it("should render Tooltip component after hover ", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, react_1.render)(<Tooltip_1.default>
        <div>Button</div>
        <div data-testid="tooltip-content">
          <p>Tooltip</p>
        </div>
      </Tooltip_1.default>);
                    react_1.fireEvent.mouseOver(react_1.screen.getByText('Button'));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return react_1.screen.getByTestId('tooltip-content'); })];
                case 1:
                    _a.sent();
                    expect(react_1.screen.getByText('Tooltip')).toBeInTheDocument();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should  not render Tooltip component with isVisible === false', function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    (0, react_1.render)(<Tooltip_1.default isVisible={false}>
        <div data-testid="Button">Button</div>
        <div data-testid="tooltip">
          <p>Tooltip</p>
        </div>
      </Tooltip_1.default>);
                    react_1.fireEvent.mouseOver(react_1.screen.getByText('Button'));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () { return react_1.screen.getByTestId('Button'); })];
                case 1:
                    _a.sent();
                    expect(react_1.screen.queryByTestId('tooltip')).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it('should render Tooltip component with background = white', function () {
        var container = (0, react_1.render)(<Tooltip_1.default background='white'>
        <div>Button</div>
        <p>Tooltip</p>
      </Tooltip_1.default>).container;
        expect(container.getElementsByClassName('rf-tooltip--white')).toHaveLength(1);
    });
    it('should render Tooltip component with background=default', function () {
        var container = (0, react_1.render)(<Tooltip_1.default background='white'>
        <div>Button</div>
        <p>Tooltip</p>
      </Tooltip_1.default>).container;
        expect(container.getElementsByClassName('rf-tooltip--white')).toHaveLength(1);
    });
    it('should be show tooltip with delay', function () { return __awaiter(void 0, void 0, void 0, function () {
        var closeDelay;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    closeDelay = 150;
                    (0, react_1.render)(<Tooltip_1.default background='white' closeDelay={closeDelay}>
        <div>Button</div>
        <p>Tooltip</p>
      </Tooltip_1.default>);
                    react_1.fireEvent.mouseEnter(react_1.screen.getByTestId('rf-tooltip'));
                    return [4 /*yield*/, (0, react_1.waitFor)(function () {
                            expect(react_1.screen.getByText('Tooltip')).toBeInTheDocument();
                        }, { timeout: closeDelay })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});