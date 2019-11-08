"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var react_intl_1 = require("react-intl");
var messages_1 = require("../messages");
var SearchResultsUtil_1 = require("./SearchResultsUtil");
var experiment_utils_1 = require("../util/experiment-utils");
var analytics_event_helper_1 = require("../util/analytics-event-helper");
var ShowMoreButton = /** @class */ (function (_super) {
    tslib_1.__extends(ShowMoreButton, _super);
    function ShowMoreButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowMoreButton.prototype.triggerEnrichedEvent = function (analyticsEvent, actionSubjectId) {
        var _a = this.props, resultLength = _a.resultLength, totalSize = _a.totalSize, createAnalyticsEvent = _a.createAnalyticsEvent;
        var searchSessionId = ((analyticsEvent || {}).context || []).reduce(function (acc, v) {
            if (v === void 0) { v = {}; }
            return Object.assign({}, acc, v);
        }, {}).searchSessionId;
        analytics_event_helper_1.fireShowMoreButtonClickEvent(searchSessionId, resultLength, totalSize, actionSubjectId, experiment_utils_1.CONF_OBJECTS_ITEMS_PER_PAGE, createAnalyticsEvent);
    };
    ShowMoreButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, resultLength = _a.resultLength, totalSize = _a.totalSize, onShowMoreClicked = _a.onShowMoreClicked, onSearchMoreAdvancedSearch = _a.onSearchMoreAdvancedSearch, query = _a.query;
        if (resultLength < totalSize) {
            if (resultLength < experiment_utils_1.CONF_MAX_DISPLAYED_RESULTS) {
                return (React.createElement(button_1.default, { appearance: "link", onClick: function (e, analyticsEvent) {
                        _this.triggerEnrichedEvent(analyticsEvent, 'showMoreButton');
                        onShowMoreClicked();
                    } },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.show_more_button_text, { values: {
                            itemsPerPage: Math.min(experiment_utils_1.CONF_OBJECTS_ITEMS_PER_PAGE, totalSize - resultLength),
                        } }))));
            }
            else if (onSearchMoreAdvancedSearch) {
                return (React.createElement(button_1.default, { appearance: "link", onClick: function (e, analyticsEvent) {
                        _this.triggerEnrichedEvent(analyticsEvent, 'showMoreAdvancedSearchButton');
                        onSearchMoreAdvancedSearch(e);
                    }, href: SearchResultsUtil_1.getConfluenceAdvancedSearchLink(query) },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, messages_1.messages.show_more_button_advanced_search))));
            }
        }
        return null;
    };
    return ShowMoreButton;
}(React.PureComponent));
exports.ShowMoreButton = ShowMoreButton;
exports.default = analytics_next_1.withAnalyticsEvents()(ShowMoreButton);
//# sourceMappingURL=ShowMoreButton.js.map