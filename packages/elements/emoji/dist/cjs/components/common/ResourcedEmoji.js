"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var constants_1 = require("../../util/constants");
var EmojiPlaceholder_1 = tslib_1.__importDefault(require("./EmojiPlaceholder"));
var LoadingEmojiComponent_1 = tslib_1.__importDefault(require("./LoadingEmojiComponent"));
var resourcedEmojiModuleLoader = function () {
    return Promise.resolve().then(function () { return tslib_1.__importStar(require(/* webpackChunkName:"@atlaskit-internal_resourcedEmojiComponent" */ './ResourcedEmojiComponent')); });
};
var resourcedEmojiComponentLoader = function () { return resourcedEmojiModuleLoader().then(function (module) { return module.default; }); };
var ResourcedEmoji = /** @class */ (function (_super) {
    tslib_1.__extends(ResourcedEmoji, _super);
    function ResourcedEmoji() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            asyncLoadedComponent: ResourcedEmoji.AsyncLoadedComponent,
        };
        return _this;
    }
    ResourcedEmoji.prototype.asyncLoadComponent = function () {
        var _this = this;
        resourcedEmojiComponentLoader().then(function (component) {
            ResourcedEmoji.AsyncLoadedComponent = component;
            _this.setAsyncState(component);
        });
    };
    ResourcedEmoji.prototype.renderLoading = function () {
        var _a = this.props, fitToHeight = _a.fitToHeight, emojiId = _a.emojiId, showTooltip = _a.showTooltip;
        return (React.createElement(EmojiPlaceholder_1.default, { shortName: emojiId.shortName, showTooltip: showTooltip, size: fitToHeight || constants_1.defaultEmojiHeight }));
    };
    ResourcedEmoji.prototype.renderLoaded = function (loadedEmojiProvider, ResourcedEmojiComponent) {
        var _a = this.props, emojiProvider = _a.emojiProvider, otherProps = tslib_1.__rest(_a, ["emojiProvider"]);
        return (React.createElement(ResourcedEmojiComponent, tslib_1.__assign({}, otherProps, { emojiProvider: loadedEmojiProvider })));
    };
    return ResourcedEmoji;
}(LoadingEmojiComponent_1.default));
exports.default = ResourcedEmoji;
//# sourceMappingURL=ResourcedEmoji.js.map