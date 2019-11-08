"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var styled_1 = require("./styled");
var engine_1 = require("../engine/engine");
var util_1 = require("../util");
var drawingArea_1 = require("../engine/components/drawingArea");
var imageProvider_1 = require("../engine/components/imageProvider");
var mouseInput_1 = require("../engine/components/mouseInput");
var toolbar_1 = require("../engine/components/toolbar");
var keyboardInput_1 = require("../engine/components/keyboardInput");
var imageReceiver_1 = require("../engine/components/imageReceiver");
var shapeDeleter_1 = require("../engine/components/shapeDeleter");
var undoerRedoer_1 = require("../engine/components/undoerRedoer");
var defaultTextDirection = 'ltr';
var MediaEditor = /** @class */ (function (_super) {
    tslib_1.__extends(MediaEditor, _super);
    function MediaEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOutputAreaInnerRef = function (outputArea) {
            _this.outputArea = outputArea;
        };
        _this.handleSupplementaryCanvasInnerRef = function (canvas) {
            _this.supplementaryCanvas = canvas;
        };
        _this.handleHiddenTextAreaInnerRef = function (textArea) {
            _this.hiddenTextArea = textArea;
        };
        _this.handleHiddenTextHelperDivInnerRef = function (div) {
            _this.hiddenTextHelperDiv = div;
        };
        _this.handleDrawingCanvasInnerRef = function (canvas) {
            _this.canvas = canvas;
        };
        _this.renderSpinner = function () { return (React.createElement(styled_1.SpinnerWrapper, null,
            React.createElement(spinner_1.default, { size: "large", invertColor: true }))); };
        _this.onCanvasClick = function () {
            var _a = _this.props, onAnyEdit = _a.onAnyEdit, shapeParameters = _a.shapeParameters, tool = _a.tool;
            if (onAnyEdit) {
                onAnyEdit(tool, shapeParameters);
            }
        };
        _this.isUnmounted = false;
        _this.state = {
            isImageLoaded: false,
        };
        return _this;
    }
    MediaEditor.prototype.componentDidMount = function () {
        this.loadEngine();
    };
    MediaEditor.prototype.componentDidUpdate = function (prevProps) {
        if (!this.engine) {
            return;
        }
        var currProps = this.props;
        if (currProps.imageUrl !== prevProps.imageUrl) {
            this.unloadEngine();
            this.loadEngine();
        }
        if (this.drawingArea &&
            (!util_1.dimensionsSame(currProps.dimensions, prevProps.dimensions) ||
                currProps.screenScaleFactor !== prevProps.screenScaleFactor)) {
            this.drawingArea.setSize(MediaEditor.toOutputSize(currProps));
        }
        if (!util_1.colorWithAlphaSame(currProps.backgroundColor, prevProps.backgroundColor)) {
            // TODO inform the core about the new background color
            // https://jira.atlassian.com/browse/FIL-3996
        }
        var _a = currProps.shapeParameters, currColor = _a.color, currLineWidth = _a.lineWidth, currAddShadow = _a.addShadow;
        var _b = prevProps.shapeParameters, prevColor = _b.color, prevLineWidth = _b.lineWidth, prevAddShadow = _b.addShadow;
        if (this.toolbar) {
            if (currColor !== prevColor) {
                this.toolbar.setColor(currColor);
            }
            if (currLineWidth !== prevLineWidth) {
                this.toolbar.setLineWidth(currLineWidth);
            }
            if (currAddShadow !== prevAddShadow) {
                this.toolbar.setAddShadow(currAddShadow);
            }
            if (currProps.tool !== prevProps.tool) {
                this.toolbar.setTool(currProps.tool);
            }
        }
    };
    MediaEditor.prototype.componentWillUnmount = function () {
        this.isUnmounted = true;
        this.unloadEngine();
    };
    MediaEditor.prototype.render = function () {
        var isImageLoaded = this.state.isImageLoaded;
        var dimensions = this.props.dimensions;
        return (React.createElement(styled_1.MediaEditorContainer, { style: dimensions },
            !isImageLoaded ? this.renderSpinner() : null,
            React.createElement(styled_1.OutputArea, { innerRef: this.handleOutputAreaInnerRef, style: dimensions },
                React.createElement(styled_1.SupplementaryCanvas, { innerRef: this.handleSupplementaryCanvasInnerRef }),
                React.createElement(styled_1.HiddenTextArea, { autoComplete: 'off', innerRef: this.handleHiddenTextAreaInnerRef }),
                React.createElement(styled_1.HiddenTextHelperDiv, { innerRef: this.handleHiddenTextHelperDivInnerRef }),
                React.createElement(styled_1.DrawingCanvas, { onClick: this.onCanvasClick, innerRef: this.handleDrawingCanvasInnerRef, style: dimensions }))));
    };
    MediaEditor.prototype.loadEngine = function () {
        var _this = this;
        var imageUrl = this.props.imageUrl;
        imageProvider_1.DefaultImageProvider.create(function () { return imageProvider_1.urlImageLoader(imageUrl); }, this.supplementaryCanvas)
            .then(function (imageProvider) {
            // We must not create the engine if the component was unmounted or if the image was changed
            if (_this.isUnmounted || imageUrl !== _this.props.imageUrl) {
                return;
            }
            _this.setState({ isImageLoaded: true });
            // Creating components for the engine
            var outputSize = MediaEditor.toOutputSize(_this.props);
            var backgroundColor = _this.props.backgroundColor;
            _this.drawingArea = new drawingArea_1.DefaultDrawingArea(_this.canvas, outputSize, backgroundColor);
            var mouseInput = new mouseInput_1.DefaultMouseInput(_this.outputArea);
            _this.toolbar = new toolbar_1.DefaultToolbar(function (params) {
                return _this.props.onShapeParametersChanged(params);
            });
            var keyboardInput = new keyboardInput_1.DefaultKeyboardInput(_this.hiddenTextArea, _this.supplementaryCanvas, _this.hiddenTextHelperDiv);
            var imageReceiver = new imageReceiver_1.DefaultImageReceiver(_this.supplementaryCanvas);
            var shapeDeleter = new shapeDeleter_1.DefaultShapeDeleter(_this.hiddenTextArea);
            var undoerRedoer = new undoerRedoer_1.DefaultUndoerRedoer();
            // Creating the engine
            var _a = _this.props, shapeParameters = _a.shapeParameters, initialTool = _a.tool;
            var textDirection = window.getComputedStyle(_this.outputArea)
                .direction || defaultTextDirection;
            var config = {
                // eslint-disable-next-line no-console
                onCoreError: function (message) {
                    // eslint-disable-next-line
                    console.error(message);
                },
                shapeParameters: shapeParameters,
                initialTool: initialTool,
                textDirection: textDirection,
                drawingArea: _this.drawingArea,
                imageProvider: imageProvider,
                mouseInput: mouseInput,
                toolbar: _this.toolbar,
                keyboardInput: keyboardInput,
                imageReceiver: imageReceiver,
                shapeDeleter: shapeDeleter,
                undoerRedoer: undoerRedoer,
            };
            _this.engine = new engine_1.Engine(config);
            var loadParameters = {
                imageGetter: function (format) { return _this.engine.getBase64Image(format); },
            };
            _this.props.onLoad(imageUrl, loadParameters);
        })
            .catch(function (error) { return _this.props.onError(imageUrl, error); });
    };
    MediaEditor.prototype.unloadEngine = function () {
        if (this.engine) {
            this.engine.unload();
            delete this.engine;
            this.setState({ isImageLoaded: false });
        }
    };
    MediaEditor.toOutputSize = function (props) {
        var dimensions = props.dimensions;
        var screenScaleFactor = props.screenScaleFactor || MediaEditor.screenScaleFactor;
        return {
            width: dimensions.width * screenScaleFactor,
            height: dimensions.height * screenScaleFactor,
            screenScaleFactor: screenScaleFactor,
        };
    };
    Object.defineProperty(MediaEditor, "screenScaleFactor", {
        get: function () {
            return window.devicePixelRatio || 1;
        },
        enumerable: true,
        configurable: true
    });
    return MediaEditor;
}(React.Component));
exports.MediaEditor = MediaEditor;
exports.default = MediaEditor;
//# sourceMappingURL=mediaEditor.js.map