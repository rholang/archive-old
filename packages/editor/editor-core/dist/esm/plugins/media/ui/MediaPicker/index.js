import { __extends } from "tslib";
import React from 'react';
import { ClipboardWrapper } from './ClipboardWrapper';
import { DropzoneWrapper } from './DropzoneWrapper';
import { BrowserWrapper } from './BrowserWrapper';
var MediaPickerComponents = /** @class */ (function (_super) {
    __extends(MediaPickerComponents, _super);
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
        return (React.createElement(React.Fragment, null,
            React.createElement(ClipboardWrapper, { mediaState: mediaState }),
            React.createElement(DropzoneWrapper, { mediaState: mediaState, isActive: !isPopupOpened }),
            !mediaState.hasUserAuthProvider() && (React.createElement(BrowserWrapper, { onBrowseFn: this.onBrowseFn, mediaState: mediaState }))));
    };
    return MediaPickerComponents;
}(React.Component));
export { MediaPickerComponents };
//# sourceMappingURL=index.js.map