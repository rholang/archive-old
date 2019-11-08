"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var ResultBase_1 = tslib_1.__importDefault(require("./ResultBase"));
/**
 * Generic result type for Atlassian containers.
 */
var ContainerResult = /** @class */ (function (_super) {
    tslib_1.__extends(ContainerResult, _super);
    function ContainerResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getAvatar = function () {
            if (_this.props.avatar) {
                return _this.props.avatar;
            }
            return (React.createElement(avatar_1.default, { borderColor: "transparent", src: _this.props.avatarUrl, appearance: "square", size: "small", status: _this.props.isPrivate ? 'locked' : null }));
        };
        return _this;
    }
    ContainerResult.prototype.render = function () {
        var _a = this.props, name = _a.name, isPrivate = _a.isPrivate, _b = _a.type, type = _b === void 0 ? 'container' : _b, subText = _a.subText, commonResultProps = tslib_1.__rest(_a, ["name", "isPrivate", "type", "subText"]);
        return (React.createElement(ResultBase_1.default, tslib_1.__assign({}, commonResultProps, { type: type, text: name, subText: subText, icon: this.getAvatar() })));
    };
    return ContainerResult;
}(React.PureComponent));
exports.default = ContainerResult;
//# sourceMappingURL=ContainerResult.js.map