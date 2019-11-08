"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var types_1 = require("../types");
var handle_event_1 = require("./handle-event");
exports.EDITOR_TAG = 'fabricEditor';
var FabricEditorListener = /** @class */ (function (_super) {
    tslib_1.__extends(FabricEditorListener, _super);
    function FabricEditorListener() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleEventWrapper = function (event) {
            handle_event_1.handleEvent(event, exports.EDITOR_TAG, _this.props.logger, _this.props.client);
        };
        return _this;
    }
    FabricEditorListener.prototype.render = function () {
        return (React.createElement(analytics_next_1.AnalyticsListener, { onEvent: this.handleEventWrapper, channel: types_1.FabricChannel.editor }, this.props.children));
    };
    return FabricEditorListener;
}(React.Component));
exports.default = FabricEditorListener;
//# sourceMappingURL=FabricEditorListener.js.map