import { __assign, __rest } from "tslib";
import React from 'react';
import SettingsIcon from '@atlaskit/icon/glyph/settings';
import { IconButton } from '../IconButton';
export var Settings = function (props) {
    var tooltip = props.tooltip, iconButtonProps = __rest(props, ["tooltip"]);
    return (React.createElement(IconButton, __assign({ icon: React.createElement(SettingsIcon, { label: tooltip }), tooltip: tooltip }, iconButtonProps)));
};
//# sourceMappingURL=index.js.map