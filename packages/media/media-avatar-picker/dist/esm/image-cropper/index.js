import { __extends } from "tslib";
import * as React from 'react';
import { Component } from 'react';
import CrossIcon from '@atlaskit/icon/glyph/cross';
import { injectIntl } from 'react-intl';
import { messages, MediaImage } from '@atlaskit/media-ui';
import { isImageRemote } from './isImageRemote';
import { CircularMask, Container, DragOverlay, RectMask, RemoveImageContainer, RemoveImageButton, ImageContainer, } from './styled';
import { ERROR } from '../avatar-picker-dialog';
import { CONTAINER_INNER_SIZE } from '../avatar-picker-dialog/layout-const';
var ImageCropper = /** @class */ (function (_super) {
    __extends(ImageCropper, _super);
    function ImageCropper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDragStarted = function (e) {
            if (_this.props.onDragStarted) {
                _this.props.onDragStarted(e.screenX, e.screenY);
            }
        };
        _this.onImageError = function () {
            var _a = _this.props, onImageError = _a.onImageError, formatMessage = _a.intl.formatMessage;
            onImageError(formatMessage(ERROR.FORMAT));
        };
        return _this;
    }
    ImageCropper.prototype.componentDidMount = function () {
        var _a = this.props, imageSource = _a.imageSource, onImageError = _a.onImageError, formatMessage = _a.intl.formatMessage;
        try {
            isImageRemote(imageSource);
        }
        catch (e) {
            onImageError(formatMessage(ERROR.URL));
        }
    };
    ImageCropper.prototype.render = function () {
        var _a = this.props, isCircularMask = _a.isCircularMask, containerSize = _a.containerSize, top = _a.top, left = _a.left, imageWidth = _a.imageWidth, imageHeight = _a.imageHeight, imageSource = _a.imageSource, onRemoveImage = _a.onRemoveImage, imageOrientation = _a.imageOrientation, onImageLoaded = _a.onImageLoaded, formatMessage = _a.intl.formatMessage;
        var containerStyle = {
            width: containerSize + "px",
            height: containerSize + "px",
        };
        var width = imageWidth ? imageWidth + "px" : 'auto';
        var height = imageHeight ? imageHeight + "px" : 'auto';
        var imageContainerStyle = {
            width: width,
            height: height,
            display: width === 'auto' ? 'none' : 'block',
            top: top + "px",
            left: left + "px",
        };
        var crossOrigin;
        try {
            crossOrigin = isImageRemote(imageSource) ? 'anonymous' : undefined;
        }
        catch (e) {
            return null;
        }
        return (React.createElement(Container, { style: containerStyle },
            React.createElement(ImageContainer, { style: imageContainerStyle },
                React.createElement(MediaImage, { crossOrigin: crossOrigin, dataURI: imageSource, crop: false, stretch: true, previewOrientation: imageOrientation, onImageLoad: onImageLoaded, onImageError: this.onImageError })),
            isCircularMask ? React.createElement(CircularMask, null) : React.createElement(RectMask, null),
            React.createElement(DragOverlay, { onMouseDown: this.onDragStarted }),
            React.createElement(RemoveImageContainer, null,
                React.createElement(RemoveImageButton, { onClick: onRemoveImage },
                    React.createElement(CrossIcon, { size: "small", label: formatMessage(messages.remove_image) })))));
    };
    ImageCropper.defaultProps = {
        containerSize: CONTAINER_INNER_SIZE,
        isCircleMask: false,
        onDragStarted: function () { },
        onImageSize: function () { },
    };
    return ImageCropper;
}(Component));
export { ImageCropper };
export default injectIntl(ImageCropper);
//# sourceMappingURL=index.js.map