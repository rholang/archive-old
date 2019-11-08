"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var type_helpers_1 = require("../../util/type-helpers");
var mouse_1 = require("../../util/mouse");
var EmojiPreview_1 = tslib_1.__importDefault(require("../common/EmojiPreview"));
var styles = tslib_1.__importStar(require("./styles"));
var EmojiTypeAheadItem = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiTypeAheadItem, _super);
    function EmojiTypeAheadItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // internal, used for callbacks
        _this.onEmojiSelected = function (event) {
            var _a = _this.props, emoji = _a.emoji, onSelection = _a.onSelection;
            if (mouse_1.leftClick(event) && onSelection) {
                event.preventDefault();
                onSelection(type_helpers_1.toEmojiId(emoji), emoji, event);
            }
        };
        _this.onEmojiMenuItemMouseMove = function (event) {
            var _a = _this.props, emoji = _a.emoji, onMouseMove = _a.onMouseMove;
            if (onMouseMove) {
                onMouseMove(type_helpers_1.toEmojiId(emoji), emoji, event);
            }
        };
        return _this;
    }
    EmojiTypeAheadItem.prototype.render = function () {
        var _a;
        var _b = this.props, selected = _b.selected, emoji = _b.emoji;
        var classes = classnames_1.default((_a = {
                'ak-emoji-typeahead-item': true
            },
            _a[styles.typeAheadItem] = true,
            _a[styles.selected] = selected,
            _a));
        return (React.createElement("div", { className: classes, onMouseDown: this.onEmojiSelected, onMouseMove: this.onEmojiMenuItemMouseMove, "data-emoji-id": emoji.shortName },
            React.createElement("div", { className: styles.typeAheadItemRow },
                React.createElement(EmojiPreview_1.default, { emoji: emoji }))));
    };
    return EmojiTypeAheadItem;
}(react_1.PureComponent));
exports.default = EmojiTypeAheadItem;
//# sourceMappingURL=EmojiTypeAheadItem.js.map