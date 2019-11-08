"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var styled_1 = require("../styled");
var Banner = /** @class */ (function (_super) {
    tslib_1.__extends(Banner, _super);
    function Banner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            height: 0,
        };
        _this.getHeight = function () {
            if (_this.containerRef) {
                _this.setState({ height: _this.containerRef.clientHeight });
            }
        };
        _this.innerRef = function (ref) {
            _this.containerRef = ref;
            if (_this.props.innerRef) {
                _this.props.innerRef(ref);
            }
            _this.getHeight();
        };
        return _this;
    }
    Banner.prototype.render = function () {
        var _a = this.props, appearance = _a.appearance, children = _a.children, icon = _a.icon, isOpen = _a.isOpen, testId = _a.testId;
        return (react_1.default.createElement(styled_1.Visibility, { bannerHeight: this.state.height, isOpen: isOpen },
            react_1.default.createElement(styled_1.Container, { innerRef: this.innerRef, appearance: appearance, "aria-hidden": !isOpen, role: "alert", "data-testid": testId },
                react_1.default.createElement(styled_1.Content, { appearance: appearance },
                    react_1.default.createElement(styled_1.Icon, null, icon),
                    react_1.default.createElement(styled_1.Text, { appearance: appearance }, children)))));
    };
    Banner.defaultProps = {
        appearance: 'warning',
        isOpen: false,
    };
    return Banner;
}(react_1.default.Component));
exports.default = Banner;
//# sourceMappingURL=Banner.js.map