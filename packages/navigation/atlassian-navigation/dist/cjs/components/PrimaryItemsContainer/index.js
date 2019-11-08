"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var core_1 = require("@emotion/core");
var popup_1 = tslib_1.__importDefault(require("@atlaskit/popup"));
var width_detector_1 = tslib_1.__importDefault(require("@atlaskit/width-detector"));
var react_1 = require("react");
var overflow_1 = require("../../controllers/overflow");
var PrimaryDropdownButton_1 = require("../PrimaryDropdownButton");
var styles_1 = require("./styles");
exports.PrimaryItemsContainer = function (_a) {
    var moreLabel = _a.moreLabel, items = _a.items;
    var _b = tslib_1.__read(react_1.useState(false), 2), isMoreOpen = _b[0], setIsMoreOpen = _b[1];
    var _c = overflow_1.useOverflowController(items), updateWidth = _c.updateWidth, visibleItems = _c.visibleItems, overflowItems = _c.overflowItems;
    var content = react_1.useCallback(function () { return (core_1.jsx(overflow_1.OverflowProvider, { isVisible: false }, overflowItems)); }, [overflowItems]);
    var onMoreClick = react_1.useCallback(function () {
        setIsMoreOpen(!isMoreOpen);
    }, [isMoreOpen, setIsMoreOpen]);
    var onMoreClose = react_1.useCallback(function () {
        setIsMoreOpen(false);
    }, [setIsMoreOpen]);
    var trigger = react_1.useCallback(function (triggerProps) { return (core_1.jsx(PrimaryDropdownButton_1.PrimaryDropdownButton, tslib_1.__assign({ onClick: onMoreClick }, triggerProps), moreLabel)); }, [moreLabel, onMoreClick]);
    return (core_1.jsx("div", { css: styles_1.containerCSS },
        core_1.jsx(overflow_1.OverflowProvider, { isVisible: true }, visibleItems),
        overflowItems.length > 0 && (core_1.jsx(popup_1.default, { content: content, isOpen: isMoreOpen, onClose: onMoreClose, trigger: trigger })),
        core_1.jsx(width_detector_1.default, { containerStyle: styles_1.widthDetectorContainerStyle, onResize: updateWidth }, function () { return null; })));
};
//# sourceMappingURL=index.js.map