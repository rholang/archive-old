"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var React = tslib_1.__importStar(require("react"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var AnalyticsViewer_1 = require("./AnalyticsViewer");
var Container = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"])));
var ChildrenWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var StyledAnalyticsViewer = styled_components_1.default(AnalyticsViewer_1.AnalyticsViewer)(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  flex-grow: 0;\n  flex-shrink: 1;\n  height: 100px;\n  overflow-y: scroll;\n"], ["\n  flex-grow: 0;\n  flex-shrink: 1;\n  height: 100px;\n  overflow-y: scroll;\n"])));
var AnalyticsViewerContainer = /** @class */ (function (_super) {
    tslib_1.__extends(AnalyticsViewerContainer, _super);
    function AnalyticsViewerContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOnEvent = function (event, channel) {
            _this.setState(function (state) { return ({
                events: tslib_1.__spread([{ event: event, channel: channel }], state.events),
            }); });
        };
        _this.state = {
            events: [],
        };
        return _this;
    }
    AnalyticsViewerContainer.prototype.render = function () {
        return (React.createElement(analytics_next_1.AnalyticsListener, { onEvent: this.handleOnEvent, channel: this.props.channel },
            React.createElement(Container, null,
                React.createElement(ChildrenWrapper, null, this.props.children),
                React.createElement(StyledAnalyticsViewer, { events: this.state.events }))));
    };
    AnalyticsViewerContainer.defaultProps = {
        channel: '*',
    };
    return AnalyticsViewerContainer;
}(React.Component));
exports.AnalyticsViewerContainer = AnalyticsViewerContainer;
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=AnalyticsViewerContainer.js.map