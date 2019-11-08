import { __assign, __extends } from "tslib";
import * as React from 'react';
import Button from '@atlaskit/button';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import { FormattedMessage } from 'react-intl';
import { messages } from '../messages';
import { getConfluenceAdvancedSearchLink } from './SearchResultsUtil';
import { CONF_OBJECTS_ITEMS_PER_PAGE, CONF_MAX_DISPLAYED_RESULTS, } from '../util/experiment-utils';
import { fireShowMoreButtonClickEvent } from '../util/analytics-event-helper';
var ShowMoreButton = /** @class */ (function (_super) {
    __extends(ShowMoreButton, _super);
    function ShowMoreButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShowMoreButton.prototype.triggerEnrichedEvent = function (analyticsEvent, actionSubjectId) {
        var _a = this.props, resultLength = _a.resultLength, totalSize = _a.totalSize, createAnalyticsEvent = _a.createAnalyticsEvent;
        var searchSessionId = ((analyticsEvent || {}).context || []).reduce(function (acc, v) {
            if (v === void 0) { v = {}; }
            return Object.assign({}, acc, v);
        }, {}).searchSessionId;
        fireShowMoreButtonClickEvent(searchSessionId, resultLength, totalSize, actionSubjectId, CONF_OBJECTS_ITEMS_PER_PAGE, createAnalyticsEvent);
    };
    ShowMoreButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, resultLength = _a.resultLength, totalSize = _a.totalSize, onShowMoreClicked = _a.onShowMoreClicked, onSearchMoreAdvancedSearch = _a.onSearchMoreAdvancedSearch, query = _a.query;
        if (resultLength < totalSize) {
            if (resultLength < CONF_MAX_DISPLAYED_RESULTS) {
                return (React.createElement(Button, { appearance: "link", onClick: function (e, analyticsEvent) {
                        _this.triggerEnrichedEvent(analyticsEvent, 'showMoreButton');
                        onShowMoreClicked();
                    } },
                    React.createElement(FormattedMessage, __assign({}, messages.show_more_button_text, { values: {
                            itemsPerPage: Math.min(CONF_OBJECTS_ITEMS_PER_PAGE, totalSize - resultLength),
                        } }))));
            }
            else if (onSearchMoreAdvancedSearch) {
                return (React.createElement(Button, { appearance: "link", onClick: function (e, analyticsEvent) {
                        _this.triggerEnrichedEvent(analyticsEvent, 'showMoreAdvancedSearchButton');
                        onSearchMoreAdvancedSearch(e);
                    }, href: getConfluenceAdvancedSearchLink(query) },
                    React.createElement(FormattedMessage, __assign({}, messages.show_more_button_advanced_search))));
            }
        }
        return null;
    };
    return ShowMoreButton;
}(React.PureComponent));
export { ShowMoreButton };
export default withAnalyticsEvents()(ShowMoreButton);
//# sourceMappingURL=ShowMoreButton.js.map