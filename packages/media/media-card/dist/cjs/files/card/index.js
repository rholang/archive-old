"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var media_ui_1 = require("@atlaskit/media-ui");
var react_intl_1 = require("react-intl");
var cardImageView_1 = require("../cardImageView");
var utils_1 = require("../../utils");
var FileCard = /** @class */ (function (_super) {
    tslib_1.__extends(FileCard, _super);
    function FileCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileCard.prototype.render = function () {
        return this.renderFile();
    };
    FileCard.prototype.renderFile = function () {
        var _a = this.props, status = _a.status, dimensions = _a.dimensions, selectable = _a.selectable, selected = _a.selected, details = _a.details, dataURI = _a.dataURI, progress = _a.progress, resizeMode = _a.resizeMode, onRetry = _a.onRetry, disableOverlay = _a.disableOverlay, previewOrientation = _a.previewOrientation, alt = _a.alt, onDisplayImage = _a.onDisplayImage;
        var defaultDetails = {
            id: '',
            name: undefined,
            mediaType: undefined,
            size: undefined,
        };
        var _b = details || defaultDetails, name = _b.name, mediaType = _b.mediaType, size = _b.size;
        var errorMessage = this.isError && (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_1.messages.failed_to_load)));
        var fileSize = size ? utils_1.toHumanReadableMediaSize(size) : '';
        return (React.createElement(cardImageView_1.FileCardImageView, { error: errorMessage, dimensions: dimensions, selectable: selectable, selected: selected, dataURI: dataURI, mediaName: name, mediaType: mediaType, fileSize: fileSize, status: status, progress: progress, resizeMode: resizeMode, onRetry: onRetry, onDisplayImage: onDisplayImage, actions: this.getActions(), disableOverlay: disableOverlay, previewOrientation: previewOrientation, alt: alt }));
    };
    FileCard.prototype.getActions = function () {
        var _a = this.props, details = _a.details, _b = _a.actions, actions = _b === void 0 ? [] : _b;
        if (!details) {
            return [];
        }
        return actions.map(function (action) { return (tslib_1.__assign(tslib_1.__assign({}, action), { handler: function () {
                action.handler({ type: 'file', details: details });
            } })); });
    };
    Object.defineProperty(FileCard.prototype, "isError", {
        get: function () {
            var status = this.props.status;
            return status === 'error';
        },
        enumerable: true,
        configurable: true
    });
    FileCard.defaultProps = {
        actions: [],
    };
    return FileCard;
}(react_1.Component));
exports.FileCard = FileCard;
//# sourceMappingURL=index.js.map