"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var spinner_1 = tslib_1.__importDefault(require("@atlaskit/spinner"));
var button_1 = require("@atlaskit/button");
var styled_1 = require("../styled");
var EmptyState = function (_a) {
    var description = _a.description, header = _a.header, imageHeight = _a.imageHeight, imageUrl = _a.imageUrl, imageWidth = _a.imageWidth, isLoading = _a.isLoading, _b = _a.maxImageHeight, maxImageHeight = _b === void 0 ? 160 : _b, _c = _a.maxImageWidth, maxImageWidth = _c === void 0 ? 160 : _c, primaryAction = _a.primaryAction, secondaryAction = _a.secondaryAction, _d = _a.size, size = _d === void 0 ? 'wide' : _d, tertiaryAction = _a.tertiaryAction;
    var actionsContainer = primaryAction || secondaryAction || isLoading ? (react_1.default.createElement(styled_1.ActionsContainer, null,
        react_1.default.createElement(button_1.ButtonGroup, null,
            primaryAction,
            secondaryAction),
        react_1.default.createElement(styled_1.SpinnerContainer, null, isLoading && react_1.default.createElement(spinner_1.default, null)))) : null;
    return (react_1.default.createElement(styled_1.Container, { size: size },
        imageUrl && (react_1.default.createElement(styled_1.Image, { src: imageUrl, maxWidth: maxImageWidth, maxHeight: maxImageHeight, width: imageWidth, height: imageHeight })),
        react_1.default.createElement(styled_1.Header, null, header),
        description && react_1.default.createElement(styled_1.Description, null, description),
        actionsContainer,
        tertiaryAction));
};
exports.default = EmptyState;
//# sourceMappingURL=index.js.map