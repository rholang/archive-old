"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var cross_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/cross"));
var react_intl_1 = require("react-intl");
var media_ui_1 = require("@atlaskit/media-ui");
var isImageRemote_1 = require("./isImageRemote");
var styled_1 = require("./styled");
var avatar_picker_dialog_1 = require("../avatar-picker-dialog");
var layout_const_1 = require("../avatar-picker-dialog/layout-const");
var ImageCropper = /** @class */ (function (_super) {
    tslib_1.__extends(ImageCropper, _super);
    function ImageCropper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onDragStarted = function (e) {
            if (_this.props.onDragStarted) {
                _this.props.onDragStarted(e.screenX, e.screenY);
            }
        };
        _this.onImageError = function () {
            var _a = _this.props, onImageError = _a.onImageError, formatMessage = _a.intl.formatMessage;
            onImageError(formatMessage(avatar_picker_dialog_1.ERROR.FORMAT));
        };
        return _this;
    }
    ImageCropper.prototype.componentDidMount = function () {
        var _a = this.props, imageSource = _a.imageSource, onImageError = _a.onImageError, formatMessage = _a.intl.formatMessage;
        try {
            isImageRemote_1.isImageRemote(imageSource);
        }
        catch (e) {
            onImageError(formatMessage(avatar_picker_dialog_1.ERROR.URL));
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
            crossOrigin = isImageRemote_1.isImageRemote(imageSource) ? 'anonymous' : undefined;
        }
        catch (e) {
            return null;
        }
        return (React.createElement(styled_1.Container, { style: containerStyle },
            React.createElement(styled_1.ImageContainer, { style: imageContainerStyle },
                React.createElement(media_ui_1.MediaImage, { crossOrigin: crossOrigin, dataURI: imageSource, crop: false, stretch: true, previewOrientation: imageOrientation, onImageLoad: onImageLoaded, onImageError: this.onImageError })),
            isCircularMask ? React.createElement(styled_1.CircularMask, null) : React.createElement(styled_1.RectMask, null),
            React.createElement(styled_1.DragOverlay, { onMouseDown: this.onDragStarted }),
            React.createElement(styled_1.RemoveImageContainer, null,
                React.createElement(styled_1.RemoveImageButton, { onClick: onRemoveImage },
                    React.createElement(cross_1.default, { size: "small", label: formatMessage(media_ui_1.messages.remove_image) })))));
    };
    ImageCropper.defaultProps = {
        containerSize: layout_const_1.CONTAINER_INNER_SIZE,
        isCircleMask: false,
        onDragStarted: function () { },
        onImageSize: function () { },
    };
    return ImageCropper;
}(react_1.Component));
exports.ImageCropper = ImageCropper;
exports.default = react_intl_1.injectIntl(ImageCropper);
//# sourceMappingURL=index.js.map