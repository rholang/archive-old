import { __extends } from "tslib";
import * as React from 'react';
import debounce from 'lodash.debounce';
import { QuickSearch } from '@atlaskit/quick-search';
import { injectIntl } from 'react-intl';
import { messages } from '../../messages';
import { REQUEST_STATE } from '../../model/Requests';
import { withHelp } from '../HelpContext';
import { SearchContainer } from './styled';
import SearchContent from './SearchContent';
var Search = /** @class */ (function (_super) {
    __extends(Search, _super);
    function Search() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: '',
        };
        _this.handleSearchInput = function (_a) {
            var target = _a.target;
            var value = target.value;
            _this.setState({
                value: value,
            });
            _this.debouncedSearch(value);
        };
        _this.debouncedSearch = debounce(_this.props.help.onSearch, 350);
        return _this;
    }
    Search.prototype.render = function () {
        var _a = this.props, formatMessage = _a.intl.formatMessage, searchState = _a.help.searchState;
        return (React.createElement(SearchContainer, null,
            React.createElement(QuickSearch, { placeholder: formatMessage(messages.help_panel_search_placeholder), value: this.state.value, isLoading: searchState === REQUEST_STATE.loading, onSearchInput: this.handleSearchInput },
                React.createElement(SearchContent, null))));
    };
    return Search;
}(React.Component));
export { Search };
export default withHelp(injectIntl(Search));
//# sourceMappingURL=index.js.map