import { __assign, __extends } from "tslib";
import * as React from 'react';
import ProgressBar from './ProgressBar';
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        return (React.createElement(ProgressBar, __assign({}, this.props, { theme: function (currentTheme, props) {
                var theme = currentTheme(props);
                return __assign(__assign({}, theme), { container: __assign(__assign({}, theme.container), { background: 'rgba(255, 255, 255, 0.5)' }), bar: __assign(__assign({}, theme.bar), { background: 'white' }) });
            } })));
    };
    default_1.defaultProps = {
        value: 0,
        isIndeterminate: false,
    };
    return default_1;
}(React.PureComponent));
export default default_1;
//# sourceMappingURL=TransparentProgressBar.js.map