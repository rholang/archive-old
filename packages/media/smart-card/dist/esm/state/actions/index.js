import { __awaiter, __generator } from "tslib";
import { auth } from '@atlaskit/outbound-auth-flow-client';
import { cardAction, getDefinitionId, getByDefinitionId, getServices, getStatus, } from './helpers';
import { ACTION_PENDING, ACTION_RESOLVING, ACTION_RESOLVED, ACTION_ERROR, ERROR_MESSAGE_OAUTH, ERROR_MESSAGE_FATAL, } from './constants';
import { resolvedEvent, unresolvedEvent, uiAuthEvent, uiAuthAlternateAccountEvent, trackAppAccountConnected, connectSucceededEvent, connectFailedEvent, uiClosedAuthEvent, MESSAGE_WINDOW_CLOSED, KEY_WINDOW_CLOSED, KEY_SENSITIVE_DATA, screenAuthPopupEvent, } from '../../utils/analytics';
import { useSmartLinkContext } from '../context';
export function useSmartCardActions(url, dispatchAnalytics) {
    var _a = useSmartLinkContext(), store = _a.store, connections = _a.connections, config = _a.config;
    var getState = store.getState, dispatch = store.dispatch;
    var _b = getState()[url] || {
        status: 'pending',
        lastUpdatedAt: Date.now(),
        details: undefined,
    }, details = _b.details, lastUpdatedAt = _b.lastUpdatedAt, status = _b.status;
    function register() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!details) {
                            dispatch(cardAction(ACTION_PENDING, { url: url }));
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
        return __awaiter(this, void 0, void 0, function () {
            var definitionId, hasAuthorized, hasData, hasExpired, isCompleted;
            return __generator(this, function (_a) {
                definitionId = getDefinitionId(details);
                hasAuthorized = status !== 'unauthorized';
                hasData = !!(details && details.data);
                hasExpired = Date.now() - lastUpdatedAt >= config.maxAge;
                isCompleted = false;
                if (showLoadingSpinner && (!hasAuthorized || !hasData)) {
                    setTimeout(function () {
                        if (!isCompleted) {
                            dispatch(cardAction(ACTION_RESOLVING, { url: resourceUrl }));
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
                    dispatchAnalytics(resolvedEvent(definitionId));
                    isCompleted = true;
                }
                return [2 /*return*/];
            });
        });
    }
    function handleResolvedLinkResponse(resourceUrl, response) {
        var nextDefinitionId = response && getDefinitionId(response);
        var nextStatus = response ? getStatus(response) : 'fatal';
        // Dispatch analytics.
        if (nextStatus === 'resolved') {
            dispatchAnalytics(resolvedEvent(nextDefinitionId));
        }
        else {
            dispatchAnalytics(unresolvedEvent(nextStatus, nextDefinitionId));
            // If we require authorization & do not have an authFlow available,
            // throw an error and render as a normal blue link.
            if (nextStatus === 'unauthorized' && config.authFlow !== 'oauth2') {
                handleResolvedLinkError(resourceUrl, ERROR_MESSAGE_OAUTH);
                return;
            }
            if (nextStatus === 'fatal') {
                handleResolvedLinkError(resourceUrl, ERROR_MESSAGE_FATAL);
                return;
            }
        }
        dispatch(cardAction(ACTION_RESOLVED, { url: resourceUrl }, response));
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
                dispatch(cardAction(ACTION_RESOLVED, { url: resourceUrl }, details));
            }
            // Handle AuthErrors (user did not have access to resource).
        }
        else if (errorKind === 'auth') {
            dispatch(cardAction(ACTION_RESOLVED, { url: resourceUrl }, {
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
            dispatch(cardAction(ACTION_ERROR, { url: resourceUrl }, error));
        }
    }
    function reload(showLoadingSpinner) {
        if (showLoadingSpinner === void 0) { showLoadingSpinner = false; }
        var definitionId = getDefinitionId(details);
        getByDefinitionId(definitionId, getState()).map(function (url) {
            return resolve(url, true, showLoadingSpinner);
        });
    }
    function authorize(appearance) {
        var definitionId = getDefinitionId(details);
        var services = getServices(details);
        // When authentication is triggered, let GAS know!
        if (status === 'unauthorized') {
            dispatchAnalytics(uiAuthEvent(appearance, definitionId));
        }
        if (status === 'forbidden') {
            dispatchAnalytics(uiAuthAlternateAccountEvent(appearance, definitionId));
        }
        if (services.length > 0) {
            dispatchAnalytics(screenAuthPopupEvent(definitionId));
            auth(services[0].url).then(function () {
                dispatchAnalytics(trackAppAccountConnected(definitionId));
                dispatchAnalytics(connectSucceededEvent(definitionId));
                reload();
            }, function (err) {
                if (err.message === MESSAGE_WINDOW_CLOSED) {
                    dispatchAnalytics(connectFailedEvent(definitionId, KEY_WINDOW_CLOSED));
                    dispatchAnalytics(uiClosedAuthEvent(appearance, definitionId));
                }
                else {
                    dispatchAnalytics(connectFailedEvent(definitionId, KEY_SENSITIVE_DATA));
                }
                reload();
            });
        }
    }
    return { register: register, reload: reload, authorize: authorize };
}
//# sourceMappingURL=index.js.map