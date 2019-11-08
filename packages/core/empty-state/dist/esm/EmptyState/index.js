import React from 'react';
import Spinner from '@atlaskit/spinner';
import { ButtonGroup } from '@atlaskit/button';
import { ActionsContainer, Container, Description, Header, Image, SpinnerContainer, } from '../styled';
var EmptyState = function (_a) {
    var description = _a.description, header = _a.header, imageHeight = _a.imageHeight, imageUrl = _a.imageUrl, imageWidth = _a.imageWidth, isLoading = _a.isLoading, _b = _a.maxImageHeight, maxImageHeight = _b === void 0 ? 160 : _b, _c = _a.maxImageWidth, maxImageWidth = _c === void 0 ? 160 : _c, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, _d = _a.size, size = _d === void 0 ? 'wide' : _d, tertiaryAction = _a.tertiaryAction;
    var actionsContainer = primaryAction || secondaryAction || isLoading ? (React.createElement(ActionsContainer, null,
        React.createElement(ButtonGroup, null,
            primaryAction,
            secondaryAction),
        React.createElement(SpinnerContainer, null, isLoading && React.createElement(Spinner, null)))) : null;
    return (React.createElement(Container, { size: size },
        imageUrl && (React.createElement(Image, { src: imageUrl, maxWidth: maxImageWidth, maxHeight: maxImageHeight, width: imageWidth, height: imageHeight })),
        React.createElement(Header, null, header),
        description && React.createElement(Description, null, description),
        actionsContainer,
        tertiaryAction));
};
export default EmptyState;
//# sourceMappingURL=index.js.map