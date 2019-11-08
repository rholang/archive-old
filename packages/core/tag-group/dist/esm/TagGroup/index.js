import { __extends } from "tslib";
import React, { PureComponent } from 'react';
import { Container } from './styled';
var TagGroup = /** @class */ (function (_super) {
    __extends(TagGroup, _super);
    function TagGroup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TagGroup.prototype.render = function () {
        var _a = this.props, alignment = _a.alignment, children = _a.children;
        return React.createElement(Container, { justify: alignment }, children);
    };
    TagGroup.defaultProps = {
        alignment: 'start',
    };
    return TagGroup;
}(PureComponent));
export default TagGroup;
//# sourceMappingURL=index.js.map