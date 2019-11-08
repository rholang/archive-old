import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import ResultBase from './ResultBase';
import Page24Icon from '@atlaskit/icon-object/glyph/page/24';
/**
 * Generic result type for Atlassian objects.
 */
var ObjectResult = /** @class */ (function (_super) {
    __extends(ObjectResult, _super);
    function ObjectResult() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.getAvatar = function () {
            if (_this.props.avatar) {
                return _this.props.avatar;
            }
            return (React.createElement(Page24Icon, { label: "Search" }));
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
        var _a = this.props, name = _a.name, containerName = _a.containerName, isPrivate = _a.isPrivate, objectKey = _a.objectKey, _b = _a.type, type = _b === void 0 ? 'object' : _b, commonResultProps = __rest(_a, ["name", "containerName", "isPrivate", "objectKey", "type"]);
        return (React.createElement(ResultBase, __assign({}, commonResultProps, { type: type, text: name, subText: this.getSubtext(), icon: this.getAvatar() })));
    };
    return ObjectResult;
}(React.PureComponent));
export default ObjectResult;
//# sourceMappingURL=ObjectResult.js.map