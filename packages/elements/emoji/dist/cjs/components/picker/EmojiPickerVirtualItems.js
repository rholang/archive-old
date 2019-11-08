"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var React = tslib_1.__importStar(require("react"));
var EmojiPickerCategoryHeading_1 = tslib_1.__importDefault(require("./EmojiPickerCategoryHeading"));
var EmojiPickerEmojiRow_1 = tslib_1.__importDefault(require("./EmojiPickerEmojiRow"));
var EmojiPickerListSearch_1 = tslib_1.__importDefault(require("./EmojiPickerListSearch"));
var EmojiPickerSizes_1 = require("./EmojiPickerSizes");
var styles = tslib_1.__importStar(require("./styles"));
var AbstractItem = /** @class */ (function () {
    function AbstractItem(props, height) {
        this.props = props;
        this.height = height;
    }
    return AbstractItem;
}());
exports.AbstractItem = AbstractItem;
var SearchItem = /** @class */ (function (_super) {
    tslib_1.__extends(SearchItem, _super);
    function SearchItem(props) {
        var _this = _super.call(this, props, EmojiPickerSizes_1.sizes.searchHeight) || this;
        _this.renderItem = function () { return React.createElement(EmojiPickerListSearch_1.default, tslib_1.__assign({}, _this.props)); };
        return _this;
    }
    return SearchItem;
}(AbstractItem));
exports.SearchItem = SearchItem;
var EmojisRowItem = /** @class */ (function (_super) {
    tslib_1.__extends(EmojisRowItem, _super);
    function EmojisRowItem(props) {
        var _this = _super.call(this, props, EmojiPickerSizes_1.sizes.emojiRowHeight) || this;
        _this.renderItem = function () { return React.createElement(EmojiPickerEmojiRow_1.default, tslib_1.__assign({}, _this.props)); };
        return _this;
    }
    return EmojisRowItem;
}(AbstractItem));
exports.EmojisRowItem = EmojisRowItem;
var LoadingItem = /** @class */ (function (_super) {
    tslib_1.__extends(LoadingItem, _super);
    function LoadingItem() {
        var _this = _super.call(this, {}, EmojiPickerSizes_1.sizes.loadingRowHeight) || this;
        _this.renderItem = function () { return (React.createElement("div", { className: styles.emojiPickerSpinner },
            React.createElement("div", null,
                React.createElement(spinner_1.default, { size: "medium" })))); };
        return _this;
    }
    return LoadingItem;
}(AbstractItem));
exports.LoadingItem = LoadingItem;
var CategoryHeadingItem = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryHeadingItem, _super);
    function CategoryHeadingItem(props) {
        var _this = _super.call(this, props, EmojiPickerSizes_1.sizes.categoryHeadingHeight) || this;
        _this.renderItem = function () { return React.createElement(EmojiPickerCategoryHeading_1.default, tslib_1.__assign({}, _this.props)); };
        return _this;
    }
    return CategoryHeadingItem;
}(AbstractItem));
exports.CategoryHeadingItem = CategoryHeadingItem;
exports.virtualItemRenderer = function (rows, context) {
    var index = context.index, key = context.key, style = context.style;
    var row = rows[index];
    return (React.createElement("div", { style: style, key: key }, row.renderItem(context)));
};
//# sourceMappingURL=EmojiPickerVirtualItems.js.map