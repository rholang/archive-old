import { __extends } from "tslib";
import * as React from 'react';
import Mention from '../ui/Mention';
import { ReactNodeView } from '../../../nodeviews';
import InlineNodeWrapper, { createMobileInlineDomRef, } from '../../../ui/InlineNodeWrapper';
import { ZeroWidthSpace } from '../../../utils';
var MentionNodeView = /** @class */ (function (_super) {
    __extends(MentionNodeView, _super);
    function MentionNodeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentionNodeView.prototype.createDomRef = function () {
        if (this.reactComponentProps.options &&
            this.reactComponentProps.options.useInlineWrapper) {
            return createMobileInlineDomRef();
        }
        return _super.prototype.createDomRef.call(this);
    };
    MentionNodeView.prototype.render = function (props) {
        var providerFactory = props.providerFactory, options = props.options;
        var _a = this.node.attrs, id = _a.id, text = _a.text, accessLevel = _a.accessLevel;
        return (React.createElement(InlineNodeWrapper, { useInlineWrapper: options && options.useInlineWrapper },
            React.createElement(Mention, { id: id, text: text, accessLevel: accessLevel, providers: providerFactory }),
            options && options.allowZeroWidthSpaceAfter && ZeroWidthSpace));
    };
    return MentionNodeView;
}(ReactNodeView));
export { MentionNodeView };
export default function mentionNodeView(portalProviderAPI, providerFactory, options) {
    return function (node, view, getPos) {
        return new MentionNodeView(node, view, getPos, portalProviderAPI, {
            providerFactory: providerFactory,
            options: options,
        }).init();
    };
}
//# sourceMappingURL=mention.js.map