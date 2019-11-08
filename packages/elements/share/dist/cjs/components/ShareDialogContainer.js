"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var memoize_one_1 = tslib_1.__importDefault(require("memoize-one"));
var React = tslib_1.__importStar(require("react"));
var react_intl_1 = require("react-intl");
var tiny_invariant_1 = tslib_1.__importDefault(require("tiny-invariant"));
var AtlassianUrlShortenerClient_1 = require("../clients/AtlassianUrlShortenerClient");
var ShareServiceClient_1 = require("../clients/ShareServiceClient");
var i18n_1 = require("../i18n");
var analytics_1 = require("./analytics");
var MessagesIntlProvider_1 = tslib_1.__importDefault(require("./MessagesIntlProvider"));
var ShareDialogWithTrigger_1 = require("./ShareDialogWithTrigger");
var utils_1 = require("./utils");
var ErrorBoundary_1 = tslib_1.__importDefault(require("./ErrorBoundary"));
var COPY_LINK_EVENT = analytics_1.copyLinkButtonClicked(0);
exports.defaultConfig = {
    mode: 'EXISTING_USERS_ONLY',
    allowComment: false,
};
var memoizedFormatCopyLink = memoize_one_1.default(function (origin, link) { return origin.addToUrl(link); });
function getCurrentPageUrl() {
    return window.location.href;
}
/**
 * This component serves as a Provider to provide customizable implementations
 * to ShareDialogTrigger component
 */
var ShareDialogContainerInternal = /** @class */ (function (_super) {
    tslib_1.__extends(ShareDialogContainerInternal, _super);
    function ShareDialogContainerInternal(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        _this._urlShorteningRequestCounter = 0;
        _this._lastUrlShorteningWasTooSlow = false;
        _this.createAndFireEvent = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent)
                createAnalyticsEvent(payload).fire(analytics_1.CHANNEL_ID);
        };
        _this.fetchConfig = function () {
            _this.setState({
                isFetchingConfig: true,
            }, function () {
                _this.shareClient
                    .getConfig(_this.props.productId, _this.props.cloudId)
                    .then(function (config) {
                    if (_this._isMounted) {
                        _this.setState({
                            config: config,
                            isFetchingConfig: false,
                        });
                    }
                })
                    .catch(function () {
                    if (_this._isMounted) {
                        _this.setState({
                            config: exports.defaultConfig,
                            isFetchingConfig: false,
                        });
                    }
                });
            });
        };
        _this.handleSubmitShare = function (_a) {
            var users = _a.users, comment = _a.comment;
            var shareLink = _this.getFormShareLink();
            var _b = _this.props, productId = _b.productId, shareAri = _b.shareAri, shareContentType = _b.shareContentType, shareTitle = _b.shareTitle, shareeAction = _b.shareeAction;
            var content = {
                ari: shareAri,
                link: shareLink,
                title: shareTitle,
                type: shareContentType,
            };
            var metaData = {
                productId: productId,
                atlOriginId: _this.getFormShareOriginTracing().id,
                shareeAction: shareeAction,
            };
            return _this.shareClient
                .share(content, utils_1.optionDataToUsers(users), metaData, comment)
                .then(function () {
                if (!_this._isMounted)
                    return;
                // renew Origin Tracing Id per share action succeeded
                _this.setState(function (state) { return ({
                    shareActionCount: state.shareActionCount + 1,
                }); });
            });
        };
        _this.handleDialogOpen = function () {
            _this.setState({
                currentPageUrl: getCurrentPageUrl(),
            }, function () {
                _this.updateShortCopyLink();
            });
            // always refetch the config when modal is re-opened
            _this.fetchConfig();
        };
        _this.decorateAnalytics = function (payload) {
            if (payload.type === COPY_LINK_EVENT.type &&
                payload.action === COPY_LINK_EVENT.action &&
                payload.actionSubjectId === COPY_LINK_EVENT.actionSubjectId) {
                var useUrlShortener = _this.props.useUrlShortener;
                var isCopyLinkShortened = _this.isShortCopyLinkAvailable();
                payload = tslib_1.__assign(tslib_1.__assign({}, payload), { attributes: tslib_1.__assign(tslib_1.__assign({}, payload.attributes), { shortUrl: isCopyLinkShortened }) });
                if (useUrlShortener && !isCopyLinkShortened)
                    _this._lastUrlShorteningWasTooSlow = true;
            }
            return payload;
        };
        // ensure origin is re-generated if the link or the factory changes
        // separate memoization is needed since copy != form
        _this.getUniqueCopyLinkOriginTracing = memoize_one_1.default(function (link, originTracingFactory) {
            return originTracingFactory();
        });
        // form origin must furthermore be regenerated after each form share
        _this.getUniqueFormShareOriginTracing = memoize_one_1.default(function (link, originTracingFactory, shareCount) {
            return originTracingFactory();
        });
        _this.getUpToDateShortenedCopyLink = memoize_one_1.default(function (longLink, cloudId, productId) {
            _this._lastUrlShorteningWasTooSlow = false;
            _this._urlShorteningRequestCounter++;
            _this.createAndFireEvent(analytics_1.shortUrlRequested());
            var start = Date.now();
            return _this.urlShortenerClient
                .shorten(longLink, cloudId, productId)
                .then(function (response) {
                _this.createAndFireEvent(analytics_1.shortUrlGenerated(start, _this._lastUrlShorteningWasTooSlow));
                return response.shortUrl;
            })
                .catch(function () {
                _this.createAndFireEvent(analytics_1.errorEncountered('urlShortening'));
                return null;
            });
        });
        _this.isShortCopyLinkAvailable = function () {
            var useUrlShortener = _this.props.useUrlShortener;
            var shortenedCopyLink = _this.state.shortenedCopyLink;
            return !!useUrlShortener && !!shortenedCopyLink;
        };
        _this.getCopyLink = function () {
            if (_this.isShortCopyLinkAvailable())
                return _this.state.shortenedCopyLink;
            return _this.getFullCopyLink();
        };
        _this.getFormShareLink = function () {
            // original share link is used here
            return _this.getRawLink();
        };
        // v0.4 -> v0.5 .client -> .shareClient
        tiny_invariant_1.default(!props.client, 'elements/share: Breaking change, please update your props!');
        _this.shareClient = props.shareClient || new ShareServiceClient_1.ShareServiceClient();
        _this.urlShortenerClient =
            props.urlShortenerClient || new AtlassianUrlShortenerClient_1.AtlassianUrlShortenerClient();
        _this.state = {
            shareActionCount: 0,
            config: exports.defaultConfig,
            isFetchingConfig: false,
            currentPageUrl: getCurrentPageUrl(),
            shortenedCopyLink: null,
        };
        return _this;
    }
    ShareDialogContainerInternal.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    ShareDialogContainerInternal.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    ShareDialogContainerInternal.prototype.getRawLink = function () {
        var shareLink = this.props.shareLink;
        var currentPageUrl = this.state.currentPageUrl;
        return shareLink || currentPageUrl;
    };
    ShareDialogContainerInternal.prototype.getCopyLinkOriginTracing = function () {
        var originTracingFactory = this.props.originTracingFactory;
        var shareLink = this.getRawLink();
        return this.getUniqueCopyLinkOriginTracing(shareLink, originTracingFactory);
    };
    ShareDialogContainerInternal.prototype.getFormShareOriginTracing = function () {
        var originTracingFactory = this.props.originTracingFactory;
        var shareActionCount = this.state.shareActionCount;
        var shareLink = this.getRawLink();
        return this.getUniqueFormShareOriginTracing(shareLink, originTracingFactory, shareActionCount);
    };
    ShareDialogContainerInternal.prototype.getFullCopyLink = function () {
        var formatCopyLink = this.props.formatCopyLink;
        var shareLink = this.getRawLink();
        var copyLinkOrigin = this.getCopyLinkOriginTracing();
        return (formatCopyLink || memoizedFormatCopyLink)(copyLinkOrigin, shareLink);
    };
    ShareDialogContainerInternal.prototype.updateShortCopyLink = function () {
        var _this = this;
        this.setState({
            shortenedCopyLink: null,
        });
        var useUrlShortener = this.props.useUrlShortener;
        if (!useUrlShortener)
            return;
        var longLink = this.getFullCopyLink();
        var _a = this.props, cloudId = _a.cloudId, productId = _a.productId;
        var shortLink = this.getUpToDateShortenedCopyLink(longLink, cloudId, productId);
        var requestCounter = this._urlShorteningRequestCounter;
        shortLink.then(function (shortenedCopyLink) {
            if (!_this._isMounted)
                return;
            var isRequestOutdated = requestCounter !== _this._urlShorteningRequestCounter;
            if (isRequestOutdated)
                return;
            _this.setState({ shortenedCopyLink: shortenedCopyLink });
        });
    };
    ShareDialogContainerInternal.prototype.render = function () {
        var _a = this.props, dialogPlacement = _a.dialogPlacement, loadUserOptions = _a.loadUserOptions, renderCustomTriggerButton = _a.renderCustomTriggerButton, shareContentType = _a.shareContentType, shareFormTitle = _a.shareFormTitle, shouldCloseOnEscapePress = _a.shouldCloseOnEscapePress, showFlags = _a.showFlags, triggerButtonAppearance = _a.triggerButtonAppearance, triggerButtonStyle = _a.triggerButtonStyle, triggerButtonTooltipText = _a.triggerButtonTooltipText, triggerButtonTooltipPosition = _a.triggerButtonTooltipPosition, bottomMessage = _a.bottomMessage, shareeAction = _a.shareeAction;
        var isFetchingConfig = this.state.isFetchingConfig;
        return (React.createElement(ErrorBoundary_1.default, null,
            React.createElement(MessagesIntlProvider_1.default, null,
                React.createElement(ShareDialogWithTrigger_1.ShareDialogWithTrigger, { config: this.state.config, copyLink: this.getCopyLink(), analyticsDecorator: this.decorateAnalytics, dialogPlacement: dialogPlacement, isFetchingConfig: isFetchingConfig, loadUserOptions: loadUserOptions, onDialogOpen: this.handleDialogOpen, onShareSubmit: this.handleSubmitShare, renderCustomTriggerButton: renderCustomTriggerButton, shareContentType: shareContentType, shareFormTitle: shareFormTitle, copyLinkOrigin: this.getCopyLinkOriginTracing(), formShareOrigin: this.getFormShareOriginTracing(), shouldCloseOnEscapePress: shouldCloseOnEscapePress, showFlags: showFlags, triggerButtonAppearance: triggerButtonAppearance, triggerButtonStyle: triggerButtonStyle, triggerButtonTooltipPosition: triggerButtonTooltipPosition, triggerButtonTooltipText: triggerButtonTooltipText, bottomMessage: bottomMessage, submitButtonLabel: shareeAction === 'edit' && (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages.inviteTriggerButtonText))) }))));
    };
    ShareDialogContainerInternal.defaultProps = {
        useUrlShortener: false,
        shareeAction: 'view',
    };
    return ShareDialogContainerInternal;
}(React.Component));
exports.ShareDialogContainerInternal = ShareDialogContainerInternal;
exports.ShareDialogContainer = analytics_next_1.withAnalyticsEvents()(ShareDialogContainerInternal);
//# sourceMappingURL=ShareDialogContainer.js.map