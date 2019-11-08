"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var colors_1 = require("@atlaskit/theme/colors");
var react_1 = tslib_1.__importDefault(require("react"));
var button_1 = require("@atlaskit/button");
var Card_1 = tslib_1.__importDefault(require("./Card"));
var theme_1 = require("./theme");
var SpotlightCard = /** @class */ (function (_super) {
    tslib_1.__extends(SpotlightCard, _super);
    function SpotlightCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotlightCard.prototype.render = function () {
        var _a = this.props, actions = _a.actions, actionsBeforeElement = _a.actionsBeforeElement, children = _a.children, components = _a.components, isFlat = _a.isFlat, heading = _a.heading, headingAfterElement = _a.headingAfterElement, image = _a.image, innerRef = _a.innerRef, theme = _a.theme, width = _a.width;
        return (react_1.default.createElement(button_1.Theme.Provider, { value: theme_1.spotlightButtonTheme },
            react_1.default.createElement(Card_1.default, { ref: innerRef, heading: heading, headingAfterElement: headingAfterElement, actions: actions, actionsBeforeElement: actionsBeforeElement, components: components, image: image, theme: function (parent) {
                    var _a = parent({}), container = _a.container, others = tslib_1.__rest(_a, ["container"]);
                    return theme(function () { return (tslib_1.__assign(tslib_1.__assign({}, others), { container: tslib_1.__assign({ background: colors_1.P300, color: colors_1.N0, width: Math.min(Math.max(width, 160), 600) + "px", boxShadow: isFlat
                                ? undefined
                                : "0 4px 8px -2px " + colors_1.N50A + ", 0 0 1px " + colors_1.N60A }, container) })); }, {});
                } }, children)));
    };
    SpotlightCard.defaultProps = {
        width: 400,
        isFlat: false,
        components: {},
        theme: function (themeFn) { return themeFn(); },
    };
    return SpotlightCard;
}(react_1.default.Component));
exports.default = react_1.default.forwardRef(function (props, ref) { return (react_1.default.createElement(SpotlightCard, tslib_1.__assign({}, props, { innerRef: ref }))); });
//# sourceMappingURL=SpotlightCard.js.map