"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var quick_search_1 = require("@atlaskit/quick-search");
var colors = tslib_1.__importStar(require("@atlaskit/theme/colors"));
var document_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/document-filled"));
var styled_1 = require("./styled");
exports.SearchResults = function (props) {
    var _a = props.searchResult, searchResult = _a === void 0 ? [] : _a;
    return (React.createElement(styled_1.SearchResultsList, null, searchResult.map(function (searchResultItem) {
        var id = searchResultItem.id, _a = searchResultItem.title, title = _a === void 0 ? '' : _a, _b = searchResultItem.description, description = _b === void 0 ? '' : _b;
        return (React.createElement(quick_search_1.ObjectResult, { resultId: id, name: title, key: id, containerName: description, avatar: React.createElement(document_filled_1.default, { primaryColor: colors.P500, size: "medium", label: title }) }));
    })));
};
exports.default = exports.SearchResults;
//# sourceMappingURL=SearchResults.js.map