"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var types_1 = require("./types");
var FabricElementsListener_1 = tslib_1.__importDefault(require("./fabric/FabricElementsListener"));
var AtlaskitListener_1 = tslib_1.__importDefault(require("./atlaskit/AtlaskitListener"));
var logger_1 = tslib_1.__importDefault(require("./helpers/logger"));
var NavigationListener_1 = tslib_1.__importDefault(require("./navigation/NavigationListener"));
var FabricEditorListener_1 = tslib_1.__importDefault(require("./fabric/FabricEditorListener"));
var MediaAnalyticsListener_1 = tslib_1.__importDefault(require("./media/MediaAnalyticsListener"));
var listenerMap = (_a = {},
    _a[types_1.FabricChannel.elements] = FabricElementsListener_1.default,
    _a[types_1.FabricChannel.editor] = FabricEditorListener_1.default,
    _a[types_1.FabricChannel.atlaskit] = AtlaskitListener_1.default,
    _a[types_1.FabricChannel.navigation] = NavigationListener_1.default,
    _a[types_1.FabricChannel.media] = MediaAnalyticsListener_1.default,
    _a);
var FabricAnalyticsListeners = /** @class */ (function (_super) {
    tslib_1.__extends(FabricAnalyticsListeners, _super);
    function FabricAnalyticsListeners(props) {
        var _this = _super.call(this, props) || this;
        _this.logger = new logger_1.default({ logLevel: props.logLevel });
        return _this;
    }
    FabricAnalyticsListeners.prototype.render = function () {
        var _this = this;
        var _a = this.props, client = _a.client, children = _a.children, logLevel = _a.logLevel, excludedChannels = _a.excludedChannels;
        if (typeof logLevel === 'number') {
            this.logger.setLogLevel(logLevel);
        }
        var listeners = Object.keys(listenerMap)
            .filter(function (channel) { return !excludedChannels || excludedChannels.indexOf(channel) < 0; })
            .map(function (channel) { return listenerMap[channel]; })
            .reduce(function (prev, Listener) { return (React.createElement(Listener, { client: client, logger: _this.logger }, prev)); }, children);
        return listeners;
    };
    return FabricAnalyticsListeners;
}(React.Component));
exports.default = FabricAnalyticsListeners;
//# sourceMappingURL=FabricAnalyticsListeners.js.map