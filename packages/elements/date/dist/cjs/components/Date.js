"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var DateLozenge_1 = require("./DateLozenge");
var React = tslib_1.__importStar(require("react"));
var format_1 = tslib_1.__importDefault(require("date-fns/format"));
var isClickable = function (props) { return !!props.onClick; };
var Date = /** @class */ (function (_super) {
    tslib_1.__extends(Date, _super);
    function Date() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleOnClick = function (event) {
            if (isClickable(_this.props)) {
                _this.props.onClick(_this.props.value, event);
            }
        };
        _this.renderContent = function () {
            if (_this.props.children) {
                if (typeof _this.props.children === 'function') {
                    return _this.props.children(_this.props);
                }
                return _this.props.children;
            }
            return format_1.default(_this.props.value, _this.props.format);
        };
        return _this;
    }
    Date.prototype.render = function () {
        return (React.createElement(DateLozenge_1.DateLozenge, { className: this.props.className, onClick: isClickable(this.props) ? this.handleOnClick : undefined, color: this.props.color }, this.renderContent()));
    };
    Date.defaultProps = {
        format: 'DD/MM/YYYY',
        color: 'grey',
    };
    return Date;
}(React.Component));
exports.Date = Date;
//# sourceMappingURL=Date.js.map