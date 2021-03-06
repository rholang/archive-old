import { __extends } from "tslib";
import * as React from 'react';
import { Card as SmartCard } from '@atlaskit/smart-card';
import * as PropTypes from 'prop-types';
import rafSchedule from 'raf-schd';
import { Card } from './genericCard';
import UnsupportedBlockNode from '../../unsupported-content/nodeviews/unsupported-block';
import { SelectionBasedNodeView, } from '../../../nodeviews/ReactNodeView';
import { registerCard } from '../pm-plugins/actions';
var BlockCardComponent = /** @class */ (function (_super) {
    __extends(BlockCardComponent, _super);
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
            rafSchedule(function () {
                return view.dispatch(registerCard({
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
            React.createElement(SmartCard, { url: url, data: data, appearance: "block", isSelected: selected, onClick: this.onClick, onResolve: this.onResolve }),
            React.createElement("span", { contentEditable: true })));
        return (React.createElement("div", null, cardContext ? (React.createElement(cardContext.Provider, { value: cardContext.value }, cardInner)) : (cardInner)));
    };
    BlockCardComponent.contextTypes = {
        contextAdapter: PropTypes.object,
    };
    return BlockCardComponent;
}(React.PureComponent));
export { BlockCardComponent };
var WrappedBlockCard = Card(BlockCardComponent, UnsupportedBlockNode);
var BlockCard = /** @class */ (function (_super) {
    __extends(BlockCard, _super);
    function BlockCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlockCard.prototype.render = function () {
        return (React.createElement(WrappedBlockCard, { node: this.node, selected: this.insideSelection(), view: this.view, getPos: this.getPos }));
    };
    return BlockCard;
}(SelectionBasedNodeView));
export { BlockCard };
//# sourceMappingURL=blockCard.js.map