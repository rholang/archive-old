import { __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import styled from 'styled-components';
import { gridSize } from '@atlaskit/theme';
var ImageContainer = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: ", "px;\n  width: ", "px;\n  margin: ", "px;\n  border-radius: 3px;\n  position: absolute;\n  top: 0;\n"], ["\n  height: ", "px;\n  width: ", "px;\n  margin: ", "px;\n  border-radius: 3px;\n  position: absolute;\n  top: 0;\n"])), gridSize() * 3, gridSize() * 3, gridSize() / 2);
var Container = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Avatar = /** @class */ (function (_super) {
    __extends(Avatar, _super);
    function Avatar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            imageLoadFailed: false,
        };
        _this.onError = function () {
            _this.setState({ imageLoadFailed: true });
        };
        return _this;
    }
    Avatar.prototype.render = function () {
        var _a = this.props, avatarUrl = _a.avatarUrl, fallbackComponent = _a.fallbackComponent;
        return (React.createElement(Container, null,
            fallbackComponent,
            avatarUrl && !this.state.imageLoadFailed && (React.createElement(ImageContainer, { src: avatarUrl, onError: this.onError }))));
    };
    return Avatar;
}(React.Component));
export default Avatar;
var templateObject_1, templateObject_2;
//# sourceMappingURL=avatar.js.map