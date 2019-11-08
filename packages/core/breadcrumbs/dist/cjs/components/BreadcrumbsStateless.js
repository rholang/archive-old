"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var version_json_1 = require("../version.json");
var EllipsisItem_1 = tslib_1.__importDefault(require("./EllipsisItem"));
var BreadcrumbsContainer_1 = tslib_1.__importDefault(require("../styled/BreadcrumbsContainer"));
var defaultMaxItems = 8;
var toArray = react_1.default.Children.toArray;
var BreadcrumbsStateless = /** @class */ (function (_super) {
    tslib_1.__extends(BreadcrumbsStateless, _super);
    function BreadcrumbsStateless() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BreadcrumbsStateless.prototype.renderAllItems = function () {
        var allNonEmptyItems = toArray(this.props.children);
        return allNonEmptyItems.map(function (child, index) {
            return react_1.default.cloneElement(child, {
                hasSeparator: index < allNonEmptyItems.length - 1,
            });
        });
    };
    BreadcrumbsStateless.prototype.renderItemsBeforeAndAfter = function () {
        var _a = this.props, itemsBeforeCollapse = _a.itemsBeforeCollapse, itemsAfterCollapse = _a.itemsAfterCollapse, testId = _a.testId;
        // Not a chance this will trigger, but TS is complaining about items* possibly being undefined.
        if (itemsBeforeCollapse === undefined || itemsAfterCollapse === undefined) {
            return;
        }
        var allItems = this.renderAllItems();
        // This defends against someone passing weird data, to ensure that if all
        // items would be shown anyway, we just show all items without the EllipsisItem
        if (itemsBeforeCollapse + itemsAfterCollapse >= allItems.length) {
            return allItems;
        }
        var beforeItems = allItems.slice(0, itemsBeforeCollapse);
        var afterItems = allItems.slice(allItems.length - itemsAfterCollapse, allItems.length);
        return tslib_1.__spread(beforeItems, [
            react_1.default.createElement(EllipsisItem_1.default, { hasSeparator: itemsAfterCollapse > 0, key: "ellipsis", testId: testId && testId + "--breadcrumb-ellipsis", onClick: this.props.onExpand })
        ], afterItems);
    };
    BreadcrumbsStateless.prototype.render = function () {
        var _a = this.props, children = _a.children, isExpanded = _a.isExpanded, maxItems = _a.maxItems, testId = _a.testId;
        if (!children)
            return react_1.default.createElement(BreadcrumbsContainer_1.default, null);
        return (react_1.default.createElement(BreadcrumbsContainer_1.default, { "data-testid": testId }, isExpanded || (maxItems && toArray(children).length <= maxItems)
            ? this.renderAllItems()
            : this.renderItemsBeforeAndAfter()));
    };
    BreadcrumbsStateless.defaultProps = {
        isExpanded: false,
        maxItems: defaultMaxItems,
        itemsBeforeCollapse: 1,
        itemsAfterCollapse: 1,
    };
    return BreadcrumbsStateless;
}(react_1.default.Component));
exports.BreadcrumbsStatelessWithoutAnalytics = BreadcrumbsStateless;
var createAndFireEventOnAtlaskit = analytics_next_1.createAndFireEvent('atlaskit');
exports.default = analytics_next_1.withAnalyticsContext({
    componentName: 'breadcrumbs',
    packageName: version_json_1.name,
    packageVersion: version_json_1.version,
})(analytics_next_1.withAnalyticsEvents({
    onExpand: createAndFireEventOnAtlaskit({
        action: 'expanded',
        actionSubject: 'breadcrumbs',
        attributes: {
            componentName: 'breadcrumbs',
            packageName: version_json_1.name,
            packageVersion: version_json_1.version,
        },
    }),
})(BreadcrumbsStateless));
//# sourceMappingURL=BreadcrumbsStateless.js.map