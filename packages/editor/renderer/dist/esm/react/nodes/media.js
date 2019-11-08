import { __assign, __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { WithProviders, } from '@atlaskit/editor-common';
import { MediaCard } from '../../ui/MediaCard';
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderCard = function (providers) {
            if (providers === void 0) { providers = {}; }
            var mediaProvider = providers.mediaProvider, contextIdentifierProvider = providers.contextIdentifierProvider;
            return (React.createElement(MediaCard, __assign({ mediaProvider: mediaProvider, contextIdentifierProvider: contextIdentifierProvider }, _this.props)));
        };
        return _this;
    }
    Media.prototype.render = function () {
        var providers = this.props.providers;
        if (!providers) {
            return this.renderCard();
        }
        return (React.createElement(WithProviders, { providers: ['mediaProvider', 'contextIdentifierProvider'], providerFactory: providers, renderNode: this.renderCard }));
    };
    return Media;
}(PureComponent));
export default Media;
//# sourceMappingURL=media.js.map