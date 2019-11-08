import { __assign } from "tslib";
import * as React from 'react';
import { CardLinkView, InlineCardResolvedView, InlineCardResolvingView, InlineCardErroredView, InlineCardForbiddenView, InlineCardUnauthorizedView, } from '@atlaskit/media-ui';
import { extractInlinePropsFromJSONLD } from '../../extractors/inline';
import { getCollapsedIcon } from '../../utils';
export var InlineCard = function (_a) {
    var url = _a.url, cardState = _a.cardState, handleAuthorize = _a.handleAuthorize, handleFrameClick = _a.handleFrameClick, isSelected = _a.isSelected, onResolve = _a.onResolve;
    var status = cardState.status, details = cardState.details;
    switch (status) {
        case 'pending':
            return (React.createElement(CardLinkView, { link: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolving':
            return (React.createElement(InlineCardResolvingView, { url: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolved':
            var props = extractInlinePropsFromJSONLD((details && details.data) || {});
            if (onResolve) {
                onResolve({
                    url: url,
                    title: props.title,
                });
            }
            return (React.createElement(InlineCardResolvedView, __assign({}, props, { link: url, isSelected: isSelected, onClick: handleFrameClick })));
        case 'unauthorized':
            return (React.createElement(InlineCardUnauthorizedView, { icon: getCollapsedIcon(details), url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'forbidden':
            return (React.createElement(InlineCardForbiddenView, { url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'not_found':
            return (React.createElement(InlineCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't find this link", onClick: handleFrameClick }));
        case 'errored':
            return (React.createElement(CardLinkView, { link: url, isSelected: isSelected, onClick: handleFrameClick }));
    }
};
//# sourceMappingURL=index.js.map