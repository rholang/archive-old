import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion, } from '../version.json';
import { Container, IndicatorButton, IndicatorDiv } from '../styled/Dots';
var ProgressDots = /** @class */ (function (_super) {
    __extends(ProgressDots, _super);
    function ProgressDots() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tablist = { children: [] };
        _this.handleKeyDown = function (event) {
            var _a = _this.props, onSelect = _a.onSelect, selectedIndex = _a.selectedIndex, values = _a.values;
            var indicators = Array.from(_this.tablist.children);
            // bail if the target isn't an indicator
            if (!indicators.includes(event.target))
                return;
            // bail if not valid arrow key
            var isLeft = event.key === 'ArrowLeft';
            var isRight = event.key === 'ArrowRight';
            if (!isLeft && !isRight)
                return;
            // bail if at either end of the values
            var isAlpha = isLeft && selectedIndex === 0;
            var isOmega = isRight && selectedIndex === values.length - 1;
            if (isAlpha || isOmega)
                return;
            var index = isLeft ? selectedIndex - 1 : selectedIndex + 1;
            // call the consumer's select method and focus the applicable indicator
            if (onSelect) {
                onSelect({
                    event: event,
                    index: index,
                });
            }
            if (typeof indicators[index].focus === 'function') {
                indicators[index].focus();
            }
        };
        return _this;
    }
    ProgressDots.prototype.componentDidMount = function () {
        if (this.props.onSelect) {
            document.addEventListener('keydown', this.handleKeyDown, false);
        }
    };
    ProgressDots.prototype.componentWillUnmount = function () {
        if (this.props.onSelect) {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
    };
    ProgressDots.prototype.render = function () {
        var _this = this;
        // NOTE: `spacing` is a reserved HTML attribute and will be added to the
        // element, replaced with `gutter`.
        var _a = this.props, appearance = _a.appearance, ariaControls = _a.ariaControls, ariaLabel = _a.ariaLabel, onSelect = _a.onSelect, selectedIndex = _a.selectedIndex, size = _a.size, gutter = _a.spacing, values = _a.values;
        return (React.createElement(Container, { innerRef: function (r) {
                _this.tablist = r;
            }, role: "tablist" }, values.map(function (val, index) {
            var selected = selectedIndex === index;
            var common = {
                appearance: appearance,
                key: index,
                selected: selected,
                size: size,
                gutter: gutter,
            };
            var tabId = "" + ariaLabel + index;
            var panelId = "" + ariaControls + index;
            return onSelect ? (React.createElement(IndicatorButton, __assign({}, common, { "aria-controls": panelId, "aria-label": tabId, "aria-selected": selected, id: tabId, onClick: function (event) { return onSelect({ event: event, index: index }); }, role: "tab", tabIndex: selected ? 0 : -1, type: "button" }))) : (React.createElement(IndicatorDiv, __assign({}, common, { role: "presentation" })));
        })));
    };
    ProgressDots.defaultProps = {
        appearance: 'default',
        ariaControls: 'panel',
        ariaLabel: 'tab',
        size: 'default',
        spacing: 'comfortable',
    };
    return ProgressDots;
}(Component));
export { ProgressDots as ProgressDotsWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'progressIndicator',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onSelect: createAndFireEventOnAtlaskit({
        action: 'selected',
        actionSubject: 'progressIndicator',
        attributes: {
            componentName: 'progressIndicator',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(ProgressDots));
//# sourceMappingURL=Dots.js.map