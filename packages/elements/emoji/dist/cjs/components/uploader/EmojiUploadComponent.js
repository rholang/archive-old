"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var styles = tslib_1.__importStar(require("./styles"));
var EmojiResource_1 = require("../../api/EmojiResource");
var EmojiUploadPicker_1 = tslib_1.__importDefault(require("../common/EmojiUploadPicker"));
var UploadEmoji_1 = require("../common/UploadEmoji");
var analytics_1 = require("../../util/analytics");
var EmojiUploadComponent = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiUploadComponent, _super);
    function EmojiUploadComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.onUploadEmoji = function (upload, retry) {
            var emojiProvider = _this.props.emojiProvider;
            _this.fireAnalytics(analytics_1.uploadConfirmButton({ retry: retry }));
            var errorSetter = function (message) {
                _this.setState({
                    uploadErrorMessage: message,
                });
            };
            UploadEmoji_1.uploadEmoji(upload, emojiProvider, errorSetter, _this.prepareForUpload, _this.fireAnalytics);
        };
        _this.prepareForUpload = function () {
            var emojiProvider = _this.props.emojiProvider;
            if (EmojiResource_1.supportsUploadFeature(emojiProvider)) {
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
            _this.fireAnalytics(analytics_1.selectedFileEvent());
        };
        _this.onUploadCancelled = function () {
            _this.fireAnalytics(analytics_1.uploadCancelButton());
            _this.prepareForUpload();
        };
        _this.onUploaderRef = function (emojiUploadPicker) {
            _this.ref = emojiUploadPicker;
        };
        _this.fireAnalytics = function (analyticsEvent) {
            var createAnalyticsEvent = _this.props.createAnalyticsEvent;
            if (createAnalyticsEvent) {
                analytics_1.createAndFireEventInElementsChannel(analyticsEvent)(createAnalyticsEvent);
            }
        };
        if (EmojiResource_1.supportsUploadFeature(props.emojiProvider)) {
            props.emojiProvider.prepareForUpload();
        }
        _this.state = {};
        return _this;
    }
    EmojiUploadComponent.prototype.render = function () {
        var uploadErrorMessage = this.state.uploadErrorMessage;
        var errorMessage = uploadErrorMessage ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, uploadErrorMessage))) : null;
        return (React.createElement("div", { className: classnames_1.default([styles.emojiUploadWidget]), ref: this.props.onUploaderRef },
            React.createElement("div", { className: classnames_1.default([styles.emojiUploadFooter]) },
                React.createElement(EmojiUploadPicker_1.default, { ref: this.onUploaderRef, onFileChooserClicked: this.onFileChooserClicked, onUploadCancelled: this.onUploadCancelled, onUploadEmoji: this.onUploadEmoji, errorMessage: errorMessage }))));
    };
    return EmojiUploadComponent;
}(react_1.PureComponent));
exports.default = EmojiUploadComponent;
//# sourceMappingURL=EmojiUploadComponent.js.map