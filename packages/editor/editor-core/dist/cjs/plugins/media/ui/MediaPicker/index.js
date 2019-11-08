"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var ClipboardWrapper_1 = require("./ClipboardWrapper");
var DropzoneWrapper_1 = require("./DropzoneWrapper");
var BrowserWrapper_1 = require("./BrowserWrapper");
var MediaPickerComponents = /** @class */ (function (_super) {
    tslib_1.__extends(MediaPickerComponents, _super);
    function MediaPickerComponents() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isPopupOpened: false,
        };
        _this.onBrowseFn = function (nativeBrowseFn) {
            var mediaState = _this.props.mediaState;
            mediaState && mediaState.setBrowseFn(nativeBrowseFn);
        };
        return _this;
    }
    MediaPickerComponents.prototype.componentDidMount = function () {
        var _this = this;
        var mediaState = this.props.mediaState;
        mediaState.onPopupToggle(function (isPopupOpened) {
            _this.setState({
                isPopupOpened: isPopupOpened,
            });
        });
    };
    MediaPickerComponents.prototype.render = function () {
        var mediaState = this.props.mediaState;
        var isPopupOpened = this.state.isPopupOpened;
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(ClipboardWrapper_1.ClipboardWrapper, { mediaState: mediaState }),
            react_1.default.createElement(DropzoneWrapper_1.DropzoneWrapper, { mediaState: mediaState, isActive: !isPopupOpened }),
            !mediaState.hasUserAuthProvider() && (react_1.default.createElement(BrowserWrapper_1.BrowserWrapper, { onBrowseFn: this.onBrowseFn, mediaState: mediaState }))));
    };
    return MediaPickerComponents;
}(react_1.default.Component));
exports.MediaPickerComponents = MediaPickerComponents;
//# sourceMappingURL=index.js.map