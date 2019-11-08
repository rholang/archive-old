"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var EmojiItem = /** @class */ (function (_super) {
    tslib_1.__extends(EmojiItem, _super);
    function EmojiItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmojiItem.prototype.render = function () {
        var _a = this.props, id = _a.id, providers = _a.providers, shortName = _a.shortName, text = _a.text, fitToHeight = _a.fitToHeight;
        return (React.createElement(editor_common_1.Emoji, { allowTextFallback: true, id: id, shortName: shortName, fallback: text, providers: providers, fitToHeight: fitToHeight }));
    };
    return EmojiItem;
}(react_1.PureComponent));
exports.default = EmojiItem;
//# sourceMappingURL=emoji.js.map