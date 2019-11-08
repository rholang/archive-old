"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var theme_1 = require("@atlaskit/theme");
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var messages_1 = require("../messages");
var ErrorImage_1 = tslib_1.__importDefault(require("../assets/ErrorImage"));
var ErrorWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  text-align: center;\n  margin-top: ", "px;\n"], ["\n  text-align: center;\n  margin-top: ", "px;\n"])), theme_1.math.multiply(theme_1.gridSize, 4));
var SearchError = /** @class */ (function (_super) {
    tslib_1.__extends(SearchError, _super);
    function SearchError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SearchError.prototype.render = function () {
        var onRetryClick = this.props.onRetryClick;
        return (React.createElement(ErrorWrapper, null,
            React.createElement(ErrorImage_1.default, null),
            React.createElement("h3", null,
                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.search_error_title))),
            React.createElement("p", null,
                React.createElement("span", null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.search_error_body, { values: {
                            link: (React.createElement(button_1.default, { appearance: "link", spacing: "none", onClick: onRetryClick },
                                React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.search_error_body_link)))),
                        } }))))));
    };
    return SearchError;
}(React.Component));
exports.default = SearchError;
var templateObject_1;
//# sourceMappingURL=SearchError.js.map