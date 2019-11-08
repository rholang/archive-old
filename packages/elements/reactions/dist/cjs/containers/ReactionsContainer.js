"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var analytics_namespaced_context_1 = require("@atlaskit/analytics-namespaced-context");
var React = tslib_1.__importStar(require("react"));
var Reactions_1 = require("../components/Reactions");
var ReactionConsumer_1 = require("../reaction-store/ReactionConsumer");
var ReactionStatus_1 = require("../types/ReactionStatus");
var ReactionsContainer = /** @class */ (function (_super) {
    tslib_1.__extends(ReactionsContainer, _super);
    function ReactionsContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChild = function (props) {
            var _a = _this.props, containerAri = _a.containerAri, ari = _a.ari;
            return (React.createElement(analytics_namespaced_context_1.FabricElementsAnalyticsContext, { data: { containerAri: containerAri, ari: ari } },
                React.createElement(Reactions_1.Reactions, tslib_1.__assign({ key: _this.props.containerAri + "|" + _this.props.ari }, _this.props, props))));
        };
        _this.stateMapper = function (state) {
            var _a = _this.props, containerAri = _a.containerAri, ari = _a.ari;
            var reactionsState = state.reactions[containerAri + "|" + ari];
            if (!reactionsState) {
                return { status: ReactionStatus_1.ReactionStatus.notLoaded };
            }
            switch (reactionsState.status) {
                case ReactionStatus_1.ReactionStatus.ready:
                    return {
                        reactions: reactionsState.reactions,
                        status: reactionsState.status,
                        flash: state.flash[containerAri + "|" + ari],
                    };
                default:
                    return { status: ReactionStatus_1.ReactionStatus.loading };
            }
        };
        _this.actionsMapper = function (actions) { return ({
            loadReaction: function () {
                actions.getReactions(_this.props.containerAri, _this.props.ari);
            },
            onReactionClick: function (emojiId) {
                actions.toggleReaction(_this.props.containerAri, _this.props.ari, emojiId);
            },
            onReactionHover: function (emojiId) {
                actions.getDetailedReaction(_this.props.containerAri, _this.props.ari, emojiId);
            },
            onSelection: function (emojiId) {
                actions.addReaction(_this.props.containerAri, _this.props.ari, emojiId);
            },
        }); };
        return _this;
    }
    ReactionsContainer.prototype.render = function () {
        return (React.createElement(ReactionConsumer_1.ReactionConsumer, { store: this.props.store, actionsMapper: this.actionsMapper, stateMapper: this.stateMapper }, this.renderChild));
    };
    return ReactionsContainer;
}(React.PureComponent));
exports.default = ReactionsContainer;
//# sourceMappingURL=ReactionsContainer.js.map