"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function closeOnDirectClick(onClose) {
    return function (e) {
        if (e.target === e.currentTarget && onClose) {
            onClose();
        }
    };
}
exports.closeOnDirectClick = closeOnDirectClick;
//# sourceMappingURL=closeOnDirectClick.js.map