"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/** @jsx jsx */
var react_1 = require("react");
var constants_1 = require("@atlaskit/theme/constants");
var popper_1 = require("@atlaskit/popper");
var portal_1 = tslib_1.__importDefault(require("@atlaskit/portal"));
var core_1 = require("@emotion/core");
var styles_1 = require("./styles");
var RepositionOnUpdate_1 = require("./RepositionOnUpdate");
var useCloseManager_1 = require("./useCloseManager");
var useFocusManager_1 = require("./useFocusManager");
var DefaultPopupComponent = react_1.forwardRef(function (props, ref) { return core_1.jsx("div", tslib_1.__assign({ css: styles_1.popupCSS, ref: ref }, props)); });
exports.Popup = react_1.memo(function (_a) {
    var boundariesElement = _a.boundariesElement, isOpen = _a.isOpen, id = _a.id, placement = _a.placement, _b = _a.shouldFlip, shouldFlip = _b === void 0 ? true : _b, testId = _a.testId, Content = _a.content, trigger = _a.trigger, onClose = _a.onClose, _c = _a.popupComponent, PopupContainer = _c === void 0 ? DefaultPopupComponent : _c, _d = _a.zIndex, zIndex = _d === void 0 ? constants_1.layers.layer() : _d;
    var _e = tslib_1.__read(react_1.useState(), 2), popupRef = _e[0], setPopupRef = _e[1];
    var _f = tslib_1.__read(react_1.useState(), 2), initialFocusRef = _f[0], setInitialFocusRef = _f[1];
    useFocusManager_1.useFocusManager({ initialFocusRef: initialFocusRef, popupRef: popupRef });
    useCloseManager_1.useCloseManager({ isOpen: isOpen, onClose: onClose, popupRef: popupRef });
    return (core_1.jsx("div", { css: styles_1.containerCSS },
        core_1.jsx(popper_1.Manager, null,
            core_1.jsx(popper_1.Reference, null, function (_a) {
                var ref = _a.ref;
                return trigger({
                    ref: ref,
                    'aria-controls': id,
                    'aria-expanded': isOpen,
                    'aria-haspopup': true,
                });
            }),
            isOpen && (core_1.jsx(portal_1.default, { zIndex: zIndex },
                core_1.jsx(popper_1.Popper, { placement: placement || 'auto', modifiers: {
                        flip: {
                            enabled: shouldFlip || true,
                            boundariesElement: boundariesElement || 'viewport',
                        },
                    } }, function (_a) {
                    var ref = _a.ref, style = _a.style, placement = _a.placement, scheduleUpdate = _a.scheduleUpdate;
                    return (core_1.jsx(PopupContainer, { id: id, "data-placement": placement, "data-testid": testId, ref: function (node) {
                            ref(node);
                            setPopupRef(node);
                        }, style: style, tabIndex: -1 },
                        core_1.jsx(RepositionOnUpdate_1.RepositionOnUpdate, { content: Content, scheduleUpdate: scheduleUpdate },
                            core_1.jsx(Content, { scheduleUpdate: scheduleUpdate, isOpen: isOpen, onClose: onClose, setInitialFocusRef: setInitialFocusRef }))));
                }))))));
});
//# sourceMappingURL=Popup.js.map