"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var inline_1 = require("../../extractors/inline");
var utils_1 = require("../../utils");
exports.InlineCard = function (_a) {
    var url = _a.url, cardState = _a.cardState, handleAuthorize = _a.handleAuthorize, handleFrameClick = _a.handleFrameClick, isSelected = _a.isSelected, onResolve = _a.onResolve;
    var status = cardState.status, details = cardState.details;
    switch (status) {
        case 'pending':
            return (React.createElement(media_ui_1.CardLinkView, { link: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolving':
            return (React.createElement(media_ui_1.InlineCardResolvingView, { url: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolved':
            var props = inline_1.extractInlinePropsFromJSONLD((details && details.data) || {});
            if (onResolve) {
                onResolve({
                    url: url,
                    title: props.title,
                });
            }
            return (React.createElement(media_ui_1.InlineCardResolvedView, tslib_1.__assign({}, props, { link: url, isSelected: isSelected, onClick: handleFrameClick })));
        case 'unauthorized':
            return (React.createElement(media_ui_1.InlineCardUnauthorizedView, { icon: utils_1.getCollapsedIcon(details), url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'forbidden':
            return (React.createElement(media_ui_1.InlineCardForbiddenView, { url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'not_found':
            return (React.createElement(media_ui_1.InlineCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't find this link", onClick: handleFrameClick }));
        case 'errored':
            return (React.createElement(media_ui_1.CardLinkView, { link: url, isSelected: isSelected, onClick: handleFrameClick }));
    }
};
//# sourceMappingURL=index.js.map