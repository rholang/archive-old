"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var chevron_down_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-down"));
var chevron_right_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/chevron-right"));
var react_1 = tslib_1.__importStar(require("react"));
var react_animate_height_1 = tslib_1.__importDefault(require("react-animate-height"));
var styles = tslib_1.__importStar(require("./styledPanel"));
var PanelStateless = /** @class */ (function (_super) {
    tslib_1.__extends(PanelStateless, _super);
    function PanelStateless() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PanelStateless.prototype.render = function () {
        var _a = this.props, children = _a.children, header = _a.header, isExpanded = _a.isExpanded, onChange = _a.onChange;
        return (react_1.default.createElement(styles.PanelWrapper, null,
            react_1.default.createElement(styles.PanelHeader, { onClick: function () { return onChange(!isExpanded); } },
                react_1.default.createElement(styles.ButtonWrapper, { isHidden: isExpanded },
                    react_1.default.createElement(button_1.default, { appearance: "subtle", "aria-expanded": isExpanded, spacing: "none", iconBefore: isExpanded ? (react_1.default.createElement(chevron_down_1.default, { label: "collapse" })) : (react_1.default.createElement(chevron_right_1.default, { label: "expand" })) })),
                react_1.default.createElement("span", null, header)),
            react_1.default.createElement(react_animate_height_1.default, { duration: 200, easing: "linear", height: isExpanded ? 'auto' : 0 }, children)));
    };
    PanelStateless.defaultProps = {
        isExpanded: false,
    };
    return PanelStateless;
}(react_1.PureComponent));
exports.default = PanelStateless;
//# sourceMappingURL=PanelStateless.js.map