import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import { DecisionListWrapper } from '../styled/ListWrapper';
var DecisionList = /** @class */ (function (_super) {
    __extends(DecisionList, _super);
    function DecisionList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionList.prototype.render = function () {
        var children = this.props.children;
        if (!children) {
            return null;
        }
        // Data attributes are required for copy and paste from rendered content
        // to the editor to preserve the decision.
        // This allows the editor to differentiate between numbered and ordered lists,
        // and action items, which all share the common `<li>` element.
        // The value of `data-decision-local-id` should be discarded upon paste, with a
        // a new uuid generated by the editor for the cloned content.
        return (React.createElement(DecisionListWrapper, { "data-decision-list-local-id": "" }, React.Children.map(children, function (child, idx) {
            var localId = child.props.localId;
            return (React.createElement("li", { key: idx, "data-decision-local-id": localId || '', "data-decision-state": "DECIDED" }, child));
        })));
    };
    return DecisionList;
}(PureComponent));
export default DecisionList;
//# sourceMappingURL=DecisionList.js.map