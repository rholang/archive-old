"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var lozenge_1 = tslib_1.__importDefault(require("@atlaskit/lozenge"));
var lock_filled_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/lock-filled"));
var HeaderStyles_1 = require("../styled/HeaderStyles");
var HeaderItems = function (_a) {
    var author = _a.author, edited = _a.edited, isError = _a.isError, isSaving = _a.isSaving, restrictedTo = _a.restrictedTo, savingText = _a.savingText, time = _a.time, type = _a.type;
    var restrictedElement = restrictedTo ? (react_1.default.createElement(HeaderStyles_1.Restricted, null,
        react_1.default.createElement(HeaderStyles_1.BulletSpacer, null, "\u2022"),
        react_1.default.createElement(HeaderStyles_1.RestrictedIconWrapper, null,
            react_1.default.createElement(lock_filled_1.default, { label: "", size: "small" })),
        ' ',
        restrictedTo)) : null;
    var items = [
        author || null,
        type ? react_1.default.createElement(lozenge_1.default, null, type) : null,
        time && !isSaving && !isError ? time : null,
        edited || null,
        isSaving ? savingText : null,
        restrictedElement,
    ]
        .filter(function (item) { return !!item; })
        .map(function (item, index) { return react_1.default.createElement(HeaderStyles_1.TopItem, { key: index }, item); }); // eslint-disable-line react/no-array-index-key
    return items.length ? react_1.default.createElement(HeaderStyles_1.TopItemsContainer, null, items) : null;
};
exports.default = HeaderItems;
//# sourceMappingURL=Header.js.map