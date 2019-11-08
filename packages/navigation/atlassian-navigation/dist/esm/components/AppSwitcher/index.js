import { __assign, __rest } from "tslib";
import React from 'react';
import AppSwitcherIcon from '@atlaskit/icon/glyph/app-switcher';
import { IconButton } from '../IconButton';
export var AppSwitcher = function (props) {
    var tooltip = props.tooltip, iconButtonProps = __rest(props, ["tooltip"]);
    return (React.createElement(IconButton, __assign({ icon: React.createElement(AppSwitcherIcon, { label: tooltip }), tooltip: tooltip }, iconButtonProps)));
};
//# sourceMappingURL=index.js.map