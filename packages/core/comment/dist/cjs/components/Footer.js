"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var warning_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/warning"));
var FooterStyles_1 = require("../styled/FooterStyles");
var mapActions = function (items) {
    return items.map(function (item, index) { return (
    // eslint-disable-next-line react/no-array-index-key
    react_1.default.createElement(FooterStyles_1.ActionsItem, { key: index }, item)); });
};
var FooterItems = function (_a) {
    var actions = _a.actions, errorActions = _a.errorActions, errorIconLabel = _a.errorIconLabel, isError = _a.isError, isSaving = _a.isSaving;
    if (isSaving || (!actions && !errorActions))
        return null;
    var items = isError
        ? errorActions && mapActions(errorActions)
        : actions && mapActions(actions);
    return (react_1.default.createElement(FooterStyles_1.ActionsContainer, null,
        isError ? (react_1.default.createElement(FooterStyles_1.ErrorIcon, null,
            react_1.default.createElement(warning_1.default, { label: errorIconLabel ? errorIconLabel : '' }))) : null,
        items));
};
exports.default = FooterItems;
//# sourceMappingURL=Footer.js.map