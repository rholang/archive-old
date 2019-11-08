"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var TabsNavigation_1 = tslib_1.__importDefault(require("./TabsNavigation"));
var TabContent_1 = tslib_1.__importDefault(require("./TabContent"));
var TabItem_1 = tslib_1.__importDefault(require("./TabItem"));
var styled_1 = require("../styled");
var defaultIsSelectedTestNumber = function (selectedIndex, _tab, tabIndex) { return selectedIndex === tabIndex; };
var defaultIsSelectedTestObject = function (selected, tab) {
    return selected === tab;
};
var defaultComponents = {
    Content: TabContent_1.default,
    Item: TabItem_1.default,
};
var Tabs = /** @class */ (function (_super) {
    tslib_1.__extends(Tabs, _super);
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
        var _b = tslib_1.__assign(tslib_1.__assign({}, defaultComponents), components), Content = _b.Content, Item = _b.Item;
        var contentProps = {
            data: selected,
            elementProps: {
                role: 'tabpanel',
            },
        };
        return (react_1.default.createElement(styled_1.Tabs, { "data-testid": testId },
            react_1.default.createElement(TabsNavigation_1.default, { component: Item, onSelect: this.onSelect, selected: selected, tabs: tabs }),
            react_1.default.createElement(Content, tslib_1.__assign({}, contentProps))));
    };
    Tabs.defaultProps = {
        components: {},
    };
    return Tabs;
}(react_1.Component));
exports.TabsWithoutAnalytics = Tabs;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'tabs',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onSelect: createAndFireEventOnAtlaskit({
        action: 'clicked',
        actionSubject: 'tab',
        attributes: {
            componentName: 'tabs',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(Tabs));
//# sourceMappingURL=Tabs.js.map