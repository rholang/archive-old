"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var MediaCard_1 = require("../../ui/MediaCard");
var Media = /** @class */ (function (_super) {
    tslib_1.__extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCard = function (providers) {
            if (providers === void 0) { providers = {}; }
            var mediaProvider = providers.mediaProvider, contextIdentifierProvider = providers.contextIdentifierProvider;
            return (React.createElement(MediaCard_1.MediaCard, tslib_1.__assign({ mediaProvider: mediaProvider, contextIdentifierProvider: contextIdentifierProvider }, _this.props)));
        };
        return _this;
    }
    Media.prototype.render = function () {
        var providers = this.props.providers;
        if (!providers) {
            return this.renderCard();
        }
        return (React.createElement(editor_common_1.WithProviders, { providers: ['mediaProvider', 'contextIdentifierProvider'], providerFactory: providers, renderNode: this.renderCard }));
    };
    return Media;
}(react_1.PureComponent));
exports.default = Media;
//# sourceMappingURL=media.js.map