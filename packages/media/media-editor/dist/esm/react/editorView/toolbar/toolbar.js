import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { injectIntl } from 'react-intl';
import { withAnalyticsEvents, } from '@atlaskit/analytics-next';
import Button from '@atlaskit/button';
import Tooltip from '@atlaskit/tooltip';
import { messages } from '@atlaskit/media-ui';
import { fireAnalyticsEvent } from '../../../util';
import LineWidthButton from './buttons/lineWidthButton';
import ColorButton from './buttons/colorButton';
import { ToolButton } from './buttons/toolButton';
import { LineWidthPopup } from './popups/lineWidthPopup';
import { ColorPopup } from './popups/colorPopup';
import { ToolbarContainer, CenterButtons, VerticalLine } from './styles';
import { ShapePopup, shapeTools } from './popups/shapePopup';
import ShapeButton from './buttons/shapeButton';
import { ButtonGroup } from './buttons/buttonGroup';
export var tools = [
    'arrow',
    'rectangle',
    'oval',
    'line',
    'text',
    'blur',
    'brush',
];
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { popup: 'none' };
        _this.onColorButtonClick = function () { return _this.showOrHidePopup('color'); };
        _this.onLineWidthButtonClick = function () { return _this.showOrHidePopup('lineWidth'); };
        _this.onShapeButtonClick = function () { return _this.showOrHidePopup('shape'); };
        _this.onToolClick = function (tool) {
            _this.setState({ popup: 'none' });
            _this.props.onToolChanged(tool);
            fireAnalyticsEvent({
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
            fireAnalyticsEvent({
                eventType: 'ui',
                action: 'selected',
                actionSubject: 'annotation',
                actionSubjectId: 'colour',
                attributes: { color: color },
            }, createAnalyticsEvent);
        };
        var onLineWidthClick = function (lineWidth) {
            onLineWidthChanged(lineWidth);
            fireAnalyticsEvent({
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
        var isShapeTool = shapeTools.indexOf(tool) > -1;
        return (React.createElement(ToolbarContainer, null,
            React.createElement(CenterButtons, null,
                React.createElement(ButtonGroup, null,
                    React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_arrow) }, this.renderSimpleTool('arrow')),
                    React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_text) }, this.renderSimpleTool('text')),
                    React.createElement(ShapePopup, { isOpen: showShapePopup, shape: tool, onPickShape: this.onToolClick },
                        React.createElement("div", null,
                            React.createElement(ShapeButton, { onClick: this.onShapeButtonClick, isActive: isShapeTool, activeShape: tool }))),
                    React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_brush) }, this.renderSimpleTool('brush')),
                    React.createElement(Tooltip, { content: formatMessage(messages.annotate_tool_blur) }, this.renderSimpleTool('blur')),
                    React.createElement(VerticalLine, null),
                    React.createElement(LineWidthPopup, { onClose: onCloseInlinePopup, onLineWidthClick: onLineWidthClick, lineWidth: lineWidth, isOpen: showLineWidthPopup },
                        React.createElement("div", null,
                            React.createElement(LineWidthButton, { lineWidth: lineWidth, isActive: showLineWidthPopup, onClick: this.onLineWidthButtonClick }))),
                    React.createElement(ColorPopup, { onClose: onCloseInlinePopup, onPickColor: onPickColor, color: color, isOpen: showColorPopup },
                        React.createElement("div", null,
                            React.createElement(ColorButton, { color: color, isActive: showColorPopup, onClick: this.onColorButtonClick }))),
                    React.createElement(VerticalLine, null),
                    React.createElement(Button, { appearance: "primary", onClick: onSave, autoFocus: true }, formatMessage(messages.save)),
                    React.createElement(Button, { appearance: "default", onClick: onCancel }, formatMessage(messages.cancel))))));
    };
    Toolbar.prototype.renderSimpleTool = function (tool) {
        var activeTool = this.props.tool;
        return (React.createElement(ToolButton, { key: tool, tool: tool, activeTool: activeTool, onToolClick: this.onToolClick }));
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
}(Component));
export { Toolbar };
export default withAnalyticsEvents()(injectIntl(Toolbar));
//# sourceMappingURL=toolbar.js.map