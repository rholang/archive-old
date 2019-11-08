"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = tslib_1.__importStar(require("react"));
var media_ui_1 = require("@atlaskit/media-ui");
var block_1 = require("../../extractors/block");
var utils_1 = require("../../utils");
exports.BlockCard = function (_a) {
    var url = _a.url, _b = _a.cardState, status = _b.status, details = _b.details, handleAuthorize = _a.handleAuthorize, handleErrorRetry = _a.handleErrorRetry, handleFrameClick = _a.handleFrameClick, isSelected = _a.isSelected, onResolve = _a.onResolve;
    switch (status) {
        case 'pending':
            return (React.createElement(media_ui_1.CardLinkView, { link: url, isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolving':
            return (React.createElement(media_ui_1.BlockCardResolvingView, { isSelected: isSelected, onClick: handleFrameClick }));
        case 'resolved':
            var props = block_1.extractBlockPropsFromJSONLD((details && details.data) || {});
            if (onResolve) {
                onResolve({ title: props.title && props.title.text, url: url });
            }
            return (React.createElement(media_ui_1.BlockCardResolvedView, tslib_1.__assign({}, props, { link: url, isSelected: isSelected, onClick: handleFrameClick })));
        case 'unauthorized':
            return (React.createElement(media_ui_1.BlockCardUnauthorisedView, { icon: utils_1.getCollapsedIcon(details), isSelected: isSelected, url: url, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'forbidden':
            return (React.createElement(media_ui_1.BlockCardForbiddenView, { url: url, isSelected: isSelected, onClick: handleFrameClick, onAuthorise: handleAuthorize }));
        case 'not_found':
            return (React.createElement(media_ui_1.BlockCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't find this link", onClick: handleFrameClick }));
        case 'errored':
            return (React.createElement(media_ui_1.BlockCardErroredView, { url: url, isSelected: isSelected, message: "We couldn't load this link", onClick: handleFrameClick, onRetry: handleErrorRetry }));
    }
};
//# sourceMappingURL=index.js.map