"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var styled_1 = require("./styled");
var isImageRemote_1 = require("../image-cropper/isImageRemote");
// TODO: i18n https://product-fabric.atlassian.net/browse/MS-1261
exports.IMAGE_ERRORS = {
    BAD_URL: 'Invalid image url',
    LOAD_FAIL: 'Image failed to load',
};
var ImagePlacerImage = /** @class */ (function (_super) {
    tslib_1.__extends(ImagePlacerImage, _super);
    function ImagePlacerImage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onLoad = function (e) {
            var image = e.currentTarget;
            var width = image.naturalWidth, height = image.naturalHeight;
            _this.props.onLoad(image, width, height);
        };
        _this.onError = function () {
            _this.props.onError(exports.IMAGE_ERRORS.LOAD_FAIL);
        };
        return _this;
    }
    ImagePlacerImage.prototype.UNSAFE_componentWillMount = function () {
        var _a = this.props, src = _a.src, onError = _a.onError;
        if (src !== undefined) {
            try {
                isImageRemote_1.isImageRemote(src);
            }
            catch (e) {
                onError(exports.IMAGE_ERRORS.BAD_URL);
            }
        }
    };
    ImagePlacerImage.prototype.render = function () {
        var _a = this.props, src = _a.src, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        if (src) {
            try {
                var crossOrigin = isImageRemote_1.isImageRemote(src) ? 'anonymous' : undefined;
                return (React.createElement(styled_1.ImageWrapper, { src: src, x: x, y: y, crossOrigin: crossOrigin, width: width, height: height, onLoad: this.onLoad, onError: this.onError, draggable: false }));
            }
            catch (e) {
                return null;
            }
        }
        return null;
    };
    return ImagePlacerImage;
}(React.Component));
exports.ImagePlacerImage = ImagePlacerImage;
//# sourceMappingURL=image.js.map