import { auth } from '@atlaskit/outbound-auth-flow-client';

import { AnalyticsHandler } from '../../utils/types';
import {
  cardAction,
  getDefinitionId,
  getByDefinitionId,
  getServices,
  getStatus,
} from './helpers';
import {
  ACTION_PENDING,
  ACTION_RESOLVING,
  ACTION_RESOLVED,
  ACTION_ERROR,
  ERROR_MESSAGE_OAUTH,
  ERROR_MESSAGE_FATAL,
} from './constants';
import { CardAppearance } from '../../view/Card';
import {
  resolvedEvent,
  unresolvedEvent,
  uiAuthEvent,
  uiAuthAlternateAccountEvent,
  trackAppAccountConnected,
  connectSucceededEvent,
  connectFailedEvent,
  uiClosedAuthEvent,
  MESSAGE_WINDOW_CLOSED,
  KEY_WINDOW_CLOSED,
  KEY_SENSITIVE_DATA,
  screenAuthPopupEvent,
} from '../../utils/analytics';
import { useSmartLinkContext } from '../context';
import { JsonLd } from '../../client/types';

export function useSmartCardActions(
  url: string,
  dispatchAnalytics: AnalyticsHandler,
) {
  const { store, connections, config } = useSmartLinkContext();
  const { getState, dispatch } = store;
  const { details, lastUpdatedAt, status } = getState()[url] || {
    status: 'pending',
    lastUpdatedAt: Date.now(),
    details: undefined,
  };

  async function register() {
    if (!details) {
      dispatch(cardAction(ACTION_PENDING, { url }));
    }
    await resolve();
  }

  async function resolve(
    resourceUrl = url,
    isReloading = false,
    showLoadingSpinner = true,
  ) {
    // Trigger asynchronous call to ORS API, race between this and
    // setting the card to a loading state.
    const definitionId = getDefinitionId(details);
    const hasAuthorized = status !== 'unauthorized';
    const hasData = !!(details && details.data);
    const hasExpired = Date.now() - lastUpdatedAt >= config.maxAge;
    // 1. Wait 1.2 seconds - if the card still has not been resolved,
    // emit the loading action to provide UI feedback. Note: only show
    // UI feedback if the URL does not already have data.
    let isCompleted = false;
    if (showLoadingSpinner && (!hasAuthorized || !hasData)) {
      setTimeout(() => {
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
        return connections.client.fetchData(resourceUrl).then(
          response => {
            isCompleted = true;
            handleResolvedLinkResponse(resourceUrl, response);
          },
          error => {
            isCompleted = true;
            handleResolvedLinkError(resourceUrl, error);
          },
        );
      } catch (error) {
        isCompleted = true;
        handleResolvedLinkError(resourceUrl, error);
      }
    } else {
      dispatchAnalytics(resolvedEvent(definitionId));
      isCompleted = true;
    }
  }

  function handleResolvedLinkResponse(resourceUrl: string, response: JsonLd) {
    const nextDefinitionId = response && getDefinitionId(response);
    const nextStatus = response ? getStatus(response) : 'fatal';

    // Dispatch analytics.
    if (nextStatus === 'resolved') {
      dispatchAnalytics(resolvedEvent(nextDefinitionId));
    } else {
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

  function handleResolvedLinkError(resourceUrl: string, error: any) {
    const errorKind: string = error && error.kind;

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
    } else if (errorKind === 'auth') {
      dispatch(
        cardAction(
          ACTION_RESOLVED,
          { url: resourceUrl },
          {
            meta: {
              visibility: 'restricted',
              access: 'unauthorized',
              auth: [],
              definitionId: 'provider-not-found',
            },
            data: {},
          },
        ),
      );
    } else {
      dispatch(cardAction(ACTION_ERROR, { url: resourceUrl }, error));
    }
  }

  function reload(showLoadingSpinner = false) {
    const definitionId = getDefinitionId(details);
    getByDefinitionId(definitionId, getState()).map(url =>
      resolve(url, true, showLoadingSpinner),
    );
  }

  function authorize(appearance: CardAppearance) {
    const definitionId = getDefinitionId(details);
    const services = getServices(details);
    // When authentication is triggered, let GAS know!
    if (status === 'unauthorized') {
      dispatchAnalytics(uiAuthEvent(appearance, definitionId));
    }
    if (status === 'forbidden') {
      dispatchAnalytics(uiAuthAlternateAccountEvent(appearance, definitionId));
    }
    if (services.length > 0) {
      dispatchAnalytics(screenAuthPopupEvent(definitionId));
      auth(services[0].url).then(
        () => {
          dispatchAnalytics(trackAppAccountConnected(definitionId));
          dispatchAnalytics(connectSucceededEvent(definitionId));
          reload();
        },
        (err: Error) => {
          if (err.message === MESSAGE_WINDOW_CLOSED) {
            dispatchAnalytics(
              connectFailedEvent(definitionId, KEY_WINDOW_CLOSED),
            );
            dispatchAnalytics(uiClosedAuthEvent(appearance, definitionId));
          } else {
            dispatchAnalytics(
              connectFailedEvent(definitionId, KEY_SENSITIVE_DATA),
            );
          }
          reload();
        },
      );
    }
  }

  return { register, reload, authorize };
}
