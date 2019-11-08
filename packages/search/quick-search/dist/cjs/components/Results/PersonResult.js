"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var ResultBase_1 = tslib_1.__importDefault(require("./ResultBase"));
var PersonResult = /** @class */ (function (_super) {
    tslib_1.__extends(PersonResult, _super);
    function PersonResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getMention = function () {
            return _this.props.mentionName
                ? "" + _this.props.mentionPrefix + _this.props.mentionName
                : undefined;
        };
        _this.getAvatar = function () {
            if (_this.props.avatar) {
                return _this.props.avatar;
            }
            return (React.createElement(avatar_1.default, { presence: _this.props.presenceState, size: "small", src: _this.props.avatarUrl }));
        };
        return _this;
    }
    PersonResult.prototype.render = function () {
        var _a = this.props, name = _a.name, mentionName = _a.mentionName, mentionPrefix = _a.mentionPrefix, presenceMessage = _a.presenceMessage, presenceState = _a.presenceState, _b = _a.type, type = _b === void 0 ? 'person' : _b, commonResultProps = tslib_1.__rest(_a, ["name", "mentionName", "mentionPrefix", "presenceMessage", "presenceState", "type"]);
        return (React.createElement(ResultBase_1.default, tslib_1.__assign({}, commonResultProps, { type: type, text: name, subText: presenceMessage, caption: this.getMention(), icon: this.getAvatar() })));
    };
    PersonResult.defaultProps = {
        mentionPrefix: '@',
        presenceState: null,
    };
    return PersonResult;
}(React.PureComponent));
exports.default = PersonResult;
//# sourceMappingURL=PersonResult.js.map