import { OPERATIONAL_EVENT_TYPE } from '@atlaskit/analytics-gas-types';
import { isFailureErrorAction } from '../../actions/failureErrorLogger';
export default (function (action) {
    if (isFailureErrorAction(action)) {
        var error = action.error, _a = action.info, info = _a === void 0 ? undefined : _a;
        return [
            {
                name: 'UnhandledError',
                action: 'UnhandledError',
                eventType: OPERATIONAL_EVENT_TYPE,
                attributes: {
                    browserInfo: !!(window &&
                        window.navigator &&
                        window.navigator.userAgent)
                        ? window.navigator.userAgent
                        : 'unknown',
                    error: error,
                    info: info,
                },
            },
        ];
    }
});
//# sourceMappingURL=failureErrorLoggerHandler.js.map