"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var notification_1 = tslib_1.__importDefault(require("@atlaskit/icon/glyph/notification"));
var BadgeContainer_1 = require("../BadgeContainer");
var IconButton_1 = require("../IconButton");
exports.Notifications = function (props) {
    var badge = props.badge, tooltip = props.tooltip, iconButtonProps = tslib_1.__rest(props, ["badge", "tooltip"]);
    return (react_1.default.createElement(BadgeContainer_1.BadgeContainer, { badge: badge },
        react_1.default.createElement(IconButton_1.IconButton, tslib_1.__assign({ icon: react_1.default.createElement(notification_1.default, { label: tooltip }), tooltip: tooltip }, iconButtonProps))));
};
//# sourceMappingURL=index.js.map