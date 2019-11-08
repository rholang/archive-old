"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var type_helpers_1 = require("../../util/type-helpers");
var i18n_1 = require("../i18n");
var styles = tslib_1.__importStar(require("./styles"));
var EmojiPickerCategoryHeading = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiPickerCategoryHeading, _super);
    function EmojiPickerCategoryHeading() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiPickerCategoryHeading.prototype.render = function () {
        var _a = this.props, id = _a.id, title = _a.title, className = _a.className;
        return (React.createElement("div", { id: id, "data-category-id": id, className: classnames_1.default(className) },
            React.createElement("div", { className: styles.emojiCategoryTitle }, type_helpers_1.isMessagesKey(title) ? (React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, i18n_1.messages[title]))) : (title))));
    };
    return EmojiPickerCategoryHeading;
}(react_1.PureComponent));
exports.default = EmojiPickerCategoryHeading;
//# sourceMappingURL=EmojiPickerCategoryHeading.js.map