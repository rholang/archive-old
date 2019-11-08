"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_1 = require("react");
var react_intl_1 = require("react-intl");
var classnames_1 = tslib_1.__importDefault(require("classnames"));
var check_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/check"));
var media_ui_1 = require("@atlaskit/media-ui");
var media_ui_2 = require("@atlaskit/media-ui");
// We dont require things directly from "utils" to avoid circular dependencies
var fileIcon_1 = require("../../../utils/fileIcon");
var errorIcon_1 = require("../../../utils/errorIcon");
var cardActions_1 = tslib_1.__importDefault(require("../../../utils/cardActions"));
var analytics_1 = require("../../../utils/analytics");
var analytics_next_1 = require("@atlaskit/analytics-next");
var styled_1 = require("./styled");
var RetryWithProps = function (props) { return React.createElement(styled_1.Retry, tslib_1.__assign({}, props)); };
var RetryWithAnalytics = analytics_next_1.withAnalyticsEvents({
    onClick: analytics_1.createAndFireMediaEvent({
        eventType: 'ui',
        action: 'clicked',
        actionSubject: 'button',
        actionSubjectId: 'mediaCardRetry',
    }),
})(RetryWithProps);
var CardOverlay = /** @class */ (function (_super) {
    tslib_1.__extends(CardOverlay, _super);
    function CardOverlay(props) {
        var _this = _super.call(this, props) || this;
        _this.onMenuToggle = function (attrs) {
            _this.setState({ isMenuExpanded: attrs.isOpen });
        };
        _this.state = {
            isMenuExpanded: false,
        };
        return _this;
    }
    Object.defineProperty(CardOverlay.prototype, "wrapperClassNames", {
        get: function () {
            var _a = this.props, error = _a.error, noHover = _a.noHover, selectable = _a.selectable, selected = _a.selected, mediaType = _a.mediaType, persistent = _a.persistent;
            var isMenuExpanded = this.state.isMenuExpanded;
            return error
                ? classnames_1.default('overlay', { error: error, active: isMenuExpanded })
                : classnames_1.default('overlay', mediaType, {
                    active: isMenuExpanded,
                    selectable: selectable,
                    selected: selected,
                    // Yes, you right. We put "persistent" class when it is NOT persistent. 🤦
                    persistent: !persistent,
                    noHover: noHover,
                });
        },
        enumerable: true,
        configurable: true
    });
    CardOverlay.prototype.render = function () {
        var _a = this.props, error = _a.error, noHover = _a.noHover, mediaName = _a.mediaName, persistent = _a.persistent, actions = _a.actions;
        var titleText = error || !mediaName ? '' : mediaName;
        var menuTriggerColor = !persistent ? 'white' : undefined;
        return (React.createElement(styled_1.Overlay, { hasError: !!error, noHover: noHover, className: this.wrapperClassNames },
            React.createElement(styled_1.TopRow, { className: 'top-row' },
                this.errorLine(),
                React.createElement(styled_1.TitleWrapper, { className: 'title' },
                    React.createElement(media_ui_1.Ellipsify, { text: titleText, lines: 2 })),
                this.tickBox()),
            React.createElement(styled_1.BottomRow, { className: 'bottom-row' },
                React.createElement(styled_1.LeftColumn, null, this.bottomLeftColumn()),
                React.createElement(styled_1.RightColumn, null, actions ? (React.createElement(cardActions_1.default, { actions: actions, onToggle: this.onMenuToggle, triggerColor: menuTriggerColor })) : null))));
    };
    CardOverlay.prototype.errorLine = function () {
        var error = this.props.error;
        return (error && (React.createElement(styled_1.ErrorLine, null,
            React.createElement(styled_1.ErrorMessage, null, this.props.error))));
    };
    CardOverlay.prototype.tickBox = function () {
        var _a = this.props, selected = _a.selected, selectable = _a.selectable;
        var tick = React.createElement(check_1.default, { label: "tick" });
        var className = classnames_1.default('tickbox', { selected: selected });
        return selectable && React.createElement(styled_1.TickBox, { className: className },
            " ",
            tick,
            " ");
    };
    CardOverlay.prototype.bottomLeftColumn = function () {
        var _a = this.props, error = _a.error, onRetry = _a.onRetry;
        if (error) {
            if (!onRetry) {
                return React.createElement(errorIcon_1.ErrorIcon, null);
            }
            return (React.createElement(styled_1.ErrorWrapper, null,
                React.createElement(errorIcon_1.ErrorIcon, null),
                React.createElement(RetryWithAnalytics, { onClick: onRetry },
                    React.createElement(react_intl_1.FormattedMessage, tslib_1.__assign({}, media_ui_2.messages.retry)))));
        }
        else {
            var _b = this.props, mediaType = _b.mediaType, subtitle = _b.subtitle, icon = _b.icon;
            var classNames_1 = classnames_1.default('metadata');
            var fileIcon = mediaType || icon ? (React.createElement(fileIcon_1.FileIcon, { mediaType: mediaType, iconUrl: icon })) : null;
            var subtitleEl = subtitle ? (React.createElement(styled_1.Subtitle, { className: "file-size" }, subtitle)) : null;
            return (React.createElement("div", null,
                React.createElement(styled_1.Metadata, { className: classNames_1 },
                    fileIcon,
                    subtitleEl)));
        }
    };
    CardOverlay.prototype.removeBtnClick = function (handler) {
        return function (e) {
            e.preventDefault();
            e.stopPropagation();
            handler();
        };
    };
    CardOverlay.defaultProps = {
        actions: [],
        mediaName: '',
    };
    return CardOverlay;
}(react_1.Component));
exports.CardOverlay = CardOverlay;
//# sourceMappingURL=index.js.map