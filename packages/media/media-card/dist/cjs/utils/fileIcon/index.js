"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var mediaTypeIcon_1 = require("../mediaTypeIcon");
var styled_1 = require("./styled");
var fileTypeIconClass = 'file-type-icon';
var FileIcon = /** @class */ (function (_super) {
    tslib_1.__extends(FileIcon, _super);
    function FileIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileIcon.prototype.render = function () {
        var _a = this.props, mediaType = _a.mediaType, iconUrl = _a.iconUrl, style = _a.style;
        var type = mediaType || 'unknown';
        var defaultIcon = (React.createElement(mediaTypeIcon_1.MediaTypeIcon, { type: mediaType, size: "small", className: fileTypeIconClass }));
        var icon = iconUrl ? (React.createElement("img", { src: iconUrl, className: "custom-icon", alt: type })) : (defaultIcon);
        return (React.createElement(styled_1.FileTypeIcon, { style: style, className: fileTypeIconClass }, icon));
    };
    return FileIcon;
}(react_1.Component));
exports.FileIcon = FileIcon;
//# sourceMappingURL=index.js.map