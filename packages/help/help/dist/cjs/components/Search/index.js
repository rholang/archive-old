"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var lodash_debounce_1 = tslib_1.__importDefault(require("lodash.debounce"));
var quick_search_1 = require("@atlaskit/quick-search");
var react_intl_1 = require("react-intl");
var messages_1 = require("../../messages");
var Requests_1 = require("../../model/Requests");
var HelpContext_1 = require("../HelpContext");
var styled_1 = require("./styled");
var SearchContent_1 = tslib_1.__importDefault(require("./SearchContent"));
var Search = /** @class */ (function (_super) {
    tslib_1.__extends(Search, _super);
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
        _this.debouncedSearch = lodash_debounce_1.default(_this.props.help.onSearch, 350);
        return _this;
    }
    Search.prototype.render = function () {
        var _a = this.props, formatMessage = _a.intl.formatMessage, searchState = _a.help.searchState;
        return (React.createElement(styled_1.SearchContainer, null,
            React.createElement(quick_search_1.QuickSearch, { placeholder: formatMessage(messages_1.messages.help_panel_search_placeholder), value: this.state.value, isLoading: searchState === Requests_1.REQUEST_STATE.loading, onSearchInput: this.handleSearchInput },
                React.createElement(SearchContent_1.default, null))));
    };
    return Search;
}(React.Component));
exports.Search = Search;
exports.default = HelpContext_1.withHelp(react_intl_1.injectIntl(Search));
//# sourceMappingURL=index.js.map