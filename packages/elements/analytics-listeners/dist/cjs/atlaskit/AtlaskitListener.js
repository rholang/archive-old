"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var analytics_web_client_wrapper_1 = require("../analytics-web-client-wrapper");
var types_1 = require("../types");
var process_event_1 = tslib_1.__importDefault(require("./process-event"));
var AtlaskitListener = /** @class */ (function (_super) {
    tslib_1.__extends(AtlaskitListener, _super);
    function AtlaskitListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listenerHandler = function (event) {
            var _a = _this.props, client = _a.client, logger = _a.logger;
            logger.debug('Received Atlaskit event', event);
            var payload = process_event_1.default(event, logger);
            logger.debug('Processed Atlaskit event', payload);
            if (payload) {
                analytics_web_client_wrapper_1.sendEvent(logger, client)(payload);
            }
        };
        return _this;
    }
    AtlaskitListener.prototype.render = function () {
        return (React.createElement(analytics_next_1.AnalyticsListener, { onEvent: this.listenerHandler, channel: types_1.FabricChannel.atlaskit }, this.props.children));
    };
    return AtlaskitListener;
}(React.Component));
exports.default = AtlaskitListener;
//# sourceMappingURL=AtlaskitListener.js.map