"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var messages_1 = require("../messages");
var MagnifyingGlassImage_1 = tslib_1.__importDefault(require("../assets/MagnifyingGlassImage"));
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: ", "px 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: ", "px 0;\n"])), theme_1.gridSize() * 4);
var ImageWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  width: 20%;\n  height: 20%;\n  margin-top: ", "px;\n"], ["\n  width: 20%;\n  height: 20%;\n  margin-top: ", "px;\n"])), theme_1.gridSize() * 11);
var TextWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: ", "px;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: ", "px;\n"])), theme_1.gridSize() * 3);
var Title = styled_components_1.default.h4(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"], ["\n  ", ";\n  margin-bottom: ", "px;\n  margin-top: 0;\n"])), theme_1.typography.h600(), theme_1.gridSize() * 2);
var Text = function (_a) {
    var children = _a.children;
    return (React.createElement(TextWrapper, null,
        React.createElement(Title, null,
            React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.no_recent_activity_title))),
        children));
};
var NoRecentActivity = /** @class */ (function (_super) {
    tslib_1.__extends(NoRecentActivity, _super);
    function NoRecentActivity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoRecentActivity.prototype.render = function () {
        return (React.createElement(Wrapper, null,
            React.createElement(ImageWrapper, null,
                React.createElement(MagnifyingGlassImage_1.default, null)),
            React.createElement(Text, { children: this.props.children })));
    };
    return NoRecentActivity;
}(React.Component));
exports.default = NoRecentActivity;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=NoRecentActivity.js.map