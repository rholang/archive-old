"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
exports.useCloseManager = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, popupRef = _a.popupRef;
    react_1.useEffect(function () {
        var closePopup = function () {
            if (onClose) {
                onClose();
            }
        };
        var onClick = function (_a) {
            var target = _a.target;
            if (popupRef && !popupRef.contains(target)) {
                closePopup();
            }
        };
        var onKeyDown = function (event) {
            var key = event.key;
            if (key === 'Escape' || key === 'Esc') {
                closePopup();
            }
        };
        if (isOpen && popupRef) {
            document.addEventListener('click', onClick);
            document.addEventListener('keydown', onKeyDown);
        }
        return function () {
            document.removeEventListener('click', onClick);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, [popupRef, isOpen, onClose]);
};
//# sourceMappingURL=useCloseManager.js.map