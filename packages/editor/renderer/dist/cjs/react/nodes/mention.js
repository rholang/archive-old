"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var editor_common_1 = require("@atlaskit/editor-common");
var MentionItem = /** @class */ (function (_super) {
    tslib_1.__extends(MentionItem, _super);
    function MentionItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentionItem.prototype.render = function () {
        var _a = this.props, eventHandlers = _a.eventHandlers, id = _a.id, portal = _a.portal, providers = _a.providers, text = _a.text, accessLevel = _a.accessLevel;
        return (React.createElement(editor_common_1.Mention, { id: id, text: text, accessLevel: accessLevel, providers: providers, portal: portal, eventHandlers: eventHandlers && eventHandlers.mention }));
    };
    return MentionItem;
}(react_1.PureComponent));
exports.default = MentionItem;
//# sourceMappingURL=mention.js.map