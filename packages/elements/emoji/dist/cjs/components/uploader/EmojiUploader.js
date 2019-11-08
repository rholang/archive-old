"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var LoadingEmojiComponent_1 = tslib_1.__importDefault(require("../common/LoadingEmojiComponent"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var emojiUploadModuleLoader = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_emojiUploadComponent" */ './EmojiUploadComponent')); });
};
var emojiUploadLoader = function () {
    return emojiUploadModuleLoader().then(function (module) { return module.default; });
};
var EmojiUploaderInternal = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiUploaderInternal, _super);
    function EmojiUploaderInternal(props) {
        var _this = _super.call(this, props, {}) || this;
        _this.state = {
            asyncLoadedComponent: EmojiUploaderInternal.AsyncLoadedComponent,
        };
        return _this;
    }
    EmojiUploaderInternal.prototype.asyncLoadComponent = function () {
        var _this = this;
        emojiUploadLoader().then(function (component) {
            EmojiUploaderInternal.AsyncLoadedComponent = component;
            _this.setAsyncState(component);
        });
    };
    EmojiUploaderInternal.prototype.renderLoaded = function (loadedEmojiProvider, EmojiUploadComponent) {
        var _a = this.props, emojiProvider = _a.emojiProvider, otherProps = tslib_1.__rest(_a, ["emojiProvider"]);
        return (React.createElement(EmojiUploadComponent, tslib_1.__assign({ emojiProvider: loadedEmojiProvider }, otherProps)));
    };
    return EmojiUploaderInternal;
}(LoadingEmojiComponent_1.default));
exports.EmojiUploaderInternal = EmojiUploaderInternal;
var EmojiUploader = analytics_next_1.withAnalyticsEvents()(EmojiUploaderInternal);
exports.default = EmojiUploader;
//# sourceMappingURL=EmojiUploader.js.map