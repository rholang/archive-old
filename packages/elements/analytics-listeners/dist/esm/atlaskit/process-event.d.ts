/**
 * Inspired by analytics-web-react
 */
import { GasPayload } from '@atlaskit/analytics-gas-types';
import Logger from '../helpers/logger';
import { UIAnalyticsEvent } from '@atlaskit/analytics-next';
declare const _default: (event: UIAnalyticsEvent, logger: Logger) => GasPayload | null;
/**
 * This util exists to convert the Atlaskit event format into the analytics platform format.
 *
 * Atlaskit event format:
 * event {
 *      payload: {
 *          ...attributesFromLowestPointInTheTree
 *      },
 *      context: [{
 *          ...attributesFromHighestPointInTheTree
 *      }, {
 *          ...attributesFromSecondHighestPointInTheTree
 *      }]
 * }
 *
 * Analytics platform event format:
 *  event {
 *      type: @atlaskit/analytics-gas-types.EventType
 *      payload {
 *          ...mandatoryAttributesBasedOnEventType
 *          attributes: {
 *              ...arbitraryAttributes
 *          }
 *      }
 *  }
 */
export default _default;
