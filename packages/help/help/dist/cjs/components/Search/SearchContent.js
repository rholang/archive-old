"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var constants_1 = require("../constants");
var Requests_1 = require("../../model/Requests");
var HelpContext_1 = require("../HelpContext");
var SearchResults_1 = tslib_1.__importDefault(require("./SearchResults"));
var SearchResultsEmpty_1 = tslib_1.__importDefault(require("./SearchResultsEmpty"));
exports.SearchContent = function (props) {
    var _a = props.help, searchValue = _a.searchValue, searchResult = _a.searchResult, searchState = _a.searchState;
    if (searchValue.length > constants_1.MIN_CHARACTERS_FOR_SEARCH) {
        if (searchResult.length > 0) {
            return React.createElement(SearchResults_1.default, { searchResult: searchResult });
        }
        else if (searchState !== Requests_1.REQUEST_STATE.loading) {
            return React.createElement(SearchResultsEmpty_1.default, null);
        }
    }
    else if (searchResult.length > 0 &&
        searchValue.length <= constants_1.MIN_CHARACTERS_FOR_SEARCH &&
        searchValue.length > 0) {
        return React.createElement(SearchResults_1.default, { searchResult: searchResult });
    }
    return null;
};
exports.default = HelpContext_1.withHelp(exports.SearchContent);
//# sourceMappingURL=SearchContent.js.map