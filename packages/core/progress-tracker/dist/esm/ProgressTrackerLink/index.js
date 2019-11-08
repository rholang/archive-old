import { __extends } from "tslib";
import React, { PureComponent } from 'react';
import { Link } from './styled';
var ProgressTrackerLink = /** @class */ (function (_super) {
    __extends(ProgressTrackerLink, _super);
    function ProgressTrackerLink() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProgressTrackerLink.prototype.render = function () {
        var _a = this.props.item, href = _a.href, onClick = _a.onClick, label = _a.label;
        return (React.createElement(Link, { href: href, onClick: onClick }, label));
    };
    return ProgressTrackerLink;
}(PureComponent));
export default ProgressTrackerLink;
//# sourceMappingURL=index.js.map