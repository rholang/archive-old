"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var constants_1 = require("../../util/constants");
var i18n_1 = require("../i18n");
var categories_1 = require("./categories");
var styles = tslib_1.__importStar(require("./styles"));
exports.sortCategories = function (c1, c2) {
    return categories_1.CategoryDescriptionMap[c1].order - categories_1.CategoryDescriptionMap[c2].order;
};
var addNewCategories = function (oldCategories, newCategories) {
    if (!newCategories) {
        return oldCategories;
    }
    return oldCategories
        .concat(newCategories.filter(function (category) { return !!categories_1.CategoryDescriptionMap[category]; }))
        .sort(exports.sortCategories);
};
var CategorySelector = /** @class */ (function (_super) {
    tslib_1.__extends(CategorySelector, _super);
    function CategorySelector(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = function (categoryId) {
            var onCategorySelected = _this.props.onCategorySelected;
            if (onCategorySelected) {
                onCategorySelected(categoryId);
            }
        };
        var dynamicCategories = props.dynamicCategories;
        var categories = constants_1.defaultCategories;
        if (dynamicCategories) {
            categories = addNewCategories(categories, dynamicCategories);
        }
        _this.state = {
            categories: categories,
        };
        return _this;
    }
    CategorySelector.prototype.UNSAFE_componentWillUpdate = function (nextProps) {
        if (this.props.dynamicCategories !== nextProps.dynamicCategories) {
            this.setState({
                categories: addNewCategories(constants_1.defaultCategories, nextProps.dynamicCategories),
            });
        }
    };
    CategorySelector.prototype.render = function () {
        var _this = this;
        var disableCategories = this.props.disableCategories;
        var categories = this.state.categories;
        var categoriesSection;
        if (categories) {
            categoriesSection = (React.createElement("ul", null, categories.map(function (categoryId) {
                var category = categories_1.CategoryDescriptionMap[categoryId];
                var categoryClasses = [styles.category];
                if (categoryId === _this.props.activeCategoryId) {
                    categoryClasses.push(styles.active);
                }
                var onClick = function (e) {
                    e.preventDefault();
                    // ignore if disabled
                    if (!disableCategories) {
                        _this.onClick(categoryId);
                    }
                };
                if (disableCategories) {
                    categoryClasses.push(styles.disable);
                }
                var Icon = category.icon;
                return (React.createElement("li", { key: category.id },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages[category.name]), function (categoryName) { return (React.createElement("button", { "data-category-id": category.id, className: classnames_1.default(categoryClasses), onClick: onClick, title: categoryName },
                        React.createElement(Icon, { label: categoryName }))); })));
            })));
        }
        return (React.createElement("div", { className: classnames_1.default([styles.categorySelector]) }, categoriesSection));
    };
    CategorySelector.defaultProps = {
        onCategorySelected: function () { },
        dynamicCategories: [],
    };
    return CategorySelector;
}(react_1.PureComponent));
exports.default = CategorySelector;
//# sourceMappingURL=CategorySelector.js.map