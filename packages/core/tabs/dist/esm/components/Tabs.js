import { __assign, __extends } from "tslib";
import React, { Component } from 'react';
import { withAnalyticsEvents, withAnalyticsContext, createAndFireEvent, } from '@atlaskit/analytics-next';
import { name as packageName, version as packageVersion, } from '../version.json';
import TabsNavigation from './TabsNavigation';
import DefaultTabContent from './TabContent';
import DefaultTabItem from './TabItem';
import { Tabs as StyledTabs } from '../styled';
var defaultIsSelectedTestNumber = function (selectedIndex, _tab, tabIndex) { return selectedIndex === tabIndex; };
var defaultIsSelectedTestObject = function (selected, tab) {
    return selected === tab;
};
var defaultComponents = {
    Content: DefaultTabContent,
    Item: DefaultTabItem,
};
var Tabs = /** @class */ (function (_super) {
    __extends(Tabs, _super);
    function Tabs(props) {
        var _this = _super.call(this, props) || this;
        _this.resolveSelected = function (selected, newProps) {
            var _a = newProps || _this.props, tabs = _a.tabs, isSelectedTest = _a.isSelectedTest;
            var testFunction = (function () {
                if (isSelectedTest) {
                    return isSelectedTest;
                }
                if (typeof selected === 'number') {
                    return defaultIsSelectedTestNumber;
                }
                return defaultIsSelectedTestObject;
            })();
            return (tabs.find(function (tab, tabIndex) { return testFunction(selected, tab, tabIndex); }) ||
                tabs[0]);
        };
        _this.onSelect = function (newselected, newSelectedIndex) {
            var _a = _this.props, onSelect = _a.onSelect, selected = _a.selected;
            if (typeof onSelect === 'function') {
                onSelect(newselected, newSelectedIndex);
            }
            if (typeof selected === 'undefined') {
                _this.setState({ selected: newselected });
            }
        };
        var initiallyselected = _this.props.selected || _this.props.defaultSelected || _this.props.tabs[0];
        var selected = _this.resolveSelected(initiallyselected);
        _this.state = {
            selected: selected,
        };
        return _this;
    }
    Tabs.prototype.UNSAFE_componentWillReceiveProps = function (newProps) {
        if (typeof newProps.selected !== 'undefined' &&
            newProps.selected !== this.state.selected) {
            var selected = this.resolveSelected(newProps.selected, newProps);
            this.setState({ selected: selected });
        }
        else if (newProps.tabs !== this.props.tabs) {
            var updatedselected = this.resolveSelected(this.state.selected, newProps);
            this.setState({ selected: updatedselected });
        }
    };
    Tabs.prototype.render = function () {
        var _a = this.props, components = _a.components, tabs = _a.tabs, testId = _a.testId;
        var selected = this.state.selected;
        var _b = __assign(__assign({}, defaultComponents), components), Content = _b.Content, Item = _b.Item;
        var contentProps = {
            data: selected,
            elementProps: {
                role: 'tabpanel',
            },
        };
        return (React.createElement(StyledTabs, { "data-testid": testId },
            React.createElement(TabsNavigation, { component: Item, onSelect: this.onSelect, selected: selected, tabs: tabs }),
            React.createElement(Content, __assign({}, contentProps))));
    };
    Tabs.defaultProps = {
        components: {},
    };
    return Tabs;
}(Component));
export { Tabs as TabsWithoutAnalytics };
var createAndFireEventOnAtlaskit = createAndFireEvent('atlaskit');
export default withAnalyticsContext({
    componentName: 'tabs',
    packageName: packageName,
    packageVersion: packageVersion,
})(withAnalyticsEvents({
    onSelect: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'tab',
        attributes: {
            componentName: 'tabs',
            packageName: packageName,
            packageVersion: packageVersion,
        },
    }),
})(Tabs));
//# sourceMappingURL=Tabs.js.map