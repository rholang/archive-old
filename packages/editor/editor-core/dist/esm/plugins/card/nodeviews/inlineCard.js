import { __extends } from "tslib";
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Card as SmartCard } from '@atlaskit/smart-card';
import { findOverflowScrollParent } from '@atlaskit/editor-common';
import rafSchedule from 'raf-schd';
import { ZeroWidthSpace } from '../../../utils';
import { Card } from './genericCard';
import UnsupportedInlineNode from '../../unsupported-content/nodeviews/unsupported-inline';
import { SelectionBasedNodeView } from '../../../nodeviews/ReactNodeView';
import { registerCard } from '../pm-plugins/actions';
var InlineCardComponent = /** @class */ (function (_super) {
    __extends(InlineCardComponent, _super);
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
            rafSchedule(function () {
                return view.dispatch(registerCard({
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
        var scrollContainer = findOverflowScrollParent(view.dom);
        this.scrollContainer = scrollContainer || undefined;
    };
    InlineCardComponent.prototype.render = function () {
        var _a = this.props, node = _a.node, selected = _a.selected, cardContext = _a.cardContext;
        var _b = node.attrs, url = _b.url, data = _b.data;
        var card = (React.createElement("span", null,
            React.createElement("span", null, ZeroWidthSpace),
            React.createElement("span", { className: "card" },
                React.createElement(SmartCard, { url: url, data: data, appearance: "inline", isSelected: selected, onClick: this.onClick, container: this.scrollContainer, onResolve: this.onResolve }))));
        return cardContext ? (React.createElement(cardContext.Provider, { value: cardContext.value }, card)) : (card);
    };
    InlineCardComponent.contextTypes = {
        contextAdapter: PropTypes.object,
    };
    return InlineCardComponent;
}(React.PureComponent));
export { InlineCardComponent };
var WrappedInlineCard = Card(InlineCardComponent, UnsupportedInlineNode);
var InlineCard = /** @class */ (function (_super) {
    __extends(InlineCard, _super);
    function InlineCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InlineCard.prototype.render = function () {
        return (React.createElement(WrappedInlineCard, { node: this.node, selected: this.insideSelection(), view: this.view, getPos: this.getPos }));
    };
    return InlineCard;
}(SelectionBasedNodeView));
export { InlineCard };
//# sourceMappingURL=inlineCard.js.map