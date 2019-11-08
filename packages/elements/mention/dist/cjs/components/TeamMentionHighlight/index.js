"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var analytics_next_1 = require("@atlaskit/analytics-next");
var button_1 = tslib_1.__importDefault(require("@atlaskit/button"));
var close_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/editor/close"));
var tooltip_1 = tslib_1.__importDefault(require("@atlaskit/tooltip"));
var TeamMentionHighlightController_1 = tslib_1.__importDefault(require("./TeamMentionHighlightController"));
var analytics_1 = require("../../util/analytics");
var i18n_1 = require("../../util/i18n");
var Styled = tslib_1.__importStar(require("./styles"));
var ICON_URL = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjEyOCIgdmlld0JveD0iMCAwIDEyOCAxMjgiIHdpZHRoPSIxMjgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSI2NCIgY3k9IjY0IiBmaWxsPSIjNTI0M2FhIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHI9IjY0Ii8+PHBhdGggZD0ibTgwIDY0Yy02LjYyNzQxNyAwLTEyLTUuMzcyNTgzLTEyLTEyczUuMzcyNTgzLTEyIDEyLTEyIDEyIDUuMzcyNTgzIDEyIDEyLTUuMzcyNTgzIDEyLTEyIDEyem0tMzItMTJjLTYuNjI3NDE3IDAtMTItNS4zNzI1ODMtMTItMTJzNS4zNzI1ODMtMTIgMTItMTIgMTIgNS4zNzI1ODMgMTIgMTItNS4zNzI1ODMgMTItMTIgMTJ6bTEyIDI0YzAtNC40MiAzLjU0OC04IDgtOGgyNGM0LjQyIDAgOCAzLjU0IDggOHYxNC45MmMwIDEyLjEwOC00MCAxMi4xMDgtNDAgMHptOC0xMmgtLjAxMmMtMy4xODQzNTM3LjAwNDI0LTYuMjM2NTQxIDEuMjczNTYxNS04LjQ4NDg0MjcgMy41Mjg2MTQ5LTIuMjQ4MzAxOCAyLjI1NTA1MzQtMy41MDg0NjU2IDUuMzExMDMzLTMuNTAzMTU3MyA4LjQ5NTM4NTF2MTEuMjI4Yy0xMS43ODQgMi4xMzYtMjgtLjI1Mi0yOC03LjkzNnYtMTUuMzA0YzAtNC40MjQgMy41NDgtOC4wMTIgOC04LjAxMmgyNGMyLjEyMjcwODYtLjAwMzE5MTIgNC4xNTkzOTQ2LjgzODYzODYgNS42NjAzNzggMi4zMzk2MjJzMi4zNDI4MTMyIDMuNTM3NjY5NCAyLjMzOTYyMiA1LjY2MDM3OHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjk1Ii8+PC9nPjwvc3ZnPg==';
var TeamMentionHighlightInternal = /** @class */ (function (_super) {
    tslib_1.__extends(TeamMentionHighlightInternal, _super);
    function TeamMentionHighlightInternal(props) {
        var _this = _super.call(this, props) || this;
        _this.onCreateTeamLinkClick = function () {
            _this.setState({ isHighlightHidden: true });
            var onCreateTeamLinkClick = _this.props.onCreateTeamLinkClick;
            TeamMentionHighlightController_1.default.registerCreateLinkClick();
            if (onCreateTeamLinkClick) {
                onCreateTeamLinkClick();
            }
        };
        // This is to stop overly aggressive behaviour in tinyMCe editor where clicking anywhere in the Highlight would immediate close the entire
        // dropdown dialog. See TEAMS-611
        _this.preventClickOnCard = function (event) {
            // event is a MouseEvent
            // We stop the event from propagating, so we need to manually close
            var isClickOnCloseButton = _this.elCloseWrapper.current &&
                _this.elCloseWrapper.current.contains(event.target);
            if (isClickOnCloseButton) {
                _this.onCloseClick();
            }
            // Manually perform on-click for the link, if the link was clicked.
            var isClickCreateTeamLink = _this.elCreateTeamWrapper.current &&
                _this.elCreateTeamWrapper.current.contains(event.target);
            if (isClickCreateTeamLink) {
                _this.onCreateTeamLinkClick();
            }
            // Allow default so the link to create team still works, but prevent the rest
            event.stopPropagation();
            event.stopImmediatePropagation();
        };
        _this.onCloseClick = function () {
            _this.setState({ isHighlightHidden: true });
            _this.props.onClose();
        };
        _this.elWrapper = react_1.default.createRef();
        _this.elCloseWrapper = react_1.default.createRef();
        _this.elCreateTeamWrapper = react_1.default.createRef();
        _this.state = {
            isHighlightHidden: false,
        };
        return _this;
    }
    TeamMentionHighlightInternal.prototype.componentDidMount = function () {
        var onViewed = this.props.onViewed;
        this.addEventHandler();
        // Highlight hiding logic was moved to Mount method because if Highlight is re-rendered after updating the
        // counts at MentionHighlightController, Highlight will appear for sometime and then disappear. As of the time
        // of writing this code, this was only happening in Fabric Editor ( See TEAMS-623 )
        if (!TeamMentionHighlightController_1.default.isHighlightEnabled()) {
            this.setState({ isHighlightHidden: true });
        }
        else {
            TeamMentionHighlightController_1.default.registerRender();
            if (onViewed) {
                onViewed();
            }
        }
    };
    TeamMentionHighlightInternal.prototype.componentWillUnmount = function () {
        this.removeEventHandler();
    };
    TeamMentionHighlightInternal.prototype.addEventHandler = function () {
        this.elWrapper.current &&
            this.elWrapper.current.addEventListener('click', this.preventClickOnCard);
    };
    TeamMentionHighlightInternal.prototype.removeEventHandler = function () {
        this.elWrapper.current &&
            this.elWrapper.current.removeEventListener('click', this.preventClickOnCard);
    };
    TeamMentionHighlightInternal.prototype.render = function () {
        var _this = this;
        var createTeamLink = this.props.createTeamLink;
        var isHighlightHidden = this.state.isHighlightHidden;
        if (isHighlightHidden) {
            return null;
        }
        return (react_1.default.createElement("div", { ref: this.elWrapper },
            react_1.default.createElement(Styled.Card, null,
                react_1.default.createElement(Styled.Content, null,
                    react_1.default.createElement(Styled.Aside, null,
                        react_1.default.createElement("img", { src: ICON_URL, height: 32 })),
                    react_1.default.createElement(Styled.Section, null,
                        react_1.default.createElement(Styled.Heading, null,
                            react_1.default.createElement(Styled.Title, null,
                                react_1.default.createElement(i18n_1.TeamMentionHighlightTitle, null))),
                        react_1.default.createElement(Styled.Body, null,
                            react_1.default.createElement(i18n_1.TeamMentionHighlightDescription, null, function (description) { return (react_1.default.createElement("div", null,
                                description,
                                react_1.default.createElement("span", { ref: _this.elCreateTeamWrapper },
                                    react_1.default.createElement(i18n_1.TeamMentionHighlightDescriptionLink, null, function (linkText) { return (react_1.default.createElement("a", { href: createTeamLink, target: "_blank" },
                                        ' ',
                                        linkText)
                                    // on click fired by preventClickOnCard, not here
                                    ); })))); }))),
                    react_1.default.createElement(Styled.Actions, null,
                        react_1.default.createElement("div", { ref: this.elCloseWrapper },
                            react_1.default.createElement(i18n_1.TeamMentionHighlightCloseTooltip, null, function (tooltip) { return (react_1.default.createElement(tooltip_1.default, { content: tooltip, position: "bottom" },
                                react_1.default.createElement(button_1.default, { appearance: "subtle", iconBefore: react_1.default.createElement(close_1.default, { label: "Close", size: "medium" }), spacing: "none" }))); })))))));
    };
    TeamMentionHighlightInternal.defaultProps = {
        createTeamLink: '/people/search#createTeam',
    };
    return TeamMentionHighlightInternal;
}(react_1.default.Component));
exports.TeamMentionHighlightInternal = TeamMentionHighlightInternal;
var TeamMentionHighlightWithAnalytics = analytics_next_1.withAnalyticsEvents({
    onClose: function (createEvent) {
        analytics_1.fireAnalyticsTeamMentionHighlightEvent(createEvent)(analytics_1.ComponentNames.TEAM_MENTION_HIGHLIGHT, analytics_1.Actions.CLOSED, analytics_1.ComponentNames.MENTION, 'closeButton');
    },
    onCreateTeamLinkClick: function (createEvent) {
        analytics_1.fireAnalyticsTeamMentionHighlightEvent(createEvent)(analytics_1.ComponentNames.TEAM_MENTION_HIGHLIGHT, analytics_1.Actions.CLICKED, analytics_1.ComponentNames.MENTION, 'createTeamLink');
    },
    onViewed: function (createEvent) {
        analytics_1.fireAnalyticsTeamMentionHighlightEvent(createEvent)(analytics_1.ComponentNames.TEAM_MENTION_HIGHLIGHT, analytics_1.Actions.VIEWED, analytics_1.ComponentNames.MENTION, undefined, TeamMentionHighlightController_1.default.getSeenCount());
    },
})(TeamMentionHighlightInternal);
var TeamMentionHighlight = TeamMentionHighlightWithAnalytics;
exports.default = TeamMentionHighlight;
//# sourceMappingURL=index.js.map