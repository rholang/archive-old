import { __assign } from "tslib";
import * as React from 'react';
import LazilyRender from 'react-lazily-render';
import { CardLinkView } from '@atlaskit/media-ui';
import { uiCardClickedEvent } from '../../utils/analytics';
import { isSpecialEvent } from '../../utils';
import { getDefinitionId, getServices } from '../../state/actions/helpers';
import { BlockCard } from '../BlockCard';
import { InlineCard } from '../InlineCard';
import { useSmartLink } from '../../state';
export function LazyCardWithUrlContent(props) {
    var appearance = props.appearance, isSelected = props.isSelected, container = props.container, url = props.url;
    var offset = Math.ceil(window.innerHeight / 4);
    return (React.createElement(LazilyRender, { offset: offset, component: appearance === 'inline' ? 'span' : 'div', placeholder: React.createElement(CardLinkView, { isSelected: isSelected, key: 'lazy-render-placeholder', link: url }), scrollContainer: container, content: React.createElement(CardWithUrlContent, __assign({}, props)) }));
}
export function CardWithUrlContent(_a) {
    var url = _a.url, isSelected = _a.isSelected, onClick = _a.onClick, appearance = _a.appearance, dispatchAnalytics = _a.dispatchAnalytics, onResolve = _a.onResolve;
    // Get state, actions for this card.
    var _b = useSmartLink(url, dispatchAnalytics), state = _b.state, actions = _b.actions;
    var services = getServices(state.details);
    // Setup UI handlers.
    var handleClick = function (event) {
        isSpecialEvent(event)
            ? window.open(url, '_blank')
            : window.open(url, '_self');
    };
    var handleAnalytics = function () {
        var definitionId = getDefinitionId(state.details);
        if (state.status === 'resolved') {
            dispatchAnalytics(uiCardClickedEvent(appearance, definitionId));
        }
    };
    var handleClickWrapper = function (event) {
        handleAnalytics();
        onClick ? onClick(event) : handleClick(event);
    };
    var handleAuthorize = function () { return actions.authorize(appearance); };
    // Lazily render into the viewport.
    return appearance === 'inline' ? (React.createElement(InlineCard, { url: url, cardState: state, handleAuthorize: (services.length && handleAuthorize) || undefined, handleFrameClick: handleClickWrapper, isSelected: isSelected, onResolve: onResolve })) : (React.createElement(BlockCard, { url: url, cardState: state, handleAuthorize: (services.length && handleAuthorize) || undefined, handleErrorRetry: actions.reload, handleFrameClick: handleClickWrapper, isSelected: isSelected, onResolve: onResolve }));
}
//# sourceMappingURL=component.js.map