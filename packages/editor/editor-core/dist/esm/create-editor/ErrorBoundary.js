import { __extends } from "tslib";
import * as React from 'react';
var ErrorBoundary = /** @class */ (function (_super) {
    __extends(ErrorBoundary, _super);
    function ErrorBoundary() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            error: undefined,
        };
        return _this;
    }
    ErrorBoundary.prototype.render = function () {
        if (this.state.error) {
            throw new Error(this.state.error);
        }
        return this.props.children;
    };
    return ErrorBoundary;
}(React.Component));
export default ErrorBoundary;
//# sourceMappingURL=ErrorBoundary.js.map