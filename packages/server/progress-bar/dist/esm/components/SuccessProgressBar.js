import { __assign, __extends } from "tslib";
import * as React from 'react';
import { colors } from '@atlaskit/theme';
import ProgressBar from './ProgressBar';
var default_1 = /** @class */ (function (_super) {
    __extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return (React.createElement(ProgressBar, __assign({}, this.props, { theme: function (currentTheme, props) {
                var theme = currentTheme(props);
                var _a = _this.props, value = _a.value, isIndeterminate = _a.isIndeterminate;
                if (value < 1 || isIndeterminate) {
                    return theme;
                }
                return __assign(__assign({}, theme), { bar: __assign(__assign({}, theme.bar), { background: colors.G300 }) });
            } })));
    };
    default_1.defaultProps = {
        value: 0,
        isIndeterminate: false,
    };
    return default_1;
}(React.PureComponent));
export default default_1;
//# sourceMappingURL=SuccessProgressBar.js.map