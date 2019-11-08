import { __extends } from "tslib";
import * as React from 'react';
import { getConfluencePrefetchedData, getJiraPrefetchedData, } from '../api/prefetchResults';
export var GlobalSearchPreFetchContext = React.createContext(undefined);
var PrefetchedResultsProvider = /** @class */ (function (_super) {
    __extends(PrefetchedResultsProvider, _super);
    function PrefetchedResultsProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            prefetchedResults: undefined,
        };
        _this.getPrefetchedResults = function (cloudId, userId) {
            var _a = _this.props, context = _a.context, baseUrl = _a.baseUrl;
            switch (context) {
                case 'confluence':
                    return getConfluencePrefetchedData(cloudId, baseUrl);
                case 'jira':
                    return getJiraPrefetchedData(cloudId, userId === null, baseUrl);
                default:
                    throw new Error("Prefetching is not supported for context: " + context + " - did you set the PrefetchResultProvider context incorrectly?");
            }
        };
        _this.doPrefetchOnce = function () {
            var _a = _this.props, cloudId = _a.cloudId, userId = _a.userId;
            var prefetchedResults = _this.state.prefetchedResults;
            if (!cloudId) {
                return;
            }
            if (!prefetchedResults) {
                _this.setState({
                    prefetchedResults: _this.getPrefetchedResults(cloudId, userId),
                });
            }
        };
        return _this;
    }
    PrefetchedResultsProvider.prototype.componentDidUpdate = function () {
        this.doPrefetchOnce();
    };
    PrefetchedResultsProvider.prototype.componentDidMount = function () {
        this.doPrefetchOnce();
    };
    PrefetchedResultsProvider.prototype.render = function () {
        var children = this.props.children;
        var prefetchedResults = this.state.prefetchedResults;
        return (React.createElement(GlobalSearchPreFetchContext.Provider, { value: prefetchedResults }, children));
    };
    return PrefetchedResultsProvider;
}(React.Component));
export default PrefetchedResultsProvider;
//# sourceMappingURL=PrefetchedResultsProvider.js.map