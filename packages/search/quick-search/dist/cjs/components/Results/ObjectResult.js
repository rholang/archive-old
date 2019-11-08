"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ResultBase_1 = tslib_1.__importDefault(require("./ResultBase"));
var _24_1 = tslib_1.__importDefault(require("@atlaskit/icon-object/glyph/page/24"));
/**
 * Generic result type for Atlassian objects.
 */
var ObjectResult = /** @class */ (function (_super) {
    tslib_1.__extends(ObjectResult, _super);
    function ObjectResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getAvatar = function () {
            if (_this.props.avatar) {
                return _this.props.avatar;
            }
            return (React.createElement(_24_1.default, { label: "Search" }));
        };
        return _this;
    }
    ObjectResult.prototype.getSubtext = function () {
        var containerName = this.props.containerName;
        if (containerName) {
            return (React.createElement("span", null, containerName));
        }
        return containerName;
    };
    ObjectResult.prototype.render = function () {
        var _a = this.props, name = _a.name, containerName = _a.containerName, isPrivate = _a.isPrivate, objectKey = _a.objectKey, _b = _a.type, type = _b === void 0 ? 'object' : _b, commonResultProps = tslib_1.__rest(_a, ["name", "containerName", "isPrivate", "objectKey", "type"]);
        return (React.createElement(ResultBase_1.default, tslib_1.__assign({}, commonResultProps, { type: type, text: name, subText: this.getSubtext(), icon: this.getAvatar() })));
    };
    return ObjectResult;
}(React.PureComponent));
exports.default = ObjectResult;
//# sourceMappingURL=ObjectResult.js.map