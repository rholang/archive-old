"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var theme_1 = require("@atlaskit/theme");
var ProgressBar_1 = tslib_1.__importDefault(require("./ProgressBar"));
var default_1 = /** @class */ (function (_super) {
    tslib_1.__extends(default_1, _super);
    function default_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    default_1.prototype.render = function () {
        var _this = this;
        return (React.createElement(ProgressBar_1.default, tslib_1.__assign({}, this.props, { theme: function (currentTheme, props) {
                var theme = currentTheme(props);
                var _a = _this.props, value = _a.value, isIndeterminate = _a.isIndeterminate;
                if (value < 1 || isIndeterminate) {
                    return theme;
                }
                return tslib_1.__assign(tslib_1.__assign({}, theme), { bar: tslib_1.__assign(tslib_1.__assign({}, theme.bar), { background: theme_1.colors.G300 }) });
            } })));
    };
    default_1.defaultProps = {
        value: 0,
        isIndeterminate: false,
    };
    return default_1;
}(React.PureComponent));
exports.default = default_1;
//# sourceMappingURL=SuccessProgressBar.js.map