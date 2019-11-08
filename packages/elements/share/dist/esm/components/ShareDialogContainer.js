import { __assign, __extends } from "tslib";
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import memoizeOne from 'memoize-one';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import assert from 'tiny-invariant';
import { AtlassianUrlShortenerClient, } from '../clients/AtlassianUrlShortenerClient';
import { ShareServiceClient, } from '../clients/ShareServiceClient';
import { messages } from '../i18n';
import { CHANNEL_ID, copyLinkButtonClicked, errorEncountered, shortUrlGenerated, shortUrlRequested, } from './analytics';
import MessagesIntlProvider from './MessagesIntlProvider';
import { ShareDialogWithTrigger } from './ShareDialogWithTrigger';
import { optionDataToUsers } from './utils';
import ErrorBoundary from './ErrorBoundary';
var COPY_LINK_EVENT = copyLinkButtonClicked(0);
export var defaultConfig = {
    mode: 'EXISTING_USERS_ONLY',
    allowComment: false,
};
var memoizedFormatCopyLink = memoizeOne(function (origin, link) { return origin.addToUrl(link); });
function getCurrentPageUrl() {
    return window.location.href;
}
/**
 * This component serves as a Provider to provide customizable implementations
 * to ShareDialogTrigger component
 */
var ShareDialogContainerInternal = /** @class */ (function (_super) {
    __extends(ShareDialogContainerInternal, _super);
    function ShareDialogContainerInternal(props) {
        var _this = _super.call(this, props) || this;
        _this._isMounted = false;
        _this._urlShorteningRequestCounter = 0;
        _this._lastUrlShorteningWasTooSlow = false;
        _this.createAndFireEvent = function (payload) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent)
                createAnalyticsEvent(payload).fire(CHANNEL_ID);
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
                            config: defaultConfig,
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
                .share(content, optionDataToUsers(users), metaData, comment)
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
                payload = __assign(__assign({}, payload), { attributes: __assign(__assign({}, payload.attributes), { shortUrl: isCopyLinkShortened }) });
                if (useUrlShortener && !isCopyLinkShortened)
                    _this._lastUrlShorteningWasTooSlow = true;
            }
            return payload;
        };
        // ensure origin is re-generated if the link or the factory changes
        // separate memoization is needed since copy != form
        _this.getUniqueCopyLinkOriginTracing = memoizeOne(function (link, originTracingFactory) {
            return originTracingFactory();
        });
        // form origin must furthermore be regenerated after each form share
        _this.getUniqueFormShareOriginTracing = memoizeOne(function (link, originTracingFactory, shareCount) {
            return originTracingFactory();
        });
        _this.getUpToDateShortenedCopyLink = memoizeOne(function (longLink, cloudId, productId) {
            _this._lastUrlShorteningWasTooSlow = false;
            _this._urlShorteningRequestCounter++;
            _this.createAndFireEvent(shortUrlRequested());
            var start = Date.now();
            return _this.urlShortenerClient
                .shorten(longLink, cloudId, productId)
                .then(function (response) {
                _this.createAndFireEvent(shortUrlGenerated(start, _this._lastUrlShorteningWasTooSlow));
                return response.shortUrl;
            })
                .catch(function () {
                _this.createAndFireEvent(errorEncountered('urlShortening'));
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
        assert(!props.client, 'elements/share: Breaking change, please update your props!');
        _this.shareClient = props.shareClient || new ShareServiceClient();
        _this.urlShortenerClient =
            props.urlShortenerClient || new AtlassianUrlShortenerClient();
        _this.state = {
            shareActionCount: 0,
            config: defaultConfig,
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
        return (React.createElement(ErrorBoundary, null,
            React.createElement(MessagesIntlProvider, null,
                React.createElement(ShareDialogWithTrigger, { config: this.state.config, copyLink: this.getCopyLink(), analyticsDecorator: this.decorateAnalytics, dialogPlacement: dialogPlacement, isFetchingConfig: isFetchingConfig, loadUserOptions: loadUserOptions, onDialogOpen: this.handleDialogOpen, onShareSubmit: this.handleSubmitShare, renderCustomTriggerButton: renderCustomTriggerButton, shareContentType: shareContentType, shareFormTitle: shareFormTitle, copyLinkOrigin: this.getCopyLinkOriginTracing(), formShareOrigin: this.getFormShareOriginTracing(), shouldCloseOnEscapePress: shouldCloseOnEscapePress, showFlags: showFlags, triggerButtonAppearance: triggerButtonAppearance, triggerButtonStyle: triggerButtonStyle, triggerButtonTooltipPosition: triggerButtonTooltipPosition, triggerButtonTooltipText: triggerButtonTooltipText, bottomMessage: bottomMessage, submitButtonLabel: shareeAction === 'edit' && (React.createElement(FormattedMessage, __assign({}, messages.inviteTriggerButtonText))) }))));
    };
    ShareDialogContainerInternal.defaultProps = {
        useUrlShortener: false,
        shareeAction: 'view',
    };
    return ShareDialogContainerInternal;
}(React.Component));
export { ShareDialogContainerInternal };
export var ShareDialogContainer = withAnalyticsEvents()(ShareDialogContainerInternal);
//# sourceMappingURL=ShareDialogContainer.js.map