"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var PanelStateless_1 = tslib_1.__importDefault(require("./PanelStateless"));
var Panel = /** @class */ (function (_super) {
    tslib_1.__extends(Panel, _super);
    function Panel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isExpanded: !!_this.props.isDefaultExpanded,
        };
        _this.handleChange = function () {
            _this.setState(function (prevState) { return ({
                isExpanded: !prevState.isExpanded,
            }); });
        };
        return _this;
    }
    Panel.prototype.render = function () {
        var _a = this.props, children = _a.children, header = _a.header;
        var isExpanded = this.state.isExpanded;
        return (react_1.default.createElement(PanelStateless_1.default, { header: header, isExpanded: isExpanded, onChange: this.handleChange }, children));
    };
    Panel.defaultProps = {
        isDefaultExpanded: false,
    };
    return Panel;
}(react_1.PureComponent));
exports.default = Panel;
//# sourceMappingURL=Panel.js.map