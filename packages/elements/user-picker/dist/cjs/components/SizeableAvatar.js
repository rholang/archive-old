"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var React = tslib_1.__importStar(require("react"));
var utils_1 = require("./utils");
var Props = /** @class */ (function () {
    function Props() {
    }
    return Props;
}());
exports.Props = Props;
var SizeableAvatar = /** @class */ (function (_super) {
    tslib_1.__extends(SizeableAvatar, _super);
    function SizeableAvatar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SizeableAvatar.prototype.render = function () {
        var _a = this.props, src = _a.src, name = _a.name, presence = _a.presence, appearance = _a.appearance;
        return (React.createElement(avatar_1.default, { isHover: false, size: utils_1.getAvatarSize(appearance), src: src, name: name, enableTooltip: false, borderColor: "transparent", presence: presence }));
    };
    return SizeableAvatar;
}(React.PureComponent));
exports.SizeableAvatar = SizeableAvatar;
//# sourceMappingURL=SizeableAvatar.js.map