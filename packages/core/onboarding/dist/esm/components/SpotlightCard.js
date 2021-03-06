import { __assign, __extends, __rest } from "tslib";
import { P300, N0, N50A, N60A } from '@atlaskit/theme/colors';
import React from 'react';
import { Theme as ButtonTheme } from '@atlaskit/button';
import Card from './Card';
import { spotlightButtonTheme } from './theme';
var SpotlightCard = /** @class */ (function (_super) {
    __extends(SpotlightCard, _super);
    function SpotlightCard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotlightCard.prototype.render = function () {
        var _a = this.props, actions = _a.actions, actionsBeforeElement = _a.actionsBeforeElement, children = _a.children, components = _a.components, isFlat = _a.isFlat, heading = _a.heading, headingAfterElement = _a.headingAfterElement, image = _a.image, innerRef = _a.innerRef, theme = _a.theme, width = _a.width;
        return (React.createElement(ButtonTheme.Provider, { value: spotlightButtonTheme },
            React.createElement(Card, { ref: innerRef, heading: heading, headingAfterElement: headingAfterElement, actions: actions, actionsBeforeElement: actionsBeforeElement, components: components, image: image, theme: function (parent) {
                    var _a = parent({}), container = _a.container, others = __rest(_a, ["container"]);
                    return theme(function () { return (__assign(__assign({}, others), { container: __assign({ background: P300, color: N0, width: Math.min(Math.max(width, 160), 600) + "px", boxShadow: isFlat
                                ? undefined
                                : "0 4px 8px -2px " + N50A + ", 0 0 1px " + N60A }, container) })); }, {});
                } }, children)));
    };
    SpotlightCard.defaultProps = {
        width: 400,
        isFlat: false,
        components: {},
        theme: function (themeFn) { return themeFn(); },
    };
    return SpotlightCard;
}(React.Component));
export default React.forwardRef(function (props, ref) { return (React.createElement(SpotlightCard, __assign({}, props, { innerRef: ref }))); });
//# sourceMappingURL=SpotlightCard.js.map