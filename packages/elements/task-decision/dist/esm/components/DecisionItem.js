import { __extends } from "tslib";
import * as React from 'react';
import { PureComponent } from 'react';
import DecisionIcon from '@atlaskit/icon/glyph/editor/decision';
import { EditorIconWrapper } from '../styled/DecisionItem';
import Item from './Item';
var DecisionItem = /** @class */ (function (_super) {
    __extends(DecisionItem, _super);
    function DecisionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DecisionItem.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, children = _a.children, contentRef = _a.contentRef, placeholder = _a.placeholder, showPlaceholder = _a.showPlaceholder;
        var icon = (React.createElement(EditorIconWrapper, { showPlaceholder: showPlaceholder },
            React.createElement(DecisionIcon, { label: "Decision", size: "large" })));
        return (React.createElement(Item, { appearance: appearance, contentRef: contentRef, icon: icon, placeholder: placeholder, showPlaceholder: showPlaceholder }, children));
    };
    DecisionItem.defaultProps = {
        appearance: 'inline',
    };
    return DecisionItem;
}(PureComponent));
export default DecisionItem;
//# sourceMappingURL=DecisionItem.js.map