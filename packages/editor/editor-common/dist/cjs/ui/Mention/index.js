"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var mention_with_providers_1 = tslib_1.__importDefault(require("./mention-with-providers"));
var providerFactory_1 = tslib_1.__importStar(require("../../providerFactory"));
var Mention = /** @class */ (function (_super) {
    tslib_1.__extends(Mention, _super);
    function Mention(props) {
        var _this = _super.call(this, props) || this;
        _this.renderWithProvider = function (providers) {
            var _a = _this.props, accessLevel = _a.accessLevel, eventHandlers = _a.eventHandlers, id = _a.id, portal = _a.portal, text = _a.text;
            var mentionProvider = providers.mentionProvider, profilecardProvider = providers.profilecardProvider;
            return (React.createElement(mention_with_providers_1.default, { id: id, text: text, accessLevel: accessLevel, eventHandlers: eventHandlers, mentionProvider: mentionProvider, profilecardProvider: profilecardProvider, portal: portal }));
        };
        _this.providerFactory = props.providers || new providerFactory_1.default();
        return _this;
    }
    Mention.prototype.componentWillUnmount = function () {
        if (!this.props.providers) {
            // new ProviderFactory is created if no `providers` has been set
            // in this case when component is unmounted it's safe to destroy this providerFactory
            this.providerFactory.destroy();
        }
    };
    Mention.prototype.render = function () {
        return (React.createElement(providerFactory_1.WithProviders, { providers: ['mentionProvider', 'profilecardProvider'], providerFactory: this.providerFactory, renderNode: this.renderWithProvider }));
    };
    return Mention;
}(react_1.PureComponent));
exports.default = Mention;
//# sourceMappingURL=index.js.map