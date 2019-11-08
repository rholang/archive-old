import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import StyledSkeleton from '../styled/Skeleton';
var Skeleton = /** @class */ (function (_super) {
    __extends(Skeleton, _super);
    function Skeleton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skeleton.prototype.render = function () {
        return React.createElement(StyledSkeleton, __assign({}, this.props));
    };
    Skeleton.defaultProps = {
        appearance: 'circle',
        size: 'medium',
        weight: 'normal',
    };
    return Skeleton;
}(Component));
export default Skeleton;
//# sourceMappingURL=Skeleton.js.map