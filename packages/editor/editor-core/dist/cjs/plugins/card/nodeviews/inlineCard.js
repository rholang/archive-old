"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var PropTypes = tslib_1.__importStar(require("prop-types"));
var smart_card_1 = require("@atlaskit/smart-card");
var editor_common_1 = require("@atlaskit/editor-common");
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var utils_1 = require("../../../utils");
var genericCard_1 = require("./genericCard");
var unsupported_inline_1 = tslib_1.__importDefault(require("../../unsupported-content/nodeviews/unsupported-inline"));
var ReactNodeView_1 = require("../../../nodeviews/ReactNodeView");
var actions_1 = require("../pm-plugins/actions");
var InlineCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCardComponent, _super);
    function InlineCardComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onClick = function () { };
        _this.onResolve = function (data) {
            var _a = _this.props, getPos = _a.getPos, view = _a.view;
            if (!getPos) {
                return;
            }
            var title = data.title, url = data.url;
            // don't dispatch immediately since we might be in the middle of
            // rendering a nodeview
            raf_schd_1.default(function () {
                return view.dispatch(actions_1.registerCard({
                    title: title,
                    url: url,
                    pos: getPos(),
                })(view.state.tr));
            })();
        };
        return _this;
    }
    InlineCardComponent.prototype.UNSAFE_componentWillMount = function () {
        var view = this.props.view;
        var scrollContainer = editor_common_1.findOverflowScrollParent(view.dom);
        this.scrollContainer = scrollContainer || undefined;
    };
    InlineCardComponent.prototype.render = function () {
        var _a = this.props, node = _a.node, selected = _a.selected, cardContext = _a.cardContext;
        var _b = node.attrs, url = _b.url, data = _b.data;
        var card = (React.createElement("span", null,
            React.createElement("span", null, utils_1.ZeroWidthSpace),
            React.createElement("span", { className: "card" },
                React.createElement(smart_card_1.Card, { url: url, data: data, appearance: "inline", isSelected: selected, onClick: this.onClick, container: this.scrollContainer, onResolve: this.onResolve }))));
        return cardContext ? (React.createElement(cardContext.Provider, { value: cardContext.value }, card)) : (card);
    };
    InlineCardComponent.contextTypes = {
        contextAdapter: PropTypes.object,
    };
    return InlineCardComponent;
}(React.PureComponent));
exports.InlineCardComponent = InlineCardComponent;
var WrappedInlineCard = genericCard_1.Card(InlineCardComponent, unsupported_inline_1.default);
var InlineCard = /** @class */ (function (_super) {
    tslib_1.__extends(InlineCard, _super);
    function InlineCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCard.prototype.render = function () {
        return (React.createElement(WrappedInlineCard, { node: this.node, selected: this.insideSelection(), view: this.view, getPos: this.getPos }));
    };
    return InlineCard;
}(ReactNodeView_1.SelectionBasedNodeView));
exports.InlineCard = InlineCard;
//# sourceMappingURL=inlineCard.js.map