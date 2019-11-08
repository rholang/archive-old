"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ConfluenceQuickSearchContainer_1 = tslib_1.__importDefault(require("./confluence/ConfluenceQuickSearchContainer"));
var JiraQuickSearchContainer_1 = tslib_1.__importDefault(require("./jira/JiraQuickSearchContainer"));
var configureSearchClients_1 = tslib_1.__importDefault(require("../api/configureSearchClients"));
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("./MessagesIntlProvider"));
var PrefetchedResultsProvider_1 = require("./PrefetchedResultsProvider");
var features_1 = require("../util/features");
var AbTestProvider_1 = require("./AbTestProvider");
var withFeedbackButton_1 = require("./feedback/withFeedbackButton");
var FeaturesProvider_1 = tslib_1.__importDefault(require("./FeaturesProvider"));
var DEFAULT_NOOP_LOGGER = {
    safeInfo: function () { },
    safeWarn: function () { },
    safeError: function () { },
};
var ConfluenceContainerWithFeedback = withFeedbackButton_1.withFeedbackButton(ConfluenceQuickSearchContainer_1.default);
/**
 * Component that exposes the public API for global quick search. Its only purpose is to offer a simple, user-friendly API to the outside and hide the implementation detail of search clients etc.
 */
var GlobalQuickSearchWrapper = /** @class */ (function (_super) {
    tslib_1.__extends(GlobalQuickSearchWrapper, _super);
    function GlobalQuickSearchWrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onAdvancedSearch = function (e, entity, query, searchSessionId, spaces) {
            if (spaces === void 0) { spaces = []; }
            if (_this.props.onAdvancedSearch) {
                var preventEventDefault_1 = false;
                _this.props.onAdvancedSearch({
                    preventDefault: function () { return (preventEventDefault_1 = true); },
                    query: query,
                    category: entity,
                    originalEvent: e,
                    searchSessionId: searchSessionId,
                    spaces: spaces,
                });
                if (preventEventDefault_1 && e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            }
        };
        return _this;
    }
    GlobalQuickSearchWrapper.prototype.makeConfig = function () {
        var config = {};
        var _a = this.props, activityServiceUrl = _a.activityServiceUrl, searchAggregatorServiceUrl = _a.searchAggregatorServiceUrl, directoryServiceUrl = _a.directoryServiceUrl, confluenceUrl = _a.confluenceUrl, autocompleteUrl = _a.autocompleteUrl;
        if (activityServiceUrl) {
            config.activityServiceUrl = activityServiceUrl;
        }
        if (searchAggregatorServiceUrl) {
            config.searchAggregatorServiceUrl = searchAggregatorServiceUrl;
        }
        if (directoryServiceUrl) {
            config.directoryServiceUrl = directoryServiceUrl;
        }
        if (confluenceUrl) {
            config.confluenceUrl = confluenceUrl;
        }
        if (autocompleteUrl) {
            config.autocompleteUrl = autocompleteUrl;
        }
        return config;
    };
    GlobalQuickSearchWrapper.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        var _this = this;
        return (Object.keys(tslib_1.__assign(tslib_1.__assign({}, nextProps), this.props))
            .map(function (key) { return _this.props[key] !== nextProps[key]; })
            .reduce(function (acc, value) { return acc || value; }, false) || this.state !== nextState);
    };
    GlobalQuickSearchWrapper.prototype.createFeatures = function (abTest) {
        var _a = this.props, disableJiraPreQueryPeopleSearch = _a.disableJiraPreQueryPeopleSearch, enablePreQueryFromAggregator = _a.enablePreQueryFromAggregator, useUrsForBootstrapping = _a.useUrsForBootstrapping, isAutocompleteEnabled = _a.isAutocompleteEnabled, isNavAutocompleteEnabled = _a.isNavAutocompleteEnabled;
        return features_1.createFeatures({
            abTest: abTest,
            useUrsForBootstrapping: !!useUrsForBootstrapping,
            disableJiraPreQueryPeopleSearch: !!disableJiraPreQueryPeopleSearch,
            enablePreQueryFromAggregator: !!enablePreQueryFromAggregator,
            isAutocompleteEnabled: !!isAutocompleteEnabled,
            isNavAutocompleteEnabled: !!isNavAutocompleteEnabled,
        });
    };
    GlobalQuickSearchWrapper.prototype.renderSearchContainer = function (searchClients, abTest) {
        var _a = this.props, linkComponent = _a.linkComponent, referralContextIdentifiers = _a.referralContextIdentifiers, logger = _a.logger, inputControls = _a.inputControls, appPermission = _a.appPermission, modelContext = _a.modelContext, showFeedbackCollector = _a.showFeedbackCollector, feedbackCollectorProps = _a.feedbackCollectorProps, confluenceUrl = _a.confluenceUrl, isJiraPeopleProfilesEnabled = _a.isJiraPeopleProfilesEnabled;
        var commonProps = tslib_1.__assign(tslib_1.__assign({}, searchClients), { linkComponent: linkComponent, referralContextIdentifiers: referralContextIdentifiers, logger: logger || DEFAULT_NOOP_LOGGER, onAdvancedSearch: this.onAdvancedSearch });
        if (this.props.context === 'confluence') {
            if (showFeedbackCollector) {
                return (
                // Same as below but missing input controls which is injected by the feedback button
                React.createElement(ConfluenceContainerWithFeedback, tslib_1.__assign({}, commonProps, feedbackCollectorProps, { modelContext: modelContext, confluenceUrl: confluenceUrl || '' })));
            }
            return (React.createElement(ConfluenceQuickSearchContainer_1.default, tslib_1.__assign({}, commonProps, feedbackCollectorProps, { modelContext: modelContext, inputControls: inputControls, confluenceUrl: confluenceUrl || '' })));
        }
        else if (this.props.context === 'jira') {
            return (React.createElement(JiraQuickSearchContainer_1.default, tslib_1.__assign({}, commonProps, { appPermission: appPermission, isJiraPeopleProfilesEnabled: isJiraPeopleProfilesEnabled })));
        }
        else {
            var errorMessage = "Invalid product type, product " + this.props.context + " is unsupported";
            if (logger) {
                logger.safeError(errorMessage);
            }
            throw new Error(errorMessage);
        }
    };
    GlobalQuickSearchWrapper.prototype.render = function () {
        var _this = this;
        return (React.createElement(MessagesIntlProvider_1.default, null,
            React.createElement(PrefetchedResultsProvider_1.GlobalSearchPreFetchContext.Consumer, null, function (prefetchedResults) {
                var searchClients = configureSearchClients_1.default(_this.props.cloudId, _this.makeConfig(), _this.props.userId === null, prefetchedResults);
                var context = _this.props.context;
                return (React.createElement(AbTestProvider_1.ABTestProvider, { context: context, crossProductSearchClient: searchClients.crossProductSearchClient }, function (abTest) { return (React.createElement(FeaturesProvider_1.default, { features: _this.createFeatures(abTest) }, _this.renderSearchContainer(searchClients, abTest))); }));
            })));
    };
    GlobalQuickSearchWrapper.defaultProps = {
        logger: DEFAULT_NOOP_LOGGER,
    };
    return GlobalQuickSearchWrapper;
}(React.Component));
exports.default = GlobalQuickSearchWrapper;
//# sourceMappingURL=GlobalQuickSearchWrapper.js.map