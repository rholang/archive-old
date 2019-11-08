"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var theme_1 = require("@atlaskit/theme");
var NoResultsImage_1 = tslib_1.__importDefault(require("../assets/NoResultsImage"));
var NoResultsWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  text-align: center;\n  margin-top: ", "px;\n  margin-bottom: 0;\n"], ["\n  text-align: center;\n  margin-top: ", "px;\n  margin-bottom: 0;\n"])), theme_1.math.multiply(theme_1.gridSize, 15));
var NoResults = /** @class */ (function (_super) {
    tslib_1.__extends(NoResults, _super);
    function NoResults() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoResults.prototype.render = function () {
        var _a = this.props, title = _a.title, body = _a.body;
        return (React.createElement(NoResultsWrapper, null,
            React.createElement(NoResultsImage_1.default, null),
            React.createElement("h3", null, title),
            body && React.createElement("p", null, body)));
    };
    return NoResults;
}(React.Component));
exports.default = NoResults;
var templateObject_1;
//# sourceMappingURL=NoResults.js.map