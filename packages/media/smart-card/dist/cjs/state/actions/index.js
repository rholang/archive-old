"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var outbound_auth_flow_client_1 = require("@atlaskit/outbound-auth-flow-client");
var helpers_1 = require("./helpers");
var constants_1 = require("./constants");
var analytics_1 = require("../../utils/analytics");
var context_1 = require("../context");
function useSmartCardActions(url, dispatchAnalytics) {
    var _a = context_1.useSmartLinkContext(), store = _a.store, connections = _a.connections, config = _a.config;
    var getState = store.getState, dispatch = store.dispatch;
    var _b = getState()[url] || {
        status: 'pending',
        lastUpdatedAt: Date.now(),
        details: undefined,
    }, details = _b.details, lastUpdatedAt = _b.lastUpdatedAt, status = _b.status;
    function register() {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!details) {
                            dispatch(helpers_1.cardAction(constants_1.ACTION_PENDING, { url: url }));
                        }
                        return [4 /*yield*/, resolve()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    function resolve(resourceUrl, isReloading, showLoadingSpinner) {
        if (resourceUrl === void 0) { resourceUrl = url; }
        if (isReloading === void 0) { isReloading = false; }
        if (showLoadingSpinner === void 0) { showLoadingSpinner = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var definitionId, hasAuthorized, hasData, hasExpired, isCompleted;
            return tslib_1.__generator(this, function (_a) {
                definitionId = helpers_1.getDefinitionId(details);
                hasAuthorized = status !== 'unauthorized';
                hasData = !!(details && details.data);
                hasExpired = Date.now() - lastUpdatedAt >= config.maxAge;
                isCompleted = false;
                if (showLoadingSpinner && (!hasAuthorized || !hasData)) {
                    setTimeout(function () {
                        if (!isCompleted) {
                            dispatch(helpers_1.cardAction(constants_1.ACTION_RESOLVING, { url: resourceUrl }));
                        }
                    }, config.maxLoadingDelay);
                }
                // 2. Request JSON-LD data for the card from ORS, iff it has extended
                // its cache lifespan OR there is no data for it currently. Once the data
                // has come back asynchronously, dispatch the resolved action for the card.
                if (isReloading || hasExpired || !hasData) {
                    try {
                        /**
                         * There was a bizarre error in Android where the Webview would crash when
                         * we were using the syntax:
                         *    const response = await connections.client.fetchData(resourceUrl)
                         * Please DO NOT change this from a promise
                         * https://product-fabric.atlassian.net/browse/FM-2240
                         */
                        return [2 /*return*/, connections.client.fetchData(resourceUrl).then(function (response) {
                                isCompleted = true;
                                handleResolvedLinkResponse(resourceUrl, response);
                            }, function (error) {
                                isCompleted = true;
                                handleResolvedLinkError(resourceUrl, error);
                            })];
                    }
                    catch (error) {
                        isCompleted = true;
                        handleResolvedLinkError(resourceUrl, error);
                    }
                }
                else {
                    dispatchAnalytics(analytics_1.resolvedEvent(definitionId));
                    isCompleted = true;
                }
                return [2 /*return*/];
            });
        });
    }
    function handleResolvedLinkResponse(resourceUrl, response) {
        var nextDefinitionId = response && helpers_1.getDefinitionId(response);
        var nextStatus = response ? helpers_1.getStatus(response) : 'fatal';
        // Dispatch analytics.
        if (nextStatus === 'resolved') {
            dispatchAnalytics(analytics_1.resolvedEvent(nextDefinitionId));
        }
        else {
            dispatchAnalytics(analytics_1.unresolvedEvent(nextStatus, nextDefinitionId));
            // If we require authorization & do not have an authFlow available,
            // throw an error and render as a normal blue link.
            if (nextStatus === 'unauthorized' && config.authFlow !== 'oauth2') {
                handleResolvedLinkError(resourceUrl, constants_1.ERROR_MESSAGE_OAUTH);
                return;
            }
            if (nextStatus === 'fatal') {
                handleResolvedLinkError(resourceUrl, constants_1.ERROR_MESSAGE_FATAL);
                return;
            }
        }
        dispatch(helpers_1.cardAction(constants_1.ACTION_RESOLVED, { url: resourceUrl }, response));
    }
    function handleResolvedLinkError(resourceUrl, error) {
        var errorKind = error && error.kind;
        // Handle FatalErrors (completely failed to resolve data).
        if (errorKind === 'fatal') {
            // If there's no previous data in the store for this URL, then bail
            // out and let the editor handle fallbacks (returns to a blue link).
            if (!details || status !== 'resolved') {
                throw error;
            }
            // If we already have resolved data for this URL in the store, then
            // simply fallback to the previous data.
            if (status === 'resolved') {
                dispatch(helpers_1.cardAction(constants_1.ACTION_RESOLVED, { url: resourceUrl }, details));
            }
            // Handle AuthErrors (user did not have access to resource).
        }
        else if (errorKind === 'auth') {
            dispatch(helpers_1.cardAction(constants_1.ACTION_RESOLVED, { url: resourceUrl }, {
                meta: {
                    visibility: 'restricted',
                    access: 'unauthorized',
                    auth: [],
                    definitionId: 'provider-not-found',
                },
                data: {},
            }));
        }
        else {
            dispatch(helpers_1.cardAction(constants_1.ACTION_ERROR, { url: resourceUrl }, error));
        }
    }
    function reload(showLoadingSpinner) {
        if (showLoadingSpinner === void 0) { showLoadingSpinner = false; }
        var definitionId = helpers_1.getDefinitionId(details);
        helpers_1.getByDefinitionId(definitionId, getState()).map(function (url) {
            return resolve(url, true, showLoadingSpinner);
        });
    }
    function authorize(appearance) {
        var definitionId = helpers_1.getDefinitionId(details);
        var services = helpers_1.getServices(details);
        // When authentication is triggered, let GAS know!
        if (status === 'unauthorized') {
            dispatchAnalytics(analytics_1.uiAuthEvent(appearance, definitionId));
        }
        if (status === 'forbidden') {
            dispatchAnalytics(analytics_1.uiAuthAlternateAccountEvent(appearance, definitionId));
        }
        if (services.length > 0) {
            dispatchAnalytics(analytics_1.screenAuthPopupEvent(definitionId));
            outbound_auth_flow_client_1.auth(services[0].url).then(function () {
                dispatchAnalytics(analytics_1.trackAppAccountConnected(definitionId));
                dispatchAnalytics(analytics_1.connectSucceededEvent(definitionId));
                reload();
            }, function (err) {
                if (err.message === analytics_1.MESSAGE_WINDOW_CLOSED) {
                    dispatchAnalytics(analytics_1.connectFailedEvent(definitionId, analytics_1.KEY_WINDOW_CLOSED));
                    dispatchAnalytics(analytics_1.uiClosedAuthEvent(appearance, definitionId));
                }
                else {
                    dispatchAnalytics(analytics_1.connectFailedEvent(definitionId, analytics_1.KEY_SENSITIVE_DATA));
                }
                reload();
            });
        }
    }
    return { register: register, reload: reload, authorize: authorize };
}
exports.useSmartCardActions = useSmartCardActions;
//# sourceMappingURL=index.js.map