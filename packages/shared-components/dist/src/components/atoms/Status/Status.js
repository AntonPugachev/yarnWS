"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var icons_1 = require("./icons");
require("./Status.scss");
var iconTypes = {
    online: icons_1.Online,
    icon: icons_1.Icon,
    decline: icons_1.Decline,
    load: icons_1.Load,
    in: icons_1.In,
    out: icons_1.Out,
    withdrawStaff: icons_1.WithdrawStaff,
    vacation: icons_1.Vacation,
    birthday: icons_1.Birthday,
    disease: icons_1.Disease,
    businessTrip: icons_1.BusinessTrip,
    remoteWork: icons_1.RemoteWork,
    boss: icons_1.Boss,
    decree: icons_1.Decree
};
// FIXME: Elements must have sufficient color contrast
var Status = function (_a) {
    var _b = _a.type, type = _b === void 0 ? 'online' : _b, _c = _a.size, size = _c === void 0 ? 'm' : _c;
    var TargetIconTag = iconTypes[type];
    return ((0, jsx_runtime_1.jsx)("div", { className: 'rf-status', children: (0, jsx_runtime_1.jsx)("div", { className: "rf-status__wrapper rf-status__wrapper--size-".concat(size, " rf-status__wrapper--type-").concat(type), children: (0, jsx_runtime_1.jsx)(TargetIconTag, { size: size }) }) }));
};
exports.default = Status;
