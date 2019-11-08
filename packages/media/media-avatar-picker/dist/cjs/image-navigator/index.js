"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var image_cropper_1 = tslib_1.__importDefault(require("../image-cropper"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var media_ui_1 = require("@atlaskit/media-ui");
var exenv = tslib_1.__importStar(require("exenv"));
var styled_1 = require("./styled");
var images_1 = require("./images");
var util_1 = require("../util");
var avatar_picker_dialog_1 = require("../avatar-picker-dialog");
var viewport_1 = require("../viewport");
var slider_1 = require("./slider");
var layout_const_1 = require("../avatar-picker-dialog/layout-const");
exports.viewport = new viewport_1.Viewport(layout_const_1.CONTAINER_SIZE, layout_const_1.CONTAINER_SIZE, layout_const_1.CONTAINER_PADDING);
var defaultState = {
    imagePos: new media_ui_1.Vector2(layout_const_1.CONTAINER_PADDING, layout_const_1.CONTAINER_PADDING),
    dragStartPoint: new media_ui_1.Vector2(0, 0),
    scale: 0,
    isDragging: false,
    fileImageSource: undefined,
    isDroppingFile: false,
    imageOrientation: 1,
    viewport: exports.viewport,
};
var ImageNavigator = /** @class */ (function (_super) {
    tslib_1.__extends(ImageNavigator, _super);
    function ImageNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = defaultState;
        _this.onDragStarted = function (x, y) {
            _this.state.viewport.startDrag();
            _this.setState({
                isDragging: true,
                dragStartPoint: new media_ui_1.Vector2(x, y),
            });
        };
        _this.onMouseMove = function (e) {
            if (_this.state.isDragging) {
                var _a = _this.state, dragStartPoint = _a.dragStartPoint, viewport_2 = _a.viewport;
                var currentMousePoint = new media_ui_1.Vector2(e.screenX, e.screenY);
                var dragDelta = currentMousePoint.sub(dragStartPoint);
                viewport_2.dragMove(dragDelta.x, dragDelta.y);
                _this.setState({ viewport: viewport_2 });
            }
        };
        _this.onMouseUp = function () {
            _this.setState({
                isDragging: false,
            });
            _this.exportCrop();
        };
        /**
         * When newScale change we want to zoom in/out relative to the center of the frame.
         * @param newScale New scale in 0-100 format.
         */
        _this.onScaleChange = function (scale) {
            var viewport = _this.state.viewport;
            viewport.setScale(scale);
            _this.setState({ scale: scale, viewport: viewport });
            _this.exportCrop();
        };
        /**
         * This gets called when the cropper loads an image
         * at this point we will be able to get the height/width
         * @param width the width of the image
         * @param height the height of the image
         */
        _this.onImageLoaded = function (image) {
            var _a;
            _this.imageElement = image;
            var width = image.naturalWidth, height = image.naturalHeight;
            if (media_ui_1.isRotated(_this.state.imageOrientation)) {
                _a = tslib_1.__read([height, width], 2), width = _a[0], height = _a[1];
            }
            var defaultZoomedOutScale = 0;
            var _b = _this.state, imageFile = _b.imageFile, viewport = _b.viewport;
            viewport
                .setItemSize(width, height)
                .setScale(defaultZoomedOutScale)
                .setItem(image);
            // imageFile will not exist if imageSource passed through props.
            // therefore we have to create a File, as one needs to be raised by dialog parent component when Save clicked.
            var file = imageFile || (_this.dataURI && media_ui_1.dataURItoFile(_this.dataURI));
            if (file) {
                _this.props.onImageLoaded(file);
            }
            _this.setState({
                scale: defaultZoomedOutScale,
            });
            var onLoad = _this.props.onLoad;
            onLoad &&
                onLoad({
                    export: _this.exportCroppedImage,
                });
            _this.exportCrop();
        };
        _this.exportCroppedImage = function () {
            var imageElement = _this.imageElement;
            if (imageElement) {
                var canvas = viewport_1.renderViewport(_this.state.viewport, imageElement);
                if (canvas) {
                    return canvas.toDataURL();
                }
            }
            return '';
        };
        // Trick to have a nice <input /> appearance
        _this.onUploadButtonClick = function (e) {
            var input = e.currentTarget.querySelector('#image-input');
            if (input) {
                input.click();
            }
        };
        _this.onFileChange = function (e) {
            e.stopPropagation();
            if (e.currentTarget.files && e.currentTarget.files.length) {
                var file = e.currentTarget.files[0];
                var validationError = _this.validateFile(file);
                if (validationError) {
                    _this.props.onImageError(validationError);
                }
                else {
                    _this.readFile(file);
                }
            }
        };
        _this.onDragEnter = function (e) {
            _this.updateDroppingState(e, true);
        };
        _this.onDragOver = function (e) {
            _this.updateDroppingState(e, true);
        };
        _this.onDragLeave = function (e) {
            _this.updateDroppingState(e, false);
        };
        _this.onDrop = function (e) {
            e.stopPropagation();
            e.preventDefault();
            var dt = e.dataTransfer;
            var file = dt.files[0];
            var validationError = _this.validateFile(file);
            _this.setState({ isDroppingFile: false });
            if (validationError) {
                _this.props.onImageError(validationError);
            }
            else {
                _this.readFile(file);
            }
        };
        _this.renderDragZone = function () {
            var formatMessage = _this.props.intl.formatMessage;
            var isDroppingFile = _this.state.isDroppingFile;
            var _a = _this.props, errorMessage = _a.errorMessage, isLoading = _a.isLoading;
            var showBorder = !isLoading && !!!errorMessage;
            var dropZoneImageSrc = errorMessage ? images_1.errorIcon : images_1.uploadPlaceholder;
            var dragZoneText = errorMessage || formatMessage(media_ui_1.messages.drag_and_drop_images_here);
            var dragZoneAlt = errorMessage || formatMessage(media_ui_1.messages.upload_image);
            return (React.createElement(styled_1.DragZone, { showBorder: showBorder, isDroppingFile: isDroppingFile, onDragLeave: _this.onDragLeave, onDragEnter: _this.onDragEnter, onDragOver: _this.onDragOver, onDrop: _this.onDrop }, isLoading ? (React.createElement(spinner_1.default, { size: "medium" })) : (React.createElement("div", null,
                React.createElement(styled_1.DragZoneImage, { src: dropZoneImageSrc, alt: dragZoneAlt }),
                React.createElement(styled_1.DragZoneText, { isFullSize: !!errorMessage },
                    React.createElement(media_ui_1.Ellipsify, { text: dragZoneText, lines: 3 }))))));
        };
        _this.onRemoveImage = function () {
            _this.state.viewport.clear();
            _this.setState(defaultState);
            _this.props.onRemoveImage();
        };
        return _this;
    }
    ImageNavigator.prototype.UNSAFE_componentWillMount = function () {
        if (!exenv.canUseDOM) {
            return;
        }
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    };
    ImageNavigator.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
    ImageNavigator.prototype.exportCrop = function () {
        var viewport = this.state.viewport;
        if (!viewport.isEmpty) {
            var onCropChanged = this.props.onCropChanged;
            var origin_1 = viewport.visibleSourceBounds.origin;
            var visibleSourceRect = viewport.visibleSourceBounds.rect;
            onCropChanged &&
                onCropChanged(Math.round(origin_1.x), Math.round(origin_1.y), Math.round(Math.min(visibleSourceRect.width, visibleSourceRect.height)));
        }
    };
    ImageNavigator.prototype.validateFile = function (imageFile) {
        var formatMessage = this.props.intl.formatMessage;
        if (avatar_picker_dialog_1.ACCEPT.indexOf(imageFile.type) === -1) {
            return formatMessage(avatar_picker_dialog_1.ERROR.FORMAT);
        }
        else if (util_1.fileSizeMb(imageFile) > avatar_picker_dialog_1.MAX_SIZE_MB) {
            return formatMessage(avatar_picker_dialog_1.ERROR.SIZE, {
                MAX_SIZE_MB: avatar_picker_dialog_1.MAX_SIZE_MB,
            });
        }
        return null;
    };
    ImageNavigator.prototype.readFile = function (imageFile) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var onImageUploaded, _a, fileImageSource, imageOrientation;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        onImageUploaded = this.props.onImageUploaded;
                        return [4 /*yield*/, Promise.all([
                                media_ui_1.fileToDataURI(imageFile),
                                media_ui_1.getOrientation(imageFile),
                            ])];
                    case 1:
                        _a = tslib_1.__read.apply(void 0, [_b.sent(), 2]), fileImageSource = _a[0], imageOrientation = _a[1];
                        if (onImageUploaded) {
                            onImageUploaded(imageFile);
                        }
                        this.state.viewport.orientation = imageOrientation;
                        this.setState({
                            fileImageSource: fileImageSource,
                            imageFile: imageFile,
                            imageOrientation: imageOrientation,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageNavigator.prototype.updateDroppingState = function (e, state) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ isDroppingFile: state });
    };
    ImageNavigator.prototype.renderImageUploader = function () {
        var _a = this.props, errorMessage = _a.errorMessage, isLoading = _a.isLoading;
        return (React.createElement(styled_1.ImageUploader, null,
            this.renderDragZone(),
            isLoading ? null : (React.createElement("div", null,
                React.createElement(styled_1.PaddedBreak, null,
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, (errorMessage ? media_ui_1.messages.try_again : media_ui_1.messages.or)))),
                React.createElement(button_1.default, { onClick: this.onUploadButtonClick, isDisabled: isLoading },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.upload_photo)),
                    React.createElement(styled_1.FileInput, { type: "file", id: "image-input", onChange: this.onFileChange, accept: avatar_picker_dialog_1.ACCEPT.join(',') }))))));
    };
    ImageNavigator.prototype.renderImageCropper = function (dataURI) {
        var _a = this.state, scale = _a.scale, isDragging = _a.isDragging, imageOrientation = _a.imageOrientation, viewport = _a.viewport;
        var onImageError = this.props.onImageError;
        var _b = this, onDragStarted = _b.onDragStarted, onImageLoaded = _b.onImageLoaded, onRemoveImage = _b.onRemoveImage;
        var itemBounds = viewport.itemBounds;
        return (React.createElement("div", null,
            React.createElement(styled_1.ImageBg, null),
            React.createElement(image_cropper_1.default, { imageSource: dataURI, imageOrientation: imageOrientation, containerSize: layout_const_1.CONTAINER_SIZE, isCircularMask: false, top: itemBounds.top, left: itemBounds.left, imageWidth: itemBounds.width, imageHeight: itemBounds.height, onDragStarted: onDragStarted, onImageLoaded: onImageLoaded, onRemoveImage: onRemoveImage, onImageError: onImageError }),
            React.createElement(styled_1.SliderContainer, null,
                React.createElement(slider_1.Slider, { value: scale, onChange: this.onScaleChange })),
            isDragging ? React.createElement(styled_1.SelectionBlocker, null) : null));
    };
    Object.defineProperty(ImageNavigator.prototype, "dataURI", {
        // We prioritize passed image rather than the one coming from the uploader
        get: function () {
            var _a = this.props, imageSource = _a.imageSource, errorMessage = _a.errorMessage;
            var fileImageSource = this.state.fileImageSource;
            return errorMessage ? undefined : imageSource || fileImageSource;
        },
        enumerable: true,
        configurable: true
    });
    ImageNavigator.prototype.render = function () {
        var isLoading = this.props.isLoading;
        var dataURI = this.dataURI;
        var content = dataURI && !isLoading
            ? this.renderImageCropper(dataURI)
            : this.renderImageUploader();
        return React.createElement(styled_1.Container, null, content);
    };
    return ImageNavigator;
}(react_1.Component));
exports.ImageNavigator = ImageNavigator;
exports.default = react_intl_1.injectIntl(ImageNavigator);
//# sourceMappingURL=index.js.map