"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var react_lazily_render_1 = tslib_1.__importDefault(require("react-lazily-render"));
var media_ui_1 = require("@atlaskit/media-ui");
var analytics_1 = require("../../utils/analytics");
var utils_1 = require("../../utils");
var helpers_1 = require("../../state/actions/helpers");
var BlockCard_1 = require("../BlockCard");
var InlineCard_1 = require("../InlineCard");
var state_1 = require("../../state");
function LazyCardWithUrlContent(props) {
    var appearance = props.appearance, isSelected = props.isSelected, container = props.container, url = props.url;
    var offset = Math.ceil(window.innerHeight / 4);
    return (React.createElement(react_lazily_render_1.default, { offset: offset, component: appearance === 'inline' ? 'span' : 'div', placeholder: React.createElement(media_ui_1.CardLinkView, { isSelected: isSelected, key: 'lazy-render-placeholder', link: url }), scrollContainer: container, content: React.createElement(CardWithUrlContent, tslib_1.__assign({}, props)) }));
}
exports.LazyCardWithUrlContent = LazyCardWithUrlContent;
function CardWithUrlContent(_a) {
    var url = _a.url, isSelected = _a.isSelected, onClick = _a.onClick, appearance = _a.appearance, dispatchAnalytics = _a.dispatchAnalytics, onResolve = _a.onResolve;
    // Get state, actions for this card.
    var _b = state_1.useSmartLink(url, dispatchAnalytics), state = _b.state, actions = _b.actions;
    var services = helpers_1.getServices(state.details);
    // Setup UI handlers.
    var handleClick = function (event) {
        utils_1.isSpecialEvent(event)
            ? window.open(url, '_blank')
            : window.open(url, '_self');
    };
    var handleAnalytics = function () {
        var definitionId = helpers_1.getDefinitionId(state.details);
        if (state.status === 'resolved') {
            dispatchAnalytics(analytics_1.uiCardClickedEvent(appearance, definitionId));
        }
    };
    var handleClickWrapper = function (event) {
        handleAnalytics();
        onClick ? onClick(event) : handleClick(event);
    };
    var handleAuthorize = function () { return actions.authorize(appearance); };
    // Lazily render into the viewport.
    return appearance === 'inline' ? (React.createElement(InlineCard_1.InlineCard, { url: url, cardState: state, handleAuthorize: (services.length && handleAuthorize) || undefined, handleFrameClick: handleClickWrapper, isSelected: isSelected, onResolve: onResolve })) : (React.createElement(BlockCard_1.BlockCard, { url: url, cardState: state, handleAuthorize: (services.length && handleAuthorize) || undefined, handleErrorRetry: actions.reload, handleFrameClick: handleClickWrapper, isSelected: isSelected, onResolve: onResolve }));
}
exports.CardWithUrlContent = CardWithUrlContent;
//# sourceMappingURL=component.js.map