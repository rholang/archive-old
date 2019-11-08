import { __assign, __read } from "tslib";
/** @jsx jsx */
import { forwardRef, memo, useState } from 'react';
import { layers } from '@atlaskit/theme/constants';
import { Manager, Popper, Reference } from '@atlaskit/popper';
import Portal from '@atlaskit/portal';
import { jsx } from '@emotion/core';
import { containerCSS, popupCSS } from './styles';
import { RepositionOnUpdate } from './RepositionOnUpdate';
import { useCloseManager } from './useCloseManager';
import { useFocusManager } from './useFocusManager';
var DefaultPopupComponent = forwardRef(function (props, ref) { return jsx("div", __assign({ css: popupCSS, ref: ref }, props)); });
export var Popup = memo(function (_a) {
    var boundariesElement = _a.boundariesElement, isOpen = _a.isOpen, id = _a.id, placement = _a.placement, _b = _a.shouldFlip, shouldFlip = _b === void 0 ? true : _b, testId = _a.testId, Content = _a.content, trigger = _a.trigger, onClose = _a.onClose, _c = _a.popupComponent, PopupContainer = _c === void 0 ? DefaultPopupComponent : _c, _d = _a.zIndex, zIndex = _d === void 0 ? layers.layer() : _d;
    var _e = __read(useState(), 2), popupRef = _e[0], setPopupRef = _e[1];
    var _f = __read(useState(), 2), initialFocusRef = _f[0], setInitialFocusRef = _f[1];
    useFocusManager({ initialFocusRef: initialFocusRef, popupRef: popupRef });
    useCloseManager({ isOpen: isOpen, onClose: onClose, popupRef: popupRef });
    return (jsx("div", { css: containerCSS },
        jsx(Manager, null,
            jsx(Reference, null, function (_a) {
                var ref = _a.ref;
                return trigger({
                    ref: ref,
                    'aria-controls': id,
                    'aria-expanded': isOpen,
                    'aria-haspopup': true,
                });
            }),
            isOpen && (jsx(Portal, { zIndex: zIndex },
                jsx(Popper, { placement: placement || 'auto', modifiers: {
                        flip: {
                            enabled: shouldFlip || true,
                            boundariesElement: boundariesElement || 'viewport',
                        },
                    } }, function (_a) {
                    var ref = _a.ref, style = _a.style, placement = _a.placement, scheduleUpdate = _a.scheduleUpdate;
                    return (jsx(PopupContainer, { id: id, "data-placement": placement, "data-testid": testId, ref: function (node) {
                            ref(node);
                            setPopupRef(node);
                        }, style: style, tabIndex: -1 },
                        jsx(RepositionOnUpdate, { content: Content, scheduleUpdate: scheduleUpdate },
                            jsx(Content, { scheduleUpdate: scheduleUpdate, isOpen: isOpen, onClose: onClose, setInitialFocusRef: setInitialFocusRef }))));
                }))))));
});
//# sourceMappingURL=Popup.js.map