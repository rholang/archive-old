"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var avatar_1 = tslib_1.__importDefault(require("@atlaskit/avatar"));
var lock_circle_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/lock-circle"));
var lozenge_1 = tslib_1.__importDefault(require("@atlaskit/lozenge"));
var theme_1 = require("@atlaskit/theme");
var React = tslib_1.__importStar(require("react"));
var types_1 = require("../../types");
var i18n_1 = require("../../util/i18n");
var mouse_1 = require("../../util/mouse");
var NoAccessTooltip_1 = require("../NoAccessTooltip");
var styles_1 = require("./styles");
var MentionHighlightHelpers_1 = require("./MentionHighlightHelpers");
var MentionDescriptionByline_1 = tslib_1.__importDefault(require("../MentionDescriptionByline"));
function renderLozenge(lozenge) {
    if (lozenge) {
        return React.createElement(lozenge_1.default, null, lozenge);
    }
    return null;
}
function renderTime(time) {
    if (time) {
        return React.createElement(styles_1.TimeStyle, null, time);
    }
    return null;
}
var MentionItem = /** @class */ (function (_super) {
    tslib_1.__extends(MentionItem, _super);
    function MentionItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // internal, used for callbacks
        _this.onMentionSelected = function (event) {
            if (mouse_1.leftClick(event) && _this.props.onSelection) {
                event.preventDefault();
                _this.props.onSelection(_this.props.mention, event);
            }
        };
        _this.onMentionMenuItemMouseMove = function (event) {
            if (_this.props.onMouseMove) {
                _this.props.onMouseMove(_this.props.mention, event);
            }
        };
        _this.onMentionMenuItemMouseEnter = function (event) {
            if (_this.props.onMouseEnter) {
                _this.props.onMouseEnter(_this.props.mention, event);
            }
        };
        return _this;
    }
    MentionItem.prototype.render = function () {
        var _a = this.props, mention = _a.mention, selected = _a.selected;
        var id = mention.id, highlight = mention.highlight, avatarUrl = mention.avatarUrl, presence = mention.presence, name = mention.name, mentionName = mention.mentionName, lozenge = mention.lozenge, accessLevel = mention.accessLevel;
        var _b = presence || {}, status = _b.status, time = _b.time;
        var restricted = types_1.isRestricted(accessLevel);
        var nameHighlights = highlight && highlight.name;
        var borderColor = selected ? theme_1.colors.N30 : undefined;
        return (React.createElement(styles_1.MentionItemStyle, { selected: selected, onMouseDown: this.onMentionSelected, onMouseMove: this.onMentionMenuItemMouseMove, onMouseEnter: this.onMentionMenuItemMouseEnter, "data-mention-id": id, "data-mention-name": mentionName },
            React.createElement(styles_1.RowStyle, null,
                React.createElement(styles_1.AvatarStyle, { restricted: restricted },
                    React.createElement(avatar_1.default, { src: avatarUrl, size: "medium", presence: status, borderColor: borderColor })),
                React.createElement(styles_1.NameSectionStyle, { restricted: restricted },
                    MentionHighlightHelpers_1.renderHighlight(styles_1.FullNameStyle, name, nameHighlights),
                    React.createElement(MentionDescriptionByline_1.default, { mention: mention })),
                React.createElement(styles_1.InfoSectionStyle, { restricted: restricted },
                    renderLozenge(lozenge),
                    renderTime(time)),
                restricted ? (React.createElement(NoAccessTooltip_1.NoAccessTooltip, { name: name },
                    React.createElement(styles_1.AccessSectionStyle, null,
                        React.createElement(i18n_1.NoAccessLabel, null, function (text) { return (React.createElement(lock_circle_1.default, { label: text })); } /* safe to cast to string given there is no value binding */)))) : null)));
    };
    return MentionItem;
}(React.PureComponent));
exports.default = MentionItem;
//# sourceMappingURL=index.js.map