import { __assign, __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import * as styles from './styles';
import { supportsUploadFeature } from '../../api/EmojiResource';
import EmojiUploadPicker from '../common/EmojiUploadPicker';
import { uploadEmoji } from '../common/UploadEmoji';
import { createAndFireEventInElementsChannel, selectedFileEvent, uploadCancelButton, uploadConfirmButton, } from '../../util/analytics';
var EmojiUploadComponent = /** @class */ (function (_super) {
    __extends(EmojiUploadComponent, _super);
    function EmojiUploadComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onUploadEmoji = function (upload, retry) {
            var emojiProvider = _this.props.emojiProvider;
            _this.fireAnalytics(uploadConfirmButton({ retry: retry }));
            var errorSetter = function (message) {
                _this.setState({
                    uploadErrorMessage: message,
                });
            };
            uploadEmoji(upload, emojiProvider, errorSetter, _this.prepareForUpload, _this.fireAnalytics);
        };
        _this.prepareForUpload = function () {
            var emojiProvider = _this.props.emojiProvider;
            if (supportsUploadFeature(emojiProvider)) {
                emojiProvider.prepareForUpload();
            }
            _this.setState({
                uploadErrorMessage: undefined,
            });
            if (_this.ref) {
                _this.ref.clearUploadPicker();
            }
        };
        _this.onFileChooserClicked = function () {
            _this.fireAnalytics(selectedFileEvent());
        };
        _this.onUploadCancelled = function () {
            _this.fireAnalytics(uploadCancelButton());
            _this.prepareForUpload();
        };
        _this.onUploaderRef = function (emojiUploadPicker) {
            _this.ref = emojiUploadPicker;
        };
        _this.fireAnalytics = function (analyticsEvent) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                createAndFireEventInElementsChannel(analyticsEvent)(createAnalyticsEvent);
            }
        };
        if (supportsUploadFeature(props.emojiProvider)) {
            props.emojiProvider.prepareForUpload();
        }
        _this.state = {};
        return _this;
    }
    EmojiUploadComponent.prototype.render = function () {
        var uploadErrorMessage = this.state.uploadErrorMessage;
        var errorMessage = uploadErrorMessage ? (React.createElement(FormattedMessage, __assign({}, uploadErrorMessage))) : null;
        return (React.createElement("div", { className: classNames([styles.emojiUploadWidget]), ref: this.props.onUploaderRef },
            React.createElement("div", { className: classNames([styles.emojiUploadFooter]) },
                React.createElement(EmojiUploadPicker, { ref: this.onUploaderRef, onFileChooserClicked: this.onFileChooserClicked, onUploadCancelled: this.onUploadCancelled, onUploadEmoji: this.onUploadEmoji, errorMessage: errorMessage }))));
    };
    return EmojiUploadComponent;
}(PureComponent));
export default EmojiUploadComponent;
//# sourceMappingURL=EmojiUploadComponent.js.map