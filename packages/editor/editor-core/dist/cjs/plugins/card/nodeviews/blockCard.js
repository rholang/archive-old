"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var smart_card_1 = require("@atlaskit/smart-card");
var PropTypes = tslib_1.__importStar(require("prop-types"));
var raf_schd_1 = tslib_1.__importDefault(require("raf-schd"));
var genericCard_1 = require("./genericCard");
var unsupported_block_1 = tslib_1.__importDefault(require("../../unsupported-content/nodeviews/unsupported-block"));
var ReactNodeView_1 = require("../../../nodeviews/ReactNodeView");
var actions_1 = require("../pm-plugins/actions");
var BlockCardComponent = /** @class */ (function (_super) {
    tslib_1.__extends(BlockCardComponent, _super);
    function BlockCardComponent() {
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
            });
        };
        return _this;
    }
    BlockCardComponent.prototype.render = function () {
        var _a = this.props, node = _a.node, selected = _a.selected, cardContext = _a.cardContext;
        var _b = node.attrs, url = _b.url, data = _b.data;
        // render an empty span afterwards to get around Webkit bug
        // that puts caret in next editable text element
        var cardInner = (React.createElement(React.Fragment, null,
            React.createElement(smart_card_1.Card, { url: url, data: data, appearance: "block", isSelected: selected, onClick: this.onClick, onResolve: this.onResolve }),
            React.createElement("span", { contentEditable: true })));
        return (React.createElement("div", null, cardContext ? (React.createElement(cardContext.Provider, { value: cardContext.value }, cardInner)) : (cardInner)));
    };
    BlockCardComponent.contextTypes = {
        contextAdapter: PropTypes.object,
    };
    return BlockCardComponent;
}(React.PureComponent));
exports.BlockCardComponent = BlockCardComponent;
var WrappedBlockCard = genericCard_1.Card(BlockCardComponent, unsupported_block_1.default);
var BlockCard = /** @class */ (function (_super) {
    tslib_1.__extends(BlockCard, _super);
    function BlockCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockCard.prototype.render = function () {
        return (React.createElement(WrappedBlockCard, { node: this.node, selected: this.insideSelection(), view: this.view, getPos: this.getPos }));
    };
    return BlockCard;
}(ReactNodeView_1.SelectionBasedNodeView));
exports.BlockCard = BlockCard;
//# sourceMappingURL=blockCard.js.map