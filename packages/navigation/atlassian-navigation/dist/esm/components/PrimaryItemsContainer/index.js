import { __assign, __read } from "tslib";
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Popup from '@atlaskit/popup';
import WidthDetector from '@atlaskit/width-detector';
import { useCallback, useState } from 'react';
import { useOverflowController, OverflowProvider, } from '../../controllers/overflow';
import { PrimaryDropdownButton } from '../PrimaryDropdownButton';
import { containerCSS, widthDetectorContainerStyle } from './styles';
export var PrimaryItemsContainer = function (_a) {
    var moreLabel = _a.moreLabel, items = _a.items;
    var _b = __read(useState(false), 2), isMoreOpen = _b[0], setIsMoreOpen = _b[1];
    var _c = useOverflowController(items), updateWidth = _c.updateWidth, visibleItems = _c.visibleItems, overflowItems = _c.overflowItems;
    var content = useCallback(function () { return (jsx(OverflowProvider, { isVisible: false }, overflowItems)); }, [overflowItems]);
    var onMoreClick = useCallback(function () {
        setIsMoreOpen(!isMoreOpen);
    }, [isMoreOpen, setIsMoreOpen]);
    var onMoreClose = useCallback(function () {
        setIsMoreOpen(false);
    }, [setIsMoreOpen]);
    var trigger = useCallback(function (triggerProps) { return (jsx(PrimaryDropdownButton, __assign({ onClick: onMoreClick }, triggerProps), moreLabel)); }, [moreLabel, onMoreClick]);
    return (jsx("div", { css: containerCSS },
        jsx(OverflowProvider, { isVisible: true }, visibleItems),
        overflowItems.length > 0 && (jsx(Popup, { content: content, isOpen: isMoreOpen, onClose: onMoreClose, trigger: trigger })),
        jsx(WidthDetector, { containerStyle: widthDetectorContainerStyle, onResize: updateWidth }, function () { return null; })));
};
//# sourceMappingURL=index.js.map