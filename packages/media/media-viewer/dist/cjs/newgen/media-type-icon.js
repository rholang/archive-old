"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var image_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/image"));
var audio_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/audio"));
var video_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/video"));
var document_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/document"));
var unknown_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/unknown"));
var styled_1 = require("./styled");
var icons = {
    image: image_1.default,
    audio: audio_1.default,
    video: video_1.default,
    doc: document_1.default,
    unknown: unknown_1.default,
};
var defaultType = 'unknown';
var MediaTypeIcon = /** @class */ (function (_super) {
    tslib_1.__extends(MediaTypeIcon, _super);
    function MediaTypeIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaTypeIcon.prototype.render = function () {
        var type = this.props.type;
        var typeWithDefault = type || defaultType;
        var Icon = icons[typeWithDefault] || icons[defaultType];
        return (React.createElement(styled_1.IconWrapper, { type: typeWithDefault },
            React.createElement(Icon, { label: "media-type", size: "large" })));
    };
    MediaTypeIcon.defaultProps = {
        type: defaultType,
    };
    return MediaTypeIcon;
}(React.Component));
exports.MediaTypeIcon = MediaTypeIcon;
//# sourceMappingURL=media-type-icon.js.map