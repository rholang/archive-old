import { __assign, __extends, __makeTemplateObject } from "tslib";
import * as React from 'react';
import { ResultItemGroup } from '@atlaskit/quick-search';
import Button from '@atlaskit/button';
import { messages } from '../../messages';
import { FormattedMessage } from 'react-intl';
import ConfluenceSpaceFilter from './SpaceFilter';
import styled from 'styled-components';
import { fireMoreFiltersButtonClickEvent } from '../../util/analytics-event-helper';
import { withAnalyticsEvents } from '@atlaskit/analytics-next';
var Container = styled.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  max-width: 100%;\n"], ["\n  display: inline-flex;\n  align-items: center;\n  max-width: 100%;\n"])));
var ButtonContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex-shrink: 0;\n"], ["\n  flex-shrink: 0;\n"])));
var FilterContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  flex-shrink: 1;\n  overflow: hidden;\n"], ["\n  flex-shrink: 1;\n  overflow: hidden;\n"])));
var ConfluenceFilterGroup = /** @class */ (function (_super) {
    __extends(ConfluenceFilterGroup, _super);
    function ConfluenceFilterGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onMoreFiltersClick = function (event) {
            var _a = _this.props, onAdvancedSearch = _a.onAdvancedSearch, createAnalyticsEvent = _a.createAnalyticsEvent, searchSessionId = _a.searchSessionId;
            fireMoreFiltersButtonClickEvent(searchSessionId, createAnalyticsEvent);
            onAdvancedSearch(event);
        };
        return _this;
    }
    ConfluenceFilterGroup.prototype.render = function () {
        return (React.createElement(ResultItemGroup, { title: React.createElement(FormattedMessage, __assign({}, messages.confluence_space_filter)) },
            React.createElement(Container, null,
                React.createElement(FilterContainer, null,
                    React.createElement(ConfluenceSpaceFilter, __assign({}, this.props))),
                React.createElement(ButtonContainer, null,
                    React.createElement(Button, { appearance: "link", onClick: this.onMoreFiltersClick },
                        React.createElement(FormattedMessage, __assign({}, messages.confluence_more_filters)))))));
    };
    return ConfluenceFilterGroup;
}(React.Component));
export { ConfluenceFilterGroup };
export default withAnalyticsEvents()(ConfluenceFilterGroup);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=ConfluenceFilterGroup.js.map