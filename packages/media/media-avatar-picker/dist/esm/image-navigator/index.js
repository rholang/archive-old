import { __assign, __awaiter, __extends, __generator, __read } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import Button from '@atlaskit/button';
import ImageCropper from '../image-cropper';
import Spinner from '@atlaskit/spinner';
import { fileToDataURI, dataURItoFile, getOrientation, isRotated, Ellipsify, Vector2, messages, } from '@atlaskit/media-ui';
import * as exenv from 'exenv';
import { Container, SliderContainer, FileInput, ImageUploader, DragZone, DragZoneImage, DragZoneText, SelectionBlocker, PaddedBreak, ImageBg, } from './styled';
import { uploadPlaceholder, errorIcon } from './images';
import { fileSizeMb } from '../util';
import { ERROR, MAX_SIZE_MB, ACCEPT } from '../avatar-picker-dialog';
import { Viewport, renderViewport } from '../viewport';
import { Slider } from './slider';
import { CONTAINER_SIZE, CONTAINER_PADDING, } from '../avatar-picker-dialog/layout-const';
export var viewport = new Viewport(CONTAINER_SIZE, CONTAINER_SIZE, CONTAINER_PADDING);
var defaultState = {
    imagePos: new Vector2(CONTAINER_PADDING, CONTAINER_PADDING),
    dragStartPoint: new Vector2(0, 0),
    scale: 0,
    isDragging: false,
    fileImageSource: undefined,
    isDroppingFile: false,
    imageOrientation: 1,
    viewport: viewport,
};
var ImageNavigator = /** @class */ (function (_super) {
    __extends(ImageNavigator, _super);
    function ImageNavigator() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = defaultState;
        _this.onDragStarted = function (x, y) {
            _this.state.viewport.startDrag();
            _this.setState({
                isDragging: true,
                dragStartPoint: new Vector2(x, y),
            });
        };
        _this.onMouseMove = function (e) {
            if (_this.state.isDragging) {
                var _a = _this.state, dragStartPoint = _a.dragStartPoint, viewport_1 = _a.viewport;
                var currentMousePoint = new Vector2(e.screenX, e.screenY);
                var dragDelta = currentMousePoint.sub(dragStartPoint);
                viewport_1.dragMove(dragDelta.x, dragDelta.y);
                _this.setState({ viewport: viewport_1 });
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
            if (isRotated(_this.state.imageOrientation)) {
                _a = __read([height, width], 2), width = _a[0], height = _a[1];
            }
            var defaultZoomedOutScale = 0;
            var _b = _this.state, imageFile = _b.imageFile, viewport = _b.viewport;
            viewport
                .setItemSize(width, height)
                .setScale(defaultZoomedOutScale)
                .setItem(image);
            // imageFile will not exist if imageSource passed through props.
            // therefore we have to create a File, as one needs to be raised by dialog parent component when Save clicked.
            var file = imageFile || (_this.dataURI && dataURItoFile(_this.dataURI));
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
                var canvas = renderViewport(_this.state.viewport, imageElement);
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
            var dropZoneImageSrc = errorMessage ? errorIcon : uploadPlaceholder;
            var dragZoneText = errorMessage || formatMessage(messages.drag_and_drop_images_here);
            var dragZoneAlt = errorMessage || formatMessage(messages.upload_image);
            return (React.createElement(DragZone, { showBorder: showBorder, isDroppingFile: isDroppingFile, onDragLeave: _this.onDragLeave, onDragEnter: _this.onDragEnter, onDragOver: _this.onDragOver, onDrop: _this.onDrop }, isLoading ? (React.createElement(Spinner, { size: "medium" })) : (React.createElement("div", null,
                React.createElement(DragZoneImage, { src: dropZoneImageSrc, alt: dragZoneAlt }),
                React.createElement(DragZoneText, { isFullSize: !!errorMessage },
                    React.createElement(Ellipsify, { text: dragZoneText, lines: 3 }))))));
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
        if (ACCEPT.indexOf(imageFile.type) === -1) {
            return formatMessage(ERROR.FORMAT);
        }
        else if (fileSizeMb(imageFile) > MAX_SIZE_MB) {
            return formatMessage(ERROR.SIZE, {
                MAX_SIZE_MB: MAX_SIZE_MB,
            });
        }
        return null;
    };
    ImageNavigator.prototype.readFile = function (imageFile) {
        return __awaiter(this, void 0, void 0, function () {
            var onImageUploaded, _a, fileImageSource, imageOrientation;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        onImageUploaded = this.props.onImageUploaded;
                        return [4 /*yield*/, Promise.all([
                                fileToDataURI(imageFile),
                                getOrientation(imageFile),
                            ])];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), fileImageSource = _a[0], imageOrientation = _a[1];
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
        return (React.createElement(ImageUploader, null,
            this.renderDragZone(),
            isLoading ? null : (React.createElement("div", null,
                React.createElement(PaddedBreak, null,
                    React.createElement(FormattedMessage, __assign({}, (errorMessage ? messages.try_again : messages.or)))),
                React.createElement(Button, { onClick: this.onUploadButtonClick, isDisabled: isLoading },
                    React.createElement(FormattedMessage, __assign({}, messages.upload_photo)),
                    React.createElement(FileInput, { type: "file", id: "image-input", onChange: this.onFileChange, accept: ACCEPT.join(',') }))))));
    };
    ImageNavigator.prototype.renderImageCropper = function (dataURI) {
        var _a = this.state, scale = _a.scale, isDragging = _a.isDragging, imageOrientation = _a.imageOrientation, viewport = _a.viewport;
        var onImageError = this.props.onImageError;
        var _b = this, onDragStarted = _b.onDragStarted, onImageLoaded = _b.onImageLoaded, onRemoveImage = _b.onRemoveImage;
        var itemBounds = viewport.itemBounds;
        return (React.createElement("div", null,
            React.createElement(ImageBg, null),
            React.createElement(ImageCropper, { imageSource: dataURI, imageOrientation: imageOrientation, containerSize: CONTAINER_SIZE, isCircularMask: false, top: itemBounds.top, left: itemBounds.left, imageWidth: itemBounds.width, imageHeight: itemBounds.height, onDragStarted: onDragStarted, onImageLoaded: onImageLoaded, onRemoveImage: onRemoveImage, onImageError: onImageError }),
            React.createElement(SliderContainer, null,
                React.createElement(Slider, { value: scale, onChange: this.onScaleChange })),
            isDragging ? React.createElement(SelectionBlocker, null) : null));
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
        return React.createElement(Container, null, content);
    };
    return ImageNavigator;
}(Component));
export { ImageNavigator };
export default injectIntl(ImageNavigator);
//# sourceMappingURL=index.js.map