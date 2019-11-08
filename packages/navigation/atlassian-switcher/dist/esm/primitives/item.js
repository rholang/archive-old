import { __assign, __extends, __rest } from "tslib";
import * as React from 'react';
import Item from '@atlaskit/item';
import { FadeIn } from './fade-in';
var SwitcherItem = /** @class */ (function (_super) {
    __extends(SwitcherItem, _super);
    function SwitcherItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SwitcherItem.prototype.render = function () {
        var _a = this.props, icon = _a.icon, description = _a.description, rest = __rest(_a, ["icon", "description"]);
        return (React.createElement(FadeIn, null,
            React.createElement(Item, __assign({ elemBefore: icon, description: description }, rest))));
    };
    return SwitcherItem;
}(React.Component));
export default SwitcherItem;
//# sourceMappingURL=item.js.map