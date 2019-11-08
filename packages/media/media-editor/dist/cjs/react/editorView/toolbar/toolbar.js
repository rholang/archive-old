"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var analytics_next_1 = require("@atlaskit/analytics-next");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var media_ui_1 = require("@atlaskit/media-ui");
var util_1 = require("../../../util");
var lineWidthButton_1 = tslib_1.__importDefault(require("./buttons/lineWidthButton"));
var colorButton_1 = tslib_1.__importDefault(require("./buttons/colorButton"));
var toolButton_1 = require("./buttons/toolButton");
var lineWidthPopup_1 = require("./popups/lineWidthPopup");
var colorPopup_1 = require("./popups/colorPopup");
var styles_1 = require("./styles");
var shapePopup_1 = require("./popups/shapePopup");
var shapeButton_1 = tslib_1.__importDefault(require("./buttons/shapeButton"));
var buttonGroup_1 = require("./buttons/buttonGroup");
exports.tools = [
    'arrow',
    'rectangle',
    'oval',
    'line',
    'text',
    'blur',
    'brush',
];
var Toolbar = /** @class */ (function (_super) {
    tslib_1.__extends(Toolbar, _super);
    function Toolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { popup: 'none' };
        _this.onColorButtonClick = function () { return _this.showOrHidePopup('color'); };
        _this.onLineWidthButtonClick = function () { return _this.showOrHidePopup('lineWidth'); };
        _this.onShapeButtonClick = function () { return _this.showOrHidePopup('shape'); };
        _this.onToolClick = function (tool) {
            _this.setState({ popup: 'none' });
            _this.props.onToolChanged(tool);
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'selected',
                actionSubject: 'annotation',
                actionSubjectId: tool,
            }, _this.props.createAnalyticsEvent);
        };
        return _this;
    }
    Toolbar.prototype.render = function () {
        var _this = this;
        var _a = this.props, color = _a.color, tool = _a.tool, lineWidth = _a.lineWidth, onColorChanged = _a.onColorChanged, onLineWidthChanged = _a.onLineWidthChanged, onSave = _a.onSave, onCancel = _a.onCancel, formatMessage = _a.intl.formatMessage, createAnalyticsEvent = _a.createAnalyticsEvent;
        var popup = this.state.popup;
        var showColorPopup = popup === 'color';
        var showLineWidthPopup = popup === 'lineWidth';
        var showShapePopup = popup === 'shape';
        var onPickColor = function (color) {
            onColorChanged(color);
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'selected',
                actionSubject: 'annotation',
                actionSubjectId: 'colour',
                attributes: { color: color },
            }, createAnalyticsEvent);
        };
        var onLineWidthClick = function (lineWidth) {
            onLineWidthChanged(lineWidth);
            util_1.fireAnalyticsEvent({
                eventType: 'ui',
                action: 'selected',
                actionSubject: 'annotation',
                actionSubjectId: 'size',
                attributes: { lineWidth: lineWidth },
            }, createAnalyticsEvent);
        };
        var onCloseInlinePopup = function () {
            _this.setState({ popup: 'none' });
        };
        var isShapeTool = shapePopup_1.shapeTools.indexOf(tool) > -1;
        return (React.createElement(styles_1.ToolbarContainer, null,
            React.createElement(styles_1.CenterButtons, null,
                React.createElement(buttonGroup_1.ButtonGroup, null,
                    React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_arrow) }, this.renderSimpleTool('arrow')),
                    React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_text) }, this.renderSimpleTool('text')),
                    React.createElement(shapePopup_1.ShapePopup, { isOpen: showShapePopup, shape: tool, onPickShape: this.onToolClick },
                        React.createElement("div", null,
                            React.createElement(shapeButton_1.default, { onClick: this.onShapeButtonClick, isActive: isShapeTool, activeShape: tool }))),
                    React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_brush) }, this.renderSimpleTool('brush')),
                    React.createElement(tooltip_1.default, { content: formatMessage(media_ui_1.messages.annotate_tool_blur) }, this.renderSimpleTool('blur')),
                    React.createElement(styles_1.VerticalLine, null),
                    React.createElement(lineWidthPopup_1.LineWidthPopup, { onClose: onCloseInlinePopup, onLineWidthClick: onLineWidthClick, lineWidth: lineWidth, isOpen: showLineWidthPopup },
                        React.createElement("div", null,
                            React.createElement(lineWidthButton_1.default, { lineWidth: lineWidth, isActive: showLineWidthPopup, onClick: this.onLineWidthButtonClick }))),
                    React.createElement(colorPopup_1.ColorPopup, { onClose: onCloseInlinePopup, onPickColor: onPickColor, color: color, isOpen: showColorPopup },
                        React.createElement("div", null,
                            React.createElement(colorButton_1.default, { color: color, isActive: showColorPopup, onClick: this.onColorButtonClick }))),
                    React.createElement(styles_1.VerticalLine, null),
                    React.createElement(button_1.default, { appearance: "primary", onClick: onSave, autoFocus: true }, formatMessage(media_ui_1.messages.save)),
                    React.createElement(button_1.default, { appearance: "default", onClick: onCancel }, formatMessage(media_ui_1.messages.cancel))))));
    };
    Toolbar.prototype.renderSimpleTool = function (tool) {
        var activeTool = this.props.tool;
        return (React.createElement(toolButton_1.ToolButton, { key: tool, tool: tool, activeTool: activeTool, onToolClick: this.onToolClick }));
    };
    Toolbar.prototype.showOrHidePopup = function (target) {
        if (this.state.popup === target) {
            this.setState({ popup: 'none' });
        }
        else {
            this.setState({ popup: target });
        }
    };
    return Toolbar;
}(react_1.Component));
exports.Toolbar = Toolbar;
exports.default = analytics_next_1.withAnalyticsEvents()(react_intl_1.injectIntl(Toolbar));
//# sourceMappingURL=toolbar.js.map