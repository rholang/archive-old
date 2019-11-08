"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_1 = require("@atlaskit/analytics");
var isReactElement_1 = tslib_1.__importDefault(require("./isReactElement"));
var constants_1 = require("./constants");
function decorateWithAnalyticsData(WrappedQuickSearch) {
    var _a;
    return _a = /** @class */ (function (_super) {
            tslib_1.__extends(DecorateWithAnalyticsData, _super);
            function DecorateWithAnalyticsData() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.countChildren = function () {
                    return React.Children.toArray(_this.props.children).reduce(function (total, group) {
                        return isReactElement_1.default(group)
                            ? total +
                                React.Children.count(group.props.children)
                            : total;
                    }, 0);
                };
                return _this;
            }
            DecorateWithAnalyticsData.prototype.render = function () {
                return (React.createElement(analytics_1.AnalyticsDecorator, { matchPrivate: true, match: constants_1.QS_ANALYTICS_EV_SUBMIT, data: {
                        resultCount: this.countChildren(),
                        queryLength: this.props.value.length,
                    } },
                    React.createElement(WrappedQuickSearch, tslib_1.__assign({}, this.props))));
            };
            return DecorateWithAnalyticsData;
        }(React.Component)),
        _a.defaultProps = {
            children: [],
            value: '',
        },
        _a;
}
exports.default = decorateWithAnalyticsData;
//# sourceMappingURL=decorateWithAnalyticsData.js.map