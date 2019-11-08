import { __assign } from "tslib";
import * as React from 'react';
import { CardLinkView, BlockCardResolvingView, BlockCardErroredView, BlockCardUnauthorisedView, BlockCardForbiddenView, BlockCardResolvedView, } from '@atlaskit/media-ui';
import { extractBlockPropsFromJSONLD } from '../../extractors/block';
import { getCollapsedIcon } from '../../utils';
export var BlockCard = function (_a) {
    var url = _a.url, _b = _a.cardState, status = _b.status, details = _b.details, handleAuthorize = _a.handleAuthorize, handleErrorRetry = _a.handleErrorRetry, handleFrameClick = _a.handleFrameClick, isSelected = _a.isSelected, onResolve = _a.onResolve;
    switch (status) {
        case 'pending':
            return (React.createElement(CardLinkView, { link: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolving':
            return (React.createElement(BlockCardResolvingView, { isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolved':
            var props = extractBlockPropsFromJSONLD((details && details.data) || {});
            if (onResolve) {
                onResolve({ title: props.title && props.title.text, url: url });
            }
            return (React.createElement(BlockCardResolvedView, __assign({}, props, { link: url, isSelected: isSelected, onClick: handleFrameClick })));
        case 'unauthorized':
            return (React.createElement(BlockCardUnauthorisedView, { icon: getCollapsedIcon(details), isSelected: isSelected, url: url, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'forbidden':
            return (React.createElement(BlockCardForbiddenView, { url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'not_found':
            return (React.createElement(BlockCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't find this link", onClick: handleFrameClick }));
        case 'errored':
            return (React.createElement(BlockCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't load this link", onClick: handleFrameClick, onRetry: handleErrorRetry }));
    }
};
//# sourceMappingURL=index.js.map