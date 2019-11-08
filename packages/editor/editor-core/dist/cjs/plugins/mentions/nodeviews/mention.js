"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var Mention_1 = tslib_1.__importDefault(require("../ui/Mention"));
var nodeviews_1 = require("../../../nodeviews");
var InlineNodeWrapper_1 = tslib_1.__importStar(require("../../../ui/InlineNodeWrapper"));
var utils_1 = require("../../../utils");
var MentionNodeView = /** @class */ (function (_super) {
    tslib_1.__extends(MentionNodeView, _super);
    function MentionNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentionNodeView.prototype.createDomRef = function () {
        if (this.reactComponentProps.options &&
            this.reactComponentProps.options.useInlineWrapper) {
            return InlineNodeWrapper_1.createMobileInlineDomRef();
        }
        return _super.prototype.createDomRef.call(this);
    };
    MentionNodeView.prototype.render = function (props) {
        var providerFactory = props.providerFactory, options = props.options;
        var _a = this.node.attrs, id = _a.id, text = _a.text, accessLevel = _a.accessLevel;
        return (React.createElement(InlineNodeWrapper_1.default, { useInlineWrapper: options && options.useInlineWrapper },
            React.createElement(Mention_1.default, { id: id, text: text, accessLevel: accessLevel, providers: providerFactory }),
            options && options.allowZeroWidthSpaceAfter && utils_1.ZeroWidthSpace));
    };
    return MentionNodeView;
}(nodeviews_1.ReactNodeView));
exports.MentionNodeView = MentionNodeView;
function mentionNodeView(portalProviderAPI, providerFactory, options) {
    return function (node, view, getPos) {
        return new MentionNodeView(node, view, getPos, portalProviderAPI, {
            providerFactory: providerFactory,
            options: options,
        }).init();
    };
}
exports.default = mentionNodeView;
//# sourceMappingURL=mention.js.map