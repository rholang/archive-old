"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var styled_components_1 = require("styled-components");
var mediaEditor_1 = require("../mediaEditor");
var toolbar_1 = tslib_1.__importStar(require("./toolbar/toolbar"));
var styles_1 = require("./styles");
var colors_1 = require("@atlaskit/theme/colors");
var button_1 = require("@atlaskit/button");
var util_1 = require("../../util");
var colorPopup_1 = require("./toolbar/popups/colorPopup");
var DEFAULT_WIDTH = 845;
var DEFAULT_HEIGHT = 530;
exports.TOOLBAR_HEIGHT = 64;
var TRANSPARENT_COLOR = { red: 0, green: 0, blue: 0, alpha: 0 };
// Properties' names in the local storage
var propertyColor = 'media-editor-color';
var propertyTool = 'media-editor-tool';
var propertyLineWidth = 'media-editor-line-width';
var EditorView = /** @class */ (function (_super) {
    tslib_1.__extends(EditorView, _super);
    function EditorView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            dimensions: {
                width: DEFAULT_WIDTH,
                height: DEFAULT_HEIGHT - exports.TOOLBAR_HEIGHT,
            },
            color: colors_1.R300,
            lineWidth: 8,
            tool: 'arrow',
        };
        _this.onLoad = function (_, loadParameters) {
            _this.loadParameters = loadParameters;
        };
        _this.onError = function () {
            var _a = _this.props, onError = _a.onError, formatMessage = _a.intl.formatMessage;
            onError(formatMessage(media_ui_1.messages.could_not_load_editor));
        };
        _this.onSave = function () {
            if (!_this.loadParameters) {
                return;
            }
            var imageGetter = _this.loadParameters.imageGetter;
            var image = imageGetter();
            var _a = _this.props, onSave = _a.onSave, onError = _a.onError, formatMessage = _a.intl.formatMessage;
            _this.saveProperties();
            if (image.isExported && image.content && image.dimensions) {
                onSave(image.content, image.dimensions);
            }
            else {
                onError(formatMessage(media_ui_1.messages.could_not_save_image));
            }
        };
        _this.handleEsc = function (e) {
            if (e.key === 'Escape') {
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
                _this.props.onCancel('esc');
            }
        };
        return _this;
    }
    EditorView.prototype.componentDidMount = function () {
        if (!this.rootDiv) {
            return;
        }
        var rect = this.rootDiv.getBoundingClientRect();
        var dimensions = {
            width: rect.width || DEFAULT_WIDTH,
            height: (rect.height || DEFAULT_HEIGHT) - exports.TOOLBAR_HEIGHT,
        };
        this.setState({ dimensions: dimensions });
        this.loadProperties();
    };
    EditorView.prototype.componentWillUnmount = function () {
        this.saveProperties();
    };
    EditorView.prototype.render = function () {
        var _this = this;
        var refHandler = function (div) {
            _this.rootDiv = div;
        };
        var theme = { __ATLASKIT_THEME__: { mode: 'dark' } };
        return (React.createElement(styled_components_1.ThemeProvider, { theme: theme },
            React.createElement(button_1.Theme.Provider, { value: function (currentTheme, themeProps) {
                    return currentTheme(tslib_1.__assign(tslib_1.__assign({}, themeProps), { mode: 'dark' }));
                } },
                React.createElement(styles_1.EditorContainer, { innerRef: refHandler, onKeyDown: this.handleEsc },
                    this.renderEditor(),
                    this.renderToolbar()))));
    };
    EditorView.prototype.renderEditor = function () {
        var _this = this;
        var onError = function () { return _this.onError(); };
        var onShapeParametersChanged = function (_a) {
            var color = _a.color, lineWidth = _a.lineWidth;
            _this.setState({ color: color, lineWidth: lineWidth });
        };
        var _a = this.props, imageUrl = _a.imageUrl, onAnyEdit = _a.onAnyEdit;
        var _b = this.state, dimensions = _b.dimensions, color = _b.color, lineWidth = _b.lineWidth, tool = _b.tool;
        return (React.createElement(mediaEditor_1.MediaEditor, { imageUrl: imageUrl, dimensions: dimensions, backgroundColor: TRANSPARENT_COLOR, shapeParameters: { color: color, lineWidth: lineWidth, addShadow: true }, tool: tool, onAnyEdit: onAnyEdit, onLoad: this.onLoad, onError: onError, onShapeParametersChanged: onShapeParametersChanged }));
    };
    EditorView.prototype.renderToolbar = function () {
        var _this = this;
        var _a = this.state, tool = _a.tool, color = _a.color, lineWidth = _a.lineWidth;
        var onToolChanged = function (tool) { return _this.setState({ tool: tool }); };
        var onColorChanged = function (color) { return _this.setState({ color: color }); };
        var onLineWidthChanged = function (lineWidth) {
            return _this.setState({ lineWidth: lineWidth });
        };
        var onCancel = function () { return _this.props.onCancel('button'); };
        return (React.createElement(toolbar_1.default, { tool: tool, color: color, lineWidth: lineWidth, onToolChanged: onToolChanged, onColorChanged: onColorChanged, onLineWidthChanged: onLineWidthChanged, onSave: this.onSave, onCancel: onCancel }));
    };
    // Using local storage to save and load shape properties
    EditorView.prototype.saveProperties = function () {
        var _a = this.state, tool = _a.tool, color = _a.color, lineWidth = _a.lineWidth;
        try {
            localStorage.setItem(propertyColor, JSON.stringify(color));
            localStorage.setItem(propertyTool, tool);
            localStorage.setItem(propertyLineWidth, lineWidth.toString());
        }
        catch (error) {
            // eslint-disable-next-line no-console
            console.warn("Failed to save properties for MediaEditor: " + color + " " + tool + " " + lineWidth);
        }
    };
    EditorView.prototype.loadProperties = function () {
        var color = localStorage.getItem(propertyColor);
        if (color) {
            try {
                var parsedColor = JSON.parse(color);
                if (parsedColor.red !== undefined) {
                    // Backward compatible with already stored colors in users' local storage
                    parsedColor = util_1.rgbToHex(parsedColor);
                }
                else if (typeof parsedColor !== 'string' ||
                    parsedColor.indexOf('#') !== 0) {
                    parsedColor = colorPopup_1.DEFAULT_COLOR;
                }
                this.setState({
                    color: parsedColor,
                });
            }
            catch (error) {
                // eslint-disable-next-line no-console
                console.warn("Failed to parse color property for MediaEditor: " + color);
            }
        }
        var tool = localStorage.getItem(propertyTool);
        if (tool && isTool(tool)) {
            this.setState({
                tool: tool,
            });
        }
        var lineWidth = localStorage.getItem(propertyLineWidth);
        if (lineWidth) {
            this.setState({
                lineWidth: parseInt(lineWidth, 10),
            });
        }
    };
    return EditorView;
}(react_1.Component));
exports.EditorView = EditorView;
function isTool(value) {
    return toolbar_1.tools.some(function (tool) { return tool === value; });
}
exports.default = react_intl_1.injectIntl(EditorView);
//# sourceMappingURL=editorView.js.map