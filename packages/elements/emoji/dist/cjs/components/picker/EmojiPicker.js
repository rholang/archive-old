"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_next_1 = require("@atlaskit/analytics-next");
var React = tslib_1.__importStar(require("react"));
var LoadingEmojiComponent_1 = tslib_1.__importDefault(require("../common/LoadingEmojiComponent"));
var EmojiPickerVirtualItems_1 = require("./EmojiPickerVirtualItems");
var styles = tslib_1.__importStar(require("./styles"));
var emojiPickerModuleLoader = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_emojiPickerComponent" */ './EmojiPickerComponent')); });
};
var emojiPickerLoader = function () {
    return emojiPickerModuleLoader().then(function (module) { return module.default; });
};
var EmojiPickerInternal = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiPickerInternal, _super);
    function EmojiPickerInternal(props) {
        var _this = _super.call(this, props, {}) || this;
        _this.state = {
            asyncLoadedComponent: EmojiPickerInternal.AsyncLoadedComponent,
        };
        return _this;
    }
    EmojiPickerInternal.prototype.asyncLoadComponent = function () {
        var _this = this;
        emojiPickerLoader().then(function (component) {
            EmojiPickerInternal.AsyncLoadedComponent = component;
            _this.setAsyncState(component);
        });
    };
    EmojiPickerInternal.prototype.renderLoading = function () {
        var _this = this;
        var item = new EmojiPickerVirtualItems_1.LoadingItem();
        var handlePickerRef = function (ref) {
            if (_this.props.onPickerRef) {
                _this.props.onPickerRef(ref);
            }
        };
        return (React.createElement("div", { className: styles.emojiPicker, ref: handlePickerRef }, item.renderItem()));
    };
    EmojiPickerInternal.prototype.renderLoaded = function (loadedEmojiProvider, EmojiPickerComponent) {
        var _a = this.props, emojiProvider = _a.emojiProvider, otherProps = tslib_1.__rest(_a, ["emojiProvider"]);
        return (React.createElement(EmojiPickerComponent, tslib_1.__assign({ emojiProvider: loadedEmojiProvider }, otherProps)));
    };
    return EmojiPickerInternal;
}(LoadingEmojiComponent_1.default));
exports.EmojiPickerInternal = EmojiPickerInternal;
var EmojiPicker = analytics_next_1.withAnalyticsEvents()(EmojiPickerInternal);
exports.default = EmojiPicker;
//# sourceMappingURL=EmojiPicker.js.map