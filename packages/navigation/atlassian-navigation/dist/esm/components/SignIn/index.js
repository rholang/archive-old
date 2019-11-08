import { __assign, __rest } from "tslib";
import SignInIcon from '@atlaskit/icon/glyph/sign-in';
import React from 'react';
import { IconButton } from '../IconButton';
export var SignIn = function (props) {
    var tooltip = props.tooltip, iconButtonProps = __rest(props, ["tooltip"]);
    return (React.createElement(IconButton, __assign({ icon: React.createElement(SignInIcon, { label: tooltip }), tooltip: tooltip }, iconButtonProps)));
};
//# sourceMappingURL=index.js.map