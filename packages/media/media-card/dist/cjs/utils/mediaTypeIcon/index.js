"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var image_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/image"));
var audio_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/audio"));
var video_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/media-services/video"));
var document_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/document"));
var page_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/page"));
var styled_1 = require("./styled");
var icons = {
    image: image_1.default,
    audio: audio_1.default,
    video: video_1.default,
    doc: document_1.default,
    unknown: page_1.default,
};
var MediaTypeIcon = /** @class */ (function (_super) {
    tslib_1.__extends(MediaTypeIcon, _super);
    function MediaTypeIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MediaTypeIcon.prototype.render = function () {
        var _a = this.props, type = _a.type, _b = _a.size, size = _b === void 0 ? 'small' : _b, className = _a.className;
        var Icon = (type && icons[type]) || icons.unknown;
        return (React.createElement(styled_1.IconWrapper, { type: type || 'unknown' },
            React.createElement(Icon, { label: "media-type", size: size, className: className })));
    };
    return MediaTypeIcon;
}(React.Component));
exports.MediaTypeIcon = MediaTypeIcon;
//# sourceMappingURL=index.js.map