import { __assign, __rest } from "tslib";
import React from 'react';
import NotificationIcon from '@atlaskit/icon/glyph/notification';
import { BadgeContainer } from '../BadgeContainer';
import { IconButton } from '../IconButton';
export var Notifications = function (props) {
    var badge = props.badge, tooltip = props.tooltip, iconButtonProps = __rest(props, ["badge", "tooltip"]);
    return (React.createElement(BadgeContainer, { badge: badge },
        React.createElement(IconButton, __assign({ icon: React.createElement(NotificationIcon, { label: tooltip }), tooltip: tooltip }, iconButtonProps))));
};
//# sourceMappingURL=index.js.map