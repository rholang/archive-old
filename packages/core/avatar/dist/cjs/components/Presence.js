"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var Icon_1 = require("../styled/Icon");
var getPresenceSVG_1 = tslib_1.__importDefault(require("../helpers/getPresenceSVG"));
var Presence = /** @class */ (function (_super) {
    tslib_1.__extends(Presence, _super);
    function Presence() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Presence.prototype.render = function () {
        var _a = this.props, borderColor = _a.borderColor, children = _a.children, presence = _a.presence, size = _a.size;
        return (react_1.default.createElement(Icon_1.Outer, { size: size, bgColor: borderColor },
            react_1.default.createElement(Icon_1.Inner, null, children || (presence && getPresenceSVG_1.default(presence)))));
    };
    return Presence;
}(react_1.Component));
exports.default = Presence;
//# sourceMappingURL=Presence.js.map