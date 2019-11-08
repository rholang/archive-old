"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var ReactionPicker_1 = require("../components/ReactionPicker");
var ReactionConsumer_1 = require("../reaction-store/ReactionConsumer");
var ReactionPickerContainer = /** @class */ (function (_super) {
    tslib_1.__extends(ReactionPickerContainer, _super);
    function ReactionPickerContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.renderChild = function (props) { return (React.createElement(ReactionPicker_1.ReactionPicker, tslib_1.__assign({}, _this.props, props))); };
        _this.actionsMapper = function (actions) { return ({
            onSelection: function (emojiId) {
                actions.addReaction(_this.props.containerAri, _this.props.ari, emojiId);
            },
        }); };
        return _this;
    }
    ReactionPickerContainer.prototype.render = function () {
        return (React.createElement(ReactionConsumer_1.ReactionConsumer, { store: this.props.store, actionsMapper: this.actionsMapper }, this.renderChild));
    };
    return ReactionPickerContainer;
}(React.PureComponent));
exports.default = ReactionPickerContainer;
//# sourceMappingURL=ReactionsPickerContainer.js.map