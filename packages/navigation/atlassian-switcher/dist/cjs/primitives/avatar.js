"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var ImageContainer = styled_components_1.default.img(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  height: ", "px;\n  width: ", "px;\n  margin: ", "px;\n  border-radius: 3px;\n  position: absolute;\n  top: 0;\n"], ["\n  height: ", "px;\n  width: ", "px;\n  margin: ", "px;\n  border-radius: 3px;\n  position: absolute;\n  top: 0;\n"])), theme_1.gridSize() * 3, theme_1.gridSize() * 3, theme_1.gridSize() / 2);
var Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var Avatar = /** @class */ (function (_super) {
    tslib_1.__extends(Avatar, _super);
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
exports.default = Avatar;
var templateObject_1, templateObject_2;
//# sourceMappingURL=avatar.js.map