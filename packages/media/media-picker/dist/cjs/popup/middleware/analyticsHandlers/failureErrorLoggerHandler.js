"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var analytics_gas_types_1 = require("@atlaskit/analytics-gas-types");
var failureErrorLogger_1 = require("../../actions/failureErrorLogger");
exports.default = (function (action) {
    if (failureErrorLogger_1.isFailureErrorAction(action)) {
        var error = action.error, _a = action.info, info = _a === void 0 ? undefined : _a;
        return [
            {
                name: 'UnhandledError',
                action: 'UnhandledError',
                eventType: analytics_gas_types_1.OPERATIONAL_EVENT_TYPE,
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